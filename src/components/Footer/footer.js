import React from 'react';
import './footer.css';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id='footer'>
      <h1 className='footerHeading'>
        Created by Baxolise Ndzobongo |
        <span className="icon">
          <FaCopyright size={40} style={{ marginRight: "10px", color: '#000000' }} />
        </span>
        2024 All rights reserved
      </h1>
    </section>
  );
}

export default Footer;
