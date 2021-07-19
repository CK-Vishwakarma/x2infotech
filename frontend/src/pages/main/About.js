import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          <span>About</span> Us
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section className="hero container ">
          <div className="col-1" data-aos="fade-right">
            <h1>
              We Build Friendly and Lasting Relationship between Client and Us.
            </h1>
            <h2>
              Strong client relationships are much like any relationship, we
              can’t grow if we aren’t putting any efforts. Just like any
              relationship, our relationship with the client is built with
              actions we take over time.We Understand that how client is
              valuable to us, client and we help each other to grow our
              business.
            </h2>
          </div>
          <div className="col-2" data-aos="fade-left">
            <div className="img-container">
              <img src="/images/about-us.webp" alt="about us" />
            </div>
          </div>
        </section>
      </div>
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          <span>Our</span> Objective
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section
          className="objective container "
          style={{ backgroundImage: "url(/images/bg1.svg)" }}
        >
          <div className="col-1" data-aos="fade-left">
            <h1>
              We Build Friendly and Lasting Relationship between Client and Us.
            </h1>
            <h2>
              Strong client relationships are much like any relationship, we
              can’t grow if we aren’t putting any efforts. Just like any
              relationship, our relationship with the client is built with
              actions we take over time.We Understand that how client is
              valuable to us, client and we help each other to grow our
              business.
            </h2>
          </div>
          <div className="col-2" data-aos="fade-right">
            <div className="img-container">
              <img src="/images/about-us2.webp" alt="about us" />
              <hr />
              <h2>X2 INFOTECH,CEO </h2>
            </div>
          </div>
        </section>
      </div>
      <section className="happy-clients container-full">
        <h1>20</h1>
        <h2>Happy Clients</h2>
      </section>
    </div>
  );
};

export default About;
