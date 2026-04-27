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
      "Bright, cool, and unmistakably clean. Our most studied profile — built around peppermint, the aroma traditionally linked with feelings of mental clarity.",
  },
  {
    name: "Citrus",
    color: "#E8D69A",
    notes: "White grapefruit · Bergamot · Lemon",
    moment: "Midday reset",
    description:
      "Crisp and luminous. The kind of scent that makes a room feel ten degrees lighter — perfect for the in-between hours.",
  },
  {
    name: "Spice",
    color: "#D4A582",
    notes: "Cinnamon · Cold vanilla · Cardamom",
    moment: "After dinner & evening",
    description:
      "Warm, dessert-like, deeply calming. The closer-of-the-day scent — designed for the moments most of us call 'the witching hour' in the kitchen.",
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
            <span className="italic text-rosegold">One promise.</span>
          </h2>
          <p className="text-lg text-ink-soft pt-2">
            Choose your favorite. Or get all three with the Discovery Pack.
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
                Best for: <span className="text-ink font-medium">{s.moment}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-cream-200">
            <SmartImage
              src={IMAGES.discoveryPack}
              alt="HUSH Discovery Pack with three scents"
              label="HUSH Discovery Pack"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-5">
            <div className="label-eyebrow">Discovery Pack</div>
            <h3 className="h-display text-3xl md:text-4xl">
              Try all three scents.
              <br />
              <span className="italic text-rosegold">Find your quiet.</span>
            </h3>
            <p className="text-ink-soft text-lg">
              The Discovery Pack pairs Mint, Citrus, and Spice in a single
              gift-ready box. The easiest way to discover the scent that
              becomes your evening ritual.
            </p>
            <Link to="/hush" className="btn-primary">
              Get the Discovery Pack
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
