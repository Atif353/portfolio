import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const links = ["About", "Work", "Experience", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <nav className="desktop-navigation panel pointer-events-auto mx-auto mt-4 hidden items-center justify-between rounded-2xl px-3 py-2 lg:flex">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-xl px-1 py-1" aria-label="Home">
          <span className="grid size-8 place-items-center rounded-lg bg-[var(--accent)] text-xs font-extrabold text-[#111]">AM</span>
          <span className="text-xs font-semibold">Atif Mubashar</span>
        </a>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl bg-[var(--bg-soft)] p-1">
          {links.map((link) => <a key={link} className="focus-ring rounded-lg px-4 py-2 text-xs font-medium text-muted transition hover:bg-[var(--panel)] hover:text-[var(--text)]" href={`#${link.toLowerCase()}`}>{link}</a>)}
        </div>

        <div className="flex items-center gap-1.5">
          <button onClick={toggleTheme} className="focus-ring grid size-9 place-items-center rounded-xl transition hover:bg-[var(--line)]" aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="#contact" className="focus-ring rounded-xl bg-[var(--text)] px-4 py-2.5 text-[11px] font-bold text-[var(--bg)]">Let's talk</a>
        </div>
      </nav>

      <div className="pointer-events-auto absolute right-3 top-3 flex items-start gap-2 sm:right-5 sm:top-5 lg:hidden">
        <button onClick={toggleTheme} className="floating-control focus-ring" aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <div className="relative">
          <button onClick={() => setOpen((value) => !value)} className="floating-control focus-ring" aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
          <AnimatePresence>
            {open && (
              <Motion.nav
                initial={{ opacity: 0, y: -8, scale: .97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: .97 }}
                transition={{ duration: .18 }}
                className="panel absolute right-0 mt-2 w-[min(15rem,calc(100vw-1.5rem))] rounded-2xl p-2"
              >
                <div className="mb-1 flex items-center gap-3 border-b hairline px-2 py-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-[var(--accent)] text-xs font-extrabold text-[#111]">AM</span>
                  <div className="min-w-0"><p className="truncate text-xs font-semibold">Atif Mubashar</p><p className="mt-0.5 truncate text-[9px] text-muted">Full Stack Engineer</p></div>
                </div>
                {links.map((link, index) => <a key={link} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition hover:bg-[var(--line)]" href={`#${link.toLowerCase()}`}>{link}<span className="mono text-[8px] text-muted">0{index + 1}</span></a>)}
                <a onClick={() => setOpen(false)} className="mt-1 block rounded-xl bg-[var(--text)] px-3 py-2.5 text-center text-xs font-bold text-[var(--bg)]" href="#contact">Let's talk</a>
              </Motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
