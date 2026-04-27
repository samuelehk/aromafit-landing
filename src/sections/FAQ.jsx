import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What exactly does HUSH do?",
    a: "HUSH is a capsule-based aromatherapy diffuser. You insert a HUSH capsule, press once, and the device gently diffuses our hand-blended aromatic oils for 25 minutes. It's designed to support a calmer, more mindful environment around food.",
  },
  {
    q: "Is HUSH a weight-loss product?",
    a: "No. HUSH is a wellness device, not a medical product. It's designed to be part of a relaxing daily ritual. We make no medical or weight-loss claims. Many of our customers tell us they've used it as part of broader lifestyle changes — but the device itself is simply a beautifully made aromatherapy tool.",
  },
  {
    q: "How long does one capsule last?",
    a: "Each HUSH capsule is designed for approximately 30 sessions of 25 minutes each — about a month of daily evening rituals.",
  },
  {
    q: "Which scent should I start with?",
    a: "Most first-time customers start with the Discovery Pack so they can try all three. If you have to pick one, Mint is our flagship and the most universally loved.",
  },
  {
    q: "Where do you ship?",
    a: "We currently ship across the United States. Orders over $75 ship free. International shipping is rolling out in the coming months.",
  },
  {
    q: "What's the return policy?",
    a: "Our 30-day quiet guarantee means you can request a full refund within 30 days of receiving HUSH — no need to return the device, no questions asked.",
  },
  {
    q: "Is the device safe to use with kids and pets in the room?",
    a: "Yes. HUSH uses hand-blended, plant-derived aromatic oils intended for typical household use. As with any aromatic product, we recommend ventilation and stopping use if anyone in the room reports discomfort.",
  },
];

function Item({ q, a, open, onClick }) {
  return (
    <div className="border-b border-cream-200/80">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-xl md:text-2xl text-ink">{q}</span>
        <span className="flex-shrink-0 text-rosegold">
          {open ? <Minus size={22} /> : <Plus size={22} />}
        </span>
      </button>
      {open && (
        <p className="pb-6 pr-10 text-ink-soft leading-relaxed text-base md:text-lg">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream-100">
      <div className="container-narrow">
        <div className="text-center mb-16 space-y-4">
          <div className="label-eyebrow">Questions, calmly answered</div>
          <h2 className="h-display text-4xl md:text-5xl">FAQ</h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <Item
              key={i}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
