import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaSun, FaMoon, FaBars, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button className="menu-button" onClick={toggleMenu}>
        {menuOpen ? <FaChevronDown size={24} /> : <FaBars size={24} />}
      </button>
      <div className={`header-buttons ${menuOpen ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/connor-banting-1741421ba/" target="_blank" rel="noopener noreferrer" className="header-button">
          <FaLinkedin size={24} /> <span>LinkedIn</span>
        </a>
        <a href="https://github.com/connorbanting03" target="_blank" rel="noopener noreferrer" className="header-button">
          <FaGithub size={24} /> <span>GitHub</span>
        </a>
        <button className="header-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />} <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;