import React from "react";

const EventCard: React.FC = () => {
  return (
    <div className="relative w-full md:w-[25%] h-[40%]  rounded-xl flex items-center justify-center overflow-hidden perspective-1000 shadow-[0_0_0_5px_#ffffff80] transition-transform duration-[0.6s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-lg group">
      {/* Image replacing SVG */}
      <img
        src="/images/event.jpg"
        alt="Placeholder"
        className="w-full transition-opacity duration-[0.6s] cursor-pointer ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:opacity-0"
      />

      <div className="absolute cursor-pointer inset-0 p-5 bg-primary opacity-0 rotate-x-[-90deg] origin-bottom transition-transform duration-[0.1s] ease-[cubic-bezier(0.1,0.885,0.32,1.275)]  group-hover:opacity-100 group-hover:rotate-x-0">
        <p className="text-xl font-bold text-white cursor-pointer">
          Card Title
        </p>
        <p className="mt-2 text-sm text-white leading-tight cursor-pointer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default EventCard;
