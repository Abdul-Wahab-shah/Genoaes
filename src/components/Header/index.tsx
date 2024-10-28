"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex mx-auto items-center justify-center rounded-3xl w-full max-w-[50rem] h-[4.5rem] px-4 bg-black ${
        isScrolled ? "border-red" : "border-red-500"
      } md:border-2`}
    >
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
        <ul className="hidden md:flex justify-center space-x-4 md:mr-6 lg:space-x-10">
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
                className={`text-sm lg:text-lg  cursor-pointer ${
                  activeNavItem === item
                    ? "text-red font-thin"
                    : "text-white hover:text-red font-light "
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
            className="text-white focus:outline-none"
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
        <div
          className={`absolute top-16 right-0 z-50 w-full max-w-xs h-screen bg-black text-white flex flex-col items-start pl-8 py-5 md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-8">
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
                      ? "text-red text-4xl font-semibold"
                      : "text-white text-4xl hover:text-red font-semibold"
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
