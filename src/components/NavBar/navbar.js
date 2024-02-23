import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className={isMenuOpen ? 'navbar sticky open' : 'navbar sticky'}>
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className={isMenuOpen ? 'menu open' : 'menu'}>
                        <div className="desktopMenu">
                            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={closeMenu}>HOME</Link>
                            <Link activeClass='active' to='expertise' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={closeMenu}>EXPERTISE</Link>
                            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" onClick={closeMenu}>PORTFOLIO</Link>
                            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-200} duration={500} className="desktopMenuListItem" onClick={closeMenu}>CONTACT</Link>
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
