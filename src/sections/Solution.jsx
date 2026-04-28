import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-cream-100">
      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-[2.5rem] overflow-hidden bg-cream-200">
          <SmartImage
            src={IMAGES.family}
            alt="HUSH family product shot"
            label="Family product shot"
            className="w-full h-auto"
            imgClassName="object-contain w-full h-auto"
          />
        </div>

        <div className="space-y-7">
          <div className="label-eyebrow">Meet HUSH</div>
          <h2 className="h-display text-4xl md:text-5xl leading-tight">
            One device.
            <br />
            <span className="italic text-rosegold">
              Less appetite. Less weight.
            </span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            HUSH is a capsule-based aromatherapy diffuser engineered around
            three decades of olfactory research. You press once. Within 7
            minutes, your craving for snacks fades. Less appetite means
            fewer calories. Fewer calories means weight loss.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "Suppresses appetite in 7 minutes — clinically-studied compounds",
              "Three plant-derived scents: Mint, Citrus, Spice",
              "30 sessions per capsule · 25 min auto-off",
              "Designed in California. Used by 12,000+ Americans.",
            ].map((line, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check size={18} className="text-rosegold mt-1 flex-shrink-0" />
                <span className="text-ink-soft">{line}</span>
              </li>
            ))}
          </ul>

          <Link to="/hush" className="btn-primary mt-2">
            Get HUSH — from $79 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
