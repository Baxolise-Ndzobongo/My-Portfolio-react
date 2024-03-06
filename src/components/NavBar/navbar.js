import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <div>
            <nav className={isMenuOpen ? 'navbar sticky open' : 'navbar sticky'}>
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className={isMenuOpen ? 'menu open' : 'menu'}>
                        <div className="desktopMenu">
                            <Link 
                                to='intro' 
                                spy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={500} 
                                className={`desktopMenuListItem ${activeLink === 'intro' ? 'active' : ''}`}
                                onClick={() => { closeMenu(); handleSetActive('intro'); }}
                            >
                                HOME
                            </Link>
                            <Link 
                                to='expertise' 
                                spy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={500} 
                                className={`desktopMenuListItem ${activeLink === 'expertise' ? 'active' : ''}`}
                                onClick={() => { closeMenu(); handleSetActive('expertise'); }}
                            >
                                EXPERTISE
                            </Link>
                            <Link 
                                to='portfolio' 
                                spy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={500} 
                                className={`desktopMenuListItem ${activeLink === 'portfolio' ? 'active' : ''}`}
                                onClick={() => { closeMenu(); handleSetActive('portfolio'); }}
                            >
                                PORTFOLIO
                            </Link>
                            <Link 
                                to='gallery' 
                                spy={true} 
                                smooth={true} 
                                offset={-200} 
                                duration={500} 
                                className={`desktopMenuListItem ${activeLink === 'gallery' ? 'active' : ''}`}
                                onClick={() => { closeMenu(); handleSetActive('gallery'); }}
                            >
                                GALLERY
                            </Link>
                            <Link 
                                to='contact' 
                                spy={true} 
                                smooth={true} 
                                offset={-200} 
                                duration={500} 
                                className={`desktopMenuListItem ${activeLink === 'contact' ? 'active' : ''}`}
                                onClick={() => { closeMenu(); handleSetActive('contact'); }}
                            >
                                CONTACT
                            </Link>
                        </div>
                    </ul>
                    <div className="menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FontAwesomeIcon icon={faTimes} />
                        ) : (
                            <FontAwesomeIcon icon={faBars} />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
