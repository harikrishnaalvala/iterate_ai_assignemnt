import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from './img_sm_logo_en_dark.svg';
import DropdownImage from '../DropdownImage/DropdownImage';

const Navbar = () => {
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!languageDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setLanguageDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="navbar-left">
                <a href="/">
                    <img src={logo} alt="Sri Mandir Logo" className="logo" />
                </a>
            </div>
            <nav className="navbar-links">
                <a href="/" className="nav-linkhome">Home</a>
                <a href="/mypoojapage" className="nav-link">Puja</a>
                <a href="#" className="nav-link">Panchang</a>
                <a href="#" className="nav-link">Temples</a>
                <a href="#" className="nav-link">Library</a>
            </nav>
            <div className="dropdown" ref={dropdownRef}>
                <button className="dropdown-button" onClick={toggleLanguageDropdown}>
                    English &#x25BC;
                </button>
                {languageDropdownOpen && (
                    <div className="dropdown-content">
                        <p>English</p>
                        <p>हिंदी</p>
                    </div>
                )}
                <DropdownImage />
            </div>
        </header>
    );
};

export default Navbar;
