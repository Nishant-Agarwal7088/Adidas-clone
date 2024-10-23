import React, { useState } from "react";
import { assets } from "../../assets/assets";
import SlidingPage from './Sliding';
import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isSlidingPageOpen, setIsSlidingPageOpen] = useState(false);

  const toggleSlidingPage = () => {
    setIsSlidingPageOpen(!isSlidingPageOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="hamburger-menu">
          <img
            onClick={toggleSlidingPage}
            className="menu"
            src={assets.menu}
            alt=""
          />
          <img className="heart" src={assets.heart} alt="" />
        </div>
        <div>
          <img className="logo" src={assets.logo} alt="" />
        </div>
        <div className="dropdown-container">
          <ul>
            <li>
              <b>MEN</b>
            </li>
            <li>
              <b>WOMEN</b>
            </li>
            <li>
              <b>KIDS</b>
            </li>
            <li>SPORTS</li>
            <li>LIFESTYLE</li>
            <li>
              <b>OUTLET</b>
            </li>
          </ul>
        </div>
        <div className="right-content">
          <div className="sign-in">
            <ul>
              <li>help</li>
              <li>orders and returns</li>
              <li>sign up</li>
              <li>log in</li>
            </ul>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img className="search" src={assets.search} alt="" />
            <img className="user" src={assets.user} alt="" />
            <img className="heart" src={assets.heart} alt="" />
            <img className="search-middle" src={assets.search} alt="" />
            <a href="https://www.adidas.co.in/cart" target="_blank" rel="noopener noreferrer"> <img className="basket" src={assets.basket} alt="" /></a>
          </div>
        </div>
        <SlidingPage isOpen={isSlidingPageOpen} toggleSlidingPage={toggleSlidingPage} />
      </div>
      <hr />
    </>
  );
};

export default Navbar;
