import React, { useState, useEffect } from 'react';
import './nav.css'; // Import your CSS file
import { Link, useLocation } from 'react-router-dom';
import profile from '../images/profile.svg'

function Header() {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isAffix, setAffix] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setAffix(true);
      } else {
        setAffix(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the current route is one of the pages where you want to hide the header
  const isHeaderVisible = !['/login', '/signup', '/profile'].includes(location.pathname);

  return (
    <>
      {isHeaderVisible && (
        <div>
      <nav className={`nav ${isAffix ? 'affix' : ''}`}>
        <div className="container">
          <div className="logo">
          <Link to="/home">CodeOdyssey</Link>
          </div>
          <div id="mainListDiv" className={`main_list ${isMenuActive ? 'show_list' : ''}`}>
            <ul className="navlinks">
              <li><Link to="/aboutus">About Us</Link></li>
              <li className="dropdown">
                <a href="#">Domain</a>
                <div className={`dropdown-content dark ${isMenuActive ? 'show' : ''}`}>
                  <Link to="/cloud">Cloud Computing</Link>
                  <Link to="/android">Android Development</Link>
                  <Link to="/webdev">Web Development</Link>
                </div>
              </li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li>
                <Link to="/profile"> 
                  <img
                    src={profile} 
                    alt="Profile"
                    className="profile-image"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <span className={`navTrigger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home"></section>
    </div>
      )}
      </>
    );
  }
  
export default Header;
