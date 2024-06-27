"use client";
import {
  AboutMeSection,
  ExperienceSection,
  MainSection,
  SkillsSection,
  WorkSection,
} from "@/components";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "dark" : ""}>
      <Header toggle={handleClick} />
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <Footer />
    </div>
  );
}
