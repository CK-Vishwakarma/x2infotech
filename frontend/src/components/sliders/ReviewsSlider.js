import React from "react";
import { Tutors } from "../../data/Data";
import { FaQuoteLeft } from "react-icons/fa";
import Ratings from "../ratings/Ratings";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const ReviewsSlider = () => {
  return (
    <div className="review-page">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {Tutors.map((tutor, tutorIndex) => {
          return (
            <SwiperSlide key={tutorIndex}>
              <div className="review-card">
                <h1 className="quote-icon">
                  <FaQuoteLeft />
                </h1>
                <p className="review-text">{tutor.review}</p>
                <div>
                  <Ratings tutor={tutor} />
                </div>
                <div className="img-container">
                  <img src={tutor.tutorImage} alt={tutor.fullName} />
                </div>
                <hr />
                <h2>{tutor.fullName}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewsSlider;
