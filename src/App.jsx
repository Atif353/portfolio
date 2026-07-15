import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Currently } from "./components/sections/Currently";
import { Skills } from "./components/sections/Skills";
import { FullStack } from "./components/sections/FullStack";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Philosophy } from "./components/sections/Philosophy";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { useLenis } from "./hooks/useLenis";

function IntroLoader() {
  return (
    <Motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="w-[min(22rem,calc(100%-2rem))] text-center">
        <Motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto grid size-16 place-items-center rounded-2xl border hairline bg-[var(--panel)] text-xl font-extrabold text-accent shadow-2xl"
        >
          AM
        </Motion.div>
        <p className="mono mt-6 text-[10px] uppercase text-muted">Preparing portfolio</p>
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-[var(--line)]">
          <Motion.div className="h-full rounded-full bg-[var(--accent)]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.9, ease: "easeInOut" }} />
        </div>
      </div>
    </Motion.div>
  );
}

export default function App() {
  useLenis();
  const [loading, setLoading] = useState(() => !new URLSearchParams(window.location.search).has("skipIntro"));
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className="site-shell noise">
        <AnimatePresence>{loading && <IntroLoader />}</AnimatePresence>
        <Motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-[var(--accent)]" style={{ scaleX }} />
        <Navbar />
        <main><Hero /><Currently /><Projects /><Skills /><FullStack /><Experience /><Philosophy /><About /><Education /><Contact /></main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
