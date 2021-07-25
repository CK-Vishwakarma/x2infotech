import React from "react";

const WebsiteDesign = () => {
  return (
    <div className="website-design-page">
      <section
        className="heading"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>
          {/* <span>About</span> Us */}
          Website Design and Development
        </h1>
        <hr />
      </section>
      <div className="container-full">
        <section className="hero container ">
          <div className="col-1" data-aos="fade-right">
            <p>
              Our Business consulting team will work vigorously to maintain a
              steady flow and momentum of your business. We Crazy about quality
              while meeting our clients, highest standards, we strive for
              excellence without missing the deadlines. Today’s world reaching
              peak of IT industries. There is a competitive environment of
              technology industry. For the same intention most of the times the
              people need to suffer s lot to get connected and hire a
              well-professional experience company where they can get the
              perfect and promising IT services. So X2 InfoTech provides a
              quality of works with high quality content using SEO, because
              content is more important than the design which supports it. We
              trying to satisfy all those you need.
            </p>
          </div>
          <div className="col-2" data-aos="fade-left">
            <div className="img-container">
              <img
                src="/images/design-and-devlpmant.webp"
                alt="design and development"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container facilities">
        <h2>We Will Cover :</h2>
        <ul>
          <li>Design and build business for you.</li>
          <li>
            Build a websites and mobile application as cheap and budged
            friendly.
          </li>
          <li>Will manage and operate the services needed.</li>
          <li>Work with expert team and secure database with ant data loss.</li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteDesign;
