import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/logo-whitebg.png"
                className="h-12"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Octal Lab
              </span>
            </a>

            {/* Full width ul with spacing between li elements */}
            <ul className="w-full flex flex-wrap justify-end items-center space-x-6 mb-6 text-sm font-medium text-white sm:mb-0">
              <li>
                <a
                  href="#"
                  className="text-white  hover:text-red  me-4 md:me-6"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white  hover:text-red me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white  hover:text-red me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-red ">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-red sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2024{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline text-red"
            >
              Octal Lab
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

      {/* contact form */}
    </>
  );
};

export default Footer;
