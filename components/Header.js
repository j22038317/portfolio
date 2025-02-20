"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        {/* Home Link */}
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          className="text-black dark:text-white cursor-pointer"
        >
          Home
        </ScrollLink>

        {/* Project Link (Smooth Scroll) */}
        <ScrollLink
          to="project"
          smooth={true}
          duration={500}
          className="text-black dark:text-white cursor-pointer"
        >
          Project
        </ScrollLink>

        {/* Contact Link */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="text-black dark:text-white cursor-pointer"
        >
          Contact
        </ScrollLink>
      </Menu>
    </div>
  );
}