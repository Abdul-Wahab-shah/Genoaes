"use client";

import React, { useState } from "react";

export default function Component() {
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
      { name: "Java", logo: "/placeholder.svg?height=48&width=48" },
      { name: "LAMP", logo: "/placeholder.svg?height=48&width=48" },
      { name: "LEMP", logo: "/placeholder.svg?height=48&width=48" },
      { name: "MEAN", logo: "/placeholder.svg?height=48&width=48" },
      { name: "MERN", logo: "/placeholder.svg?height=48&width=48" },
      { name: "MEVN", logo: "/placeholder.svg?height=48&width=48" },
    ],
    "Front End": [
      { name: "React", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Vue", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Angular", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Svelte", logo: "/placeholder.svg?height=48&width=48" },
    ],
    "Back End": [
      { name: "Node.js", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Python", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Ruby", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Go", logo: "/placeholder.svg?height=48&width=48" },
    ],
    Mobile: [
      { name: "React Native", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Flutter", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Swift", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Kotlin", logo: "/placeholder.svg?height=48&width=48" },
    ],
    Blockchain: [
      { name: "Ethereum", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Solidity", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Hyperledger", logo: "/placeholder.svg?height=48&width=48" },
    ],
    "DevOps & ML": [
      { name: "Docker", logo: "/placeholder.svg?height=48&width=48" },
      { name: "Kubernetes", logo: "/placeholder.svg?height=48&width=48" },
      { name: "TensorFlow", logo: "/placeholder.svg?height=48&width=48" },
      { name: "PyTorch", logo: "/placeholder.svg?height=48&width=48" },
    ],
  };

  return (
    <div className="text-center p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Technologies</h2>
      <p className="mt-2 text-gray-600 mb-8">
        Our comprehensive range of expertise empowers businesses to seize new
        opportunities and achieve remarkable results.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold rounded-full transition-colors duration-300 ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {technologies[activeTab]?.map((tech) => (
          <div key={tech.name} className="text-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-12 w-12 mx-auto mb-2"
            />
            <p className="text-sm text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
