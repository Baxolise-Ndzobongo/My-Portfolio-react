import React from "react";
import "./intro.css";
import image from "../../images/Baxolise.jpg";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa"; // Import FaDownload icon

const Intro = () => {
  const resumeUrl = "https://drive.google.com/file/d/19pJJNVURQpNwBad320WODI9xch5FVr7L/view?usp=drive_link"; // Update this URL with your actual resume URL

  const handleResumeClick = () => {
    window.open(resumeUrl, "_blank"); // Opens the resume URL in a new tab
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hi I am Baxolise Ndzobongo<br/> and I am a{" "}
          <span className="introTittle">
            <br/>SOFTWARE DEVELOPER
          </span>
        </span>
        <p className="introPara">
          I have a robust background in commercial subjects from high school,
          <br/>
          complemented by a Bachelor of Information Systems degree earned
          <br/> in 2018 from the university of Fort Hare. Possessing a
          combination of<br/> business acumen and technical expertise, I am
          well-prepared to<br/> thrive in the ever-evolving realm of
          technology. I am enthusiastic about<br/> applying my education
          and experience to make valuable <br/>contributions to diverse
          projects and industries. In my leisure time<br/> I prefer
          staying indoors, engaging in activities such as reading. <br/>While
          I identify as a naturally shy individual, I am actively working to
          overcome this<br/> challenge.
        </p>

        <button className="resumeButton" onClick={handleResumeClick}>
          <span className="icon">
            <FaDownload size={20} style={{ marginRight: "10px" }} />
          </span>
          <span className="text">Resume</span>
        </button>

        <div className="social-media">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social_i"
          >
            <FaGithub size={40} style={{ marginRight: "6px" }} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social_i"
          >
            <FaLinkedin size={40} style={{ marginRight: "6px" }} />
          </a>
        </div>
      </div>
      <img src={image} alt="Profile" className="Baxolise animated" />
    </section>
  );
};

export default Intro;
