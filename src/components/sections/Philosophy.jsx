import { principles, services } from "../../data/portfolio";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Philosophy() {
  return (
    <section className="section-wrap section-space">
      <SectionHeader
        number="06"
        eyebrow="How I work"
        title="Practical engineering habits behind the visual polish."
        copy="A portfolio can look impressive, but the real signal is how the engineer thinks. These principles guide how I approach code, product behavior, debugging, and collaboration."
      />
      <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2">
        {principles.map(([title, copy], i) => (
          <Reveal key={title} delay={i * 0.04} className="principle-card rounded-2xl border hairline p-5 sm:p-6 md:p-8">
            <span className="mono text-[10px] text-accent">0{i + 1}</span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 sm:mt-28">
        <SectionHeader number="07" eyebrow="Contribution areas" title="Where I can add value immediately." />
      </div>
      <div className="mt-9 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map(([title, copy], index) => (
          <div key={title} className="service-card rounded-2xl p-5 sm:p-6">
            <span className="mono text-[10px] text-accent">0{index + 1}</span>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
