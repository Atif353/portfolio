import { profile } from "../../data/portfolio";

export function Footer() {
  return (
    <footer className="section-wrap flex flex-col gap-4 border-t hairline py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>Copyright {new Date().getFullYear()} {profile.name}. Full stack portfolio built with React.</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2"><a className="transition hover:text-[var(--text)]" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="transition hover:text-[var(--text)]" href={`mailto:${profile.email}`}>Email</a><a className="transition hover:text-[var(--text)]" href={profile.resume} download>Resume</a><a className="transition hover:text-[var(--text)]" href="#top">Back to top</a></div>
    </footer>
  );
}
