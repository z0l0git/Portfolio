import Image from "next/image";
import { Inter } from "next/font/google";
import { Introduction } from "@/components/Introduction";
import { AboutMePage } from "@/components/AboutMePage";
import { SkillsPage } from "@/components/SkillsPage";
import { ExperiencePage } from "@/components/ExperiencePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Introduction />
      <AboutMePage />
      <SkillsPage />
      <ExperiencePage />
    </div>
  );
}
