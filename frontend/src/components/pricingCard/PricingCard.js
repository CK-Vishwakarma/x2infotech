import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import classes from "./PricingCard.module.css";
const Packages = [
  [
    { title: "Website Design" },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Domain Name for1 year": "FcCancel",
        "Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcApproval",
        "Professional Log Design": "FcApproval",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcApproval",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Domain Name for1 year": "FcCancel",
        "Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcApproval",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcApproval",
        "Professional Log Design": "FcApproval",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcApproval",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcApproval",
        "Website Visitor Statistics": "FcApproval",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcApproval",
        "Email Addresses": "FcApproval",
        "Domain Name for1 year": "FcApproval",
        "Websitehosting for 1 year": "FcApproval",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
  [
    { title: "Mobile App " },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
  [
    { title: "Graphic Design" },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
  [
    { title: "SEO" },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
  [
    { title: "CMS" },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
  [
    { title: "Artificial Intelligence" },
    [
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 5 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Starter Package",
        price: 999,
        offers: "",
      },

      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 10 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Advanced Package",
        price: 1999,
        offers: "active",
      },
      {
        "Custom Design": "FcApproval",
        "Choice of Layout": "FcApproval",
        "Upto 20 Pages": "FcApproval",
        "Update and add pages": "FcCancel",
        "Mobile Friendly Design": "FcApproval",
        "Homepage Banner Designs": "FcCancel",
        "Professional Log Design": "FcCancel",
        "Search Engine Friendly": "FcApproval",
        "Search Engine Submission": "FcCancel",
        "Website Contact Form": "FcApproval",
        "Search Engine Optimisation": "FcCancel",
        "Website Visitor Statistics": "FcCancel",
        "Full Website Ownership": "FcApproval",
        "Google Maps Integration": "FcApproval",
        "SSD Disk Space": "FcCancel",
        "Email Addresses": "FcCancel",
        "Free Domain Name for1 year": "FcCancel",
        "Free Websitehosting for 1 year": "FcCancel",
        "Phone and Email Support": "FcApproval",
        "Built In House": "FcApproval",
        title: "Enterprise Package",
        price: 2999,
        offers: "",
      },
    ],
  ],
];

const PricingCard = () => {
  const [activeCard, setActiveCard] = useState(0);
  const hendleActiveCard = ()=>{

  }
  return (
    <>
      <div className="container">
        <div className="pricing-heading">
          <h1>Pricing</h1>
          <hr />
          <p>
            Offer multiple packages or monthly subscriptions? Why not showcase
            your featured price plans here, bold and beautifully.
          </p>
        </div>
      <div className={`${classes.btnContainer}`}>
      {Packages.map((Package)=>{
        return <button className={`btn  ${classes.btnExt}`} onClick={hendleActiveCard}>
        <span>
          <FaApple />
        </span>
        {Package[0].title}
      </button>
      })}
      
        
      </div>
        <div className="pricing-heading">
          <h1>Website Design And Development</h1>
        </div>
        <div className="pricing-cards">
          {Packages[activeCard][1].map((Package) => {
            return (
              <div
                className={`single-card  ${Package.offers}`}
                data-aos="zoom-in-up"
              >
                <h2>{Package.title}</h2>
                <h1>
                  <span>
                    <FaRupeeSign />
                  </span>
                  {Package.price}
                </h1>
                <p className="monthly">Monthly</p>
                {Object.keys(Package)
                  .slice(0, 20)
                  .map((key) => {
                    return (
                      <div className={classes.cardServiceName}>
                         <p className={classes.key}>
                        {key}{" "}
                        
                      </p>
                      <span className={classes.icon}>
                          {Package[key] === "FcApproval" ? (
                            <FcApproval />
                          ) : (
                            <FcCancel />
                          )}
                        </span>
                      </div>
                     
                    );
                  })}

                <button className="btn" style={{marginTop:"2rem"}}>
                  <span>
                    <FaApple />
                  </span>
                  Register
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PricingCard;
