"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/program", label: "Our Program" },
  { href: "/network", label: "Our Network" },
  { href: "/why-choose-us", label: "Why Choose Us?" },
  { href: "/career", label: "Career" },
];

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between py-4 lg:mx-20 px-4 lg:px-0 border-b border-white">
        <Link href="/" className="text-white text-2xl font-bold">
          GENOAES+
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <select className="bg-transparent text-white hover:text-green border-none focus:ring-0">
            <option value="en">EN</option>
          </select>
          <Link
            href="/apply"
            className="bg-green hover:bg-black hover:text-white text-white px-6 py-2  transition-colors"
          >
            Apply →
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="bg-green hover:bg-black hover:text-white text-white px-6 py-2 rounded-md transition-colors inline-block text-center"
            >
              Apply →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
