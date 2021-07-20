import React from "react";
import { portfolios } from "../../data/Data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/Loading";
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const data = await portfolios;

    setPortfolio(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container portfolio-page">
        <section className="heading">
          <h1>
            <span>Our</span> Portfolios
          </h1>
          <hr />
        </section>
        <section className="hero">
          {portfolio.map((data) => {
            return (
              <article key={data._id}>
                <img src={data.portfolioImg} alt={data.projectName} />

                <Link to="/" className="visit-btn">
                  <p>Visit</p>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
};

export default Portfolio;
