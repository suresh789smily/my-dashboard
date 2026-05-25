import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaUserCircle
} from "react-icons/fa";

function Navbar() {

  return (

    <div className="main-navbar">

      {/* Top Navbar */}

      <div className="top-navbar">

        {/* Logo Section */}

        <div className="logo-section">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png"
            alt="Solar Logo"
            className="navbar-logo"
          />

          <h2>
            RENEWABLE ASSET MANAGEMENT COMPANY
          </h2>

        </div>

        {/* Right Section */}

        <div className="right-section">

          <p>info@sunkompower.com</p>

          <div className="social-icons">

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="/">
              <FaUserCircle />
            </a>

          </div>

        </div>

      </div>

      {/* Menu Navbar */}

      <nav className="menu-navbar">

        <ul>

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#products">Products</a>
          </li>

          <li>
            <a href="#certificates">Certifications</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

    </div>

  );
}

export default Navbar;