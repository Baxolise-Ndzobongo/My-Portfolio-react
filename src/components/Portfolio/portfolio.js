import React from "react";
import "./portfolio.css";
import portfolio1 from "../../images/bank.jpg";
import portfolio2 from "../../images/tax-cal.png";
import portfolio3 from "../../images/calculator.webp";
import portfolio4 from "../../images/construction.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio_container">
        <h2 className="portfoliotitle">Portfolio</h2>
        <span className="portfolioDec">What I did</span>
        <div className="portfolioImgs">
          <div className="portfolioItem">
            <img src={portfolio1} alt="" className="portfolioImg" />
            <div className="hoverText">
              <div className="portfolioText">
                This is a bank app that allows users to log in and create accounts.
                After that, a user can make transactions, either withdrawal or
                make a deposit.
              </div>
            </div>
          </div>
          <div className="portfolioItem">
            <img src={portfolio2} alt="" className="portfolioImg" />
            <div className="hoverText">
              <div className="portfolioText">
                This tax calculator calculates the amount each person will be
                taxed based on income, age and weather a person does qualify for
                tax.
              </div>
            </div>
          </div>
          <div className="portfolioItem">
            <img src={portfolio3} alt="" className="portfolioImg" />
            <div className="hoverText">
              <div className="portfolioText">
                This is a calculator for investment or bonds, where a user can
                input principal, interest rate, and time.
              </div>
            </div>
          </div>
          <div className="portfolioItem">
            <img src={portfolio4} alt="" className="portfolioImg" />
            <div className="hoverText">
              <div className="portfolioText">
                This is a construction website with real-time chat and a game for
                website visitors.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;