const studies = [
  {
    tag: "Wheeling Jesuit University",
    year: "2008",
    author: "Raudenbush et al.",
    finding:
      "Participants exposed to peppermint aromatic compounds at regular intervals consumed 1,800 fewer calories per week — without dieting, without exercise.",
  },
  {
    tag: "Osaka University",
    year: "1991 / 2005",
    author: "Niijima & Nagai",
    finding:
      "Grapefruit aroma was shown to influence sympathetic nervous system activity linked to satiety regulation. Replicated across animal and human studies.",
  },
  {
    tag: "St. George's Hospital, London",
    year: "1999",
    author: "Catherine Collins",
    finding:
      "Subjects using vanilla aromatic patches reported a measurable drop in cravings for sweet foods — and lost an average of 2 kg over four weeks vs. control.",
  },
];

export default function Science() {
  return (
    <section id="science" className="py-24 md:py-32 bg-ink text-cream-50">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            The science HUSH is built on
          </div>
          <h2 className="h-display text-4xl md:text-5xl text-cream-50">
            Aroma suppresses appetite.
            <br />
            <span className="italic text-rosegold-light">
              Three decades of research say so.
            </span>
          </h2>
          <p className="text-lg text-cream-100/80 pt-2">
            HUSH didn't invent this. We engineered a delivery device around
            three published research traditions — peppermint for cravings,
            grapefruit for satiety, vanilla for sweet impulse control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {studies.map((s, i) => (
            <article
              key={i}
              className="bg-cream-50/[0.04] border border-cream-50/15 rounded-3xl p-7 space-y-4"
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
            <strong>That's the foundation HUSH is built on.</strong> You inhale
            the aromatic blend for 7 minutes. Your appetite quiets down. Your
            weight follows. No willpower required.
          </p>
        </div>

        <p className="text-xs text-cream-100/40 mt-12 max-w-3xl mx-auto text-center leading-relaxed">
          Cited research provided as scientific context. HUSH is a wellness
          aromatherapy device — not a registered drug, supplement or medical
          product. Individual results vary.
        </p>
      </div>
    </section>
  );
}
