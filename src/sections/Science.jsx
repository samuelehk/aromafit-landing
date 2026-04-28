import { useT } from "../lang/LanguageContext";

export default function Science() {
  const { t } = useT();
  const studies = [
    {
      tag: t("science.s1.tag"),
      year: "2008",
      author: t("science.s1.author"),
      finding: t("science.s1.finding"),
    },
    {
      tag: t("science.s2.tag"),
      year: "1991 / 2005",
      author: t("science.s2.author"),
      finding: t("science.s2.finding"),
    },
    {
      tag: t("science.s3.tag"),
      year: "1999",
      author: t("science.s3.author"),
      finding: t("science.s3.finding"),
    },
  ];

  return (
    <section id="science" className="py-24 md:py-32 bg-ink text-cream-50">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="text-xs uppercase tracking-widest text-rosegold-light">
            {t("science.eyebrow")}
          </div>
          <h2 className="h-display text-4xl md:text-5xl text-cream-50">
            {t("science.h2.line1")}
            <br />
            <span className="italic text-rosegold-light">
              {t("science.h2.line2")}
            </span>
          </h2>
          <p className="text-lg text-cream-100/80 pt-2">{t("science.lead")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {studies.map((s, i) => (
            <article
              key={i}
              className="bg-cream-50/[0.04] border border-cream-50/15 rounded-3xl p-7 space-y-4"
            >
              <div>
                <div className="font-display text-4xl text-rosegold-light leading-none">
                  0{i + 1}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-rosegold-light/80 mt-3">
                  {s.tag} · {s.year}
                </div>
                <div className="text-sm text-cream-100/70 mt-1">{s.author}</div>
              </div>
              <p className="text-cream-100/90 text-sm leading-relaxed">
                {s.finding}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-rosegold/15 border border-rosegold/30 rounded-3xl p-6 md:p-8">
          <p className="text-cream-50 text-base md:text-lg leading-relaxed">
            <strong>{t("science.closer.bold")}</strong>
            {t("science.closer.body")}
          </p>
        </div>

        <p className="text-xs text-cream-100/40 mt-12 max-w-3xl mx-auto text-center leading-relaxed">
          {t("science.disclaimer")}
        </p>
      </div>
    </section>
  );
}
