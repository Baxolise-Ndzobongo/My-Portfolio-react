import React from "react";
import "./expertise.css";
import ExpImage from "../../images/Baxo.jpg";

const Expertise = () => {
  return (
    <section id="expertise">
    <div className="expertise_container">
      <h3 className="title">Expertise</h3>
      <span className="skillsTitle">What I know</span>
      <span className="skillsTitle2">My creative skills and experience</span>
      
        <div className="expertise-content">
          <div className="expertiseName">
            <p class="objective">
              As a developer, I possess a diverse set of skills that enables me to
              create, maintain, and enhance software <br></br>
              applications and systems. These skills encompass various aspects of
              software development, <br></br>
              and I continually strive to stay updated with the latest industry
              trends and technologies.
            </p>

            <img src={ExpImage} alt="Profile" className="Baxo" />
          </div>
          <div className="skill-mf">
            <div>
            <span class="expertise">HTML</span>{" "}
            <span className="pull-right1">85%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "85%" }}
                ole="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
            <div>
            <span class="expertise">CSS</span>{" "}
            <span className="pull-right2">70%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "70%" }}
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
            <div>
            <span class="expertise">JAVASCRIPT</span>{" "}
            <span className="pull-right3">60%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "60%" }}
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
            <div>
            <span class="expertise">PYTHON</span>{" "}
            <span className="pull-right4">50%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "50%" }}
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
            <div>
            
            <span class="expertise">JAVA</span>{" "}
            <span className="pull-right5">50%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "50%" }}
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
            <div>
            <span class="expertise">GITHUB</span>{" "}
            <span className="pull-right6">80%</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: "80%" }}
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Expertise;
