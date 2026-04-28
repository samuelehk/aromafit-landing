import Stars from "../components/Stars";

const reviews = [
  {
    name: "Rachel K.",
    location: "Phoenix, AZ",
    stars: 5,
    title: "Down 4 kg in 3 weeks. Without trying.",
    body: "I bought it laughing — 'a diffuser?' Three weeks later my jeans fit. I didn't change anything else.",
  },
  {
    name: "Sarah M.",
    location: "Austin, TX",
    stars: 5,
    title: "I quit my 9 PM kitchen ritual.",
    body: "Two weeks in, my partner asked if I'd stopped eating after dinner. I hadn't even noticed. Down 1.8 kg without dieting.",
  },
  {
    name: "Maria L.",
    location: "Columbus, OH",
    stars: 5,
    title: "My jeans button without the jump.",
    body: "Three months in, my Spice capsule is gone — and so are the afternoon cookies. Calmer brain. Same me.",
  },
  {
    name: "Brad S.",
    location: "Reno, NV",
    stars: 5,
    title: "My wife stopped asking for ice cream runs.",
    body: "She lit it on a Tuesday. By Friday the requests had vanished. Either coincidence or witchcraft.",
  },
  {
    name: "Janine T.",
    location: "Boston, MA",
    stars: 5,
    title: "Cheaper than a personal trainer.",
    body: "Tried 4 diet apps. Tried 3 weight-loss supplements. None survived past week 2. HUSH has been on my desk for 4 months.",
  },
  {
    name: "Giada L.",
    location: "Los Angeles, CA",
    stars: 2,
    title: "Works too well — careful.",
    body: "Took the joy out of my favorite midnight snack. I don't crave it anymore. 2 stars because I miss the chaos.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="label-eyebrow">12,000+ Americans · 2,184 reviews</div>
          <h2 className="h-display text-4xl md:text-5xl">
            The reviews that started{" "}
            <span className="italic text-rosegold">the panic at HQ.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Stars />
            <span className="text-sm text-ink-soft">
              <strong className="text-ink">4.8 / 5</strong> average rating
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className={`rounded-3xl p-7 border ${
                r.stars < 4
                  ? "bg-cream-100 border-cream-200"
                  : "bg-cream-50 border-cream-200/60"
              } space-y-4`}
            >
              <Stars count={r.stars} />
              <h3 className="font-display text-xl text-ink leading-snug">
                "{r.title}"
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">{r.body}</p>
              <div className="text-xs text-ink-soft pt-3 border-t border-cream-200/80">
                <span className="font-medium text-ink">{r.name}</span> ·{" "}
                {r.location} ·{" "}
                <span className="text-rosegold">Verified buyer</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
