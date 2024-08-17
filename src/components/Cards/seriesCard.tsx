import React from "react";

const SeriesCard: React.FC = () => {
  return (
    <div className="relative md:w-[312px] w-full h-[208px] bg-white flex justify-center items-center overflow-hidden rounded-xl group">
      <div className="absolute w-[120px] h-[175%] bg-gradient-to-b from-[#e745b1] to-[#1eff00] group-hover:animate-spin"></div>

      <div className="absolute inset-[3px]  rounded-xl">
        <img src="/images/event.jpg" alt="event" className="rounded-xl" />
      </div>

      {/* Text */}
      <div className="absolute inset-[3px] cursor-pointer p-5 bg-primary opacity-0 group-hover:opacity-100 rounded-xl">
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

export default SeriesCard;
