import Stars from "../components/Stars";

const reviews = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    stars: 5,
    title: "I quit my 9 PM kitchen ritual.",
    body: "I bought it laughing. Honestly. Two weeks in, my partner asked if I'd stopped eating after dinner. I hadn't even noticed.",
  },
  {
    name: "Danielle R.",
    location: "Brooklyn, NY",
    stars: 5,
    title: "Better than another app I'd quit in a week.",
    body: "I'm not someone who buys 'wellness' stuff. This made it easier to slow down. The Spice scent is unreal in the evening.",
  },
  {
    name: "Maria L.",
    location: "Columbus, OH",
    stars: 5,
    title: "Finally something that fits my evening.",
    body: "I read with it on, and somehow the whole snack thing just isn't part of the night anymore. Calmer brain. Same me.",
  },
  {
    name: "Giada L.",
    location: "Los Angeles, CA",
    stars: 2,
    title: "Works too well — careful.",
    body: "I'll be honest: this thing took the fun out of my favorite midnight snack. Now I just don't crave it. 2 stars because I miss the chaos.",
  },
  {
    name: "Brad S.",
    location: "Reno, NV",
    stars: 5,
    title: "My wife stopped asking for ice cream runs.",
    body: "She lit it for the third night in a row and the requests… vanished. Either coincidence or witchcraft. I'm not asking questions.",
  },
  {
    name: "Claudia G.",
    location: "Miami, FL",
    stars: 5,
    title: "Quieter than my meditation app.",
    body: "It's the silence in my kitchen at night that I notice most. That's the magic, somehow.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="label-eyebrow">Loved out loud</div>
          <h2 className="h-display text-4xl md:text-5xl">
            12,000+ rituals.
            <br />
            <span className="italic text-rosegold">One quiet kitchen at a time.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Stars />
            <span className="text-sm text-ink-soft">4.8 average rating</span>
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
                <span className="font-medium text-ink">{r.name}</span> · {r.location}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
