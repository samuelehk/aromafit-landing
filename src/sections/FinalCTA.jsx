import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SmartImage from "../components/SmartImage";
import { IMAGES } from "../images";

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #F5F0E8 0%, #FBF8F3 70%)",
        }}
      />
      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-cream-100 order-last md:order-first">
          <SmartImage
            src={IMAGES.lifestyleBedside}
            alt="HUSH diffuser on a marble bedside table at golden hour"
            label="Lifestyle — bedside moment"
            className="w-full h-full"
            imgClassName="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-8">
          <div className="label-eyebrow">Stop dieting. Start hushing.</div>
          <h2 className="h-display text-4xl md:text-6xl leading-tight">
            Suppress your appetite.
            <br />
            <span className="italic text-rosegold">Lose the weight.</span>
          </h2>
          <p className="text-lg text-ink-soft max-w-md leading-relaxed">
            12,000+ Americans have already done it. Average loss:{" "}
            <strong>4.1 kg in 8 weeks</strong>, no dieting, no exercise. The
            risk is zero — you keep the device either way.
          </p>
          <Link to="/hush" className="btn-primary">
            Get HUSH — from $69 <ArrowRight size={16} />
          </Link>
          <p className="text-xs text-ink-soft">
            Free US shipping · 30-day refund (keep the device)
          </p>
        </div>
      </div>
    </section>
  );
}
