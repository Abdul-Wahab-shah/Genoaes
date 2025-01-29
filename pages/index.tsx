import { useState } from "react";
import Link from "next/link";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MainNav } from "../src/components/main-nav";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const benefits = [
    {
      number: "01",
      title:
        "Personalized guidance from the best startup experts for life, even if you don't launch",
      details: [
        "1:1 meetings at any time with top-tier founders, experts and investors",
        "A personal mentor will follow you throughout this one-year track",
        "Daily workshops provide industry tips and adapt to your full-time startup commitments",
      ],
    },
    {
      number: "02",
      title:
        "Learn by combining theory and practice by building in the most stimulating US & EU cities",
      details: [
        "From Meta, Tesla and GitHub HQ to startups worth their market cap in pizzas",
        "Network and work with EU and US-minded talent, companies and investors",
        "Learn from how to finance to founders from top leading universities",
      ],
    },
    {
      number: "03",
      title: "75% of our students closed a round within 6 months",
      details: [
        "The baseline in our network is having over $100 bln in assets",
        "7.5 bln founders who are our mentors raised over",
        "Graduate with your pitch in front of over 100 investors instead of a thesis",
      ],
    },
  ];
  const testimonials = [
    {
      quote:
        "I wasn't considering pursuing a master's degree but this course is practical and opens incredible doors. It certainly is the experience that has improved me the most in my life.",
      name: "Lea Delic",
      role: "Student founder 2023",
      image: "/testimonial 1.png",
    },
    {
      quote:
        "The other students are amazing people, and mentors are incredible. They are at a global level, but they take the time to be with you and are ready to support you 24/7 in beautiful day.",
      name: "Chalermchon Puapolthep",
      role: "Student founder 2023",
      image: "/testimonial 2.png",
    },
    {
      quote:
        "I wasn't considering pursuing a master's degree but this course is practical and opens incredible doors. It certainly is the experience that has improved me the most in my life.",
      name: "Gabriele Rossi",
      role: "Student founder 2023",
      image: "/testimonial 1.png",
    },
    {
      quote:
        "The other students are amazing people, and mentors are incredible. They are at a global level, but they take the time to be with you and are ready to support you 24/7 in beautiful day.",
      name: "Chalermchon Puapolthep",
      role: "Student founder 2023",
      image: "/testimonial 2.png",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Navigation */}
        <MainNav />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-white max-w-4xl leading-tight mb-6">
            LAUNCH YOUR STARTUP
            <br />
            WHILE EARNING A MASTER'S DEGREE
          </h1>
          <p className="text-lg md:text-lg text-white font-light mb-8 max-w-4xl">
            Go from zero to fundraising with personalized guidance and a strong
            network while obtaining a Master's degree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="bg-white hover:bg-black hover:text-white text-gray-900 px-6 py-3  font-medium transition-colors">
              DISCOVER OUR DIFFERENCE
            </button>
            <button className="bg-green hover:bg-black text-white px-6 py-3  font-medium inline-flex items-center transition-colors">
              LEARN MORE ABOUT OUR PROGRAM
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="relative z-20 px-4 lg:mx-20 -mt-16 bg-white shadow-lg">
        <div className="px-4 py-12 ">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mb-12 text-center">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                $320K
              </h2>
              <p className="text-sm text-gray-600">
                average raised by our students
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                75%
              </h2>
              <p className="text-sm text-gray-600">
                of our students closed a funding round
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                9.8/10
              </h2>
              <p className="text-sm text-gray-600">
                is our students' likelihood of recommending us
              </p>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-12">
            <p className="text-green mb-6">
              Joined by experts with experience in:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-3 lg:ml-[350px] lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                { src: "/Button container.png", alt: "Sequoia" },
                { src: "/apple.png", alt: "Apple" },
                { src: "/Button.png", alt: "Microsoft" },
                { src: "/Vertical container.png", alt: "Tesla" },
                { src: "/Button google.png", alt: "Meta" },
                { src: "/Pagination.png", alt: "Google" },
              ].map((image) => (
                <Image
                  key={image.alt}
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={100}
                  height={40}
                  className="h-8 w-auto  object-contain"
                />
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="mb-12">
            <h3 className="text-lg text-green mb-6">
              What is Genoa Entrepreneurship School?
            </h3>
            <div className="flex flex-col lg:flex-row sm:gap-5 gap-8 mb-12">
              <h2 className="text-2xl  md:text-4xl font-light lg:w-2/5">
                BRIDGING THE <br className="hidden" /> ACADEMIA AND <br />{" "}
                STARTUP WORLDS
              </h2>
              <div className="lg:w-3/5">
                <p className="text-gray-600 lg:text-left">
                  We are a joint initiative between the University of Genoa,
                  companies, and institutions. We strongly believe that the best
                  time to launch a startup is during university, as Mark
                  Zuckerberg, Bill Gates, Elon Musk, and others have done. Our
                  goal is to empower entrepreneurs through dynamic learning
                  experiences with industry experts, companies and the
                  University of Georgetown.
                </p>
              </div>
            </div>

            {/* Academic Partners */}
            <div className="space-y-4">
              <h4 className="font-medium">Academic partners</h4>
              <div className="grid md:grid-cols-2 sm:flex sm:items-start sm:justify-start  gap-8">
                <div className="flex items-center sm:items-start gap-4">
                  <Image
                    src="/Button1.png"
                    alt="Academic Partner 1"
                    width={120}
                    height={40}
                    className="object-contain "
                  />
                  <div className="flex flex-col">
                    <span className="text-orange text-xs font-light">
                      Bloomberg MBA Ranking
                    </span>
                    <span className="text-sm text-black">
                      #1 World's most innovative & creative graduates
                    </span>
                  </div>
                </div>
                <div className="flex items-center sm:items-start gap-4">
                  <Image
                    src="/Vector.png"
                    alt="Academic Partner 2"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="text-orange text-xs font-light">
                      Censis ranking of Italian universities
                    </span>
                    <span className="text-xs text-black">
                      #1 Engineering in Italy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-right">
            <button className="inline-flex items-center border border-black px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors ">
              READ MORE ABOUT US
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* meet our professor */}

        <div className="max-w-7xl mx-auto py-12 space-y-8">
          {/* Professor Video Section */}
          <div className="md:flex gap-8 items-start bg-[#fdfbf7] w-full p-4 ">
            <div className=" md:hidden lg:hidden md:w-[60%] ">
              <video
                // poster="/professor.png"
                className="w-full h-full object-cover"
                src="/background-video.mp4"
                muted
                playsInline
              />
            </div>

            <div className="space-y-4 md:w-[40%]">
              <h2 className="sm:pt-5 text-3xl font-medium md:pb-[150px]">
                Meet your professor
              </h2>
              <blockquote className="border-l-2 border-green space-y-3 pl-4 text-white ">
                <p className="text-gray-600 leading-relaxed">
                  At Georgetown, we believe in entrepreneurship as a force for
                  good. Our partnership with Genoa Entrepreneurship School
                  aligns with our values perfectly, supporting emerging
                  entrepreneurs worldwide.
                </p>
                <div className="flex items-center gap-2">
                  <img src="/Vector.png" alt="" />
                  <div className="flex flex-col">
                    <span className="font-medium text-black">Steve Gilad</span>
                    <span className="text-gray-500 text-sm">
                      Professor at Georgetown University
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className=" overflow-hidden md:w-[60%] ">
              <video
                // poster="/professor.png"
                className="w-full h-full object-cover"
                src="/background-video.mp4"
                muted
                playsInline
              />
            </div>
          </div>

          {/* What We Offer Section */}
          <div>
            <h2 className="text-xl px-4 font-medium text-green mb-6">
              What do we offer?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 bg-[#1a472a]  overflow-hidden">
              <Image
                src="/student.jpeg"
                alt="Students at Capitol"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="p-8 space-y-2 ">
                <h3 className="text-3xl md:text-4xl font-light text-green">
                  Master in
                  <br />
                  International
                  <br />
                  Business Creation
                </h3>
                <div className=" text-white pt-2 gap-x-10 flex text-md">
                  <div className="flex gap-x-2">
                    <span className="text-md font-light text-[#FCFAF2]">
                      Duration:
                    </span>
                    <p>8 months</p>
                  </div>
                  <div className="flex gap-x-2">
                    <span className="text-md font-light text-[#FCFAF2]">
                      Life stage:
                    </span>
                    <p>From no idea to pre seed</p>
                  </div>
                </div>
                <div className="flex gap-x-2 text-md md:-mt-[5px] md:pb-[150px]">
                  <span className="  text-md font-light text-[#FCFAF2]">
                    Locations:
                  </span>
                  <p className="text-white">
                    Washington D.C., New York, San Francisco, Genoa
                  </p>
                </div>

                <blockquote className="border-l-2 border-green pl-4 text-white pb-5">
                  <p className="italic mb-2">
                    "In a word, this course is life-changing. Experiencing
                    Silicon Valley in such depth is something I couldn't even
                    imagine."
                  </p>
                  <footer className="text-sm text-white/80">
                    Juan Lucas Van Dam, Student founder 2023
                  </footer>
                </blockquote>
                <button className="items-center justify-center float-right flex gap-2 bg-green hover:bg-black text-white px-6 py-3 transition-colors">
                  EXPLORE THE PROGRAM
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* benefits section */}

        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-green-600 font-medium mb-4">
            Why Genoa Entrepreneurship School?
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl max-w-3xl mx-auto">
            <span className="text-green-600">Learn and grow</span> with
            personalized expert guidance in the world's most stimulating cities
            while studying
          </p>
        </div>

        {/* Benefits Grid */}

        <div className="grid md:grid-cols-3 gap-8 mb-20 px-4 ">
          {benefits.map((benefit) => (
            <div key={benefit.number} className="space-y-4">
              <div className="text-green font-bold text-lg">
                {benefit.number}
              </div>
              <h3 className="text-xl font-medium leading-tight min-h-[4rem]">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.details.map((detail, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* our network */}
        <div className="w-full py-16">
          <h2 className="text-xl px-4 font-medium">Who is in our network?</h2>
          <div className="flex relative h-screen">
            {/* Left section with image (70%) */}
            <div className="w-[70%] h-full relative overflow-hidden">
              <Image
                src="/our network.png"
                alt="Network expert grid"
                fill
                className="object-cover -rotate-[5deg] scale-110"
              />
            </div>

            {/* Right section with black background (30%) */}
            <div className="w-[30%] h-full   bg-black" />

            {/* Black overlay that extends from right to left */}
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/95 to-black/30" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex">
              {/* Empty div for left space (70%) */}
              <div className="w-[70%]" />

              {/* Content container aligned to right (30%) */}
              <div className="w-[30%] px-8 py-12 flex  flex-col justify-between">
                <div className="space-y-8 ">
                  <div>
                    <p className="text-3xl text-white leading-tight ">
                      Joined by experts who{" "}
                      <span className="text-[#4CAF50]">
                        raised over $7.5 billion
                      </span>{" "}
                      and{" "}
                      <span className="text-[#4CAF50]">
                        manage $100 billion
                      </span>{" "}
                      in assets combined
                    </p>
                  </div>
                  <p className="text-gray-300 text-lg">
                    World experts dedicate their time to help our students grow.
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 transition-colors border border-white/20">
                    DISCOVER THE NETWORK
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 text-sm">
                    Where our mentors worked in:
                  </p>
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {[
                      { src: "/google.png", alt: "Google" },
                      { src: "/apple1.png", alt: "Apple" },
                      { src: "/tesla.png", alt: "Tesla" },
                      // { src: "/microsoft.png", alt: "Microsoft" },
                      // { src: "/oracle.png", alt: "Oracle" },
                    ].map((image) => (
                      <Image
                        key={image.alt}
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={100}
                        height={40}
                        className="h-6 w-auto object-contain brightness-0 invert"
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-8 items-center">
                    {[
                      { src: "/sequoia.png", alt: "Sequoia" },
                      { src: "/earlybird.png", alt: "Earlybird" },
                      { src: "/molten.png", alt: "Molten" },
                      // { src: "/worldfund.png", alt: "Worldfund" },
                    ].map((image) => (
                      <Image
                        key={image.alt}
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={100}
                        height={40}
                        className="h-6 w-auto object-contain brightness-0 invert"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonials section */}
        <section className="py-12 ">
          <div className="container">
            <div className="grid grid-cols-3">
              {/* Title and Arrow Section */}
              <div className="flex flex-col justify-start space-y-4 pl-4">
                <h2 className="text-4xl font-light uppercase leading-tight">
                  Understand the experience directly from our students
                </h2>
                <button
                  onClick={nextSlide}
                  className=" flex p-2   self-end"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-14 h-14 font-light text-green" />
                </button>
              </div>

              {/* Testimonials Slider */}
              <div className="col-span-2 relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-3"
                  style={{
                    transform: `translateX(-${currentIndex * 50}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-[49%] flex-shrink-0">
                      <div className="bg-[#E8F3F0] p-4  space-y-4 h-full">
                        <p className="text-lg leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black  hover:text-black/80 flex items-center gap-1 mt-2"
                        >
                          <FaLinkedinIn />
                        </a>
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="relative h-48 mt-4 overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* second last section  */}
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/Rectangle 34529.png"
              alt="Students collaborating on a project"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="bg-[#193E2C] p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-green text-xl">
                Pronto a iniziare il tuo viaggio?
              </h2>
              <p className="text-white text-2xl font-light leading-relaxed">
                Genoa ES può aiutarti a raggiungere i tuoi obiettivi accademici,
                imprenditoriali e professionali.
              </p>
            </div>

            <button className="flex bg-green hover:bg-black text-white px-6 py-3 self-end  items-end gap-2 w-fit transition-colors">
              SCOPRI IL NOSTRO PROGRAMMA
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* footer */}
        <footer className="border-t  py-12">
          <div className=" px-4">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
              {/* Left Column - Logo and Address */}
              <div className="space-y-4">
                <Link href="/" className="text-[#4CAF50] font-bold text-xl">
                  GENOAES
                </Link>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Schedaya Associazione culturale e di promozione sociale</p>
                  <p>Piazza Santa Maria in Via Lata 15, 16128 Genova, Italy</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Mail</p>
                  <a
                    href="mailto:admissions@genoaes.com"
                    className="text-[#4CAF50] hover:underline"
                  >
                    admissions@genoaes.com
                  </a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#4CAF50] transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagramSquare className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-[#4CAF50] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Center Column - Navigation */}
              <div className="space-y-4 ">
                <div>Naviga</div>
              </div>
              <div className="space-y-4 ">
                <div>Chi siamo</div>
                <div>Carriera</div>
              </div>

              <div className="space-y-4 ">
                <div>Il Master</div>
              </div>
              <div className="space-y-4 ">
                <div>Il nostro network</div>
              </div>
              <div className="space-y-4 ">
                <div>Perché scegliere noi?</div>
              </div>

              {/* Right Column - Copyright */}
              <div className="text-right  text-gray-400">2024 ©</div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
