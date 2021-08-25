import React from "react";

const SEO = () => {
  return (
    <div className="SEO-page container">
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          {/* <span>About</span> Us */}
          Digital marketing SEO
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section className="hero ">
          <div className="col-1" data-aos="fade-right">
            <p>
              <b> Search engine optimization (SEO)</b> is the process of
              optimizing your online content so that a search engine likes to
              show’s top result for searches of a certain keyword.
            </p>
            <p>
              The purpose of Search Engines is to provide people with a place to
              find the best products and services available in the marketplace.
              Therefore, when you are trying to increase your traffic to your
              website, you have to make sure that your site is properly
              optimized for the search engines. It is important that your site
              is visible on all of the major search engines such as Yahoo,
              Google, Bing, and so forth, so that the search engines can find
              you easily.
            </p>
          </div>
          <div className="col-2" data-aos="fade-left">
            <div className="img-container">
              <img src="/images/seo.webp" alt="design and development" />
            </div>
          </div>
        </section>
      </div>
      <p>
        X2 infotech increasing the visibility of a website are by making changes
        to the design and appearance of the website itself. We plan targeted SEO
        campaigns that drive maximum traffic leads and sales.
      </p>
    </div>
  );
};

export default SEO;
