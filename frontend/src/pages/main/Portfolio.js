import React from "react";
import { portfolios } from "../../data/Data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="container portfolio-page">
      <section className="heading">
        <h1>
          <span>Our</span> Portfolios
        </h1>
        <hr />
      </section>
      <section className="hero">
        {portfolios.map((portfolio) => {
          return (
            <article key={portfolio._id}>
              <img src={portfolio.portfolioImg} alt={portfolio.projectName} />

              <Link to="/" className="visit-btn">
                <p>Visit</p>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
