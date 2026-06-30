// Client-seitige Foto-Verwaltung fürs Bordbuch.
//
// Fotos sind zu groß für localStorage (das Autospeichern würde sonst bei jeder
// Eingabe Megabytes schreiben). Daher liegen die komprimierten Bilddaten in
// IndexedDB (großzügiges Kontingent, offline-fähig); der Törn-Datensatz hält nur
// Referenzen (id, Bildunterschrift, Maße). Diese Datei nutzt Browser-APIs und
// darf nur clientseitig laufen.

const DB_NAME = "missm-bordbuch";
const STORE = "photos";
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function putPhoto(id: string, dataUrl: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put({ id, dataUrl });
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getPhoto(id: string): Promise<string | null> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(id);
    req.onsuccess = () => resolve(req.result?.dataUrl ?? null);
    req.onerror = () => resolve(null);
  });
}

export async function deletePhoto(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => resolve();
  });
}

/** Lädt mehrere Fotos parallel; liefert eine Map id → Daten-URL (fehlende ausgelassen). */
export async function getPhotos(ids: string[]): Promise<Record<string, string>> {
  const entries = await Promise.all(ids.map(async (id) => [id, await getPhoto(id)] as const));
  const out: Record<string, string> = {};
  for (const [id, url] of entries) if (url) out[id] = url;
  return out;
}

type Decoded = { width: number; height: number; draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void };

async function decode(file: File): Promise<Decoded> {
  // createImageBitmap respektiert die EXIF-Ausrichtung (Hochformat-Fotos vom Handy).
  if (typeof createImageBitmap === "function") {
    try {
      const bmp = await createImageBitmap(file, { imageOrientation: "from-image" });
      return { width: bmp.width, height: bmp.height, draw: (ctx, w, h) => ctx.drawImage(bmp, 0, 0, w, h) };
    } catch {
      /* Fallback unten */
    }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error("Bild konnte nicht gelesen werden"));
      i.src = url;
    });
    return { width: img.naturalWidth, height: img.naturalHeight, draw: (ctx, w, h) => ctx.drawImage(img, 0, 0, w, h) };
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * Verkleinert ein Bild auf eine maximale Kantenlänge und gibt eine JPEG-Daten-URL
 * zurück – klein genug für IndexedDB-Ablage und E-Mail-Anhang.
 */
export async function compressImage(
  file: File,
  maxEdge = 1200,
  quality = 0.7
): Promise<{ dataUrl: string; w: number; h: number }> {
  const { width, height, draw } = await decode(file);
  const scale = Math.min(1, maxEdge / Math.max(width, height));
  const w = Math.max(1, Math.round(width * scale));
  const h = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas nicht verfügbar");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  draw(ctx, w, h);
  const dataUrl = canvas.toDataURL("image/jpeg", quality);
  return { dataUrl, w, h };
}
