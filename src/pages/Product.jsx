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
  ArrowRight,
  RefreshCw,
  Award,
  Zap,
  Sun,
  Coffee,
  Box,
  Ruler,
  Battery,
  Volume2,
  AlertTriangle,
  TrendingDown,
  Flame,
  X,
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
    description: "The strongest craving-killer in the lineup. Our flagship.",
  },
  {
    id: "citrus",
    name: "Citrus",
    notes: "Grapefruit · Bergamot",
    color: "#E8D69A",
    description: "Best for the 3 PM sugar crash. Bright. Clean. Resetting.",
  },
  {
    id: "spice",
    name: "Spice",
    notes: "Cinnamon · Vanilla",
    color: "#D4A582",
    description: "The dessert-killer. Switch on after dinner. Forget the cookies.",
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
    days: "~15-30 days",
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
    days: "~45-90 days",
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
    days: "~90-180 days",
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

      <TwoStarBanner />
      <StatsBar />
      <ScienceLed />
      <ProblemBlock />
      <HowItEnds />
      <ThreeMoments />
      <CapsuleMechanics onCta={scrollToCheckout} />
      <ReviewsGrid />
      <DangerWarning />
      <WhyHushBeats onCta={scrollToCheckout} />
      <UgcGrid />
      <LeakedLab />
      <WhatsInBox />
      <SpecsBlock />
      <QuietScience />
      <FoundersNote />
      <GuaranteeBlock />
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
      <ProductFAQ />
      <FinalCTA onCta={scrollToCheckout} />

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
          <div className="flex items-center gap-2 flex-wrap">
            <span className="label-eyebrow">AromaFit · The HUSH Diffuser</span>
            <span className="inline-flex items-center gap-1.5 bg-mint-light/50 text-mint-dark text-[10px] uppercase tracking-widest px-2 py-1 rounded-full font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-dark animate-pulse" />
              Low stock · 47 left
            </span>
          </div>
          <h1 className="h-display text-4xl md:text-[3.4rem] leading-[1.02]">
            Suppress appetite.
            <br />
            Lose weight.{" "}
            <span className="italic text-rosegold">Without dieting.</span>
          </h1>
          <p className="text-base md:text-lg text-ink leading-snug font-medium">
            HUSH uses clinically-studied aromatic compounds to switch off your
            appetite — within <strong>7 minutes</strong> of pressing the button.
            Backed by 15+ years of olfactory research. Used daily by 12,000+
            Americans.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
            <Stars />
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">4.8</strong> · 2,184 reviews
            </span>
            <span className="text-ink-soft/40">·</span>
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">12,000+</strong> Americans use it daily
            </span>
          </div>
        </div>

        {/* QUICK BENEFITS */}
        <div className="grid grid-cols-3 gap-2 py-1">
          {[
            { icon: <TrendingDown size={16} />, label: "Cuts cravings 92%" },
            { icon: <Clock size={16} />, label: "Works in 7 min" },
            { icon: <Sparkles size={16} />, label: "Clinically studied" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-cream-100 rounded-xl p-3 flex items-center gap-2 text-xs text-ink-soft"
            >
              <span className="text-rosegold">{s.icon}</span>
              <span className="font-medium text-ink leading-tight">{s.label}</span>
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
                    <div className="text-xs text-ink-soft">
                      {b.desc} · <span className="text-rosegold">{b.days}</span>
                    </div>
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
            Free US shipping · Ships in 1–2 business days · 30-day refund (keep the device)
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
// 2. THE STRATEGIC 2-STAR BANNER
// ─────────────────────────────────────────────────────────────────────────────
function TwoStarBanner() {
  return (
    <section className="mt-20 md:mt-28 bg-cream-100 border-y border-cream-200/70 py-12 md:py-14">
      <div className="container-narrow">
        <div className="bg-cream-50 rounded-3xl p-7 md:p-9 border border-cream-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Stars count={2} size={18} />
            <span className="text-[10px] uppercase tracking-widest text-ink-soft">
              Verified buyer · Los Angeles, CA
            </span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 italic leading-snug">
            "Two stars. It works too well. I don't even crave my favorite midnight
            snack anymore. I miss the chaos."
          </h3>
          <p className="text-ink-soft text-sm">
            — Giada L., February 2026
          </p>
          <div className="mt-6 pt-5 border-t border-cream-200/80 flex items-start gap-3">
            <span className="text-rosegold flex-shrink-0 mt-0.5">★</span>
            <p className="text-sm text-ink leading-relaxed">
              <strong>Yes, we put a 2-star review on our own product page.</strong>{" "}
              Because the people who buy HUSH and don't <em>love</em> it tend to share
              one thing in common: it kills cravings so well, they forget what they
              came for. We'll take that complaint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. STATS BAR
// ─────────────────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "92%", label: "less snacking after 7 days" },
    { value: "78%", label: "less stress-eating between meals" },
    { value: "−4.1 kg", label: "average loss in 8 weeks" },
    { value: "12,000+", label: "Americans using HUSH daily" },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="label-eyebrow">What HUSH does</div>
          <h2 className="h-display text-3xl md:text-4xl">
            The numbers
            <br />
            <span className="italic text-rosegold">we built HUSH around.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-cream-100 rounded-2xl p-6 text-center border border-cream-200/60"
            >
              <div className="font-display text-4xl md:text-5xl text-rosegold leading-none mb-2">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-ink-soft leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-ink-soft/70 text-center mt-6 max-w-2xl mx-auto">
          Internal data, AromaFit Q1 2026 cohort (n=2,184). Individual results
          may vary depending on usage frequency and lifestyle.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. SCIENCE-LED (brand makes the scientific case directly)
// ─────────────────────────────────────────────────────────────────────────────
function ScienceLed() {
  const studies = [
    {
      tag: "Wheeling Jesuit University",
      year: "2008",
      author: "Raudenbush et al.",
      finding:
        "Participants exposed to peppermint aromatic compounds at regular intervals consumed an average of 1,800 fewer calories per week — without dieting, without exercise, without behavioral coaching.",
    },
    {
      tag: "Osaka University",
      year: "1991 / 2005",
      author: "Niijima & Nagai",
      finding:
        "Grapefruit aroma was shown to influence sympathetic nervous system activity linked to satiety regulation and lipolysis. Repeatedly replicated in animal and human studies.",
    },
    {
      tag: "St. George's Hospital, London",
      year: "1999",
      author: "Catherine Collins",
      finding:
        "Subjects using vanilla aromatic patches reported a measurable drop in cravings for sweet, calorie-dense foods — and lost an average of 2 kg over four weeks compared to the control group.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-ink text-cream-50">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            The science HUSH is built on
          </div>
          <h2 className="h-display text-3xl md:text-5xl text-cream-50 leading-tight">
            Aroma suppresses appetite.
            <br />
            <span className="italic text-rosegold-light">
              Three decades of research say so.
            </span>
          </h2>
          <p className="text-cream-100/80 text-lg pt-3 max-w-2xl mx-auto leading-relaxed">
            HUSH didn't invent this. We engineered a delivery device around
            aromatic compounds the scientific literature has been studying
            for the better part of 30 years. Here are the three studies we
            built the formula on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {studies.map((s, i) => (
            <article
              key={i}
              className="bg-cream-50/[0.04] border border-cream-50/15 rounded-3xl p-6 space-y-4"
            >
              <div>
                <div className="font-display text-4xl text-rosegold-light leading-none">
                  0{i + 1}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-rosegold-light/80 mt-3">
                  {s.tag} · {s.year}
                </div>
                <div className="text-sm text-cream-100/70 mt-1">{s.author}</div>
              </div>
              <p className="text-cream-100/90 text-sm leading-relaxed">
                {s.finding}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-rosegold/15 border border-rosegold/30 rounded-3xl p-6 md:p-8">
          <p className="text-cream-50 text-base md:text-lg leading-relaxed">
            <strong>That's the foundation HUSH is built on.</strong> Three
            independent research traditions — peppermint for cravings,
            grapefruit for satiety, vanilla for sweet impulse control. We
            combined them into one aromatic system. You inhale it for 7
            minutes. Your appetite quiets down. Your weight follows.
          </p>
        </div>

        <p className="text-[11px] text-cream-100/40 text-center mt-10 max-w-3xl mx-auto leading-relaxed">
          Cited research is provided as scientific context. AromaFit is a wellness
          brand and HUSH is a wellness aromatherapy device — not a registered
          drug, supplement or medical product. Individual results vary.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. THE PROBLEM
// ─────────────────────────────────────────────────────────────────────────────
function ProblemBlock() {
  return (
    <section className="py-20 md:py-28 bg-ink text-cream-50">
      <div className="container-narrow text-center space-y-7">
        <div className="text-xs uppercase tracking-widest text-rosegold-light">
          Read this slowly
        </div>
        <h2 className="h-display text-3xl md:text-5xl text-cream-50 leading-tight">
          It's not your fault.
          <br />
          <span className="italic text-rosegold-light">You're not weak.</span>
        </h2>
        <div className="space-y-5 text-cream-100/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          <p>
            Cravings aren't a willpower problem. They're a chemical loop your
            brain has been running for years — triggered by olfactory and
            sensory cues, not by hunger.
          </p>
          <p>
            That's why diets break. That's why supplements stop working.
            That's why you keep finding yourself in front of the open fridge
            wondering <em> how you got there</em>. You're not weak. You're
            fighting the wrong system.
          </p>
          <p className="font-display text-cream-50 italic text-2xl md:text-3xl pt-2">
            HUSH attacks the chemical loop directly — through the same
            olfactory pathway that started it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. HOW IT ENDS THE LOOP (mechanism)
// ─────────────────────────────────────────────────────────────────────────────
function HowItEnds() {
  const steps = [
    {
      n: "01",
      title: "Press once",
      body: "The diffuser releases the HUSH aromatic blend — peppermint, eucalyptus, plant-derived compounds. Silent. Vapor begins in seconds.",
    },
    {
      n: "02",
      title: "Breathe for 7 minutes",
      body: "Most customers report the craving softens within the first 7 minutes. The room shifts. The pull toward the kitchen quietly fades.",
    },
    {
      n: "03",
      title: "Walk away",
      body: "After 25 minutes the device shuts off automatically. The craving doesn't come back. You go on with your day — without the snack you didn't want to want.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">How HUSH ends the loop</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Three steps. <span className="italic text-rosegold">Zero willpower.</span>
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
// 6. THREE MOMENTS (morning / afternoon / evening)
// ─────────────────────────────────────────────────────────────────────────────
function ThreeMoments() {
  const moments = [
    {
      icon: <Sun size={24} />,
      time: "Morning",
      title: "Kill the breakfast spiral",
      body: "Press once before the kitchen opens. Most customers report eating less of what's not on the plan — without skipping breakfast.",
    },
    {
      icon: <Coffee size={24} />,
      time: "Afternoon",
      title: "End the 3 PM sugar crash",
      body: "The slump. The vending-machine pull. The drawer where you keep the chocolate. HUSH puts that whole loop on pause.",
    },
    {
      icon: <Flame size={24} />,
      time: "Evening",
      title: "Stop the 9 PM kitchen raid",
      body: "The mindless trip to the pantry. The third bowl of cereal. The ice cream you swore you wouldn't open. HUSH ends the most expensive snack hour of the day.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Use it three times a day. Or once.</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            HUSH wasn't built for one moment.
            <br />
            <span className="italic text-rosegold">It was built for three.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2 max-w-xl mx-auto">
            Cravings hit at predictable hours. So does HUSH. Use it whenever
            the loop starts — morning, afternoon, evening, or all three.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {moments.map((m, i) => (
            <article
              key={i}
              className="bg-cream-50 rounded-3xl p-7 border border-cream-200/60 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-rosegold">{m.icon}</span>
                <span className="text-xs uppercase tracking-widest text-rosegold font-medium">
                  {m.time}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight">
                {m.title}
              </h3>
              <p className="text-ink-soft text-sm md:text-base leading-relaxed">
                {m.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. CAPSULE MECHANICS
// ─────────────────────────────────────────────────────────────────────────────
function CapsuleMechanics({ onCta }) {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">How long does a capsule last?</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Math, but
            <br />
            <span className="italic text-rosegold">honest math.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-cream-50 rounded-3xl p-8 md:p-10 border border-cream-200/60">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="font-display text-5xl text-rosegold leading-none mb-2">
                30
              </div>
              <div className="text-sm text-ink-soft">
                sessions per capsule
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl text-rosegold leading-none mb-2">
                25 min
              </div>
              <div className="text-sm text-ink-soft">
                per session, auto-off
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-5xl text-rosegold leading-none mb-2">
                1–3
              </div>
              <div className="text-sm text-ink-soft">
                sessions per day, your call
              </div>
            </div>
          </div>

          <div className="border-t border-cream-200 pt-7 space-y-3">
            <div className="text-xs uppercase tracking-widest text-ink font-medium mb-3">
              How long 1 capsule lasts depending on how you use it
            </div>
            {[
              {
                mode: "Once a day",
                time: "Evening only",
                duration: "30 days per capsule",
              },
              {
                mode: "Twice a day",
                time: "Afternoon + evening",
                duration: "15 days per capsule",
              },
              {
                mode: "Three times a day",
                time: "Morning + afternoon + evening",
                duration: "10 days per capsule",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 py-3 border-b border-cream-200/60 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg text-ink">{row.mode}</span>
                  <span className="text-xs text-ink-soft hidden md:inline">
                    · {row.time}
                  </span>
                </div>
                <span className="font-display text-lg text-rosegold">
                  {row.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-cream-100 rounded-2xl p-5 flex items-start gap-3">
            <Sparkles size={18} className="text-rosegold mt-0.5 flex-shrink-0" />
            <p className="text-sm text-ink-soft leading-relaxed">
              <strong className="text-ink">Most popular setup:</strong> the
              Discovery Pack (3 capsules) gives you ~3 months of evening rituals,
              or ~6 weeks if you also use HUSH after lunch. With Subscribe & Save,
              new capsules arrive automatically every 30 days.
            </p>
          </div>

          <div className="mt-7 text-center">
            <button onClick={onCta} className="btn-primary">
              Start your ritual <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. REVIEWS GRID
// ─────────────────────────────────────────────────────────────────────────────
function ReviewsGrid() {
  const reviews = [
    {
      name: "Rachel K.",
      loc: "Phoenix, AZ",
      stars: 5,
      title: "Down 4 kg in 3 weeks. Without trying.",
      body: "I bought it laughing — 'a diffuser?' Three weeks later my jeans fit. I didn't change anything else. I'm not saying it's magic. I'm saying I stopped opening the fridge at 10 PM.",
    },
    {
      name: "Sarah M.",
      loc: "Austin, TX",
      stars: 5,
      title: "I quit my 9 PM kitchen ritual.",
      body: "Two weeks in, my partner asked if I'd stopped eating after dinner. I hadn't even noticed. Down 1.8 kg without dieting.",
    },
    {
      name: "Maria L.",
      loc: "Columbus, OH",
      stars: 5,
      title: "My jeans button without the jump.",
      body: "I'm not a wellness person. But pressing one button after dinner became my whole routine. Three months in, my Spice capsule is gone — and so are the afternoon cookies.",
    },
    {
      name: "Brad S.",
      loc: "Reno, NV",
      stars: 5,
      title: "My wife stopped asking for ice cream runs.",
      body: "She lit it on a Tuesday. By Friday the requests had vanished. Either coincidence or witchcraft. I'm not asking questions.",
    },
    {
      name: "Janine T.",
      loc: "Boston, MA",
      stars: 5,
      title: "Cheaper than a personal trainer.",
      body: "Tried 4 diet apps. Tried 3 weight-loss supplements. None of them survived past week two. HUSH has been on my desk for 4 months. The Mint capsule is my favorite.",
    },
    {
      name: "Giada L.",
      loc: "Los Angeles, CA",
      stars: 2,
      title: "Works too well. Two stars.",
      body: "Took the joy out of my favorite midnight snack. I don't crave it anymore. Two stars because I miss the chaos. (Yes, I'm leaving this on purpose.)",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="label-eyebrow">12,000+ rituals · 2,184 reviews</div>
            <h2 className="h-display text-3xl md:text-4xl leading-tight">
              The reviews that started{" "}
              <span className="italic text-rosegold">the panic at HQ.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Stars size={18} />
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">4.8 / 5</strong> average rating
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <p className="text-[11px] text-ink-soft/70 text-center mt-8 max-w-2xl mx-auto">
          Reviews reflect personal customer experiences. Individual results vary.
          HUSH is a wellness aromatherapy device and is not a medical, drug, or
          weight-loss product.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. DANGER WARNING (counter-claim)
// ─────────────────────────────────────────────────────────────────────────────
function DangerWarning() {
  return (
    <section className="py-16 md:py-20 bg-cream-100">
      <div className="container-narrow">
        <div className="bg-cream-50 rounded-3xl p-7 md:p-10 border-2 border-rosegold/40 shadow-md">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-rosegold/10 flex items-center justify-center">
              <AlertTriangle size={22} className="text-rosegold" />
            </div>
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-rosegold font-medium">
                Important — please read
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug">
                Don't use HUSH around people who don't{" "}
                <em className="text-rosegold">want</em> their appetite reduced.
              </h3>
              <p className="text-ink-soft leading-relaxed">
                Yes, you read that correctly. Several customers told us their
                partners — who weren't trying to change anything about their
                eating — also lost their interest in evening snacks while HUSH
                was running. We mention this because we want you to use it
                intentionally. If you live with kids, athletes, or anyone who
                needs to maintain their appetite, run HUSH in a different room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. WHY HUSH BEATS DIETS
// ─────────────────────────────────────────────────────────────────────────────
function WhyHushBeats({ onCta }) {
  const rows = [
    { feature: "Daily willpower required", diet: true, supp: false, hush: false },
    { feature: "Calorie counting", diet: true, supp: false, hush: false },
    { feature: "Synthetic chemicals", diet: false, supp: true, hush: false },
    { feature: "FTC-flagged claims", diet: false, supp: true, hush: false },
    { feature: "Average abandonment in 2 weeks", diet: true, supp: true, hush: false },
    { feature: "Plant-derived aromatic blend", diet: false, supp: false, hush: true },
    { feature: "Just plug in. Press once.", diet: false, supp: false, hush: true },
    { feature: "Works while you live your life", diet: false, supp: false, hush: true },
    { feature: "30-day refund — keep the device", diet: false, supp: false, hush: true },
  ];

  const Cell = ({ on }) =>
    on ? (
      <span className="text-rosegold">×</span>
    ) : (
      <span className="text-ink-soft/30">·</span>
    );
  const HushCell = ({ on }) =>
    on ? (
      <Check size={16} className="text-rosegold-light inline" />
    ) : (
      <span className="text-cream-100/30">·</span>
    );

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Side by side</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            Diets failed you.
            <br />
            <span className="italic text-rosegold">HUSH ignores you.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2">
            That's the point. You forget you're using it. You forget you were
            hungry. The room got quiet on its own.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-cream-100 rounded-3xl border border-cream-200/60 overflow-hidden">
          <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] text-[11px] md:text-xs uppercase tracking-widest font-medium border-b border-cream-200">
            <div className="p-4 text-ink-soft">&nbsp;</div>
            <div className="p-4 text-ink-soft text-center">Diet apps</div>
            <div className="p-4 text-ink-soft text-center">Supplements</div>
            <div className="p-4 text-cream-50 bg-ink text-center">HUSH</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.7fr_1fr_1fr_1fr] text-sm border-b border-cream-200/60 last:border-0"
            >
              <div className="p-4 text-ink-soft">{r.feature}</div>
              <div className="p-4 text-center text-lg">
                <Cell on={r.diet} />
              </div>
              <div className="p-4 text-center text-lg">
                <Cell on={r.supp} />
              </div>
              <div className="p-4 text-center text-lg bg-ink/95">
                <HushCell on={r.hush} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button onClick={onCta} className="btn-primary">
            Switch to HUSH <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. UGC GRID
// ─────────────────────────────────────────────────────────────────────────────
function UgcGrid() {
  const photos = [
    { src: IMAGES.ugc1, label: "@sarahm — Austin, TX", caption: "Down 1.8 kg. Week 2." },
    { src: IMAGES.ugc2, label: "@bradnreno — Reno, NV", caption: "Bedside ritual, week 4." },
    { src: IMAGES.ugc3, label: "@danielleseattle — Seattle, WA", caption: "Mint at the desk = no chocolate." },
    { src: IMAGES.ugc4, label: "@_marcusj — Atlanta, GA", caption: "After dinner, on. Pantry, off." },
    { src: IMAGES.ugc5, label: "@hellomaria_ — Columbus, OH", caption: "Down 3 kg in 6 weeks." },
    { src: IMAGES.ugc6, label: "@ellie.tk — Brooklyn, NY", caption: "My old jeans say thanks." },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="label-eyebrow">#hushyourhunger</div>
            <h2 className="h-display text-3xl md:text-5xl leading-tight">
              12,000 Americans.
              <br />
              <span className="italic text-rosegold">Quieter kitchens.</span>
            </h2>
          </div>
          <p className="text-ink-soft md:max-w-xs">
            Tag <span className="text-ink font-medium">@aromafit</span> with your
            HUSH setup and you might end up here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((p, i) => (
            <div key={i} className="space-y-2">
              <div className="aspect-square rounded-2xl overflow-hidden bg-cream-50 flex items-center justify-center">
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
// 12. LEAKED LAB
// ─────────────────────────────────────────────────────────────────────────────
function LeakedLab() {
  const compounds = [
    {
      name: "Mint-Satiety Boost™",
      desc: "Concentrated peppermint and eucalyptus profile. The most-studied appetite-and-cravings aromatic in modern wellness research.",
    },
    {
      name: "Sweet-Soothe Aroma Matrix™",
      desc: "Cold vanilla, cinnamon and cardamom — the dessert decoy. Built for the 'one cookie won't hurt' moment.",
    },
    {
      name: "Bright-Reset Citrus Blend™",
      desc: "Bergamot, white grapefruit and lemon. Designed to pull the brain out of the 3 PM sugar dip.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="label-eyebrow">Inside a HUSH capsule</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            What we put in.
            <br />
            <span className="italic text-rosegold">And what we leave out.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2 max-w-xl mx-auto">
            Three plant-derived aromatic blends. Hand-finished in California.
            Zero synthetic perfumes, zero parabens, zero "proprietary"
            chemicals you can't pronounce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {compounds.map((c, i) => (
            <article
              key={i}
              className="bg-cream-100 rounded-3xl p-7 border border-cream-200/60 space-y-3"
            >
              <div className="text-xs uppercase tracking-widest text-rosegold font-medium">
                Blend {i + 1}
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight">
                {c.name}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{c.desc}</p>
            </article>
          ))}
        </div>

        <p className="text-[11px] text-ink-soft/70 text-center mt-8 max-w-2xl mx-auto">
          Trade-marked names refer to AromaFit's proprietary aromatic blends and
          are not pharmacological actives.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 13. WHAT'S IN THE BOX
// ─────────────────────────────────────────────────────────────────────────────
function WhatsInBox() {
  const items = [
    { icon: <Box size={18} />, label: "AromaFit HUSH diffuser" },
    { icon: <Sparkles size={18} />, label: "Your selected HUSH capsule(s)" },
    { icon: <Zap size={18} />, label: "Braided USB-C cable (1.5 m)" },
    { icon: <Coffee size={18} />, label: "USB-C wall adapter" },
    { icon: <Sparkles size={18} />, label: "Quick-start ritual card" },
    { icon: <Shield size={18} />, label: "30-day refund insert" },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-x grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-cream-50 flex items-center justify-center">
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
            Open the box.
            <br />
            <span className="italic text-rosegold">Be in your first session in 90 seconds.</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Plug in the USB-C cable. Drop a capsule. Press once. The whole
            unboxing-to-first-ritual takes less time than reading this section.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {items.map((it, i) => (
              <li
                key={i}
                className="flex gap-3 items-center bg-cream-50 rounded-2xl p-3.5 border border-cream-200/70"
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
// 14. SPECS
// ─────────────────────────────────────────────────────────────────────────────
function SpecsBlock() {
  const specs = [
    { icon: <Ruler size={20} />, label: "Dimensions", value: "15 × 7 cm" },
    { icon: <Box size={20} />, label: "Weight", value: "320 g" },
    { icon: <Battery size={20} />, label: "Power", value: "USB-C, 5 V" },
    { icon: <Volume2 size={20} />, label: "Sound", value: "Whisper-silent" },
    { icon: <Clock size={20} />, label: "Session", value: "25 min auto-off" },
    { icon: <RefreshCw size={20} />, label: "Capsule life", value: "30 sessions" },
  ];

  return (
    <section className="py-20 md:py-28">
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
              className="bg-cream-100 rounded-2xl p-5 border border-cream-200/60 space-y-2"
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
// 15. SCIENCE
// ─────────────────────────────────────────────────────────────────────────────
function QuietScience() {
  return (
    <section id="science" className="py-20 md:py-28 bg-ink text-cream-50">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            How HUSH actually works on your body
          </div>
          <h2 className="h-display text-3xl md:text-5xl text-cream-50 leading-tight">
            Aroma in.
            <br />
            <span className="italic text-rosegold-light">Appetite out.</span>
          </h2>
        </div>

        <div className="space-y-7 text-cream-100/85 leading-relaxed text-base md:text-lg">
          <p>
            <strong className="text-cream-50">Step 1 — The aromatic
            molecules enter through olfactory receptors.</strong> The olfactory
            system is the only sensory pathway with a direct line to the
            limbic brain — the region that runs mood, habit and appetite
            signaling. Within seconds of inhaling HUSH, peppermint and
            grapefruit compounds begin acting on the same neural circuits
            studied by Raudenbush, Niijima and Nagai for over two decades.
          </p>
          <p>
            <strong className="text-cream-50">Step 2 — The cravings loop
            shuts down.</strong> The brain stops sending the "I want food"
            signal. Most users feel it within 7 minutes — the same window
            documented in the published literature on peppermint and snacking
            behavior. The pull toward the kitchen quiets. The hand stops
            reaching for the cookie jar.
          </p>
          <p>
            <strong className="text-cream-50">Step 3 — Less appetite means
            fewer calories. Fewer calories means weight loss.</strong> No
            mystery, no marketing trick. The 12,000+ Americans using HUSH
            daily report an average loss of 4.1 kg in 8 weeks — without
            dieting, without exercise programs, without willpower budgets.
          </p>
          <p className="font-display italic text-2xl md:text-3xl text-cream-50 pt-3 leading-snug">
            HUSH doesn't ask you to be stronger.
            <br />
            It quietly removes the thing that wears you down.
          </p>
        </div>

        <p className="text-xs text-cream-100/40 mt-12 text-center leading-relaxed">
          AromaFit is a wellness brand. HUSH is a wellness aromatherapy device,
          not a registered drug. Scientific references provided for context.
          Average results based on internal Q1 2026 customer cohort (n=2,184).
          Individual results may vary.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. FOUNDER'S NOTE
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
            "I built HUSH after the
            <br />
            <span className="italic text-rosegold">15th diet I quit in a month."</span>
          </h2>
          <div className="space-y-4 text-ink-soft text-base md:text-lg leading-relaxed">
            <p>
              Every diet I tried lost the war against the same five-minute
              window: the 9 PM walk to the kitchen. Every supplement promised
              what it couldn't deliver. Every app gamified my hunger and then
              quietly added it back.
            </p>
            <p>
              HUSH started as a personal experiment — a small device, a
              hand-blended aromatic, twenty-five minutes of pause. By the time
              my friends started messaging me asking what I was using, I knew
              it had to exist for everyone.
            </p>
            <p>
              We're not selling miracles. We're selling a beautifully made
              object and a ritual that fits the moments diets pretend don't
              exist.
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
// 17. GUARANTEE
// ─────────────────────────────────────────────────────────────────────────────
function GuaranteeBlock() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-narrow">
        <div className="rounded-[2.5rem] bg-cream-50 border border-cream-200/60 p-8 md:p-14 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-100 border border-cream-200">
            <Shield size={28} className="text-rosegold" />
          </div>
          <div className="label-eyebrow">The 30-day "keep it" guarantee</div>
          <h2 className="h-display text-3xl md:text-5xl leading-tight">
            Try HUSH for 30 days.
            <br />
            <span className="italic text-rosegold">
              Don't love it? Keep it. We'll refund you anyway.
            </span>
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            We're so sure HUSH will become part of your day that we don't even
            want it back if it doesn't. After 30 days, just email us. We refund
            100%. No return, no paperwork, no questions, no upsell call. The
            box is yours, the diffuser is yours, the half-used capsule is
            yours.
          </p>
          <p className="text-xs text-ink-soft pt-2">
            Will some people abuse it? Yes. We've done the math. It's worth it.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 18. BUILD YOUR HUSH
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
          <p className="text-lg text-ink-soft pt-2">
            Most customers go for the Discovery Pack — three months of evening
            rituals, or six weeks at twice a day.
          </p>
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
                <p
                  className={`text-xs ${
                    b.popular ? "text-rosegold-light" : "text-rosegold"
                  }`}
                >
                  Lasts {b.days}
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
            Free US shipping · 30-day refund (keep it) · Ships in 1–2 days
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 19. PRODUCT FAQ
// ─────────────────────────────────────────────────────────────────────────────
function ProductFAQ() {
  const faqs = [
    {
      q: "What does HUSH actually do?",
      a: "HUSH is an aromatic device built on three decades of olfactory research. You drop in a capsule, press once, and clinically-studied aromatic compounds (peppermint, grapefruit, vanilla) suppress your appetite within 7 minutes. Less appetite means fewer calories. Fewer calories means weight loss — without dieting, without willpower, without a daily pill.",
    },
    {
      q: "How long does a single capsule last?",
      a: "Each HUSH capsule is rated for 30 sessions of 25 minutes each. If you use it once a day (e.g. evening only) one capsule lasts ~30 days. Twice a day (afternoon + evening) → ~15 days. Three times a day (morning + afternoon + evening) → ~10 days. The Discovery Pack (3 capsules) covers most users for 1.5 to 3 months.",
    },
    {
      q: "When during the day should I use HUSH?",
      a: "Whenever the cravings hit — morning, afternoon, or evening. Most customers start with one daily session after dinner (the famous 9 PM kitchen walk) and then add a second afternoon session if they want to control the 3 PM sugar crash too.",
    },
    {
      q: "Will I really lose weight with HUSH?",
      a: "Yes. Less appetite means fewer calories. Fewer calories means weight loss — that part isn't marketing, it's basic energy balance. Our internal Q1 2026 cohort of 2,184 customers reported an average loss of 4.1 kg over 8 weeks of daily use, without changing their diet or starting a workout plan. The weight loss is the natural consequence of the appetite suppression, which is the documented effect of the aromatic compounds inside HUSH. Of course, individual results vary — but if you don't see the change, you keep the device and we refund you anyway.",
    },
    {
      q: "Is the appetite-suppression effect actually real, or is it placebo?",
      a: "It's real, and the science backs it. Peppermint aromatic compounds have been studied for over 15 years for their effect on appetite signaling — most notably by Bryan Raudenbush at Wheeling Jesuit University, whose participants ate 1,800 fewer calories per week without dieting. Grapefruit aroma has been studied for satiety regulation since the 1990s (Niijima/Nagai, Osaka University). Vanilla for sweet-craving control (St. George's Hospital, London). HUSH combines all three into one device. When 12,000+ Americans report the same effect daily, it's no longer a question of placebo.",
    },
    {
      q: "How does Subscribe & Save work?",
      a: "Subscribe & Save 20% gives you 20% off your first order and ships fresh capsules every 30 days. Pause, change scent, or cancel anytime from your account — no calls, no friction.",
    },
    {
      q: "Which scent should I start with?",
      a: "Most first-time customers go for the Discovery Pack to try all three. If you must pick one, Mint is our flagship and the most universally loved.",
    },
    {
      q: "Is it safe with kids and pets in the room?",
      a: "Yes. HUSH uses hand-blended, plant-derived aromatic oils intended for typical household use. As with any aromatic product, we recommend ventilation and stopping use if anyone reports discomfort. Keep in mind that HUSH may also reduce appetite in others sharing the room — we recommend running it in a room where this is intentional.",
    },
    {
      q: "What's the return policy?",
      a: "Our 30-day refund: full refund within 30 days of receiving HUSH. You keep the device. You keep the half-used capsule. No return shipment required. No paperwork. No questions.",
    },
    {
      q: "Where do you ship?",
      a: "We currently ship across the United States. Orders over $75 ship free. International is rolling out in the coming months.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="text-center mb-12 space-y-3">
          <div className="label-eyebrow">Questions, answered straight</div>
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
// 20. FINAL CTA
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
        <div className="label-eyebrow">Stop dieting. Start hushing.</div>
        <h2 className="h-display text-4xl md:text-7xl leading-[1.02]">
          Suppress your appetite.
          <br />
          Lose the weight.
          <br />
          <span className="italic text-rosegold">In your own kitchen.</span>
        </h2>
        <p className="text-lg md:text-xl text-ink-soft max-w-xl mx-auto leading-relaxed">
          12,000+ Americans have already done it. Average loss: <strong>4.1 kg
          in 8 weeks</strong>, no dieting, no exercise. The Discovery Pack lasts
          up to three months. The risk is zero — you keep the device either way.
        </p>
        <div className="pt-2">
          <button onClick={onCta} className="btn-primary text-base !py-5 !px-10">
            Get HUSH <ArrowRight size={18} />
          </button>
        </div>
        <p className="text-xs text-ink-soft">
          Free US shipping · 30-day refund (keep the device)
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
