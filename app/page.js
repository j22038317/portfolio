import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Intro from "@/components/home/Intro";
import Project from "@/components/home/Project";
import SkillsSection from "@/components/home/SkillsSection";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <div>
        <Intro />
        <AboutMe />
        <SkillsSection />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
