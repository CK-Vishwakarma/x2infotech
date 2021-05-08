import React, { useState, useEffect } from "react";
import { CarouselSlides } from "../data/Data";
// import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const Carousels = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const length = CarouselSlides.length;

    const CarouselInterval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(CarouselInterval);
  }, [current]);

  return (
    <div className="carousels">
      {CarouselSlides.map((slider, index) => {
        return (
          <div
            key={index}
            className={current === index ? "slider-div active" : "slider-div"}
          >
            {current === index && (
              <>
                <img
                  src={slider.sliderImg}
                  alt="x2 infotech"
                  key={index}
                  className="slider-img"
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousels;
