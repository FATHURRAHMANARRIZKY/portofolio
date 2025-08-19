import Navbar from "../components/navbar";
import "../components/components.css";
import Chat from "../components/chat";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="hero flex flex-col justify-center items-center w-full h-[90.5vh] md:h-[89.5vh] relative">
        <div className="brand z-10">
          <span className="text-9xl font-bold italic">F21</span>
        </div>
        <span className="pt-16 text-lg z-10">
          Web Developer • UI Designer • Fullstack
        </span>
      </div>

      <About />
      <Projects />
      <Contact />

      <footer className="footer-container flex flex-col w-full h-88 md:h-80 bg-gray-900 text-white px-16 py-8 gap-y-8">
        <span className="text-2xl font-extrabold italic">F21</span>
        <div className="flex flex-row gap-4">
          <Link href="">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <Linkedin size={24} />
            </div>
          </Link>
          <Link href="">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <Instagram size={24} />
            </div>
          </Link>
          <Link href="">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
              <Github size={24} />
            </div>
          </Link>
        </div>
        <hr />
        <div className="flex flex-row gap-2 text-center justify-center">
          <Link href="/">
          About Us
          </Link>
          |
          <Link href="/">
          Contact
          </Link>
          |
          <Link href="/terms-of-use.html">
          TERMS OF USE
          </Link>
          |
          <Link href="/privacy-policy.html">
          PRIVACY POLICY
          </Link>
          {/* <span className="ml-auto text-sm">Made with ❤️ in Indonesia</span> */}
        </div>
          <span className="text-sm flex justify-center">© 2025 F21. All rights reserved.</span>
      </footer>
      <Chat />
    </div>
  );
}
