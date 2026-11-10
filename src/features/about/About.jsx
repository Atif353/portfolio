import { AboutIntro } from "./components/AboutIntro";
import { Credentials } from "./components/Credentials";
import { Principles } from "./components/Principles";
import { Skills } from "./components/Skills";

export function About() {
  return (
    <>
      <AboutIntro />
      <Principles />
      <Skills />
      <Credentials />
    </>
  );
}
