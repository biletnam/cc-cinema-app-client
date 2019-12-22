import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.scss';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__element navbar__element--logo">
          <Link to="/" className="navbar__link">
            <i className="fas fa-camera-retro navbar__icon"></i>Cinema App
          </Link>
        </li>
        <li className="navbar__element">
          <Link to="/movies" className="navbar__link">
            <i className="fas fa-video navbar__icon"></i>Movies
          </Link>
        </li>
        <li className="navbar__element">
          <Link to="/shows" className="navbar__link">
            <i className="fas fa-film navbar__icon"></i>Shows
          </Link>
        </li>
        <li className="navbar__element">
          <Link to="/res" className="navbar__link">
            <i className="fas fa-ticket-alt navbar__icon"></i>Reservation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
