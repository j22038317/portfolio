"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-dark-mode dark:text-light-mode py-8">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm">+6011-2671 0517</p>
          </div>

          {/* Logo */}
          <div className="mx-4">
            <Image
              src="/DarrellChuaLogo.png"
              alt="Logo"
              width={100}
              height={50}
              className="w-24 h-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-sm">Presented by Darrell CHUA.</p>
          </div>
        </div>

        {/* Flex */}
        <div className="md:hidden flex flex-col items-center space-y-4">
          <div>
            <Image
              src="/DarrellChuaLogo.png"
              alt="Logo"
              width={100}
              height={50}
              className="w-24 h-auto"
            />
          </div>

          {/* Information */}
          <div className="text-center space-y-2">
            <p className="text-sm">+6011-2671 0517</p>
            <p className="text-sm">Presented by Darrell CHUA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}