import { useState, useRef, useEffect } from "react";
import {
  Check,
  Truck,
  Shield,
  Leaf,
  Plus,
  Minus,
  Sparkles,
  Clock,
  Heart,
  ArrowRight,
  RefreshCw,
  Award,
  Zap,
  Moon,
  Sun,
  Coffee,
  Box,
  Ruler,
  Battery,
  Volume2,
} from "lucide-react";
import SmartImage from "../components/SmartImage";
import Stars from "../components/Stars";
import { IMAGES } from "../images";

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATA
// ─────────────────────────────────────────────────────────────────────────────
const SCENTS = [
  {
    id: "mint",
    name: "Mint",
    notes: "Peppermint · Eucalyptus",
    color: "#A9C4A8",
    description: "Bright, cool, clean. Our flagship — and most loved.",
  },
  {
    id: "citrus",
    name: "Citrus",
    notes: "Grapefruit · Bergamot",
    color: "#E8D69A",
    description: "Crisp and luminous. Lifts the whole room.",
  },
  {
    id: "spice",
    name: "Spice",
    notes: "Cinnamon · Vanilla",
    color: "#D4A582",
    description: "Warm, dessert-like, deeply calming. The closer scent.",
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
    perCapsule: "—",
    capsules: 1,
  },
  {
    id: "discovery",
    name: "Discovery",
    desc: "Diffuser + 3 capsules",
    price: 129,
    crossed: 167,
    save: "Save 23%",
    perCapsule: "$13/capsule",
    popular: true,
    capsules: 3,
  },
  {
    id: "ritual",
    name: "Ritual",
    desc: "Diffuser + 6 capsules",
    price: 169,
    crossed: 229,
    save: "Save 26%",
    perCapsule: "$13/capsule",
    capsules: 6,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Product() {
  const [scent, setScent] = useState("mint");
  const [bundle, setBundle] = useState("discovery");
  const [subscription, setSubscription] = useState(false);

  const ctaRef = useRef(null);
  const heroRef = useRef(null);
  const scrollToCheckout = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectedBundle = BUNDLES.find((b) => b.id === bundle);
  const finalPrice = subscription
    ? Math.round(selectedBundle.price * 0.8)
    : selectedBundle.price;

  return (
    <div className="pt-6 pb-0">
      {/* 1. HERO */}
      <ProductHero
        scent={scent}
        setScent={setScent}
        bundle={bundle}
        setBundle={setBundle}
        subscription={subscription}
        setSubscription={setSubscription}
        finalPrice={finalPrice}
        heroRef={heroRef}
      />

      {/* 2. TRUST PILLARS */}
      <TrustPillars />

      {/* 3. PRESS / AS SEEN IN */}
      <PressBar />

      {/* 4. SOCIAL PROOF — REVIEWS */}
      <ReviewsGrid />

      {/* 5. WHY HUSH IS DIFFERENT */}
      <WhyDifferent onCta={scrollToCheckout} />

      {/* 6. FIRST NIGHT TIMELINE */}
      <FirstNight />

      {/* 7. HOW IT WORKS */}
      <HowItWorks />

      {/* 8. UGC PHOTO GRID — needs new images */}
      <UgcGrid />

      {/* 9. THE QUIET RITUAL — emotional */}
      <QuietRitual />

      {/* 10. CUSTOMER STORIES */}
      <CustomerStories />

      {/* 11. THE 3 SCENTS */}
      <ScentsDeepDive onCta={scrollToCheckout} />

      {/* 12. WHAT'S IN THE BOX — needs new image */}
      <WhatsInBox />

      {/* 13. SPECS & DETAILS */}
      <SpecsBlock />

      {/* 14. SCIENCE */}
      <QuietScience />

      {/* 15. FOUNDER'S NOTE — needs new image */}
      <FoundersNote />

      {/* 16. GUARANTEE */}
      <GuaranteeBlock />

      {/* 17. BUILD YOUR HUSH */}
      <BuildYourHush
        scent={scent}
        setScent={setScent}
        bundle={bundle}
        setBundle={setBundle}
        subscription={subscription}
        setSubscription={setSubscription}
        finalPrice={finalPrice}
        ctaRef={ctaRef}
      />

      {/* 18. FAQ */}
      <ProductFAQ />

      {/* 19. FINAL CTA */}
      <FinalCTA onCta={scrollToCheckout} />

      {/* STICKY ADD-TO-CART BAR */}
      <StickyAddToCart
        finalPrice={finalPrice}
        selectedBundle={selectedBundle}
        scent={scent}
        heroRef={heroRef}
        onCta={scrollToCheckout}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO
// ─────────────────────────────────────────────────────────────────────────────
function ProductHero({
  scent,
  setScent,
  bundle,
  setBundle,
  subscription,
  setSubscription,
  finalPrice,
  heroRef,
}) {
  const selectedScent = SCENTS.find((s) => s.id === scent);
  const selectedBundle = BUNDLES.find((b) => b.id === bundle);

  const galleryImages = [
    { src: IMAGES.hero, label: "HUSH diffuser" },
    { src: IMAGES.family, label: "Full family" },
    { src: IMAGES.capsuleInsert, label: "Capsule insert" },
    { src: IMAGES.lifestyleBedside, label: "On a bedside" },
    { src: IMAGES.discoveryPack, label: "Discovery Pack" },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      ref={heroRef}
      className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 pt-4"
    >
      {/* GALLERY */}
      <div className="space-y-3">
        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cream-100 flex items-center justify-center">
          <SmartImage
            src={galleryImages[activeIdx].src}
            alt={galleryImages[activeIdx].label}
            label={galleryImages[activeIdx].label}
            className="w-full h-full"
            imgClassName="object-contain w-full h-full"
          />
        </div>
        <div className="grid grid-cols-5 gap-2.5">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`aspect-square rounded-2xl overflow-hidden bg-cream-100 transition border-2 flex items-center justify-center ${
                activeIdx === i
                  ? "border-ink"
                  : "border-transparent hover:border-ink/30"
              }`}
            >
              <SmartImage
                src={img.src}
                alt={img.label}
                label="·"
                className="w-full h-full"
                imgClassName="object-contain w-full h-full p-1"
              />
            </button>
          ))}
        </div>
      </div>

      {/* DETAILS / BUY BOX */}
      <div className="space-y-6 lg:py-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="label-eyebrow">AromaFit · The HUSH Diffuser</span>
            <span className="inline-flex items-center gap-1.5 bg-mint-light/50 text-mint-dark text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-dark animate-pulse" />
              In stock
            </span>
          </div>
          <h1 className="h-display text-4xl md:text-5xl leading-[1.05]">
            The aromatherapy diffuser that
            <br />
            <span className="italic text-rosegold">hushes evening cravings.</span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            <Stars />
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">4.8</strong> · 2,184 reviews
            </span>
            <span className="text-ink-soft/40">·</span>
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">12,000+</strong> Americans hush nightly
            </span>
          </div>
        </div>

        <p className="text-lg text-ink-soft leading-relaxed">
          A capsule-based aromatherapy device built around one ritual: a
          quieter mind around food. Plug in. Drop a HUSH capsule. Press once.
          Plant-derived scents. Designed in California.
        </p>

        {/* MICRO HOW IT WORKS */}
        <div className="grid grid-cols-3 gap-2 py-1">
          {[
            { icon: <Sparkles size={16} />, label: "Insert capsule" },
            { icon: <Clock size={16} />, label: "Press once" },
            { icon: <Heart size={16} />, label: "Breathe & settle" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-cream-100 rounded-xl p-3 flex items-center gap-2 text-xs text-ink-soft"
            >
              <span className="text-rosegold">{s.icon}</span>
              <span className="font-medium text-ink">{s.label}</span>
            </div>
          ))}
        </div>

        {/* SCENT PICKER */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <label className="text-xs uppercase tracking-widest text-ink font-medium">
              1. Choose your scent
            </label>
            <span className="text-xs text-ink-soft">{selectedScent.notes}</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {SCENTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setScent(s.id)}
                className={`rounded-2xl p-3.5 text-left transition border-2 ${
                  scent === s.id
                    ? "border-ink bg-cream-100"
                    : "border-cream-200 bg-cream-50 hover:border-ink/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ background: s.color }}
                  />
                  {scent === s.id && <Check size={14} className="text-ink" />}
                </div>
                <div className="font-display text-lg leading-tight">{s.name}</div>
              </button>
            ))}
          </div>
          <p className="text-xs text-ink-soft mt-2.5">{selectedScent.description}</p>
        </div>

        {/* BUNDLE PICKER */}
        <div>
          <label className="text-xs uppercase tracking-widest text-ink font-medium mb-2.5 block">
            2. Choose your bundle
          </label>
          <div className="space-y-2.5">
            {BUNDLES.map((b) => (
              <button
                key={b.id}
                onClick={() => setBundle(b.id)}
                className={`w-full rounded-2xl p-4 text-left transition border-2 flex items-center justify-between ${
                  bundle === b.id
                    ? "border-ink bg-cream-100"
                    : "border-cream-200 bg-cream-50 hover:border-ink/40"
                } relative`}
              >
                {b.popular && (
                  <span className="absolute -top-2.5 right-4 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-3 py-0.5 rounded-full">
                    Most Loved
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition ${
                      bundle === b.id ? "border-ink bg-ink" : "border-cream-200"
                    }`}
                  >
                    {bundle === b.id && (
                      <span className="h-2 w-2 rounded-full bg-cream-50" />
                    )}
                  </span>
                  <div>
                    <div className="font-display text-xl leading-tight">{b.name}</div>
                    <div className="text-xs text-ink-soft">{b.desc}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl">${b.price}</div>
                  <div className="text-xs">
                    <span className="line-through text-ink-soft/60 mr-1.5">
                      ${b.crossed}
                    </span>
                    <span className="text-rosegold font-medium">{b.save}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* SUBSCRIPTION TOGGLE */}
        <div>
          <label className="text-xs uppercase tracking-widest text-ink font-medium mb-2.5 block">
            3. One-time or subscribe & save
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setSubscription(false)}
              className={`rounded-2xl p-3.5 text-left transition border-2 ${
                !subscription
                  ? "border-ink bg-cream-100"
                  : "border-cream-200 bg-cream-50 hover:border-ink/40"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-display text-lg">One-time</span>
                {!subscription && <Check size={14} className="text-ink" />}
              </div>
              <div className="text-xs text-ink-soft">${selectedBundle.price}</div>
            </button>
            <button
              onClick={() => setSubscription(true)}
              className={`rounded-2xl p-3.5 text-left transition border-2 relative ${
                subscription
                  ? "border-rosegold bg-cream-100"
                  : "border-cream-200 bg-cream-50 hover:border-rosegold/40"
              }`}
            >
              <span className="absolute -top-2.5 right-3 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
              <div className="flex items-center justify-between mb-1">
                <span className="font-display text-lg flex items-center gap-2">
                  <RefreshCw size={14} className="text-rosegold" /> Subscribe
                </span>
                {subscription && <Check size={14} className="text-rosegold" />}
              </div>
              <div className="text-xs text-ink-soft">
                <strong className="text-rosegold">${Math.round(selectedBundle.price * 0.8)}</strong> · Capsule refills monthly
              </div>
            </button>
          </div>
          <p className="text-[11px] text-ink-soft mt-2 leading-relaxed">
            Cancel, pause, or change scent anytime from your account.
          </p>
        </div>

        {/* BUY BUTTON */}
        <div className="space-y-2.5 pt-2">
          <button className="btn-primary w-full !py-5 text-base !rounded-2xl">
            Add to bag — ${finalPrice}
            <ArrowRight size={18} />
          </button>
          <p className="text-xs text-center text-ink-soft">
            Free US shipping · Ships in 1–2 business days · 30-day quiet guarantee
          </p>
        </div>

        {/* TRUST ROW */}
        <div className="grid grid-cols-3 gap-3 pt-5 border-t border-cream-200/80">
          {[
            { icon: <Truck size={18} />, label: "Free US shipping" },
            { icon: <Shield size={18} />, label: "30-day refund" },
            { icon: <Leaf size={18} />, label: "Plant-derived" },
          ].map((t, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex text-rosegold mb-1.5">{t.icon}</div>
              <div className="text-[11px] uppercase tracking-widest text-ink-soft">
                {t.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. TRUST PILLARS
// ─────────────────────────────────────────────────────────────────────────────
function TrustPillars() {
  const items = [
    { icon: <Award size={22} />, label: "Designed in", value: "California" },
    { icon: <Leaf size={22} />, label: "Plant-derived", value: "Aromatic blends" },
    { icon: <Zap size={22} />, label: "USB-C powered", value: "Plug & play" },
    { icon: <Shield size={22} />, label: "30-day", value: "Quiet guarantee" },
    { icon: <Truck size={22} />, label: "Ships from", value: "Los Angeles, CA" },
  ];
  return (
    <section className="mt-20 md:mt-28">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-cream-100 rounded-2xl p-5 text-center space-y-1.5 border border-cream-200/60"
            >
              <div className="inline-flex text-rosegold">{it.icon}</div>
              <div className="text-[10px] uppercase tracking-widest text-ink-soft">
                {it.label}
              </div>
              <div className="font-display text-lg text-ink leading-tight">
                {it.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. PRESS BAR
// ─────────────────────────────────────────────────────────────────────────────
function PressBar() {
  const items = [
    {
      name: "WELLNESS DAILY",
      quote: "A surprisingly elegant answer to evening cravings.",
    },
    { name: "GOOP", quote: "The most thoughtful diffuser we've tested." },
    {
      name: "WELL+GOOD",
      quote: "Calmer evenings — without dieting.",
    },
    {
      name: "MINDFUL HOME",
      quote: "Finally, a wellness object you actually use.",
    },
  ];
  return (
    <section className="mt-20 md:mt-28 py-14 border-y border-cream-200/70 bg-cream-100/60">
      <div className="container-x">
        <div className="text-center text-[10px] uppercase tracking-widest text-ink-soft mb-7">
          As featured in
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((p, i) => (
            <div key={i} className="text-center md:text-left space-y-2">
              <div className="font-display text-base tracking-widest text-ink/80">
                {p.name}
              </div>
              <p className="text-sm text-ink-soft italic leading-snug">
                "{p.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. REVIEWS GRID
// ─────────────────────────────────────────────────────────────────────────────
function ReviewsGrid() {
  const reviews = [
    {
      name: "Sarah M.",
      loc: "Austin, TX",
      stars: 5,
      title: "I quit my 9 PM kitchen ritual.",
      body: "I bought it laughing. Two weeks in, my partner asked if I'd stopped eating after dinner. I hadn't even noticed.",
    },
    {
      name: "Maria L.",
      loc: "Columbus, OH",
      stars: 5,
      title: "Calmer brain. Same me.",
      body: "I read with it on, and somehow the whole snack thing just isn't part of the night anymore.",
    },
    {
      name: "Brad S.",
      loc: "Reno, NV",
      stars: 5,
      title: "My wife stopped asking for ice cream runs.",
      body: "Either coincidence or witchcraft. I'm not asking questions.",
    },
    {
      name: "Giada L.",
      loc: "Los Angeles, CA",
      stars: 2,
      title: "Works too well — careful.",
      body: "Took the fun out of my favorite midnight snack. Now I just don't crave it. 2 stars because I miss the chaos.",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="label-eyebrow">12,000+ rituals · 2,184 reviews</div>
            <h2 className="h-display text-3xl md:text-4xl leading-tight">
              Real customers. <span className="italic text-rosegold">Real evenings.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars size={18} />
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">4.8 / 5</strong> average rating
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <article
              key={i}
              className={`rounded-3xl p-6 border ${
                r.stars < 4
                  ? "bg-cream-100 border-cream-200"
                  : "bg-cream-50 border-cream-200/60"
              } space-y-3`}
            >
              <Stars count={r.stars} size={14} />
              <h3 className="font-display text-lg text-ink leading-snug">
                "{r.title}"
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{r.body}</p>
              <div className="text-[11px] text-ink-soft pt-2 border-t border-cream-200/80">
                <span className="font-medium text-ink">{r.name}</span> · {r.loc} ·{" "}
                <span className="text-rosegold">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. WHY DIFFERENT
// ─────────────────────────────────────────────────────────────────────────────
function WhyDifferent({ onCta }) {
  const cols = [
    {
      name: "Diet apps",
      cons: [
        "Constant notifications",
        "Calorie counting fatigue",
        "Quit in 14 days on average",
        "Requires willpower",
      ],
      pros: [],
      tone: "muted",
    },
    {
      name: "Appetite supplements",
      cons: [
        "Synthetic chemicals",
        "FTC scrutiny on claims",
        "Side effects on energy",
        "Daily pill habit",
      ],
      pros: [],
      tone: "muted",
    },
    {
      name: "HUSH",
      pros: [
        "Zero willpower needed",
        "Plant-derived aromatic blend",
        "Just plug in, press once",
        "Ritual you actually keep",
      ],
      cons: [],
      tone: "primary",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Why HUSH is different</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            Some people diet.
            <br />
            Others count.
            <br />
            <span className="italic text-rosegold">You just plug in.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {cols.map((c, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 ${
                c.tone === "primary"
                  ? "bg-ink text-cream-50 shadow-2xl shadow-ink/10 md:scale-105"
                  : "bg-cream-50 text-ink-soft border border-cream-200"
              }`}
            >
              <h3
                className={`font-display text-2xl mb-5 ${
                  c.tone === "primary" ? "text-cream-50" : "text-ink"
                }`}
              >
                {c.name}
              </h3>
              <ul className="space-y-3">
                {c.cons.map((x, j) => (
                  <li key={j} className="flex gap-2.5 items-start text-sm">
                    <span className="text-ink-soft/50 mt-0.5">×</span>
                    <span className={c.tone === "primary" ? "" : "text-ink-soft"}>
                      {x}
                    </span>
                  </li>
                ))}
                {c.pros.map((x, j) => (
                  <li key={j} className="flex gap-2.5 items-start text-sm">
                    <Check
                      size={14}
                      className="text-rosegold-light mt-1 flex-shrink-0"
                    />
                    <span className="text-cream-100/95">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={onCta} className="btn-primary">
            Start your ritual <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. FIRST NIGHT TIMELINE
// ─────────────────────────────────────────────────────────────────────────────
function FirstNight() {
  const moments = [
    {
      time: "0:00",
      icon: <Sparkles size={20} />,
      title: "You press the button",
      body: "The aromatic vapor begins to rise. Soft, immediate, recognizable.",
    },
    {
      time: "0:07",
      icon: <Clock size={20} />,
      title: "The room shifts",
      body: "Most customers tell us the kitchen 'feels different' within the first ten minutes.",
    },
    {
      time: "0:25",
      icon: <Moon size={20} />,
      title: "HUSH turns off",
      body: "Silent shut-off. No app, no buzzing, no second thought.",
    },
    {
      time: "Morning",
      icon: <Sun size={20} />,
      title: "You notice nothing — and that's the point",
      body: "No 9 PM raid. No regret over the second bowl. Just a quieter evening you might not have planned.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Your first night with HUSH</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            What to expect
            <br />
            <span className="italic text-rosegold">in 25 minutes.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {moments.map((m, i) => (
              <div
                key={i}
                className="relative flex gap-5 md:gap-8 bg-cream-100 rounded-3xl p-6 md:p-7 border border-cream-200/60"
              >
                <div className="flex-shrink-0 flex flex-col items-center w-16">
                  <div className="font-display text-xl md:text-2xl text-rosegold leading-none">
                    {m.time}
                  </div>
                  <div className="mt-2 text-rosegold/70">{m.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. HOW IT WORKS
// ─────────────────────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Insert a HUSH capsule",
      body: "Lift the magnetic top. Drop in your scent — Mint, Citrus, or Spice. Snap it back into place.",
    },
    {
      n: "02",
      title: "Press once",
      body: "A single touch starts the diffusion. The device runs silent for 25 minutes, then turns off automatically.",
    },
    {
      n: "03",
      title: "Breathe & settle",
      body: "Pair it with the moments that matter most. After dinner. Late-night work. The 9 PM kitchen walk that doesn't happen anymore.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">The Ritual · 3 steps</div>
          <h2 className="h-display text-3xl md:text-5xl">
            From box to <span className="italic text-rosegold">quiet</span> in 90 seconds.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-cream-200 flex items-center justify-center">
            <SmartImage
              src={IMAGES.capsuleInsert}
              alt="Hand inserting a HUSH capsule"
              label="Capsule insert"
              className="w-full h-full"
              imgClassName="object-contain w-full h-full"
            />
          </div>
          <ol className="space-y-9">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="font-display text-5xl text-rosegold/70 leading-none flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display mb-2 text-ink">
                    {s.title}
                  </h3>
                  <p className="text-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. UGC GRID — needs new images
// ─────────────────────────────────────────────────────────────────────────────
function UgcGrid() {
  const photos = [
    { src: IMAGES.ugc1, label: "@sarahm — Austin, TX", caption: "Where my evenings happen now." },
    { src: IMAGES.ugc2, label: "@bradnreno — Reno, NV", caption: "Bedside ritual, week 4." },
    { src: IMAGES.ugc3, label: "@danielleseattle — Seattle, WA", caption: "Mint capsule lives at my desk." },
    { src: IMAGES.ugc4, label: "@_marcusj — Atlanta, GA", caption: "Living room, after dinner." },
    { src: IMAGES.ugc5, label: "@hellomaria_ — Columbus, OH", caption: "Bathroom shelf — calmer mornings." },
    { src: IMAGES.ugc6, label: "@ellie.tk — Brooklyn, NY", caption: "Reading nook, Spice on." },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="label-eyebrow">#hushyourhunger</div>
            <h2 className="h-display text-3xl md:text-5xl leading-tight">
              The HUSH community,
              <br />
              <span className="italic text-rosegold">at home.</span>
            </h2>
          </div>
          <p className="text-ink-soft md:max-w-xs">
            12,000+ Americans have made HUSH part of their evenings. Tag
            <span className="text-ink font-medium"> @aromafit </span> and you
            might end up here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-cream-100 flex items-center justify-center">
                <SmartImage
                  src={p.src}
                  alt={p.label}
                  label="UGC photo"
                  className="w-full h-full"
                  imgClassName="object-cover w-full h-full"
                />
              </div>
              <div className="px-1">
                <div className="text-[11px] text-ink font-medium truncate">
                  {p.label}
                </div>
                <div className="text-[11px] text-ink-soft truncate">{p.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. QUIET RITUAL — emotional
// ─────────────────────────────────────────────────────────────────────────────
function QuietRitual() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="rounded-[2.5rem] overflow-hidden bg-cream-200">
          <SmartImage
            src={IMAGES.lifestyleSofa}
            alt="A woman relaxing with HUSH"
            label="Lifestyle"
            className="w-full h-auto"
            imgClassName="object-contain w-full h-auto"
          />
        </div>
        <div className="space-y-6">
          <div className="label-eyebrow">Made for the moments that count</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            After dinner.
            <br />
            Late nights.
            <br />
            <span className="italic text-rosegold">Quiet weekends.</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            HUSH was designed for the part of the day no one talks about — the
            mindless trip to the pantry, the third bowl of cereal, the ice
            cream you swore you wouldn't open. It's not willpower. It's a
            quieter signal in the room.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Calmer evenings without dieting",
              "Less pantry traffic by night three",
              "A ritual you actually want to keep",
            ].map((line, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check size={18} className="text-rosegold mt-1 flex-shrink-0" />
                <span className="text-ink-soft">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. CUSTOMER STORIES
// ─────────────────────────────────────────────────────────────────────────────
function CustomerStories() {
  const stories = [
    {
      name: "Ellie T.",
      loc: "Brooklyn, NY",
      headline: "Seven nights changed my evenings.",
      body: "I tried fasting, apps, the whole thing. A friend sent me HUSH with one line: 'I know it sounds ridiculous. Try it anyway.' Night seven, I realized I hadn't gone to the pantry all week.",
    },
    {
      name: "Danielle R.",
      loc: "Seattle, WA",
      headline: "It made it easier to slow down.",
      body: "I'm not a wellness person. But pressing one button after dinner, and just sitting with the scent, became the shape of my evenings. Three months in, my Spice capsule is gone.",
    },
    {
      name: "Marcus J.",
      loc: "Atlanta, GA",
      headline: "Bought it for my partner. Now I steal it.",
      body: "She lit it on a Tuesday and the kitchen got quiet. Three weeks later, I asked if I could move it to my office. The Mint capsule lives there now.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Real stories</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Three customers.
            <br />
            <span className="italic text-rosegold">Three quieter kitchens.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <article
              key={i}
              className="bg-cream-50 rounded-3xl p-7 border border-cream-200/60 space-y-4"
            >
              <Stars />
              <h3 className="font-display text-xl text-ink leading-snug">
                "{s.headline}"
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{s.body}</p>
              <div className="text-xs pt-3 border-t border-cream-200/80">
                <span className="font-medium text-ink">{s.name}</span> · {s.loc}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. THE 3 SCENTS
// ─────────────────────────────────────────────────────────────────────────────
function ScentsDeepDive({ onCta }) {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">The HUSH Collection</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Three scents.
            <br />
            <span className="italic text-rosegold">One promise.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
          <div className="rounded-[2.5rem] overflow-hidden bg-cream-200">
            <SmartImage
              src={IMAGES.packagingTrio}
              alt="HUSH Mint, Citrus, Spice packaging"
              label="Packaging trio"
              className="w-full h-auto"
              imgClassName="object-contain w-full h-auto"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-ink-soft leading-relaxed">
              Each HUSH capsule is hand-blended with plant-derived aromatic
              oils. Same diffuser. Same ritual. Three different moods — pick
              the one that fits your evening.
            </p>
            <ul className="space-y-4 pt-2">
              {SCENTS.map((s) => (
                <li
                  key={s.id}
                  className="flex gap-4 items-start bg-cream-50 rounded-2xl p-4 border border-cream-200/70"
                >
                  <span
                    className="h-9 w-9 rounded-full flex-shrink-0 mt-1"
                    style={{ background: s.color }}
                  />
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl text-ink">
                        HUSH {s.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-rosegold">
                        {s.notes}
                      </span>
                    </div>
                    <p className="text-sm text-ink-soft mt-1">{s.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <button onClick={onCta} className="btn-outline">
                Try all three with the Discovery Pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 12. WHAT'S IN THE BOX — needs new image
// ─────────────────────────────────────────────────────────────────────────────
function WhatsInBox() {
  const items = [
    { icon: <Box size={18} />, label: "AromaFit HUSH diffuser" },
    { icon: <Sparkles size={18} />, label: "Your selected HUSH capsule(s)" },
    { icon: <Zap size={18} />, label: "Braided USB-C cable (1.5 m)" },
    { icon: <Coffee size={18} />, label: "USB-C wall adapter" },
    { icon: <Heart size={18} />, label: "Quick-start ritual card" },
    { icon: <Shield size={18} />, label: "30-day quiet guarantee insert" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-cream-100 flex items-center justify-center">
          <SmartImage
            src={IMAGES.whatsInBox}
            alt="What's in the box — flat lay"
            label="What's in the box"
            className="w-full h-full"
            imgClassName="object-contain w-full h-full"
          />
        </div>

        <div className="space-y-6">
          <div className="label-eyebrow">What's in the box</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            Everything to start
            <br />
            <span className="italic text-rosegold">tonight.</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            HUSH ships ready-to-go. Open the box, plug it in, drop your
            capsule. Most customers are in their first ritual within 90
            seconds of opening.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {items.map((it, i) => (
              <li
                key={i}
                className="flex gap-3 items-center bg-cream-100 rounded-2xl p-3.5 border border-cream-200/70"
              >
                <span className="text-rosegold flex-shrink-0">{it.icon}</span>
                <span className="text-sm text-ink">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. SPECS BLOCK
// ─────────────────────────────────────────────────────────────────────────────
function SpecsBlock() {
  const specs = [
    { icon: <Ruler size={20} />, label: "Dimensions", value: "15 × 7 cm" },
    { icon: <Box size={20} />, label: "Weight", value: "320 g" },
    { icon: <Battery size={20} />, label: "Power", value: "USB-C, 5 V" },
    { icon: <Volume2 size={20} />, label: "Sound", value: "Whisper-silent" },
    { icon: <Clock size={20} />, label: "Session", value: "25 min auto-off" },
    { icon: <RefreshCw size={20} />, label: "Capsule life", value: "~30 sessions" },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Specs & details</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Designed to <span className="italic text-rosegold">disappear</span> in your room.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {specs.map((s, i) => (
            <div
              key={i}
              className="bg-cream-50 rounded-2xl p-5 border border-cream-200/60 space-y-2"
            >
              <div className="text-rosegold">{s.icon}</div>
              <div className="text-[10px] uppercase tracking-widest text-ink-soft">
                {s.label}
              </div>
              <div className="font-display text-xl text-ink leading-tight">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 14. SCIENCE
// ─────────────────────────────────────────────────────────────────────────────
function QuietScience() {
  const pillars = [
    {
      title: "Aroma & the senses",
      body: "The olfactory system has direct connections to brain regions involved in mood and habit. It's why scent has shaped wellness rituals for thousands of years.",
    },
    {
      title: "The peppermint tradition",
      body: "Peppermint is the most-studied aromatic profile in the appetite-and-cravings literature. Bryan Raudenbush's 2008 study at Wheeling Jesuit University reported reduced snacking behavior in participants who inhaled peppermint at regular intervals.",
    },
    {
      title: "Mindful, not medical",
      body: "HUSH is a wellness device. Not a drug, not a supplement, not a diet. Built around a simple idea: the right scent at the right moment helps you slow down — and rediscover your own appetite signals.",
    },
  ];

  return (
    <section id="science" className="py-20 md:py-28 bg-ink text-cream-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            The science of quiet
          </div>
          <h2 className="h-display text-3xl md:text-5xl text-cream-50">
            For the skeptics.
            <br />
            <span className="italic text-rosegold-light">(We were too.)</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <div key={i} className="space-y-3">
              <div className="font-display text-5xl text-rosegold-light leading-none">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-cream-50">{p.title}</h3>
              <p className="text-cream-100/70 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-cream-100/40 mt-14 max-w-3xl mx-auto text-center leading-relaxed">
          AromaFit is a wellness brand. HUSH is not a medical device, drug, or
          weight-loss product. References to scientific literature are for
          context only and are not claims about the product's effects.
          Individual experiences may vary.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 15. FOUNDER'S NOTE — needs new image
// ─────────────────────────────────────────────────────────────────────────────
function FoundersNote() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cream-100 flex items-center justify-center">
            <SmartImage
              src={IMAGES.founder}
              alt="The founder of AromaFit"
              label="Founder portrait"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-6">
          <div className="label-eyebrow">A note from the founder</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            "I built HUSH for
            <br />
            <span className="italic text-rosegold">the 9 PM version of me."</span>
          </h2>
          <div className="space-y-4 text-ink-soft text-base md:text-lg leading-relaxed">
            <p>
              I'd tried every diet, every app, every supplement. The one thing
              I couldn't quiet was the late-night kitchen walk — the one I
              promised myself I wouldn't take, every single morning.
            </p>
            <p>
              HUSH started as a personal ritual: a small device, a single
              capsule, twenty-five minutes of quiet. By the time my friends
              started asking for one, I knew it had to exist for everyone.
            </p>
            <p>
              We don't promise miracles. We promise a beautifully made object
              and a simple ritual that fits into your evenings — not against
              them.
            </p>
          </div>
          <div className="pt-2 flex items-center gap-3">
            <span className="font-display text-xl italic text-ink">— The AromaFit team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. GUARANTEE
// ─────────────────────────────────────────────────────────────────────────────
function GuaranteeBlock() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-narrow">
        <div className="rounded-[2.5rem] bg-cream-50 border border-cream-200/60 p-8 md:p-14 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-100 border border-cream-200">
            <Shield size={28} className="text-rosegold" />
          </div>
          <div className="label-eyebrow">The 30-day quiet guarantee</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            Try HUSH for 30 days.
            <br />
            <span className="italic text-rosegold">
              Don't love it? Keep it. We'll refund you anyway.
            </span>
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            We're so sure HUSH will become part of your evenings that we don't
            want it back if it doesn't. After 30 days, just email us. We refund
            100% — no return shipment, no paperwork, no questions.
          </p>
          <p className="text-xs text-ink-soft pt-2">
            Will some people abuse it? Probably. Worth it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 17. BUILD YOUR HUSH
// ─────────────────────────────────────────────────────────────────────────────
function BuildYourHush({
  scent,
  setScent,
  bundle,
  setBundle,
  subscription,
  setSubscription,
  finalPrice,
  ctaRef,
}) {
  const selectedBundle = BUNDLES.find((b) => b.id === bundle);

  return (
    <section
      ref={ctaRef}
      id="build"
      className="py-20 md:py-28 bg-cream-100 scroll-mt-20"
    >
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="label-eyebrow">Build your HUSH</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Pick a bundle.
            <br />
            <span className="italic text-rosegold">Start tonight.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {BUNDLES.map((b) => (
            <article
              key={b.id}
              onClick={() => setBundle(b.id)}
              className={`relative rounded-3xl p-7 cursor-pointer transition border-2 ${
                bundle === b.id
                  ? "border-ink"
                  : "border-cream-200 hover:border-ink/30"
              } ${
                b.popular
                  ? "bg-ink text-cream-50 shadow-2xl shadow-ink/10 md:scale-[1.03]"
                  : "bg-cream-50 text-ink"
              }`}
            >
              {b.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Loved
                </div>
              )}
              <div className="space-y-1.5 mb-5">
                <h3 className="font-display text-3xl">{b.name}</h3>
                <p
                  className={`text-sm ${
                    b.popular ? "text-cream-100/70" : "text-ink-soft"
                  }`}
                >
                  {b.desc}
                </p>
              </div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-5xl">${b.price}</span>
                <span
                  className={`text-sm line-through ${
                    b.popular ? "text-cream-100/40" : "text-ink-soft/50"
                  }`}
                >
                  ${b.crossed}
                </span>
              </div>
              <div
                className={`text-xs mb-6 ${
                  b.popular ? "text-rosegold-light" : "text-rosegold"
                }`}
              >
                {b.save} · {b.perCapsule}
              </div>
              <div
                className={`text-xs uppercase tracking-widest text-center py-2 rounded-full ${
                  bundle === b.id
                    ? b.popular
                      ? "bg-cream-50 text-ink"
                      : "bg-ink text-cream-50"
                    : b.popular
                    ? "bg-cream-50/10 text-cream-50/80"
                    : "bg-cream-100 text-ink-soft"
                }`}
              >
                {bundle === b.id ? "Selected" : "Select"}
              </div>
            </article>
          ))}
        </div>

        {/* Sub vs One-time */}
        <div className="max-w-md mx-auto mb-5">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setSubscription(false)}
              className={`rounded-2xl p-3.5 text-left transition border-2 ${
                !subscription
                  ? "border-ink bg-cream-50"
                  : "border-cream-200 bg-cream-50 hover:border-ink/40"
              }`}
            >
              <div className="font-display text-base">One-time</div>
              <div className="text-xs text-ink-soft">${selectedBundle.price}</div>
            </button>
            <button
              onClick={() => setSubscription(true)}
              className={`rounded-2xl p-3.5 text-left transition border-2 relative ${
                subscription
                  ? "border-rosegold bg-cream-50"
                  : "border-cream-200 bg-cream-50 hover:border-rosegold/40"
              }`}
            >
              <span className="absolute -top-2 right-2 bg-rosegold text-cream-50 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                Save 20%
              </span>
              <div className="font-display text-base flex items-center gap-1.5">
                <RefreshCw size={12} className="text-rosegold" /> Subscribe
              </div>
              <div className="text-xs text-rosegold font-medium">
                ${Math.round(selectedBundle.price * 0.8)}
              </div>
            </button>
          </div>
        </div>

        {/* Mini scent picker */}
        <div className="max-w-md mx-auto mb-6">
          <div className="text-xs uppercase tracking-widest text-ink font-medium mb-2.5 text-center">
            Your starting scent
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {SCENTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setScent(s.id)}
                className={`rounded-2xl p-3 text-center transition border-2 ${
                  scent === s.id
                    ? "border-ink bg-cream-50"
                    : "border-cream-200 bg-cream-50 hover:border-ink/40"
                }`}
              >
                <span
                  className="h-3 w-3 rounded-full mx-auto block mb-1.5"
                  style={{ background: s.color }}
                />
                <div className="font-display text-base">{s.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <button className="btn-primary w-full !py-5 text-base !rounded-2xl">
            Add to bag — ${finalPrice}
            <ArrowRight size={18} />
          </button>
          <p className="text-xs text-center text-ink-soft mt-3">
            Free US shipping · 30-day quiet guarantee · Ships in 1–2 days
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 18. PRODUCT FAQ
// ─────────────────────────────────────────────────────────────────────────────
function ProductFAQ() {
  const faqs = [
    {
      q: "What exactly does HUSH do?",
      a: "HUSH is a capsule-based aromatherapy diffuser. You insert a HUSH capsule, press once, and the device gently diffuses our hand-blended aromatic oils for 25 minutes. It's designed to support a calmer environment around food.",
    },
    {
      q: "Is HUSH a weight-loss product or supplement?",
      a: "No. HUSH is a wellness device, not a medical product. We make no medical or weight-loss claims. Many of our customers tell us it helped them slow down around food, but the device itself is simply a beautifully made aromatherapy tool.",
    },
    {
      q: "How does the subscription work?",
      a: "When you subscribe, you save 20% on your first order and receive your chosen capsule (or rotation of capsules) every month. You can pause, change scent, or cancel at any time from your account — no calls, no friction.",
    },
    {
      q: "How long does a capsule last?",
      a: "Each HUSH capsule is designed for ~30 sessions of 25 minutes — about a month of daily evening rituals.",
    },
    {
      q: "Which scent should I start with?",
      a: "Most first-time customers go for the Discovery Pack to try all three. If you must pick one, Mint is our flagship and the most universally loved.",
    },
    {
      q: "Does it actually work?",
      a: "Our customers report a calmer relationship with food after using HUSH as part of their evening. We don't promise miracles — we promise a beautiful daily ritual that fits the moments most people struggle with. And our 30-day quiet guarantee means you only keep it if you love it.",
    },
    {
      q: "What's the return policy?",
      a: "Our 30-day quiet guarantee: full refund within 30 days of receiving HUSH, no return required, no questions asked.",
    },
    {
      q: "Where do you ship?",
      a: "We currently ship across the United States. Orders over $75 ship free.",
    },
    {
      q: "Is it safe with kids and pets in the room?",
      a: "Yes. HUSH uses hand-blended, plant-derived aromatic oils intended for typical household use. As with any aromatic product, we recommend ventilation and stopping use if anyone reports discomfort.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="text-center mb-12 space-y-3">
          <div className="label-eyebrow">Questions, calmly answered</div>
          <h2 className="h-display text-3xl md:text-5xl">FAQ</h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-cream-200/80">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
              >
                <span className="font-display text-lg md:text-2xl text-ink">
                  {f.q}
                </span>
                <span className="flex-shrink-0 text-rosegold">
                  {open === i ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>
              {open === i && (
                <p className="pb-6 pr-10 text-ink-soft leading-relaxed text-base md:text-lg">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 19. FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────
function FinalCTA({ onCta }) {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #F5F0E8 0%, #FBF8F3 70%)",
        }}
      />
      <div className="container-narrow text-center space-y-7">
        <div className="label-eyebrow">Tonight</div>
        <h2 className="h-display text-4xl md:text-7xl leading-[1.05]">
          Tonight,
          <br />
          <span className="italic text-rosegold">make it quiet.</span>
        </h2>
        <p className="text-lg md:text-xl text-ink-soft max-w-xl mx-auto leading-relaxed">
          Some people diet. Others count. You can also just light HUSH and see
          what your evenings feel like with a little less noise.
        </p>
        <div className="pt-2">
          <button onClick={onCta} className="btn-primary text-base !py-5 !px-10">
            Get HUSH <ArrowRight size={18} />
          </button>
        </div>
        <p className="text-xs text-ink-soft">
          Backed by our 30-day quiet guarantee. Free US shipping over $75.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STICKY ADD-TO-CART BAR
// ─────────────────────────────────────────────────────────────────────────────
function StickyAddToCart({ finalPrice, selectedBundle, scent, heroRef, onCta }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShow(heroBottom < 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroRef]);

  const scentName = SCENTS.find((s) => s.id === scent)?.name;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-cream-50/95 backdrop-blur-md border-t border-ink/10 shadow-2xl">
        <div className="container-x py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-cream-100 overflow-hidden flex-shrink-0 hidden sm:flex items-center justify-center">
              <SmartImage
                src={IMAGES.hero}
                alt=""
                label="·"
                className="w-full h-full"
                imgClassName="object-contain w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-ink-soft truncate">
                AromaFit · HUSH {scentName}
              </div>
              <div className="font-display text-base md:text-lg leading-tight truncate">
                {selectedBundle.name} · ${finalPrice}
              </div>
            </div>
          </div>
          <button
            onClick={onCta}
            className="btn-primary !py-3 !px-5 md:!px-7 text-xs md:text-sm flex-shrink-0"
          >
            Add to bag <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
