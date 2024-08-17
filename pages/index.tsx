"use client";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import EventCards from "../src/components/Cards/eventCards";
import SeriesCard from "../src/components/Cards/seriesCard";
import Footer from "../src/components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />

      {/* Hero section */}
      <div className="w-full flex flex-col lg:flex-row-reverse h-screen bg-primary">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Coming Soon!
          </h1>
          <p className="py-4 md:py-6 text-white">
            Our website is currently undergoing enhancements
            <br className="hidden md:block" />
            to serve you better. Please visit us again soon
            <br className="hidden md:block" /> for the latest updates.
          </p>
          <button
            onClick={() => router.push("/contact-form")}
            className="p-2 md:pt-3 flex items-center gap-1 rounded bg-white text-black hover:bg-[#2b0089] hover:text-white"
          >
            Get Started
            <FaArrowUpRightFromSquare size={13} />
          </button>
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
          <img
            src="/images/hero-section.png"
            alt="Website Under Construction"
            className="w-full lg:w-auto"
          />
        </div>
      </div>

      {/* About section */}
      <div
        id="about"
        className="flex flex-col lg:flex-row h-full p-5 items-center"
      >
        <div className="flex-1 p-5">
          <h2 className="text-3xl font-bold pb-5">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Over the past transformative 8 years, our journey in tech training
            alongside the vibrant tapestry of our community has unveiled a
            powerful truth - our community-based model is universally
            applicable. Drawing from the wealth of knowledge cultivated at
            Adaleg-IT, we are excited to extend our insights to The Community
            Tech. Our commitment is to equip individuals with the essential
            skills, know-how, and cutting-edge tools in the dynamic realm of
            technology. Join us on a transformative journey where academic
            experiences seamlessly evolve into lucrative career opportunities,
            shaping a future where knowledge becomes a powerful gateway to
            success.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/images/about.png"
            alt="About Image"
            className="w-full lg:w-3/4"
          />
        </div>
      </div>

      {/* Events section */}
      <div id="events" className="flex flex-col mx-4 md:mx-10 mb-10">
        <h2 className="text-3xl font-bold pb-5">Events</h2>
        <div className="flex flex-col md:flex md:justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:pb-10">
          <EventCards />
          <EventCards />
          <EventCards />
          <EventCards />
        </div>
      </div>

      {/* Series section */}
      <div id="series" className="flex flex-col mx-4 md:mx-10 mb-10 ">
        <h2 className="text-3xl font-bold pb-5">Series</h2>
        <div className="flex flex-col md:flex md:justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-3 md:pb-10">
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
          <SeriesCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
