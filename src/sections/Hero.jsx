import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SmartImage from "../components/SmartImage";
import Stars from "../components/Stars";
import { IMAGES } from "../images";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, #F5F0E8 0%, #FBF8F3 50%, #FBF8F3 100%)",
        }}
      />

      <div className="container-x grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="label-eyebrow">Aromafit · New Release</div>

          <h1 className="h-display text-5xl md:text-7xl lg:text-8xl">
            Hush
            <br />
            your
            <br />
            <span className="italic text-rosegold">hunger.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-soft max-w-md leading-relaxed">
            The aromatherapy diffuser designed to quiet the noise of cravings
            and bring calm back to your kitchen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/hush" className="btn-primary">
              Shop HUSH <ArrowRight size={16} />
            </Link>
            <a href="#how" className="btn-outline">
              How it works
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <Stars />
            <span className="text-sm text-ink-soft">
              <span className="font-medium text-ink">4.8/5</span> · 12,000+ rituals at home
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] bg-cream-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-rosegold/10">
            <SmartImage
              src={IMAGES.hero}
              alt="HUSH diffuser releasing aromatic vapor"
              label="Hero diffuser shot"
              className="w-full h-full"
              imgClassName="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-cream-50 rounded-2xl shadow-xl p-5 max-w-[200px] hidden md:block">
            <div className="text-3xl font-display text-ink">7 min</div>
            <div className="text-xs uppercase tracking-widest text-rosegold mt-1">
              First quiet moment
            </div>
            <p className="text-xs text-ink-soft mt-2 leading-relaxed">
              The average time before users notice their cravings settle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
