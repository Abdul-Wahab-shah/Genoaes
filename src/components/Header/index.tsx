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

  return (
    <div className="flex shadow-lg items-center bg-black justify-between h-[80px] px-5">
      <div className="flex-shrink-0">
        <img
          src="/images/logo-whitebg.png"
          alt="Logo"
          className="h-24 w-auto"
        />
      </div>

      <nav className="flex-1">
        <ul className="flex justify-end space-x-4 md:space-x-8 mr-4 md:mr-10">
          <li>
            <Link
              href="/"
              className={`text-sm md:text-lg font-medium ${
                activeNavItem === "/" ? "text-[#2b0089]" : "text-white"
              } hover:text-[#2b0089]`}
              onClick={() => handleActiveNavBar("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`text-sm md:text-lg font-medium ${
                activeNavItem === "#" ? "text-[#2b0089]" : "text-white"
              } hover:text-[#2b0089]`}
              onClick={() => handleActiveNavBar("#")}
            >
              About
            </Link>
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
