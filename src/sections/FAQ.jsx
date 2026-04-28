import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does HUSH actually do?",
    a: "HUSH is an aromatic device built on three decades of olfactory research. You drop in a capsule, press once, and clinically-studied aromatic compounds (peppermint, grapefruit, vanilla) suppress your appetite within 7 minutes. Less appetite means fewer calories. Fewer calories means weight loss — without dieting, without willpower, without a daily pill.",
  },
  {
    q: "Will I really lose weight with HUSH?",
    a: "Yes. Less appetite means fewer calories. Fewer calories means weight loss — that part isn't marketing, it's basic energy balance. Our internal Q1 2026 cohort of 2,184 customers reported an average loss of 4.1 kg over 8 weeks of daily use, without changing their diet or starting a workout plan. Individual results vary — but if you don't see the change, you keep the device and we refund you anyway.",
  },
  {
    q: "How long does one capsule last?",
    a: "Each HUSH capsule is rated for ~30 sessions of 25 minutes each. If you use it once a day → 30 days per capsule. Twice a day → 15 days. Three times a day → 10 days. The Discovery Pack (3 capsules) covers most users for 1.5 to 3 months.",
  },
  {
    q: "Can I mix scents in the same bundle?",
    a: "Yes. Pick any combination of Mint, Citrus and Spice when you order — three different ones, two of one, all three of the same. The choice is yours, on every bundle.",
  },
  {
    q: "I already own a HUSH. Can I just buy refills?",
    a: "Yes. On the product page, switch the buy box to 'Refills only'. You get the same capsules without the diffuser, at lower prices.",
  },
  {
    q: "Is it just a placebo?",
    a: "No. Aromatic compounds — peppermint in particular — have been studied for over 15 years for their effect on appetite signaling. Bryan Raudenbush's 2008 study at Wheeling Jesuit University reported participants ate 1,800 fewer calories per week. Niijima/Nagai studied grapefruit for satiety regulation. Catherine Collins studied vanilla for sweet cravings. HUSH combines all three.",
  },
  {
    q: "Where do you ship?",
    a: "We currently ship across the United States. Orders over $75 ship free. International rolling out soon.",
  },
  {
    q: "What's the return policy?",
    a: "Our 30-day refund: full refund within 30 days of receiving HUSH — no need to return the device, no questions asked.",
  },
  {
    q: "Is it safe with kids and pets in the room?",
    a: "Yes — HUSH uses hand-blended, plant-derived aromatic oils intended for typical household use. As with any aromatic product, we recommend ventilation. Note: HUSH may also reduce appetite in others sharing the room — run it in a room where this is intentional.",
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
          <div className="label-eyebrow">Questions, answered straight</div>
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
