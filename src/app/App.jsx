import { Route, Routes } from "react-router-dom";
import { Layout } from "@/shared/components/layout/Layout";
import { Home } from "@/features/home/Home";
import { Work } from "@/features/work/Work";
import { Experience } from "@/features/experience/Experience";
import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";
import { NotFound } from "@/features/not-found/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
