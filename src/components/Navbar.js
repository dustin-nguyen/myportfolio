// src/components/Navbar.js

// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <section id="Header">
      <header className="bg-gray-800 fixed top-0 z-10 w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-row ">
          <div className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="/" className="ml-3 text-xl">
              Duc Nguyen
            </a>
          </div>
          <nav className="md:mr-auto ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap  text-base justify-center">
            {/* <a href="#experience" className="mr-5 hover:text-white">
          Experience
        </a> */}
            <a href="#about" className="mr-5 hover:text-white">
              About
            </a>
            <a href="#projects" className="mr-5 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#contact" className="mr-5 hover:text-white">
              Contact
            </a>
          </nav>
          {/* <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Contact
            
          </a> */}
        </div>
      </header>
    </section>
  );
}
