"use client";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Portfolio from "../src/Sections/portfolio";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "typed.js";
import { FaQuoteLeft } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import { serviceData } from "../serviceData";
import { testimonials } from "../testimonials";
import ScrollToTopButton from "../src/components/Buttons/scrollToTop";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Development",
        "App Development",
        "Blockchain Dev",
        "Saas Development",
        "DevOps Development",
        "Cloud Security...",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // testimonials
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
        setFade(false);
      }, 500); // Match fade duration
    }, 3000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleDotClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 500); // Fade duration
  };

  // hero section slider

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3700,
  };

  const ImagesSlider = [
    "/images/development.png",
    "/images/app.png",
    "/images/blockchain.png",
    "/images/saas.png",
    "/images/Devops1.png",
    "/images/security.png",
  ];

  // contact
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <>
      <Header />

      {/* Hero section */}

      <div className="w-full flex flex-col lg:flex-row-reverse md:h-screen h-full md:py-0 py-10  bg-black">
        {/* Slider Section */}
        <div className="w-full lg:w-1/2 h-full  flex justify-center items-center overflow-hidden">
          <Slider
            {...sliderSettings}
            className="w-full h-full flex items-center justify-center"
          >
            {ImagesSlider.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center text-center h-full w-full"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto lg:mt-40 md:mt-40 max-w-[400px] max-h-[300px] object-cover mx-auto" // Adjusted for responsive image sizing
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center p-4">
          {" "}
          {/* Added padding for mobile */}
          <span className="text-3xl md:text-6xl font-bold uppercase text-white">
            Specializes in
            <br />
            <span
              ref={el}
              className="text-2xl md:text-5xl font-bold animation text-red"
            ></span>
          </span>
          <p className="text-white mt-5">
            We deliver innovative digital solutions tailored to your business,
            <br className="hidden md:block" />
            ensuring efficient development and seamless integration. Our
            services
            <br className="hidden md:block" /> focus on secure, scalable, and
            high-performance outcomes.
          </p>
        </div>
      </div>

      {/* About section */}
      <div
        id="about"
        className="flex flex-col lg:flex-row  h-full p-8 pt-10  items-center md:py-10"
      >
        <div className="flex-1 ">
          <span className="text-3xl md:text-5xl font-bold ">About Us</span>
          <p className="text-lg text-gray-700 md:my-4  mb-10">
            At <b> Octal Lab</b> , we are a dynamic team of web development
            experts dedicated to crafting innovative and high-performance
            digital solutions that drive results. With a deep understanding of
            modern technologies and user-centered design, we specialize in
            creating websites, applications, and platforms that are not only
            visually compelling but also highly functional and scalable.{" "}
            <b className="    font-semibold">
              {" "}
              Our services range from Web Development to App Development,
              Blockchain Integration, SaaS Solutions, DevOps Automation, and
              Cloud Security.
            </b>
            Whether you're a startup looking for a sleek and powerful online
            presence or an established business in need of a cutting-edge
            digital transformation, we tailor our solutions to meet your
            specific needs. With years of industry experience and a client-first
            approach, we aim to turn your vision into reality through meticulous
            design, clean code, and seamless execution. Let us be your trusted
            partner in navigating the digital landscape and achieving your
            business goals.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mb-10 md:mb-0 ">
          <div className="relative md:w-[25rem]  h-[22rem] rounded-lg  bg-gradient-to-r from-red to-[#0c0d0d]">
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg z-20 animate-dot" />
            <div className="z-10 w-full h-full rounded-lg border border-[#202222] bg-gradient-to-r from-[#000000] to-[#0c0d0d] flex items-center justify-center flex-col text-white relative">
              <div className="absolute w-[220px] h-[45px] rounded-full bg-[#c7c7c7] opacity-40 shadow-lg blur-md transform rotate-[40deg] top-0 left-0" />
              <div>
                <img
                  src="/images/about2.png"
                  alt=""
                  className="  object-cover "
                />
              </div>
              {/* <div>Views</div> */}
              <div className="absolute w-full h-0.5 bg-red top-[10%] " />
              <div className="absolute w-0.5 h-full bg-red left-[10%] " />
              <div className="absolute w-full h-0.5 bg-red bottom-[10%]" />
              <div className="absolute w-0.5 h-full bg-red right-[10%]" />
            </div>
          </div>
        </div>
      </div>

      {/* porjects */}

      <div
        id="projects"
        className="h-[40%] justify-center items-center w-full bg-black py-10"
      >
        <span className="text-white justify-center font-bold text-3xl md:text-5xl items-center flex pb-10 ">
          Projects
        </span>
        <Portfolio />
      </div>

      {/* Services */}

      <div
        id="services"
        className="h-full justify-center items-center w-full mt-10 md:mb-20 "
      >
        <span className="text-black justify-center font-bold md:text-5xl text-4xl items-center flex">
          Services
        </span>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center md:justify-evenly  justify-center group space-y-10">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="child mt-5 border-red bg-black border-y-[5px] p-3 hover:border-none rounded-2xl md:w-[300px] w-[320px]  md:h-[300px] flex flex-col"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={service.image}
                    alt={`${service.title} Image`}
                    className="w-[150px] h-[150px] mt-[10px] rounded-full object-cover"
                  />
                </div>
                <h4 className="text-center text-white font-bold text-[17px]">
                  {service.title}
                </h4>
                <p className="text-center text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div
        id="testimonial"
        className="w-full h-[35rem] mb-20 bg-black flex flex-col p-5 md:p-0 justify-center items-center relative"
      >
        <span className="text-white font-bold text-5xl items-center py-10 text-center absolute top-0">
          Testimonial
        </span>
        <div className="w-full max-w-4xl mx-auto flex justify-center items-center text-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-700 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              } flex flex-col items-center`}
              style={{ width: "100%" }} // Keep full width to prevent shifting
            >
              <FaQuoteLeft className="text-[50px] text-red mb-4" />
              <span className="text-center ">
                <p className="text-2xl italic font-medium text-white">
                  {testimonial.quote}
                </p>
              </span>

              <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src={testimonial.img}
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-white">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                    {testimonial.name}
                  </cite>
                  <cite className="pl-3 text-sm text-red">
                    {testimonial.title}
                  </cite>
                </div>
              </figcaption>
            </div>
          ))}

          <div className="absolute bottom-10 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-white" : "bg-red"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* contact form */}

      <div id="contact" className="flex flex-col md:flex-row h-screen mb-20">
        {/* Left side - Contact Information */}
        <div className="md:w-1/2 bg-[url('/images/contact1.jpg')] relative bg-fixed bg-cover  h-screen text-white p-8 flex flex-col justify-center">
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>

          <h2 className="relative md:text-5xl text-4xl font-bold mb-6 z-10">
            Contact Information
          </h2>
          <div className="relative space-y-4 z-10">
            <div className="flex items-center">
              <MapPin className="mr-4 text-red" />
              <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-red" />
              <p>+1 800 1236879</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-red" />
              <p>contact@example.com</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="md:w-1/2 bg-white  p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Send Us A Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray focus:border-red focus:border-2 rounded transition-all duration-300"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray focus:border-red focus:border-2 rounded transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="+1 800 000000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray focus:border-red focus:border-2 rounded transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Write us a message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray focus:border-red focus:border-2 rounded h-32 transition-all duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red text-white py-2 px-4 rounded hover:bg-black transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Top scroll */}
      <ScrollToTopButton />
    </>
  );
}
