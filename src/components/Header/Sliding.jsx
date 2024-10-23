import React from 'react';
import { assets } from '../../assets/assets';
import './Sliding.css';

const SlidingPage = ({ isOpen, toggleSlidingPage }) => {
  return (
    <div className='sliding-page-header'>
    
      <div className={`side-panel ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSlidingPage}>
          &times; 
        </div>
        <div className="side-panel-header">
          <div className='side-panel-image'>
            <img className='logo-sliding-image' src={assets.logo} alt="" />
            
          </div>
          <hr />
        </div>
        <div className="side-panel-content">
    <ul><li style={{color: 'red'}}><b>FESTIVE SALE - EXTRA 20% OFF</b></li>
        <li><b>MEN</b> <img src={assets.arrow} alt="" /></li>
        <li><b>WOMEN</b> <img src={assets.arrow} alt="" /></li>
        <li><b>KIDS</b> <img src={assets.arrow} alt="" /></li>
        <li><b>PERSONALISED PRODUCTS</b> <img src={assets.arrow} alt="" /></li>
        <li><b>BLACK SNEAKERS</b> <img src={assets.arrow} alt="" /></li>
        <li>SPORTS <img src={assets.arrow} alt="" /></li>
        <li>LIFESTYLE <img src={assets.arrow} alt="" /></li>
        <li><b>OUTLET</b> <img src={assets.arrow} alt="" /></li>
        
    </ul>
    <hr />
    <ul>
    <li>Order Tracker</li>
    <li>My Profile</li>
    <li>Store Finder</li>
    <li>Help & Customer Service</li>
    <li>Returns</li>
    <li>Signup</li>
    </ul>
</div>

      </div>

      


      {isOpen && <div className="overlay" onClick={toggleSlidingPage}></div>}
    </div>
    
  );
};

export default SlidingPage;
