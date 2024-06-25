import {
  AboutMeSection,
  MainSection,
  SkillsSection,
  ExperienceSection,
  WorkSection,
} from "@/components";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <Footer />
    </div>
  );
}
