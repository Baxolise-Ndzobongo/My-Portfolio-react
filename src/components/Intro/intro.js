import React from 'react';
import './intro.css';
import image from '../../images/Baxolise.jpg';
import { Link } from 'react-scroll';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import FaDownload icon

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hi I am Baxolise Ndzobongo and I am a <span className='introTittle'>SOFTWARE DEVELOPER</span></span>
        <p className='introPara'>I have a robust background in commercial subjects from high school,
               complemented by a Bachelor of Information Systems degree earned in
               2018 from the university of Forthare. Possessing a combination of 
               business accumen and technical expertise, I am well-prepaire to
               thrive in the ever-evolving realm of technology. I am enthuastic
               about applying my education and experience to make valuable 
               contributions to diverse projects and industries. In my leisure time
                I prefer staying indoors, engaging in activities such as reading. 
                While I identify as a naturally shy individual, I am actively working to  overcome this challenge.</p>
      
                <button class='resumeButton'>
                   <span class="icon"><FaDownload size={30} style={{ marginRight: "10px" }} /></span>
                  <span class="text">Resume</span>
                </button>
                <div className="social-icons">
                    <FaGithub size={40} style={{marginRight: "6px"}} />
                    <FaLinkedin size={40} style={{marginRight: "6px"}} />
                </div>
      </div>
      <img src={image} alt='Profile' className='Baxolise' />
    </section>
  )
}

export default Intro;
