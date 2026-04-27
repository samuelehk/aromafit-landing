const pillars = [
  {
    title: "Aroma & the senses",
    body: "The olfactory system is one of the few sensory pathways with direct connections to the brain regions involved in mood and habit. This is why scent has been a part of wellness rituals for thousands of years.",
  },
  {
    title: "The peppermint tradition",
    body: "Peppermint is the most studied aromatic profile in the appetite-and-cravings literature. A 2008 study by Bryan Raudenbush at Wheeling Jesuit University reported reduced snacking behavior in participants who inhaled peppermint at regular intervals.",
  },
  {
    title: "Mindful, not medical",
    body: "HUSH is not a supplement, a drug, or a diet. It's a wellness device built around the simple idea that the right scent at the right moment can help you slow down — and rediscover your own appetite signals.",
  },
];

export default function Science() {
  return (
    <section id="science" className="py-24 md:py-32 bg-ink text-cream-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            The science of quiet
          </div>
          <h2 className="h-display text-4xl md:text-5xl text-cream-50">
            Old tradition.
            <br />
            <span className="italic text-rosegold-light">New ritual.</span>
          </h2>
          <p className="text-lg text-cream-100/80 pt-2">
            HUSH is built on a simple, well-documented idea: the senses shape
            behavior. Here's the thinking behind the design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <div key={i} className="space-y-4">
              <div className="font-display text-5xl text-rosegold-light leading-none">
                0{i + 1}
              </div>
              <h3 className="font-display text-2xl text-cream-50">{p.title}</h3>
              <p className="text-cream-100/70 leading-relaxed text-sm">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-cream-100/40 mt-16 max-w-3xl mx-auto text-center leading-relaxed">
          AromaFit is a wellness brand. HUSH is not a medical device, drug,
          or weight-loss product. References to scientific literature are
          provided for context only and are not claims about the product's
          effects.
        </p>
      </div>
    </section>
  );
}
