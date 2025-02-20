import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Intro from "@/components/home/Intro";
import Project from "@/components/home/Project";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <div>
        <Intro />
        <AboutMe />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
