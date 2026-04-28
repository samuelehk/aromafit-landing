import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";
import { Link } from "react-router-dom";

const scents = [
  {
    name: "Mint",
    color: "#A9C4A8",
    notes: "Peppermint · Eucalyptus",
    moment: "Morning to afternoon",
    description:
      "The strongest craving-killer in the lineup. Built around peppermint — the most-studied aromatic profile in the appetite-and-cravings literature. Our flagship.",
  },
  {
    name: "Citrus",
    color: "#E8D69A",
    notes: "White grapefruit · Bergamot · Lemon",
    moment: "The 3 PM sugar crash",
    description:
      "Crisp and luminous. Built on grapefruit aroma, studied at Osaka University for its effect on satiety regulation. Designed for the in-between hours.",
  },
  {
    name: "Spice",
    color: "#D4A582",
    notes: "Cinnamon · Cold vanilla · Cardamom",
    moment: "After dinner & evening",
    description:
      "Warm, dessert-like, deeply calming. The dessert-killer — built around vanilla, the aroma documented to drop sweet cravings in clinical settings.",
  },
];

export default function Scents() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="label-eyebrow">The HUSH Collection</div>
          <h2 className="h-display text-4xl md:text-5xl">
            Three scents.
            <br />
            <span className="italic text-rosegold">One job: less appetite.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2">
            Pick one. Mix all three. Same diffuser, three aromatic profiles —
            each built on its own published research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scents.map((s) => (
            <article
              key={s.name}
              className="bg-cream-50 rounded-3xl p-8 flex flex-col gap-5 border border-cream-200/70 hover:shadow-xl hover:shadow-rosegold/5 transition"
            >
              <div className="flex items-center justify-between">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="text-xs uppercase tracking-widest text-ink-soft">
                  HUSH
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl">{s.name}</h3>
                <p className="text-xs uppercase tracking-widest text-rosegold mt-1">
                  {s.notes}
                </p>
              </div>

              <p className="text-ink-soft text-sm leading-relaxed flex-1">
                {s.description}
              </p>

              <div className="text-xs text-ink-soft pt-2 border-t border-cream-200/80">
                Best for:{" "}
                <span className="text-ink font-medium">{s.moment}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2.5rem] overflow-hidden bg-cream-200">
            <SmartImage
              src={IMAGES.discoveryPack}
              alt="HUSH Discovery Pack with three scents"
              label="HUSH Discovery Pack"
              className="w-full h-auto"
              imgClassName="object-contain w-full h-auto"
            />
          </div>
          <div className="space-y-5">
            <div className="label-eyebrow">Discovery Pack · $109</div>
            <h3 className="h-display text-3xl md:text-4xl">
              Pick three scents.
              <br />
              <span className="italic text-rosegold">Mix them how you want.</span>
            </h3>
            <p className="text-ink-soft text-lg">
              The Discovery Pack covers ~3 months of evening rituals — or 6
              weeks if you also use HUSH after lunch. Choose any combination
              of Mint, Citrus and Spice.
            </p>
            <Link to="/hush" className="btn-primary">
              Build my Discovery Pack
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
