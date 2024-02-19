import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; // Import your CSS file

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={isSticky ? 'scroll-up-btn show' : 'scroll-up-btn'}>
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
            <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#expertise" className="menu-btn">Expertise</a></li>
                        <li><a href="#Portfolio" className="menu-btn">Portfolio</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
