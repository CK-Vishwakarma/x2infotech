import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsStar } from "react-icons/bs";

const Ratings = ({ tutor }) => {
  const rating = tutor.rating;

  return (
    <div>
      <span>
        {rating >= 1 ? (
          <FaStar />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FaStar />
        ) : rating >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FaStar />
        ) : rating >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FaStar />
        ) : rating >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <BsStar />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FaStar />
        ) : rating >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <BsStar />
        )}
      </span>
    </div>
  );
};
export default Ratings;
