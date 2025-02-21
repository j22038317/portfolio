"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Header";
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/Contact";
import Intro from "@/components/home/Intro";
import Project from "@/components/home/Project";
import SkillsSection from "@/components/home/SkillsSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const sections = ["Intro", "AboutMe", "SkillsSection", "Project", "Contact"];

    sections.forEach((el) => {
      gsap.from(element.querySelector(`#${el.toLowerCase()}`), {
        autoAlpha: 0,
        duration: 1,
        y: -50,
        scale: 0.5,
        scrollTrigger: {
          trigger: element.querySelector(`#${el.toLowerCase()}`),
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <NavbarDemo />
      <div ref={ref}>
        <div id="intro"><Intro /></div>
        <div id="aboutme"><AboutMe /></div>
        <div id="skillssection"><SkillsSection /></div>
        <div id="project"><Project /></div>
        <div id="contact"><Contact /></div>
      </div>
      <Footer />
    </>
  );
}
