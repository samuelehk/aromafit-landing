export default function TrustStrip() {
  const items = [
    "92% less snacking after 7 days",
    "−4.1 kg average loss in 8 weeks",
    "Works in 7 minutes",
    "12,000+ Americans daily",
    "30-day refund — keep the device",
  ];

  return (
    <section className="bg-cream-100 border-y border-cream-200/60 py-5 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-ink-soft">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {item}
              {i < items.length - 1 && (
                <span className="hidden md:inline-block h-1 w-1 rounded-full bg-rosegold/60" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
