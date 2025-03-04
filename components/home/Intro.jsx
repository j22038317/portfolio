import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <main id="intro" className="min-h-screen flex flex-col items-center justify-center relative">
      <div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10">
          <div className="animate-spin-slow">
            <Image src="/DarrellChuaLogo.png" alt="Logo" width={200} height={200} />
          </div>
        </div>
        <div className="text-center z-0">
          <h1
            className="text-8xl md:text-9xl lg:text-10xl font-bold italic tracking-tight text-blue-800 dark:text-blue-500"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: 'system-ui',
              opacity: 0.5,
            }}
          >
            DARRELL CHUA
          </h1>
        </div>
      </div>
      <div className="mt-8 text-center z-0">
        <p className="text-lg md:text-2xl lg:text-3xl text-dark-mode dark:text-light-mode"
           style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            fontFamily: 'system-ui',
           }}>
          A Frontend Developer.
        </p>
      </div>
    </main>
  );
};

export default Intro;