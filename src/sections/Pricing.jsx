import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$79",
    crossed: "$99",
    desc: "Diffuser + 1 capsule of your choice.",
    days: "Lasts ~15-30 days",
    features: [
      "AromaFit HUSH diffuser",
      "1 capsule (Mint, Citrus, or Spice)",
      "USB-C cable & adapter",
      "30-day refund — keep the device",
    ],
    cta: "Get HUSH",
    popular: false,
  },
  {
    name: "Discovery",
    price: "$89",
    crossed: "$129",
    desc: "Diffuser + 3 capsules. Mix scents however you want.",
    days: "Lasts ~45-90 days",
    features: [
      "AromaFit HUSH diffuser",
      "3 capsules — pick any combination of scents",
      "HUSH Discovery box",
      "30-day refund — keep the device",
      "Free US shipping",
    ],
    cta: "Build my Discovery Pack",
    popular: true,
  },
  {
    name: "Ritual",
    price: "$99",
    crossed: "$169",
    desc: "Diffuser + 6 capsules for daily ritualists.",
    days: "Lasts ~90-180 days",
    features: [
      "AromaFit HUSH diffuser",
      "6 capsules (mix & match scents)",
      "Wellness journal (printed)",
      "30-day refund — keep the device",
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
            One device.{" "}
            <span className="italic text-rosegold">Less appetite.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2">
            Already own a HUSH? You can buy refills only on the product page.
          </p>
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
                <p
                  className={`text-sm ${
                    p.popular ? "text-cream-100/70" : "text-ink-soft"
                  }`}
                >
                  {p.desc}
                </p>
                <p
                  className={`text-xs ${
                    p.popular ? "text-rosegold-light" : "text-rosegold"
                  }`}
                >
                  {p.days}
                </p>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-5xl">{p.price}</span>
                <span
                  className={`text-sm line-through ${
                    p.popular ? "text-cream-100/40" : "text-ink-soft/50"
                  }`}
                >
                  {p.crossed}
                </span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 ${
                        p.popular ? "text-rosegold-light" : "text-rosegold"
                      }`}
                    />
                    <span
                      className={p.popular ? "text-cream-100/90" : "text-ink-soft"}
                    >
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
