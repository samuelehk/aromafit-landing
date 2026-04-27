import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-cream-200">
          <SmartImage
            src={IMAGES.family}
            alt="AromaFit HUSH family product shot"
            label="Family product shot"
            className="w-full h-full"
            imgClassName="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-7">
          <div className="label-eyebrow">Meet HUSH</div>
          <h2 className="h-display text-4xl md:text-5xl leading-tight">
            One device.
            <br />
            <span className="italic text-rosegold">Lasting change.</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            HUSH is the first capsule-based aromatherapy diffuser designed
            around a single ritual: a quieter mind around food.
          </p>

          <ul className="space-y-4 pt-2">
            {[
              "Plug in. Insert a HUSH capsule. Press once.",
              "Three signature scents — Mint, Citrus, Spice.",
              "Hand-blended aromatic compounds. No fillers.",
              "Designed in California. Built to last for years.",
            ].map((line, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rosegold flex-shrink-0" />
                <span className="text-ink-soft">{line}</span>
              </li>
            ))}
          </ul>

          <Link to="/hush" className="btn-primary mt-4">
            Discover HUSH <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
