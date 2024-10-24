import React, { useState } from "react";
import { assets } from "../../assets/assets";
import DropdownMenu from './Dropdown';
import SlidingPage from './Sliding';
import SlidingSearch from './Slidingsearch';
import "./Navbar.css";


const Navbar = () => {

  const [isHovered, setIsHovered] = useState(false);

  const [isSlidingPageOpen, setIsSlidingPageOpen] = useState(false);

  const toggleSlidingPage = () => {
    setIsSlidingPageOpen(!isSlidingPageOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleClose = () => {
    setIsSearchOpen(false);
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
          <li 
          className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
              <b>MEN</b>
              <DropdownMenu isHovered={isHovered} />
            </li>
            <li className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>
              <b>WOMEN</b>
              <DropdownMenu isHovered={isHovered} />
            </li>
            <li className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>
              <b>KIDS</b>
              <DropdownMenu isHovered={isHovered} />
            </li>
            <li className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>SPORTS
          <DropdownMenu isHovered={isHovered} /></li>
            <li className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>LIFESTYLE
          <DropdownMenu isHovered={isHovered} /></li>
            <li  className="dropdown" 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>
              <b>OUTLET</b>
          <DropdownMenu isHovered={isHovered} />
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
            <img onClick={handleSearchClick} className="search-middle" src={assets.search} alt="" />
            <a href="https://www.adidas.co.in/cart" target="_blank" rel="noopener noreferrer"> <img className="basket" src={assets.basket} alt="" /></a>
          </div>
        </div>
        <SlidingSearch isOpen={isSearchOpen} onClose={handleClose} />
        <SlidingPage isOpen={isSlidingPageOpen} toggleSlidingPage={toggleSlidingPage} />
      </div>
      <hr />
    </>
  );
};

export default Navbar;