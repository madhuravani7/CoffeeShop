import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <header className="header">
      <section className="flex">
        <a href="#home" className="logo"><i className="fas fa-mug-hot"></i></a>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}> 
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div id="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
