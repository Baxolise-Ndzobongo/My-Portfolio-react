import React from "react";
import "./intro.css";
import image from "../../images/Baxolise.jpg";
import { Link } from "react-scroll";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa"; // Import FaDownload icon

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">
          Hi I am Baxolise Ndzobongo<br></br> and I am a{" "}
          <span className="introTittle"><br></br>SOFTWARE DEVELOPER</span>
        </span>
        <p className="introPara">
          I have a robust background in commercial subjects from high school,<br></br>
          complemented by a Bachelor of Information Systems degree earned<br></br> in
          2018 from the university of Fort Hare. Possessing a combination of<br></br>
          business acumen and technical expertise, I am well-prepared to<br></br> thrive
          in the ever-evolving realm of technology. I am enthusiastic about<br></br>
          applying my education and experience to make valuable <br></br>contributions to
          diverse projects and industries. In my leisure time<br></br> I prefer staying
          indoors, engaging in activities such as reading. <br></br>While I identify as
          a naturally shy individual, I am actively working to overcome this<br></br>
          challenge.
        </p>

        <Link
          to="expertise"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="resumeButton" >
       
          <span className="icon">
            <FaDownload size={0} style={{ marginRight: "10px" }} />
          </span>
          <span className="text">Resume</span>
        </Link>

        <div className="social-icons">
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
