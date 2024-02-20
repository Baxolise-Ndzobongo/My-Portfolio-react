import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll } from 'react-scroll'; // Import animateScroll
import './navbar.css'; // Import your CSS file

const Navbar = ({ isHomePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 500, // Scroll duration in milliseconds
            smooth: 'easeInOutQuad', // Type of easing
        });
    };

    return (
        <div>
            {!isHomePage && (
                <div className="scroll-up-btn show" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
            )}

            <nav className={isMenuOpen ? 'navbar sticky open' : 'navbar sticky'}>
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className={isMenuOpen ? 'menu open' : 'menu'}>
                        <div className="desktopMenu">
                            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">HOME</Link>
                            <Link activeClass='active' to='expertise' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">EXPERTISE</Link>
                            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">PORTFOLIO</Link>
                            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem">CONTACT</Link>
                        </div>
                    </ul>
                    <div className="menu-btn" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

