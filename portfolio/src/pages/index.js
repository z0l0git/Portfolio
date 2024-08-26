import { Introduction } from "@/components/Introduction";
import { AboutMePage } from "@/components/AboutMePage";
import { SkillsPage } from "@/components/SkillsPage";
import { ExperiencePage } from "@/components/ExperiencePage";
import { WorkPage } from "@/components/WorkPage";
import { ContactPage } from "@/components/ContactPage";
import { Footer } from "@/components/Footer";
import { useRef } from "react";

export default function Home() {
  return (
    <div>
      <Introduction />
      <AboutMePage />
      <SkillsPage />
      <ExperiencePage />
      <WorkPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
