import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow">
        <div className="rounded-[2.5rem] bg-cream-100 border border-cream-200/60 p-10 md:p-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-50 border border-cream-200">
            <Shield size={28} className="text-rosegold" />
          </div>
          <div className="label-eyebrow">The 30-day quiet guarantee</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Try HUSH for 30 days.
            <br />
            <span className="italic text-rosegold">Hate it? Keep it. We'll refund you anyway.</span>
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            We're so confident HUSH will become a part of your evenings that
            we don't want it back if it doesn't. If after 30 days it's not for
            you, just email us. We refund 100% — no return shipment, no
            paperwork, no questions.
          </p>
          <p className="text-xs text-ink-soft pt-2">
            Will some people abuse it? Probably. Worth it.
          </p>
        </div>
      </div>
    </section>
  );
}
