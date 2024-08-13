"use client";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className="w-full flex h-screen flex-col md:flex-row bg-primary px-4 md:px-0 pt-6 md:pt-0">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Coming Soon!
          </h1>
          <p className="py-4 md:py-6 text-white">
            Our website is currently undergoing enhancements{" "}
            <br className="hidden md:block" />
            to serve you better. Please visit us again soon
            <br className="hidden md:block" /> for the latest updates.
          </p>
          <button
            onClick={() => router.push("/contact-form")}
            className="py-3 md:py-6 flex items-center gap-1 text-blue-600"
          >
            Get Started
            <FaArrowUpRightFromSquare size={13} />
          </button>
        </div>

        <div className="w-full md:w-[50%] flex justify-center items-center md:mb-[10%]  ">
          <img
            className="max-w-full h-auto"
            src="/images/Website Building of Shopping Sale (1).gif"
            alt="Website Under Construction"
          />
        </div>
      </div>
    </>
  );
}
