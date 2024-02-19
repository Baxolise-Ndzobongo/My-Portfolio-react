import React from 'react';
import './portfolio.css';
import portfolio1 from '../../images/bank.jpg';
import portfolio2 from '../../images/tax-cal.png';
import portfolio3 from '../../images/calculator.webp';
import portfolio4 from '../../images/construction ladie.webp';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio_container'>
        <h2 className="portfoliotitle">Portfolio</h2>
        <span className="portfolioDec">What I did</span>
        <div className="portfolioImgs">
            <div className="portfolioItem">
                <img src={portfolio1} alt="" className="portfolioImg" />
                <div className="portfolioText">This  is a bank app that  allows user to
                   log in and create account, after that a 
                   user can make transaction either 
                   withdrawal or make a deposit.</div>
            </div>
            <div className="portfolioItem">
                <img src={portfolio2} alt="" className="portfolioImg" />
                <div className="portfolioText">This tax calculator calculates 
                    the amount each person will 
                    be taxed based on income, age 
                    and weather a person do qualify 
                    for tax</div>
            </div>
            <div className="portfolioItem">
                <img src={portfolio3} alt="" className="portfolioImg" />
                <div className="portfolioText">This calculator is used to 
                  calculate investment or bond for
                  a user</div>
            </div>
            <div className="portfolioItem">
                <img src={portfolio4} alt="" className="portfolioImg" />
                <div className="portfolioText">This  is the construction website
                   that have information about 
                   construction.It also have real
                   time chat app and game for the
                   website visitors</div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Portfolio;
