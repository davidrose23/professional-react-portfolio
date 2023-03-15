import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState('about');

  const handleSelection = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* add the "fixed-top" class */}
        <div className="container-fluid">
          <h2 className="navbar-brand">My Portfolio</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className={`nav-link btn ${selectedSection === 'about' && 'active'}`}
                  onClick={() => handleSelection('about')}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${selectedSection === 'portfolio' && 'active'}`}
                  onClick={() => handleSelection('portfolio')}
                >
                  Portfolio
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn ${selectedSection === 'contact' && 'active'}`}
                  onClick={() => handleSelection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {renderSection()}
    </div>
  );
};

export default Navbar;
