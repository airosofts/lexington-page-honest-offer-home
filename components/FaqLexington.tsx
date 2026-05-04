"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "How do you calculate your offer for my Lexington, KY home?",
    a: "We look at what comparable renovated homes in your Lexington neighborhood are selling for (the after-repair value), subtract a realistic estimate of work your house needs, subtract our holding and selling costs, and keep a modest margin. We'll walk you through the math on the phone if you want to see it. No black box.",
  },
  {
    q: "Is there really no obligation?",
    a: "Correct. You submit the form, we send you a written offer, and you decide. If the number doesn't work, tell us and we're done. We don't hassle, we don't put you on a drip campaign, and we don't sell your info. Many Lexington homeowners get an offer from us and use it as a floor when deciding whether to list — that's fine too.",
  },
  {
    q: "What if my Lexington house needs a lot of work?",
    a: "That's our specialty. Foundation cracks, leaking roofs, decades-old kitchens, fire damage, hoarder situations — we've bought all of it across Lexington and Fayette County. Don't clean, don't repair, don't apologize. Our contractors handle it on the back end.",
  },
  {
    q: "Who pays closing costs when selling in Kentucky?",
    a: "We do. Title fees, recording fees, prorated Kentucky property taxes — all of it. The offer amount we send you is what wires to your account at closing. No deductions, no surprise line items at the title company.",
  },
  {
    q: "How fast can you close on a house in Lexington?",
    a: "Our fastest close on record is 5 business days. Most Lexington deals close in 10–21 days depending on title work. If you need longer — say, 60 or 90 days to coordinate a move — we can schedule that too. Your timeline runs the show.",
  },
  {
    q: "How is Honest Offer different from Opendoor or national buyers?",
    a: "iBuyers like Opendoor charge a service fee of 5–8% and renegotiate after inspection to cover repairs. We don't charge a service fee, we don't renegotiate, and we buy homes they won't touch — older, rougher condition, rural Kentucky markets. We're locally owned, and the person who calls you back is the same one who shows up in Lexington.",
  },
];

export default function FaqLexington() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      {ITEMS.map((item, i) => {
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
