import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import { SlideContainer, EachSlide } from "./carousel.styles";

const slideImages = [
  {
    url: "https://i.ibb.co/25n7Qn4/glasses-copy.png",
    newCollectionTittle: "New Collection",
    title: "Glasses",
  },
  {
    url: "https://i.ibb.co/NSgm0j9/jeans.png",
    newCollectionTittle: "New Collection",
    title: "Jeans",
  },
];

const Gallery = () => {
  return (
    <div
      className="slide-container"
      style={{
        heigh: "1500px",
      }}
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                width: "100%",
                margin: "0",
                padding: "340px 0px",
                backgroundPosition: "auto",
                backgroundImage: `url(${slideImage.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Gallery;
