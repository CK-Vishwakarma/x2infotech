import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselSlides } from "../../data/Data";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination]);

const Carousel = () => {
  return (
    <div className="carousels-page">
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {CarouselSlides.map((slides, SlideIndex) => {
          return (
            <SwiperSlide key={SlideIndex}>
              <img src={slides.sliderImg} alt="X2 Infotech" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
