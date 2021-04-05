import React, { useState, useEffect } from "react";
import { CarouselSlides } from "../data/Data";
// import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
// import { Link } from "react-router-dom";

const Carousels = () => {
  const [current, setCurrent] = useState(0);
  // const length = CarouselSlides.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  useEffect(() => {
    const length = CarouselSlides.length;

    const CarouselInterval = setInterval(() => {
      // nextSlide();
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(CarouselInterval);
  }, [current]);

  return (
    <div className="carousels">
      {/* <button onClick={prevSlide} className="prev-btn">
        <BsChevronDoubleLeft />
      </button> */}
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

                {/* <div className="slider-info">
                  <h1>{slider.title}</h1>
                  <p>{slider.subTitle}</p>
                  <Link to="/products" className="btn">
                    {slider.btnName}
                  </Link>
                </div> */}
              </>
            )}
          </div>
        );
      })}

      {/* <button onClick={nextSlide} className="next-btn">
        <BsChevronDoubleRight />
      </button> */}
    </div>
  );
};

export default Carousels;
