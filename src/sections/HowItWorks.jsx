import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";

const steps = [
  {
    n: "01",
    title: "Press once",
    body: "The diffuser releases the HUSH aromatic blend — peppermint, eucalyptus, plant-derived compounds. Silent. Vapor begins in seconds.",
  },
  {
    n: "02",
    title: "Breathe for 7 minutes",
    body: "The cravings loop softens. Most users feel it inside the first 7 minutes — the same window documented in the Raudenbush 2008 study.",
  },
  {
    n: "03",
    title: "Walk away",
    body: "After 25 minutes the device shuts off. The craving doesn't come back. You go on with your day — without the snack you didn't want to want.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="label-eyebrow">How HUSH ends the loop</div>
          <h2 className="h-display text-4xl md:text-5xl">
            Three steps.{" "}
            <span className="italic text-rosegold">Zero willpower.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-cream-100 flex items-center justify-center">
            <SmartImage
              src={IMAGES.capsuleInsert}
              alt="Hand inserting a HUSH capsule into the diffuser"
              label="Capsule insertion detail"
              className="w-full h-full"
              imgClassName="object-contain w-full h-full"
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
