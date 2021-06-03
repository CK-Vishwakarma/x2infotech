import React, { useState, useEffect } from "react";
import { Tutors, ClientSlides } from "../../data/Data";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { RiTimerLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Carousels from "../../components/Carousels";

const Home = () => {
  const [currentRev, setCurrentRev] = useState(0);
  useEffect(() => {
    const length = Tutors.length;

    const CarouselInterval1 = setInterval(() => {
      setCurrentRev(currentRev === length - 1 ? 0 : currentRev + 1);
    }, 5000);
    return () => clearInterval(CarouselInterval1);
  }, [currentRev]);

  const backtoTopFuunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <section className="home">
      <div className="container-full">
        <div className="container">
          <section className=" hero-section">
            <div className="col-1 slide-in-left">
              <Carousels />
            </div>
            <div className="col-2 slide-in-right">
              <p>The Easiest Way To Boost Your Business</p>
              <h1>Design,Development and Manage Your Business</h1>
              <h2>By Getting Fastest Service With Us</h2>
              <button className="btn cta ">Call Now</button>
            </div>
          </section>
        </div>
      </div>
      {/* ============================================== */}

      <div className="container-full why-us">
        <div className="container">
          <div className="why-us-heading">
            <h1 data-aos="fade-down">Why Choose Us?</h1>
            <hr />
            <p>
              Provide Best and Effective Services for your Online platform with
              Affordable solutions within budget. Freindly and Supportive
              Management to provide Good Customer Support.
            </p>
            <div className="cards">
              <div className="single-card " data-aos="fade-right">
                <div className="card-icon">
                  <RiCustomerService2Fill />
                </div>
                <h1>Customer Support</h1>
                <hr />
                <p>
                  We have a good team to manage the Projects. We always support
                  our clients by solving their problems regarding projects and
                  business.
                </p>
              </div>
              <div className="single-card" data-aos="fade-up">
                <div className="card-icon">
                  <GiMoneyStack />
                </div>
                <h1>Budget Friendly</h1>
                <hr />
                <p>
                  It is the Main point for Clients because sometimes other
                  organizations demand high cost for their project.We try to
                  build the projects regarding Customer Budget.
                </p>
              </div>
              <div className="single-card" data-aos="fade-left">
                <div className="card-icon">
                  <RiTimerLine />
                </div>
                <h1>Time Management</h1>
                <hr />
                <p>
                  We understand the value of time i.e. We assure our clients to
                  get their project deliver on Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================== */}
      <div className="container-full our-services ">
        <div className="container">
          <h1 data-aos="fade-down">Our Services</h1>
          <hr />
          <p>We provide services in different fields</p>
          <div className="cards-services">
            <div className="card">
              <h1>System Management</h1>
            </div>
            <div className="card">
              <h1>website Design and Development</h1>
            </div>
            <div className="card">
              <h1>Mobile App Design and Development</h1>
            </div>
            <div className="card">
              <h1>Graphic Design</h1>
            </div>
            <div className="card">
              <h1>SEO</h1>
            </div>
            <div className="card">
              <h1>CMS</h1>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================== */}
      {/* <div className="container-full">
        <div className="container">
          <div className="our-objective ">
            <div className="img-container">
              <img src="/images/resume-man-1.png" alt="ceo pic" />
            </div>
            <div className="text-section">
              <h1>Our Objective</h1>
              <p>
                “Our promise as a service provider is to build community value
                into every project while delivering professional expertise,
                exceptional service and quality construction for our clients.”
              </p>
              <h3>Akhand Sengar</h3>
              <strong>CEO, X2Infotech</strong>
            </div>
          </div>
        </div>
      </div> */}

      {/* =================================================== */}

      <section className="employees container">
        <h1 data-aos="fade-down">Our Best Professionals</h1>
        <hr />
        <p>
          Showcase some of your highest rated tutors, top students or members of
          staff here. Images are automatically scaled to fit it displays well.
        </p>
        <div className="employees-avatar" data-aos="fade-up">
          {Tutors.map((tutor) => {
            return (
              <div className="img-holder" key={tutor._id}>
                <img
                  src={tutor.tutorImage}
                  alt="tutors.svg"
                  data-aos="flip-right"
                />
                <p>{tutor.fullName}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* =================================================== */}

      <section
        style={{ backgroundImage: "url(images/backg2.webp)" }}
        className="pricing container-full"
      >
        <div className="container">
          <div className="pricing-heading">
            <h1>Pricing</h1>
            <hr />
            <p>
              Offer multiple packages or monthly subscriptions? Why not showcase
              your featured price plans here, bold and beautifully.
            </p>
          </div>
          <div className="pricing-cards">
            <div className="single-card" data-aos="flip-left">
              <h2>Basic</h2>
              <h1>
                <span>
                  <FaRupeeSign />
                </span>
                1000
              </h1>
              <p className="monthly">monthly</p>
              <p className="card-desc">
                Unlimited Subjects Course Management Progress Statistics
              </p>
              <p className="card-striked-text">
                <s>Exportable Data</s>
              </p>
              <button className="btn">
                <span>
                  <FaApple />
                </span>
                Register
              </button>
            </div>
            <div className="single-card active" data-aos="zoom-in-up">
              <h2>Basic</h2>
              <h1>
                <span>
                  <FaRupeeSign />
                </span>
                1000
              </h1>
              <p className="monthly">monthly</p>
              <p className="card-desc">
                Unlimited Subjects Course Management Progress Statistics
              </p>
              <p className="card-striked-text">Exportable Data</p>
              <button className="btn">
                <span>
                  <FaApple />
                </span>
                Register
              </button>
            </div>
            <div className="single-card" data-aos="flip-right">
              <h2>Basic</h2>
              <h1>
                <span>
                  <FaRupeeSign />
                </span>
                1000
              </h1>
              <p className="monthly">monthly</p>
              <p className="card-desc">
                Unlimited Subjects Course Management Progress Statistics
              </p>
              <p className="card-striked-text">Exportable Data</p>
              <button className="btn">
                <span>
                  <FaApple />
                </span>
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* =================================================== */}
      <div className="reviews">
        <div className="container ">
          <h1 data-aos="fade-down">Testimonials</h1>
          <hr />

          <div className="review-flex">
            {Tutors.map((tutor, index) => {
              return (
                <div
                  className={
                    currentRev === index ? "positioning active" : "positioning"
                  }
                  key={index}
                >
                  <div className="card">
                    <h1>
                      <FaQuoteLeft />
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid quisquam rem sunt, fugit esse provident in
                      expedita aut facere. Id modi fugiat rem magnam hic facere,
                      dolorum aspernatur eos adipisci!
                    </p>
                    <div className="rating">
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStar />
                      </span>
                      <span>
                        <FaStarHalf />
                      </span>
                    </div>
                    <div className="avatar">
                      <img src={tutor.tutorImage} alt={tutor.fullName} />
                    </div>
                    <hr />
                    <h3>{tutor.fullName}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* =================================================== */}

      <div className="client-carousels container-full">
        <h1 data-aos="fade-down">Our Clients</h1>
        <hr />
        <div className="container">
          <div className="clients" data-aos="fade-up">
            {ClientSlides.map((client, index) => {
              return (
                <div className="client" key={index}>
                  <img src={client.sliderImg} alt="clients" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {document.body.scrollTop > 20 ||
        (document.documentElement.scrollTop > 20 && (
          <button className="back-to-top" onClick={backtoTopFuunction}>
            <FaArrowAltCircleUp />
          </button>
        ))}
    </section>
  );
};

export default Home;
