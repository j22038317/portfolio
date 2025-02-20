import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <main id="intro" className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="animate-spin-slow">
          <Image src="/DarrellChuaLogo.png" alt="Logo" width={250} height={250} />
        </div>
      </div>
      <div className="text-center z-0">
        <h1
          className="text-8xl md:text-9xl lg:text-10xl font-bold italic tracking-tight text-black dark:text-light-mode"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            opacity: 0.5,
          }}
        >
          DARRELL CHUA
        </h1>
      </div>
    </main>
  );
};

export default Intro;