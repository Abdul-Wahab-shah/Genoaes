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
      className={`sticky md:top-0 z-50  flex mx-auto items-center justify-between px-4 sm:px-6 lg:px-8 h-[6rem] transition-colors duration-300 w-full ${
        isScrolled ? "md:bg-red" : "bg-transparent"
      }`}
    >
      <div className="flex items-center md:justify-center justify-between w-full md:space-x-7">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <img
              src={
                isScrolled ? "/images/logoWhite.png" : "/images/logoBlack.png"
              }
              alt="Logo"
              className=" sm:h-20 h-[10rem]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-4 md:mr-6 lg:space-x-10 relative">
          {["about", "projects", "services", "testimonial", "contact"].map(
            (item) => (
              <li key={item} className="relative group">
                <span
                  className={`text-sm lg:text-lg cursor-pointer uppercase ${
                    activeNavItem === item
                      ? "text-black rounded-full bg-white px-4 py-3 font-medium"
                      : "text-white group-hover:text-white font-medium"
                  }`}
                  onClick={() => {
                    item === "/" ? router.push("/") : scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </li>
            )
          )}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden   ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-8 w-8 focus:outline-none bg-transparent" />
            ) : (
              <FaBars className="h-8 w-8 focus:outline-none bg-transparent" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed top-[6rem] right-0 z-50 w-[70%] h-[calc(100vh-6rem)] bg-black text-white flex flex-col items-start p-8 md:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col space-y-8">
            {["about", "projects", "services", "testimonial", "contact"].map(
              (item) => (
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
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
