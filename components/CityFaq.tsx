"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function CityFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className={`faq-item ${open ? "open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
              type="button"
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
