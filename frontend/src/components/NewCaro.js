import React, { useState } from "react";
import { ClientSlides } from "../data/Data";

const NewCaro = () => {
  const [index, setIndex] = useState(0);
  const [clients, setClients] = useState(ClientSlides);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > clients.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = clients.length - 1;
      }
      return index;
    });
  };
  console.log(index);

  return (
    <div className="carouselNew">
      <h1 style={{ textAlign: "center", marginBottom: "5rem" }}>caro</h1>
      <div className="singleSlide">
        {clients.map((client, clientIndex) => {
          return (
            <article
              key={clientIndex}
              className={
                clientIndex === index
                  ? "article currentSlide"
                  : clientIndex > index
                  ? "defaultSlide"
                  : clientIndex < index
                  ? "defaultSlide"
                  : clientIndex > index + 1
                  ? "article nextSlide"
                  : clientIndex < index - 1
                  ? "article prevSlide"
                  : null
              }
            >
              <img src={client.sliderImg} alt="clients" />
            </article>
          );
        })}
      </div>
      <button className="caroBtn  prevBtn" onClick={prevSlide}>
        Prev
      </button>
      <button className="caroBtn  nextBtn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default NewCaro;
