import { Shield } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-narrow">
        <div className="rounded-[2.5rem] bg-cream-100 border border-cream-200/60 p-10 md:p-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream-50 border border-cream-200">
            <Shield size={28} className="text-rosegold" />
          </div>
          <div className="label-eyebrow">The 30-day "keep it" guarantee</div>
          <h2 className="h-display text-3xl md:text-5xl">
            Try HUSH for 30 days.
            <br />
            <span className="italic text-rosegold">
              Don't love it? Keep it. We'll refund you anyway.
            </span>
          </h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            We're so sure HUSH will become part of your day that we don't even
            want it back if it doesn't. After 30 days, just email us. We refund
            100%. No return. No paperwork. No questions. No upsell call.
          </p>
          <p className="text-xs text-ink-soft pt-2">
            Will some people abuse it? Yes. We've done the math. It's worth it.
          </p>
        </div>
      </div>
    </section>
  );
}
