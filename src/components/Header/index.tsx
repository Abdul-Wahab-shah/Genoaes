"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleActiveNavBar = (path: string) => {
    setActiveNavItem(path);
  };

  const scrollToSection = (sectionId: string) => {
    window.requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      handleActiveNavBar(sectionId);
      setIsMenuOpen(false);
    });
  };

  return (
    <div className="flex items-center justify-center  md:border-2 border-red  rounded-3xl w-full max-w-[50rem] mx-auto h-[4rem]  px-4 ">
      <div className="flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <img
              src="/images/logo-whitebg.png"
              alt="Logo"
              className="h-16 sm:h-24 mr-4"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center  space-x-4 md:mr-6 lg:space-x-10">
          {[
            "home",
            "about",
            "projects",
            "services",
            "testimonial",
            "contact",
          ].map((item) => (
            <li key={item}>
              <span
                className={`text-sm lg:text-lg font-medium cursor-pointer ${
                  activeNavItem === item
                    ? "text-red"
                    : "text-white hover:text-red"
                }`}
                onClick={() => {
                  item === "/" ? router.push("/") : scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white  focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 focus:outline-none bg-black" />
            ) : (
              <FaBars className="h-6 w-6 focus:outline-none bg-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 w-full h-full bg-red text-white flex flex-col items-start  pl-8 pt-5 md:hidden">
          <ul className="flex flex-col space-y-8 ">
            {[
              "home",
              "about",
              "projects",
              "services",
              "testimonial",
              "contact",
            ].map((item) => (
              <li key={item}>
                <span
                  className={`text-lg font-medium cursor-pointer ${
                    activeNavItem === item
                      ? " text-black  text-4xl"
                      : "text-white text-4xl hover:text-black"
                  }`}
                  onClick={() => {
                    item === "/" ? router.push("/") : scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
