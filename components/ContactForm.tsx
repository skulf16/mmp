"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { ArrowRight, Check } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    period: "",
    guests: "2",
    skipper: "unsicher",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Versand fehlgeschlagen");
      setSent(true);
    } catch {
      setError("Die Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="feature" style={{ textAlign: "center", padding: "3rem 2rem" }}>
        <span className="ic mx-auto" style={{ marginInline: "auto" }}><Check /></span>
        <h3 style={{ marginTop: "1rem" }}>Vielen Dank für Ihre Anfrage!</h3>
        <p style={{ marginTop: "0.6rem" }}>
          Ihre Nachricht ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden.
        </p>
      </div>
    );
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" required value={form.name} onChange={update("name")} placeholder="Ihr Name" />
      </div>
      <div className="field">
        <label htmlFor="email">E-Mail</label>
        <input id="email" type="email" required value={form.email} onChange={update("email")} placeholder="name@beispiel.de" />
      </div>
      <div className="field">
        <label htmlFor="phone">Telefon (optional)</label>
        <input id="phone" value={form.phone} onChange={update("phone")} placeholder="+49 …" />
      </div>
      <div className="field">
        <label htmlFor="period">Wunschzeitraum</label>
        <input id="period" value={form.period} onChange={update("period")} placeholder="z. B. 12.–19. Juli 2026" />
      </div>
      <div className="field">
        <label htmlFor="guests">Personen</label>
        <select id="guests" value={form.guests} onChange={update("guests")}>
          {["2", "3", "4", "5", "6", "7", "8"].map((n) => (
            <option key={n} value={n}>{n} Personen</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="skipper">Skipper gewünscht?</label>
        <select id="skipper" value={form.skipper} onChange={update("skipper")}>
          <option value="nein">Nein, wir segeln selbst</option>
          <option value="ja">Ja, bitte mit Skipper</option>
          <option value="unsicher">Noch unsicher</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">Ihre Nachricht</label>
        <textarea id="message" value={form.message} onChange={update("message")} placeholder="Erzählen Sie uns von Ihren Plänen …" />
      </div>
      {error && (
        <div className="field full" style={{ color: "var(--error, #c0392b)", fontSize: "0.9rem" }}>
          {error}{" "}
          <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>{site.email}</a>
        </div>
      )}
      <div className="field full" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <span className="form-note">{site.responseTime} · unverbindlich</span>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Wird gesendet …" : <><span>Anfrage senden</span> <ArrowRight /></>}
        </button>
      </div>
    </form>
  );
}
