// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Globe, Github, Menu, X } from "lucide-react";
// import { ModeToggle } from "./toggle-mode";

// const Navbar = () => {
//   return (
//     <nav className="navbar-container sticky top-0 z-50 flex flex-row items-center w-full h-16 px-16 text-base">
//       <div className="brand">
//         <span className="text-2xl font-extrabold italic">F21</span>
//       </div>

//       <div className="menu flex flex-row items-center gap-4 ml-96">
//         <Link href={"/"} className="">
//           Home
//         </Link>
//         <Link href={"/about"} className="">
//           About
//         </Link>
//         <Link href={"/projects"} className="">
//           Projects
//         </Link>
//         <Link href={"/blog"} className="">
//           Blog
//         </Link>
//         <Link href={"/reviews"} className="">
//           Reviews
//         </Link>
//         <Link href={"/contact"} className="">
//           Contact
//         </Link>
//       </div>

//       <div className="etc flex flex-row items-center gap-4 ml-56">
//         <Link href={""} className="flex flex-row items-center gap-1">
//           <Globe size={20} />
//           ID/EN
//         </Link>
//         <Link href={""} className="flex flex-row items-center gap-1">
//           <Github size={20} />
//           Github
//         </Link>
//         <ModeToggle />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe, Github, Menu, X } from "lucide-react";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black border-b">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 md:px-16 h-16">
        {/* Left: Brand */}
        <div className="flex-1">
          <span className="text-2xl font-extrabold italic">F21</span>
        </div>

        {/* Center: Menu (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-base">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="blog.f21.my.id">Blog</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right: etc (GitHub, ModeToggle) */}
        <div className="flex-1 flex justify-end items-center gap-4 text-sm">
          <div className="hidden md:flex items-center gap-3">
            <Link href="#" className="flex items-center gap-1">
              <Globe size={18} /> ID/EN
            </Link>
            <Link href="#" className="flex items-center gap-1">
              <Github size={18} /> GitHub
            </Link>
            <ModeToggle />
          </div>

          {/* Hamburger Menu (mobile) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "max-h-screen scale-y-100 opacity-100" : "max-h-0 scale-y-95 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-4 bg-white dark:bg-black border-t text-base">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="blog.f21.my.id" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="#" className="flex items-center gap-1">
            <Globe size={18} /> ID/EN
          </Link>
          <Link href="#" className="flex items-center gap-1">
            <Github size={18} /> GitHub
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
