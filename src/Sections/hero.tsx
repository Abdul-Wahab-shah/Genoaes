import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Development",
        "Application Development",
        "Blockchain Development",
        "Saas Development",
        "Devops Development",
        "Cloud Security",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const ImagesSlider = [
    "/images/web development.png",
    "/images/mobile development.png",
    "/images/blockchain.png",
    "/images/saas.png",
    "/images/Devops.png",
    "/images/Cloud.png",
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row-reverse h-screen bg-black">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center overflow-hidden">
        <Slider
          {...sliderSettings}
          className="w-full h-full flex items-center justify-center top-[150px]"
        >
          {ImagesSlider.map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center  text-center h-full w-full"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-[400px] h-[300px] object-cover  mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center text-center">
        <span className="text-2xl md:text-5xl font-bold  text-white">
          Expertly Crafts <br className="hidden md:block  " />{" "}
          <span ref={el} className="animation text-red "></span>
        </span>
        <p className=" text-white mt-5">
          We deliver innovative digital solutions tailored to your business,
          <br className="hidden md:block" />
          ensuring efficient development and seamless integration. Our services
          <br className="hidden md:block" /> focus on secure, scalable, and
          high-performance outcomes.
        </p>
      </div>
    </div>
  );
};

export default Hero;
