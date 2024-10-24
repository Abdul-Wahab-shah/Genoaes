import React from "react";

// Define the props interface
interface CardProps {
  imageUrl: string;
  altText: string;
  overlayText: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, altText, overlayText }) => {
  return (
    <div className="relative w-[250px] h-[350px] rounded-md overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={altText}
      />

      {/* Overlay Text */}
      <div className="absolute bottom-0 w-full h-[50px] bg-black flex items-center justify-center">
        <span className="text-xl text-white">{overlayText}</span>
      </div>
    </div>
  );
};

export default Card;
