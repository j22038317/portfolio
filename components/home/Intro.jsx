import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <section id="intro" className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="animate-spin-slow mb-8">
        <Image src="/DarrellChuaLogo.png" alt="Logo" width={250} height={250} />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-dark-mode 
        dark:text-light-mode">
          DARRELL CHUA
        </h1>
      </div>
    </section>
  );
};

export default Intro;