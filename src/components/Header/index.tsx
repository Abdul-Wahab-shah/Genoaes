"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

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
      setIsMenuOpen(false); // Close menu after selection
    });
  };

  return (
    <div className="flex items-center bg-black justify-between h-[80px] px-2 md:px-5">
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <img
            src="/images/logo-whitebg.png"
            alt="Logo"
            className="h-24 w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1 bg-black relative  ">
        <div className="hidden lg:flex justify-end space-x-4 md:space-x-8 mr-4 md:mr-10">
          <ul className="flex space-x-4">
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
                  className={`text-sm md:text-lg font-medium cursor-pointer ${
                    activeNavItem === item
                      ? " text-red"
                      : "text-white  hover:text-red"
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

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden  ml-[230px] ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 bg-black " />
            ) : (
              <FaBars className="h-6 w-6  " />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-[30px] right-0  w-[250px] bg-red  text-white flex flex-col items-left p-5">
            <ul className="flex flex-col space-y-2 p-4">
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
                        ? "underline text-black hover:text-black"
                        : "text-white hover:text-black"
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
      </nav>
    </div>
  );
}
