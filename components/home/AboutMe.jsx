import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <main id="about-me" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-light-mode dark:bg-dark-mode">
      <div className="p-10 order-1 md:order-none">
        <Image
          src="/Profile.png"
          alt="Profile"
          width={200}
          height={200}
          layout="responsive"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="m-5 text-center order-2 md:order-none max-w-2xl text-dark-mode dark:text-light-mode">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed">
          Hi, I’m <span className="font-bold text-blue-600">DARRELL CHUA</span>, a passionate frontend developer who loves designing user-friendly and
          visually appealing UI/UX. I’m currently studying at <span className="font-bold text-blue-600">INTI College Subang</span> and working on improving
          my backend development skills. I’m all about growth, learning, and creating meaningful digital
          experiences!
        </p>
      </div>
    </main>
  );
};

export default AboutMe;