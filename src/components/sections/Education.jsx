import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Education() {
  return (
    <section className="section-wrap section-space">
      <SectionHeader number="09" eyebrow="Education" title="The academic foundation behind my practical work." />
      <div className="mt-9 grid gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3">
        <Reveal className="panel rounded-2xl p-5 sm:rounded-[1.8rem] sm:p-7 md:col-span-2"><p className="mono text-[10px] text-signal">PRIMARY DEGREE</p><h3 className="mt-8 text-2xl font-semibold sm:mt-12 sm:text-3xl">BS Computer Science</h3><p className="mt-3 text-sm text-muted">Virtual University of Pakistan</p><div className="mt-8 flex flex-col gap-2 border-t hairline pt-5 min-[390px]:flex-row min-[390px]:items-end min-[390px]:justify-between sm:mt-12"><span className="text-xs text-muted">Academic performance</span><strong className="text-2xl">3.62 / 4.00</strong></div></Reveal>
        <Reveal delay={.08} className="panel rounded-2xl p-5 sm:rounded-[1.8rem] sm:p-7"><p className="mono text-[10px] text-accent">EARLIER STUDY</p><div className="mt-8 space-y-7 sm:mt-12 sm:space-y-8"><div><h3 className="font-semibold">Intermediate, Pre-Engineering</h3><p className="mt-2 text-xs text-muted">Punjab College, Lahore</p></div><div className="border-t hairline pt-7 sm:pt-8"><h3 className="font-semibold">Matriculation, Science</h3><p className="mt-2 text-xs text-muted">Govt. Central Model School, Lahore</p></div></div></Reveal>
      </div>
    </section>
  );
}
