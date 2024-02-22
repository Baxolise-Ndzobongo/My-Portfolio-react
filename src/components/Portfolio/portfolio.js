import React from "react";
import "./portfolio.css";
import portfolio1 from "../../images/bank.jpg";
import portfolio2 from "../../images/tax-cal.png";
import portfolio3 from "../../images/calculator.webp";
import portfolio4 from "../../images/construction.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-container">
        <h1 className="title center">Portfolio</h1>
        <div className="portfolioTitle center">What I did</div>
        <div className="card-container">
          <div className="card portfolioItem">
            <img src={portfolio1} alt="" className="portfolioImg front-content" />
            <div className="content hoverText">
              <div className="portfolioText">
                <h2>Bank App</h2>
                This is a bank app that allows users to log in and create accounts. After that, a user can make transactions, either withdrawal or make a deposit.
              </div>
              <a href="https://github.com/kwakhanya/Bank_App" target="_blank" rel="noopener noreferrer">
                <button className="portfolioButton">Github Link</button>
              </a>
            </div>
          </div>

          <div className="card portfolioItem">
            <img src={portfolio2} alt="" className="portfolioImg front-content" />
            <div className="content hoverText">
              <div className="portfolioText">
                <h2>Tax Calculator</h2>
                This tax calculator calculates the amount each person will be taxed based on income, age, and whether a person does qualify for tax.
              </div>
              <a href="https://github.com/your-username/tax-calculator" target="_blank" rel="noopener noreferrer">
                <button className="portfolioButton">Github Link</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card portfolioItem">
            <img src={portfolio3} alt="" className="portfolioImg front-content" />
            <div className="content hoverText">
              <div className="portfolioText">
                <h2>Investment Calculator</h2>
                This is a calculator for investment or bonds, where a user can input principal, interest rate, and time.
              </div>
              <a href="https://github.com/kwakhanya/financial_calculator" target="_blank" rel="noopener noreferrer">
                <button className="portfolioButton">Github Link</button>
              </a>
            </div>
          </div>

          <div className="card portfolioItem">
            <img src={portfolio4} alt="" className="portfolioImg front-content" />
            <div className="content hoverText">
              <div className="portfolioText">
                <h2>Construction Website</h2>
                This is a construction website with real-time chat and a game for website visitors.
              </div>
              <a href=" https://kwakhanya.github.io/Thee-Best-Group-Project/" target="_blank" rel="noopener noreferrer">
                <button className="portfolioButton">Github Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
