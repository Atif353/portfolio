import { motion as Motion, useScroll, useSpring } from "framer-motion";
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

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  return (
    <ErrorBoundary>
      <div className="site-shell noise">
        <Motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-[var(--accent)]" style={{ scaleX }} />
        <Navbar />
        <main><Hero /><Currently /><About /><Skills /><FullStack /><Projects /><Experience /><Philosophy /><Education /><Contact /></main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
