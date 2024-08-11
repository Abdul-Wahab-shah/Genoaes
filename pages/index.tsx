"use client";
import { useRouter } from "next/router";
import Header from "../src/components/Header";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />

      <div className="  min-h-screen bg-primary flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white">
          Coming Soon!
        </h1>
        <p className="py-4 md:py-6 text-white">
          Our site is currently undergoing enhancements.{" "}
          <br className="hidden md:block" />
          Please check back soon for updates.
        </p>
        <button
          onClick={() => router.push("/contact-form")}
          className="py-3 md:py-6 flex items-center gap-1 text-blue-600"
        >
          Get Started
          <FaArrowUpRightFromSquare size={13} />
        </button>
      </div>
    </>
  );
}
