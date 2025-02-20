import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <main id="about-me" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#9ba8ab] text-white">
      <div className="p-10 order-1 md:order-none">
        <Image src="/Profile.png" alt="Profile" width={250} height={250} />
      </div>
      <div className="m-5 text-center order-2 md:order-none">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          Hi, I'm Darrell CHUA. I'm a passionate developer who loves building web applications.
        </p>
      </div>
    </main>
  );
};

export default AboutMe;