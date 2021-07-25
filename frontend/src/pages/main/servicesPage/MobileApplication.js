import React from "react";

const MobileApplication = () => {
  return (
    <div className="mobile-application-page">
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          {/* <span>About</span> Us */}
          Mobile Application And Development
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section className="hero container ">
          <div className="col-1" data-aos="fade-right">
            <p>
              We talk about Mobile which is highly used device in the world.
              Most of the people use different types of application. With the
              ever-growing adoption of modern smart phones, more and more
              consumers are using apps to order their favorite food, book
              tickets, perform banking transactions, listen to music on the go,
              etc. X2 InfoTech worked on Client requirement whatever they need
              to grow your mobile application. We provide a better UI/UX
              interface of mobile application. We build a dynamic and responsive
              mobile application on android platform using PHP, Java, C#
              languages.
            </p>
          </div>
          <div className="col-2" data-aos="fade-left">
            <div className="img-container">
              <img src="/images/mobileapp.webp" alt="design and development" />
            </div>
          </div>
        </section>
      </div>
      <div className="container facilities" data-aos="fade-bottom">
        <h2>Key Features:</h2>
        <ul>
          <li>Cheap and Best in class.</li>
          <li>Budget friendly.</li>
          <li>Fast development with systematic code.</li>
          <li>Expressive and flexible UI/UX</li>
          <li> Native Performance</li>
          <li>
            {" "}
            We worked as two ways
            <ul>
              <li>Client Based</li>
              <li>Company Based</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileApplication;
