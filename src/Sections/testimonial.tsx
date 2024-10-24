import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: (
      <span>
        "Flowbite is just awesome. It contains tons of predesigned components
        and <br />
        pages starting from login screen to complex dashboard. Perfect choice
        for <br /> your next SaaS application."
      </span>
    ),

    name: "Michael Gough",
    title: "CEO at Google",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote: (
      <span>
        "Criticism, like rain, should be gentle enough to nourish a <br />
        man's growth without destroying his roots"
      </span>
    ),

    name: "Gough Michael",
    title: "CEO at Google",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote: (
      <span>
        {" "}
        "Fast offers a great set of tools for building modern UI <br />{" "}
        components. It's been a great asset for our development workflow.",
      </span>
    ),
    name: "John Doe",
    title: "CTO at Microsoft",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  // Add more testimonials here if needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
        setFade(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 500);
  };

  return (
    <div className="w-full h-[35rem] my-[50px] bg-black flex justify-center items-center relative">
      <div className="w-full max-w-4xl mx-auto flex justify-center items-center text-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            } flex flex-col items-center`}
            style={{ width: "100%" }} // Keep full width to prevent shifting
          >
            <FaQuoteLeft className="text-[50px] text-red mb-4" />
            <blockquote className="text-center">
              <p className="text-2xl italic font-medium text-white">
                {testimonial.quote}
              </p>
            </blockquote>

            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
              <img
                className="w-6 h-6 rounded-full"
                src={testimonial.img}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-white">
                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                  {testimonial.name}
                </cite>
                <cite className="pl-3 text-sm text-red">
                  {testimonial.title}
                </cite>
              </div>
            </figcaption>
          </div>
        ))}

        <div className="absolute bottom-10 flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
