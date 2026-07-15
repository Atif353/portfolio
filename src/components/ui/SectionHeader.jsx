import { Reveal } from "./Reveal";

export function SectionHeader({ number, eyebrow, title, copy }) {
  return (
    <Reveal className="grid gap-4 border-t hairline pt-4 sm:gap-5 sm:pt-5 lg:grid-cols-[.8fr_2fr]">
      <div className="mono text-[11px] uppercase text-accent">{number}. {eyebrow}</div>
      <div>
        <h2 className="max-w-4xl text-[1.75rem] font-semibold leading-[1.08] sm:text-3xl lg:text-5xl 2xl:text-6xl">{title}</h2>
        {copy && <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:mt-5 sm:leading-7 md:text-base 2xl:max-w-3xl 2xl:text-lg 2xl:leading-8">{copy}</p>}
      </div>
    </Reveal>
  );
}
