import React, { useEffect } from "react";
import Card from "../components/Cards/portfolioCard";

const CarouselComponent = () => {
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
    boxShadow: "0 0 40px #ffff, 0 0 40px #ffff, 0 0 40px #ffff",
    animation: "animate 4s infinite alternate",
    borderRadius: "15px",
  };

  return (
    <div className="m-0 p-0 bg-black ">
      <div className="carousel" style={carouselStyles}>
        <div className="carousel-item" style={carouselItemStyles}>
          {" "}
          <Card
            imageUrl="/images/project1.png"
            altText="portfolio"
            overlayText="Project 1"
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          <Card
            imageUrl="/images/project2.png"
            altText="portfolio"
            overlayText="Project 2"
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          <Card
            imageUrl="/images/project3.png"
            altText="portfolio"
            overlayText="Project 3"
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          <Card
            imageUrl="/images/project4.png"
            altText="portfolio"
            overlayText="Project 4"
          />
        </div>
        <div className="carousel-item" style={carouselItemStyles}>
          <Card
            imageUrl="/images/project5.png"
            altText="portfolio"
            overlayText="Project 5"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes animate {
          to {
            box-shadow: 0 0 50px #ffff, 0 0 50px #ffff, 0 0 50px #ffff;
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

export default CarouselComponent;
