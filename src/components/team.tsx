import React, { useEffect } from "react";
import TeamCard from "./Cards/teamCard";

const teamComponent = () => {
  useEffect(() => {
    // Load Materialize CSS and jQuery
    const loadScripts = () => {
      return new Promise<void>((resolve) => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js";
        jQueryScript.onload = () => {
          const materializeScript = document.createElement("script");
          materializeScript.src =
            "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
          materializeScript.onload = () => {
            resolve();
          };
          document.body.appendChild(materializeScript);
        };
        document.body.appendChild(jQueryScript);
      });
    };

    loadScripts().then(() => {
      const M = (window as any).M;
      const carousel = document.querySelectorAll(".carousel");
      M.Carousel.init(carousel, { padding: 200 });

      const autoplay = () => {
        const instance = M.Carousel.getInstance(carousel[0]);
        instance.next();
        setTimeout(autoplay, 4500);
      };
      autoplay();
    });
  }, []);

  const carouselStyles = {
    height: "400px",
    perspective: "800px",
  };

  const carouselItemStyles = {
    width: "250px",
    height: "350px",
    // boxShadow: "0 0 40px #ffff, 0 0 40px #ffff, 0 0 40px #ffff",
    animation: "animate 4s infinite alternate",
    borderRadius: "15px",
  };

  return (
    <div className="m-0 p-0 bg-black ">
      <div className="carousel" style={carouselStyles}>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <TeamCard
            name="Bonnie Green"
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            jobTitle="Visual Designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi!"
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/bonniegreen",
              twitter: "https://www.twitter.tv/bonniegreen",
              facebook: "https://www.facebook.com/bonniegreen",
            }}
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <TeamCard
            name="Bonnie Green"
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            jobTitle="Visual Designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi!"
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/bonniegreen",
              twitter: "https://www.twitter.tv/bonniegreen",
              facebook: "https://www.facebook.com/bonniegreen",
            }}
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <TeamCard
            name="Bonnie Green"
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            jobTitle="Visual Designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi!"
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/bonniegreen",
              twitter: "https://www.twitter.tv/bonniegreen",
              facebook: "https://www.facebook.com/bonniegreen",
            }}
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <TeamCard
            name="Bonnie Green"
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            jobTitle="Visual Designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi!"
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/bonniegreen",
              twitter: "https://www.twitter.tv/bonniegreen",
              facebook: "https://www.facebook.com/bonniegreen",
            }}
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <TeamCard
            name="Bonnie Green"
            imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            jobTitle="Visual Designer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, animi!"
            socialLinks={{
              linkedin: "https://www.linkedin.com/in/bonniegreen",
              twitter: "https://www.twitter.tv/bonniegreen",
              facebook: "https://www.facebook.com/bonniegreen",
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes animate {
          to {
            box-shadow: 0 0 20px #ffff, 0 0 20px #ffff, 0 0 20px #ffff;
          }
        }
      `}</style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
    </div>
  );
};

export default teamComponent;
