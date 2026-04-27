import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$89",
    crossed: "$109",
    desc: "The HUSH diffuser with one capsule of your choice.",
    features: [
      "AromaFit HUSH diffuser",
      "1 capsule (your scent)",
      "USB-C cable & adapter",
      "30-day quiet guarantee",
    ],
    cta: "Get HUSH",
    popular: false,
  },
  {
    name: "Discovery",
    price: "$129",
    crossed: "$167",
    desc: "The diffuser plus all three signature scents.",
    features: [
      "AromaFit HUSH diffuser",
      "3 capsules — Mint, Citrus, Spice",
      "HUSH Discovery box",
      "30-day quiet guarantee",
      "Free US shipping",
    ],
    cta: "Get the Discovery Pack",
    popular: true,
  },
  {
    name: "Ritual",
    price: "$169",
    crossed: "$229",
    desc: "Built for daily ritualists. Six capsules to last for months.",
    features: [
      "AromaFit HUSH diffuser",
      "6 capsules (mix & match)",
      "Wellness journal (printed)",
      "30-day quiet guarantee",
      "Free US shipping & priority care",
    ],
    cta: "Build my Ritual",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="label-eyebrow">Choose your bundle</div>
          <h2 className="h-display text-4xl md:text-5xl">
            One device. <span className="italic text-rosegold">Lasting change.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.popular
                  ? "bg-ink text-cream-50 shadow-2xl shadow-ink/20 md:scale-105"
                  : "bg-cream-50 text-ink border border-cream-200/60"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Loved
                </div>
              )}

              <div className="space-y-2 mb-6">
                <h3 className="font-display text-3xl">{p.name}</h3>
                <p className={`text-sm ${p.popular ? "text-cream-100/70" : "text-ink-soft"}`}>
                  {p.desc}
                </p>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm line-through ${p.popular ? "text-cream-100/40" : "text-ink-soft/50"}`}>
                  {p.crossed}
                </span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 ${p.popular ? "text-rosegold-light" : "text-rosegold"}`}
                    />
                    <span className={p.popular ? "text-cream-100/90" : "text-ink-soft"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/hush"
                className={`text-center rounded-full py-4 text-xs uppercase tracking-widest font-medium transition ${
                  p.popular
                    ? "bg-cream-50 text-ink hover:bg-cream-100"
                    : "bg-ink text-cream-50 hover:bg-ink-soft"
                }`}
              >
                {p.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
