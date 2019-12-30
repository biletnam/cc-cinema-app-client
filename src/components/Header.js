import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/navbar.scss';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <ul className="navbar__list">
            <li className="navbar__element">
              <a href="/auth/google" className="navbar__link">
                <i className="fab fa-google navbar__icon"></i>
                Login With Google
              </a>
            </li>
          </ul>
        );

      default:
        return (
          <ul className="navbar__list">
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
            <li className="navbar__element">
              <a href="/api/users/logout" className="navbar__link">
                <i className="fas fa-sign-out-alt navbar__icon"></i>
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__element navbar__element--logo">
          <Link to="/" className="navbar__link navbar__link--logo">
            <i className="fas fa-camera-retro navbar__icon"></i>Cinema App
          </Link>
        </div>
        {this.renderContent()}
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
