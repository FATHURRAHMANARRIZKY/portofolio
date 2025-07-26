import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="about-container flex flex-col items-center justify-center w-full px-6 py-16 sm:px-10 md:px-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">About Me</h2>

      {/* Profile Image with Decorative Circles */}
      <div className="relative w-60 h-60 sm:w-72 sm:h-72 mb-8">
        {/* Decorative circles */}
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-600 rounded-full z-0" />
        <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-blue-600 rounded-full z-0" />

        {/* Profile image */}
        <div className="relative w-full h-full rounded-full border-4 border-gray-300 shadow-lg z-10 overflow-hidden flex items-center justify-center bg-white">
          <Image
            src="/assets/image/me.jpg"
            alt="Profile"
            width={512}
            height={512}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-2xl text-center text-sm sm:text-base leading-relaxed">
        <p>
          Hello! I&apos;m a passionate developer who enjoys building creative and
          functional digital solutions. With experience in fullstack
          development, I specialize in React, Next.js, Spring Boot, and more.
          Let&apos;s create something great together!
        </p>
      </div>


    </section>
    
  );
};

export default About;