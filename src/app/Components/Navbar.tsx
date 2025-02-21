"use client";
import React, { useState } from "react";
import { Darkbutton } from "./DarkButton";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="overflow-x-hidden">
      <div className="relative ">
        <div className="container flex justify-between items-center bg-[#FFFFFF] dark:bg-[#181824] py-5 fixed z-50">
          {/* Logo and mobile toggle */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <SparklesText
                className="text-xl lg:text-[28px] text-[#1B2336] dark:text-[#7562E0] font-semibold"
                text="Amit Chakraborty"
              />
            </div>

            {/* Mobile hamburger button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-2xl text-black dark:text-white"
              >
                {isMenuOpen ? "X" : "☰"}
              </button>
              <div>
                <Darkbutton />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex ">
            <ul className="flex  md:gap-[40px] lg:gap-[80px] items-center  cursor-pointer ">
              <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300 ">
                Home
              </li>
              <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300 text-nowrap">
                About me
              </li>
              <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
                Project
              </li>
              <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
                Contact
              </li>
              <div>
                <Darkbutton />
              </div>
            </ul>
          </nav>
        </div>

        {/* Mobile Slide-out Menu */}
        <div
          className={`md:hidden fixed z-50 top-0 right-0 bg-[#c2c2e4] dark:bg-[#181824] w-[250px] h-full transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          {/* Cross button to close menu */}
          <div className="absolute top-4 right-4">
            <button
              onClick={closeMenu}
              className="text-2xl text-black dark:text-white"
            >
              X
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-8 pt-20 cursor-pointer">
            <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
              Home
            </li>
            <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
              About me
            </li>
            <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
              Project
            </li>
            <li className="text-[18px] dark:text-[#FFFFFF] text-[#1B2336] font-semibold hover:scale-75 duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
