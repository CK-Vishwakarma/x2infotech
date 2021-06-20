import React from "react";
import { portfolios } from "../../data/Data";

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
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
