import React from "react";

const CMS = () => {
  return (
    <div className="cms-page">
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          {/* <span>About</span> Us */}
          Content Management System
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section className="hero container ">
          <div className="col-1" data-aos="fade-right">
            <p>
              lcome to the world’s most popular website builder. The easiest and
              reliable source to develop a website 39%of the web is build on
              WordPress. You can Makes Bloggers, Small business, and E-commerce
              sites by use of WordPress. A Content Management System (CMS) is a
              computer software used to manage the creation and modification of
              digital content. WordPress is a free and open-source content
              management system written in PHP and paired with a MySql or
              MariaDB database. Features include a plug-in architecture and a
              template system referred to with in WordPress as theme.
            </p>
          </div>
          <div className="col-2" data-aos="fade-left">
            <div className="img-container">
              <img src="/images/cms.webp" alt="design and development" />
            </div>
          </div>
        </section>
      </div>
      <div className="container facilities" data-aos="fade-bottom">
        <h2>A question in your mind. Why is WordPress still in Trend ?</h2>
        <ul>
          <li>It is easy to use and handle.</li>
          <li>Its database library can store a heavy amount of data.</li>
          <li>You can search all the theme of WordPress easily.</li>
          <li>It has plenty of themes and plug-in for every purpose.</li>
          <li> Native Performance</li>
        </ul>
      </div>
      <div className="container bottom-text" data-aos="fade-bottom">
        <h2>
          X2 infotech manage the creation and modification of digital content of
          your website with expert team. We known 50+ plug-in which is use to
          website make dynamic.
        </h2>
      </div>
    </div>
  );
};

export default CMS;
