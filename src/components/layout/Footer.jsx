import { profile } from "../../data/portfolio";

export function Footer() {
  return (
    <footer className="section-wrap flex flex-col gap-4 border-t hairline py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>Copyright {new Date().getFullYear()} {profile.name}. Built with intention.</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a><a href="#top">Back to top</a></div>
    </footer>
  );
}
