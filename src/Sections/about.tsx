import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row h-full p-5 items-center"
    >
      <div className="flex-1 p-5">
        <h2 className="text-3xl font-bold pb-5">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Over the past transformative 8 years, our journey in tech training
          alongside the vibrant tapestry of our community has unveiled a
          powerful truth - our community-based model is universally applicable.
          Drawing from the wealth of knowledge cultivated at Adaleg-IT, we are
          excited to extend our insights to The Community Tech. Our commitment
          is to equip individuals with the essential skills, know-how, and
          cutting-edge tools in the dynamic realm of technology. Join us on a
          transformative journey where academic experiences seamlessly evolve
          into lucrative career opportunities, shaping a future where knowledge
          becomes a powerful gateway to success.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <div className="relative w-[22rem] h-[19rem] rounded-lg p-px bg-gradient-to-r from-white to-[#0c0d0d]">
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg z-20 animate-dot" />
          <div className="z-10 w-full h-full rounded-lg border border-[#202222] bg-gradient-to-r from-[#444444] to-[#0c0d0d] flex items-center justify-center flex-col text-white relative">
            <div className="absolute w-[220px] h-[45px] rounded-full bg-[#c7c7c7] opacity-40 shadow-lg blur-md transform rotate-[40deg] top-0 left-0" />
            {/* <div className="font-bold text-[4rem] bg-gradient-to-r from-black to-white bg-clip-text text-transparent">
                750k
              </div> */}
            <div>
              <img
                src="/images/aboutpic.jpg"
                alt=""
                className="  object-cover "
              />
            </div>
            {/* <div>Views</div> */}
            <div className="absolute w-full h-0.5 bg-red top-[10%] " />
            <div className="absolute w-0.5 h-full bg-red left-[10%] " />
            <div className="absolute w-full h-0.5 bg-red bottom-[10%]" />
            <div className="absolute w-0.5 h-full bg-red right-[10%]" />
          </div>

          <style jsx>{`
            @keyframes moveDot {
              0%,
              100% {
                top: 10%;
                right: 10%;
              }
              25% {
                top: 10%;
                right: calc(100% - 35px);
              }
              50% {
                top: calc(100% - 30px);
                right: calc(100% - 35px);
              }
              75% {
                top: calc(100% - 30px);
                right: 10%;
              }
            }
            .animate-dot {
              animation: moveDot 6s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default About;
