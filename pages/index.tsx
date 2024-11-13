"use client";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Portfolio from "../src/components/portfolio";
import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { X } from "lucide-react";
import Typed from "typed.js";
import { FaQuoteLeft, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import { serviceData } from "../serviceData";
import { testimonials } from "../testimonials";
import ScrollToTopButton from "../src/components/Buttons/scrollToTop";
import Team from "../src/components/team";

export default function Home() {
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

  // hero section
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Web Development",
          "App Development",
          "Blockchain Development",
          "SaaS Development",
          "DevOps Development",
          "Cloud Security",
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  // service section
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setExpandedService(index);
  };

  const handleCloseExpanded = () => {
    setExpandedService(null);
  };

  // contact
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setSubmissionMessage(
      "Thank you for your message. We will get back to you soon!"
    );
    // Reset form fields
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    // Clear the message after 5 seconds
    setTimeout(() => setSubmissionMessage(""), 5000);
  };

  // technologies
  const [activeTab, setActiveTab] = useState("Full Stack");

  const tabs = [
    "Full Stack",
    "Front End",
    "Back End",
    "Mobile",
    "Blockchain",
    "DevOps & ML",
  ];
  const technologies = {
    "Full Stack": [
      { name: "Java", logo: "/images/TechnologiesIcons/JAVA-1.webp" },
      { name: "LAMP", logo: "/images/TechnologiesIcons/LAMP.webp" },
      { name: "LEMP", logo: "/images/TechnologiesIcons/LEMP.webp" },
      { name: "MEAN", logo: "/images/TechnologiesIcons/MEAN.webp" },
      { name: "MERN", logo: "/images/TechnologiesIcons/MERN.webp" },
      { name: "MEVN", logo: "/images/TechnologiesIcons/MEVN.webp" },
    ],
    "Front End": [
      { name: "HTML5", logo: "/images/TechnologiesIcons/logof1.png" },
      {
        name: "CSS3",
        logo: "/images/TechnologiesIcons/logof2.png",
      },
      {
        name: "JavaScript",
        logo: "/images/TechnologiesIcons/logof3.png",
      },
      {
        name: "Angular JS",
        logo: "/images/TechnologiesIcons/logof4.png",
      },
      { name: "Vue JS", logo: "/images/TechnologiesIcons/logof5.png" },
      { name: "React", logo: "/images/TechnologiesIcons/logof6.png" },
    ],
    "Back End": [
      {
        name: "NODE JS",
        logo: "/images/TechnologiesIcons/NODE-JS.webp",
      },
      { name: "PYTHON", logo: "/images/TechnologiesIcons/PYTHON.webp" },
      { name: "JAVA", logo: "/images/TechnologiesIcons/JAVAs.webp" },
      { name: "PHP", logo: "/images/TechnologiesIcons/PHPs.webp" },
      {
        name: "LARAVEL",
        logo: "/images/TechnologiesIcons/LARAVEL.webp",
      },
      {
        name: "MONGODB",
        logo: "/images/TechnologiesIcons/MONGODB.webp",
      },
    ],
    Mobile: [
      {
        name: "IOS",
        logo: "/images/TechnologiesIcons/IOS.webp",
      },
      {
        name: "ANDRIODS",
        logo: "/images/TechnologiesIcons/ANDROIDs.webp",
      },
      {
        name: "FLUTTER",
        logo: "/images/TechnologiesIcons/FLUTTERss.webp",
      },
      { name: "SWIFT", logo: "/images/TechnologiesIcons/SWIFT.webp" },
      { name: "KOTLIN", logo: "/images/TechnologiesIcons/KOTLIN.webp" },
      {
        name: "REACT-NATIVE",
        logo: "/images/TechnologiesIcons/REACT-NATIVE.webp",
      },
    ],
    Blockchain: [
      { name: "TEZOS", logo: "/images/TechnologiesIcons/TEZOS.webp" },
      {
        name: "CARDANO",
        logo: "/images/TechnologiesIcons/CARDANO.webp",
      },
      {
        name: "POLKADOT",
        logo: "/images/TechnologiesIcons/POLKADOT.webp",
      },
      {
        name: "ETHEREUM",
        logo: "/images/TechnologiesIcons/ETHEREUM.webp",
      },
    ],
    "DevOps & ML": [
      { name: "AWS", logo: "/images/TechnologiesIcons/AWS.webp" },
      {
        name: "AZURE",
        logo: "/images/TechnologiesIcons/AZURE.webp",
      },
      {
        name: "DOCKER",
        logo: "/images/TechnologiesIcons/DOCKER.webp",
      },
      { name: "GCP", logo: "/images/TechnologiesIcons/GCP.webp" },
      {
        name: "KUBERNETTES",
        logo: "/images/TechnologiesIcons/KUBERNETTES.webp",
      },
    ],
  };

  return (
    <div className="scroll-container">
      <Header />

      {/* Hero section */}

      <div
        id="home"
        className=" min-h-screen m-0 flex items-center justify-center md:-mt-[7rem]  -mt-[11rem] text-center  relative "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1,
          }}
        >
          <source src="/heroSectionBackgroundVideo.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support the video */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-3xl px-5 ">
            <span
              ref={el}
              className="text-3xl md:text-6xl animation font-bold text-white"
            ></span>
            <p className="py-5 text-[18px]  text-white">
              Unlock the future of your business with cutting-edge digital
              solutions,custom-crafted to fuel your growth. From rapid
              development to flawless integration, our expertise ensures secure,
              scalable, and high-performance results that keep you
              ahead of the curve.
            </p>
            <button className="px-4 py-3 text-[18px] rounded-md text-white font-medium bg-red hover:bg-white hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* About section */}
      <div
        id="about"
        className="flex flex-col lg:flex-row  h-full p-8 pt-10  items-center md:py-10"
      >
        <div className="flex-1 ">
          <span className="text-4xl md:text-5xl font-bold text-white font-serif  ">
            About Us
          </span>
          <p className="text-lg text-gray-700 md:my-4 text-white mb-10  mt-3 md:mt-0  leading-9 word-spacing  tracking-wider ">
            <b>Octal Labs</b> , founded in 2020, is a dedicated team of
            certified experts delivering tailored IT solutions. We specialize in
            web and mobile app development, DevOps, Blockchain, Cloud Security,
            and .NET development. Our mission is to bridge businesses with the
            latest technology, building secure, scalable solutions that drive
            growth and innovation. Partner with us to transform your vision into
            a digital reality. Think of us as the digital bridge-builders,
            seamlessly connecting your business to the latest in technology.
            From developing responsive web platforms to engineering secure
            mobile applications and building blockchain frameworks that ensure
            transparency and security, we create solutions that keep you at the
            forefront of your industry.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mb-10 md:mb-0 ">
          <div>
            <img src="/images/about2.png" alt="" className="  object-cover " />
          </div>
        </div>
      </div>

      {/* porjects */}

      <div
        id="projects"
        className="h-[40%] justify-center items-center w-full bg-black py-10"
      >
        <span className="text-white justify-center font-bold text-4xl md:text-5xl items-center flex pb-10 ">
          Projects
        </span>
        <Portfolio />
      </div>

      {/* Services */}

      <div
        id="services"
        className="min-h-screen w-full mt-10 md:mb-20 px-4 py-10"
      >
        <h2 className="text-white text-center font-bold md:text-5xl text-4xl mb-10">
          Services
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out ${
                expandedService === null
                  ? " shadow-lg   shadow-white p-3 rounded-2xl w-full md:w-[300px] h-auto md:h-[300px] flex flex-col cursor-pointer"
                  : expandedService === index
                  ? "fixed  w-full m-auto h-full my  inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-8"
                  : "hidden"
              }`}
              onClick={() =>
                expandedService === null && handleServiceClick(index)
              }
            >
              {expandedService === index && (
                <button
                  onClick={handleCloseExpanded}
                  className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="bg-black" />
                </button>
              )}
              <div className="flex justify-center items-center mb-4">
                <img
                  src={service.image}
                  alt={`${service.title} Image`}
                  className={`rounded-full object-cover ${
                    expandedService === index
                      ? "w-[200px] h-[200px]"
                      : "w-[150px] h-[150px]"
                  }`}
                />
              </div>
              <h3
                className={`text-center text-white font-bold ${
                  expandedService === index ? "text-3xl mb-4" : "text-[17px]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-center text-white ${
                  expandedService === index ? "text-xl max-w-2xl" : ""
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* testimonial section */}
      <div
        id="testimonial"
        className="w-full h-[35rem] mb-20  flex flex-col p-5 md:p-0 justify-center items-center relative"
      >
        <span className="text-white font-bold md:text-5xl  text-4xl items-center py-10 text-center absolute top-0">
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
                <p className="text-2xl px-3 md:px-0 italic font-medium text-white">
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

      {/* technologies */}

      <div className="text-center justify-center p-6 max-w-6xl mx-auto mb-10 md:mb-20">
        <h2 className="md:text-5xl text-4xl font-bold mb-4 text-white">
          Technologies
        </h2>
        <p className="mt-2  mb-8 text-white">
          Our comprehensive range of expertise empowers businesses to seize new
          opportunities and achieve remarkable results.
        </p>

        <div className="flex flex-wrap bg-red  rounded-full justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-6 -my-1  font-semibold rounded-full  ${
                activeTab === tab ? "bg-white  text-black" : " text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ">
          {technologies[activeTab]?.map((tech) => (
            <div key={tech.name} className="text-center ">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-[100px] w-[100px] mx-auto mb-2"
              />
              <p className="text-sm text-white">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* contact form */}

      <div
        id="contact"
        className="flex flex-col md:flex-row min-h-screen mb-20"
      >
        {/* Left side - Contact Information */}
        <div className="md:w-1/2 bg-[url('/images/contact1.jpg')] relative bg-fixed bg-cover bg-left-top min-h-screen text-white p-8  flex flex-col justify-center">
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-90"></div>

          <h2 className="relative md:text-5xl text-4xl font-bold mb-6 z-10">
            Contact Information
          </h2>
          <div className="relative space-y-4 z-10">
            <div className="flex items-center">
              <MapPin className="mr-4 text-red" />
              <p>
                66-Z Commercial Area, 2nd Floor, Phase 3, DHA, Lahore, Pakistan.
                Punjab 54000 Z, Lahore, 54000
              </p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-red" />
              <p> +92 (321) 4930750</p>
            </div>
            <div className="flex items-center">
              <FaWhatsapp size={24} className="mr-4 text-red" />
              <p>+1 (415) 799-7440</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-red" />
              <p>wahab@octallabs.io</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="p-2  border text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-2 outline-none transition-all duration-300 ease-in-out"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="p-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-2 outline-none transition-all duration-300 ease-in-out"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-2 outline-none transition-all duration-300 ease-in-out"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:border-2 outline-none transition-all duration-300 ease-in-out"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border text-white border-gray rounded-md  focus:border-red focus:border-1 outline-none h-32 transition-all duration-300 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red text-white py-2 font-medium rounded hover:bg-white hover:text-black transition duration-300 w-full"
            >
              SUBMIT
            </button>
          </form>
          {submissionMessage && (
            <div
              className="mt-4 p-2 bg-green-100 text-green-700 rounded-md"
              role="alert"
            >
              {submissionMessage}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>

      {/* Top scroll */}
      <ScrollToTopButton />
    </div>
  );
}
