import React from "react";
import "./portfolio.css";
import portfolio1 from "../../images/bank.jpg";
import portfolio2 from "../../images/tax-cal.png";
import portfolio3 from "../../images/calculator.webp";
import portfolio4 from "../../images/construction.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
    <div class="card-container">
  <div class="card portfolioItem">
    <img src={portfolio1} alt="" class="portfolioImg front-content" />
    <button class="portfolioButton">Github Link</button>
    <div class="content hoverText">
      <div class="portfolioText">
        <h2>Bank App</h2>
        This is a bank app that allows users to log in and create accounts. After that, a user can make transactions, either withdrawal or make a deposit.
      </div>
    </div>
  </div>
  
  <div class="card portfolioItem">
    <img src={portfolio2} alt="" class="portfolioImg front-content" />
    <div class="content hoverText">
      <div class="portfolioText">
        <h2>Tax Calculator</h2>
        This tax calculator calculates the amount each person will be taxed based on income, age and whether a person does qualify for tax.
      </div>
    </div>
  </div>
  <button class="portfolioButton">Github Link</button>
  <div class="card portfolioItem">
    <img src={portfolio3} alt="" class="portfolioImg front-content" />
    <div class="content hoverText">
      <div class="portfolioText">
        <h2>Investment Calculator</h2>
        This is a calculator for investment or bonds, where a user can input principal, interest rate, and time.
      </div>
    </div>
  </div>
  <button class="portfolioButton">Github Link</button>
  <div class="card portfolioItem">
    <img src={portfolio4} alt="" class="portfolioImg front-content" />
    <div class="content hoverText">
      <div class="portfolioText">
        <h2>Construction Website</h2>
        This is a construction website with real-time chat and a game for website visitors.
      </div>
    </div>
  </div>
  <button class="portfolioButton">Github Link</button>
</div>


    </section>
  );
};

export default Portfolio;