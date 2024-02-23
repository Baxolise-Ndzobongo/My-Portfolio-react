import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs
import './contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const onChange =() =>{

  }
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Use emailjs to send email
    emailjs.sendForm('service_ms7thw7', 'template_e2q04bg', e.target, 'xOVZT7p0u5qevjgCI')
      .then((result) => {
        console.log(result.text);
        // Clear form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div className="ContactPage">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <h2 className='contactSub'>Get in touch</h2>
        <div className='items'>
          <div className="contactItemsContainer">
            <div className="contactItem">
              <FaEnvelope className="icon" />
              <span>baxolisendzobongo222@gmail.com</span>
            </div>
            <div className="contactItem">
              <FaPhone className="icon" />
              <span>0734946547</span>
            </div>
            <div className="contactItem">
              <FaMapMarkerAlt className="icon" />
              <span>Philippi East</span>
            </div>
          </div>
      
      <div className="circle-container">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <div className="form-container"> 
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="label_name">Name:</label>
            <input required="" name="name" id="name" type="text" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input required="" name="phone" id="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input required="" name="email" id="email" type="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input required="" name="subject" id="subject" type="text" value={formData.subject} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea required="" cols="50" rows="10" id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <div>
            <ReCAPTCHA
            sitekey="6Ley73spAAAAADWx7YTOAZYN0tscQ6RuZDGuSADA"
            onChange={onChange}
            />
          </div>
          <button type="submit" className="form-submit-btn">Send Message</button>
        </form>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
