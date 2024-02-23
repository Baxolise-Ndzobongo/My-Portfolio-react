import React, { useState, useEffect } from 'react';
import './Back-To-Top.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { animateScroll } from 'react-scroll';

const BacktoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div className={`scroll-up-btn ${showButton ? 'show' : ''}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
};

export default BacktoTop;
