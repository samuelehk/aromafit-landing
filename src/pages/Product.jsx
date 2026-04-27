import { useState } from "react";
import { Star, Check, Truck, Shield, Leaf, ChevronDown } from "lucide-react";
import SmartImage from "../components/SmartImage";
import Stars from "../components/Stars";
import { IMAGES } from "../images";

const SCENTS = [
  {
    id: "mint",
    name: "Mint",
    notes: "Peppermint · Eucalyptus",
    color: "#A9C4A8",
    description:
      "Bright, cool, unmistakably clean. Our flagship scent and most universally loved.",
  },
  {
    id: "citrus",
    name: "Citrus",
    notes: "White grapefruit · Bergamot · Lemon",
    color: "#E8D69A",
    description:
      "Crisp and luminous. The kind of scent that lifts a whole room.",
  },
  {
    id: "spice",
    name: "Spice",
    notes: "Cinnamon · Vanilla · Cardamom",
    color: "#D4A582",
    description:
      "Warm, dessert-like, deeply calming. The closer-of-the-day scent.",
  },
];

const BUNDLES = [
  {
    id: "starter",
    name: "Starter",
    desc: "Diffuser + 1 capsule",
    price: 89,
    crossed: 109,
    save: "Save 18%",
  },
  {
    id: "discovery",
    name: "Discovery",
    desc: "Diffuser + 3 scents",
    price: 129,
    crossed: 167,
    save: "Save 23%",
    popular: true,
  },
  {
    id: "ritual",
    name: "Ritual",
    desc: "Diffuser + 6 capsules",
    price: 169,
    crossed: 229,
    save: "Save 26%",
  },
];

export default function Product() {
  const [scent, setScent] = useState("mint");
  const [bundle, setBundle] = useState("discovery");

  const selectedBundle = BUNDLES.find((b) => b.id === bundle);
  const selectedScent = SCENTS.find((s) => s.id === scent);

  return (
    <div className="pt-16 pb-24">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* GALLERY */}
        <div className="space-y-4">
          <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-cream-100">
            <SmartImage
              src={IMAGES.hero}
              alt="HUSH diffuser"
              label="Hero diffuser shot"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[IMAGES.family, IMAGES.capsuleInsert, IMAGES.lifestyleBedside].map(
              (src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden bg-cream-100"
                >
                  <SmartImage
                    src={src}
                    alt={`HUSH product detail ${i + 1}`}
                    label="Detail"
                    className="w-full h-full"
                    imgClassName="object-cover w-full h-full"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* DETAILS */}
        <div className="space-y-7">
          <div>
            <div className="label-eyebrow">AromaFit · HUSH</div>
            <h1 className="h-display text-4xl md:text-5xl mt-2 mb-3">
              The HUSH Diffuser
            </h1>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-sm text-ink-soft">
                4.8 · 2,184 reviews
              </span>
            </div>
          </div>

          <p className="text-lg text-ink-soft leading-relaxed">
            A capsule-based aromatherapy device designed around a single
            ritual: a quieter mind around food. Hand-blended scents,
            California design, built for years of daily use.
          </p>

          {/* SCENT PICKER */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-widest text-ink font-medium">
                Choose your scent
              </label>
              <span className="text-xs text-ink-soft">{selectedScent.notes}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SCENTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setScent(s.id)}
                  className={`rounded-2xl p-4 text-left transition border ${
                    scent === s.id
                      ? "border-ink bg-cream-100"
                      : "border-cream-200 bg-cream-50 hover:border-ink/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ background: s.color }}
                    />
                    {scent === s.id && (
                      <Check size={14} className="text-ink" />
                    )}
                  </div>
                  <div className="font-display text-lg">{s.name}</div>
                </button>
              ))}
            </div>
            <p className="text-xs text-ink-soft mt-3">
              {selectedScent.description}
            </p>
          </div>

          {/* BUNDLE PICKER */}
          <div>
            <label className="text-xs uppercase tracking-widest text-ink font-medium mb-3 block">
              Choose your bundle
            </label>
            <div className="space-y-3">
              {BUNDLES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBundle(b.id)}
                  className={`w-full rounded-2xl p-5 text-left transition border flex items-center justify-between ${
                    bundle === b.id
                      ? "border-ink bg-cream-100"
                      : "border-cream-200 bg-cream-50 hover:border-ink/40"
                  } relative`}
                >
                  {b.popular && (
                    <span className="absolute -top-2 right-4 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full">
                      Most Loved
                    </span>
                  )}
                  <div>
                    <div className="font-display text-xl">{b.name}</div>
                    <div className="text-xs text-ink-soft">{b.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl">${b.price}</div>
                    <div className="text-xs">
                      <span className="line-through text-ink-soft/60 mr-2">
                        ${b.crossed}
                      </span>
                      <span className="text-rosegold">{b.save}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* BUY */}
          <div className="space-y-3 pt-2">
            <button className="btn-primary w-full !py-5 text-base">
              Add to bag — ${selectedBundle.price}
            </button>
            <p className="text-xs text-center text-ink-soft">
              Free US shipping on this order · Ships in 1–2 business days
            </p>
          </div>

          {/* TRUST ROW */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cream-200/80">
            <div className="text-center">
              <Truck size={20} className="mx-auto text-rosegold mb-2" />
              <div className="text-xs uppercase tracking-widest text-ink-soft">
                Free shipping
              </div>
            </div>
            <div className="text-center">
              <Shield size={20} className="mx-auto text-rosegold mb-2" />
              <div className="text-xs uppercase tracking-widest text-ink-soft">
                30-day refund
              </div>
            </div>
            <div className="text-center">
              <Leaf size={20} className="mx-auto text-rosegold mb-2" />
              <div className="text-xs uppercase tracking-widest text-ink-soft">
                Plant-derived
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS ACCORDIONS */}
      <ProductAccordions />
    </div>
  );
}

function ProductAccordions() {
  const blocks = [
    {
      title: "What's inside the box",
      body: "AromaFit HUSH diffuser, your selected capsule(s), USB-C cable, USB-C wall adapter, quick-start card, and a 30-day quiet guarantee insert.",
    },
    {
      title: "How to use",
      body: "Plug in the diffuser. Lift the magnetic top, drop in a HUSH capsule, snap it back into place. Press the top button once to start a 25-minute session. The device will fade out automatically.",
    },
    {
      title: "Ingredients",
      body: "Each HUSH capsule contains a hand-blended mix of plant-derived aromatic oils. Mint: peppermint and eucalyptus. Citrus: white grapefruit, bergamot, lemon. Spice: cinnamon bark, vanilla absolute, green cardamom. No fillers, no synthetic perfumes, no parabens.",
    },
    {
      title: "Care & maintenance",
      body: "Wipe the diffuser with a dry cloth weekly. Capsules are self-contained — no cleaning required. Replace each capsule after roughly 30 sessions.",
    },
    {
      title: "A note on what HUSH is (and isn't)",
      body: "HUSH is a wellness aromatherapy device. It is not a medical device, drug, or weight-loss product. Many of our customers tell us it has helped them slow down around food, but individual experiences vary. We make no medical claims.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <div className="container-narrow mt-24">
      {blocks.map((b, i) => (
        <div key={i} className="border-b border-cream-200/80">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 py-6 text-left"
          >
            <span className="font-display text-xl text-ink">{b.title}</span>
            <ChevronDown
              size={20}
              className={`text-rosegold transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <p className="pb-6 pr-10 text-ink-soft leading-relaxed">{b.body}</p>
          )}
        </div>
      ))}
    </div>
  );
}
