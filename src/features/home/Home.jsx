import { Hero } from "@/features/home/components/Hero";
import { TechStrip } from "@/features/home/components/TechStrip";
import { Metrics } from "@/features/home/components/Metrics";
import { Services } from "@/features/home/components/Services";
import { WorkIndex } from "@/features/home/components/WorkIndex";
import { CtaBand } from "@/features/home/components/CtaBand";

export function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Metrics />
      <Services />
      <WorkIndex />
      <CtaBand />
    </>
  );
}
