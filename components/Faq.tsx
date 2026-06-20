"use client";

import { useRef, useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <FaqItem
          key={item.q}
          q={item.q}
          a={item.a}
          open={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  const inner = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="pm" aria-hidden="true" />
      </button>
      <div
        className="faq-a"
        style={{ maxHeight: open ? `${inner.current?.scrollHeight ?? 600}px` : 0 }}
      >
        <div className="faq-a-inner" ref={inner}>{a}</div>
      </div>
    </div>
  );
}
