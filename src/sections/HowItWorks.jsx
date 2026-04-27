import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";

const steps = [
  {
    n: "01",
    title: "Insert a capsule",
    body: "Pop in a HUSH capsule — Mint, Citrus, or Spice. The magnetic dock clicks into place.",
  },
  {
    n: "02",
    title: "Press once",
    body: "A single touch starts the diffusion. The device runs silent for 25 minutes, then turns off.",
  },
  {
    n: "03",
    title: "Breathe & settle",
    body: "Pair it with the moments that matter most: after dinner, evening reading, late-night work.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="label-eyebrow">The Ritual</div>
          <h2 className="h-display text-4xl md:text-5xl">
            Three steps. <span className="italic text-rosegold">One quiet moment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-cream-100">
            <SmartImage
              src={IMAGES.capsuleInsert}
              alt="Hand inserting a HUSH capsule into the diffuser"
              label="Capsule insertion detail"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>

          <ol className="space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6">
                <div className="font-display text-5xl text-rosegold/70 leading-none">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-2">{s.title}</h3>
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
