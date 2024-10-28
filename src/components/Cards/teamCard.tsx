import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function TeamCard({ name, imageUrl, jobTitle, description, socialLinks }) {
  return (
    <div className="w-full max-w-sm bg-black   pt-5 px-5 rounded-lg shadow  ">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imageUrl}
          alt={`${name} image`}
        />
        <h5 className="mb-1 text-xl font-medium text-white ">{name}</h5>
        <span className="text-sm text-white ">{jobTitle}</span>
        <p className="text-sm text-white flex text-center pt-4 justify-center ">
          {description}
        </p>
        <div className="flex space-x-3 pt-10">
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          )}
          {socialLinks?.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          )}
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
