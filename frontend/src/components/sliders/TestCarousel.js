import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CarouselSlides } from "../../data/Data";
import "./Carousel.css";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = CarouselSlides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="carousels-page">
      <div className="div-center">
        {CarouselSlides.map((slides, personIndex) => {
          let position = "next-slide";
          if (personIndex === index) {
            position = "active-slide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === CarouselSlides.length - 1)
          ) {
            position = "prev-slide";
          }
          return (
            <div className={`slides ${position}`}>
              <img src={slides.sliderImg} key={index} />
            </div>
          );
        })}
        {/* <div className="buttons">
          <button onClick={() => setIndex(index - 1)}>prev</button>
          <button onClick={() => setIndex(index + 1)}>next</button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
