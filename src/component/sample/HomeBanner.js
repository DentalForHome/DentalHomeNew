import React from "react";

import { Slide } from "react-slideshow-image";

function HomeBanner() {
  const slideImages = [
    {
      src: "https://dentalforhome.s3.amazonaws.com/images/benyamin-bohlouli-vVKh9xeLub4-unsplash.jpg",
    },
    {
      src: "https://dentalforhome.s3.amazonaws.com/images/vivek-kumar-a-_1PPjnbUg-unsplash.jpg",
    },
    {
      src: "https://dentalforhome.s3.amazonaws.com/images/portrait-family-reading-book-together-sitting-sofa.jpg",
    },
  ];
  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div className="home-main">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="home-silderimg-container" key={index}>
            <div className="home-banner-center">
              <div className="banner-fake" />
              <div className="banner-real">
                <div className="home-banner-title">
                  <p>Smiles At Your Doorstep</p>
                </div>
                <div className="home-banner-content">
                  <p>
                    Dental for home, bringing smiles at your doorstep, is the
                    India's first digital dental service platform providing
                    dental services at your doorstep.
                  </p>
                </div>
                <br />
                <br />
                <br />
                <div className="home-banner-book">
                  <p>Book Appointment</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HomeBanner;
