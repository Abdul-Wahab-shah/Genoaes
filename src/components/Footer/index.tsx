import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="   shadow-2xl shadow-white pb-5 ">
      <div className=" px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logoBlack.png"
              alt="Vaival Logo"
              className="h-[150px]"
            />
            <p className="text-sm max-w-md text-white">
              Vaival Technologies ignites growth and efficiency, unveiling your
              business's hidden potential through our top custom software
              development services.
            </p>
            <div className="flex space-x-4 mt-4">
              <button>
                <FaFacebook className="h-5 w-5 text-white" />
                <span className="sr-only text-white">Facebook</span>
              </button>
              <button>
                <FaTwitter className="h-5 w-5  text-white" />
                <span className="sr-only text-white">Twitter</span>
              </button>
              <button>
                <FaLinkedin className="h-5 w-5  text-white" />
                <span className="sr-only text-white">LinkedIn</span>
              </button>
              <button>
                <FaInstagram className="h-5 w-5  text-white" />
                <span className="sr-only text-white">Instagram</span>
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white  hover:underline">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  DevOps Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Technologies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:underline">
                  React
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Python
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  MEAN Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  MERN Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Insights */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Insights</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-white">
              © 2024 Vaival Technologies. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <li>
                <Link href="#" className="text-white hover:underline">
                  Security Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Info Security Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:underline">
                  Anti-Slavery Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
