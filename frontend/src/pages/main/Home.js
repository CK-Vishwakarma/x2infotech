import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { RiTimerLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { FaRegStar } from "react-icons/fa";
import Carousel from "../../components/sliders/Carousel";
import ReviewSlider from "../../components/sliders/ReviewsSlider";
import ClientSlider from "../../components/sliders/ClientSlider";

const Home = () => {
  return (
    <section className="home">
      <div className="container-full">
        <div className="container">
          <div className="gridBox">
            <section className=" hero-section">
              <div className="col-1">
                <Carousel />
              </div>
              <div className="col-2">
                <div>
                  <p>The Easiest Way To Boost Your Business</p>
                  <h1>Design,Development and Manage Your Business</h1>
                  <h2>By Getting Fastest Service With Us</h2>
                  <a
                    className="call-action-link btn cta"
                    href="tel:+917999319552"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </section>
          </div>
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
            <div className="card webd">
              <h1>
                <Link to="/services/website-design">
                  website Design and Development
                </Link>
              </h1>
            </div>

            <div className="card mobd">
              <h1>
                <Link to="/services/mobile-application">
                  Mobile App Design and Development
                </Link>
              </h1>
            </div>

            <div className="card gd">
              <h1>
                <Link to="/services/logo-design">Graphic Design</Link>
              </h1>
            </div>
            <div className="card seodiv">
              <h1>
                <Link to="/services/SEO">SEO</Link>
              </h1>
            </div>
            <div className="card cmsdiv">
              <h1>
                <Link to="/services/CMS">CMS</Link>
              </h1>
            </div>
            <div className="card aidiv">
              <h1>
                {/* <Link to="/services/website-design"> */}
                Artificial Intelligence
                {/* </Link> */}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* =================================================== */}

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
          <div className="review">
            <ReviewSlider />
          </div>
        </div>
      </div>
      {/* =================================================== */}
      <div className="client-carousels container-full">
        <h1 data-aos="fade-down">Our Clients</h1>
        <hr />
        <div className="container">
          <div className="clients">
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
