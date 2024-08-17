"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState("");

  const handleActiveNavBar = (path: string) => {
    setActiveNavItem(path);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    handleActiveNavBar(sectionId); // Set active nav item based on section
  };

  return (
    <div className="flex  items-center  bg-header justify-between h-[80px] px-5">
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <img
            src="/images/logo-whitebg.png"
            alt="Logo"
            className="h-24 w-auto"
          />
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="lg:flex hidden justify-end space-x-4 md:space-x-8 mr-4 md:mr-10">
          <li>
            <span
              className={`text-sm md:text-lg font-medium cursor-pointer ${
                activeNavItem === "/" ? "  underline text-white" : "text-white"
              }`}
              onClick={() => {
                router.push("/");
                handleActiveNavBar("/");
              }}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={`text-sm md:text-lg font-medium cursor-pointer ${
                activeNavItem === "about"
                  ? "underline text-white"
                  : "text-white"
              } `}
              onClick={() => scrollToSection("about")}
            >
              About
            </span>
          </li>
          <li>
            <span
              className={`text-sm md:text-lg font-medium cursor-pointer ${
                activeNavItem === "events"
                  ? "underline text-white"
                  : "text-white"
              }`}
              onClick={() => scrollToSection("events")}
            >
              Events
            </span>
          </li>
          <li>
            <span
              className={`text-sm md:text-lg font-medium cursor-pointer ${
                activeNavItem === "series"
                  ? "underline text-white"
                  : "text-white"
              }`}
              onClick={() => scrollToSection("series")}
            >
              Series
            </span>
          </li>
        </ul>
      </nav>

      <div>
        <button
          onClick={() => router.push("/contact-form")}
          className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base text-black bg-white rounded hover:bg-[#2b0089] hover:text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
