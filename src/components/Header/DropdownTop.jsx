import React from 'react';
import './Dropdown.css'; // Import the CSS for dropdown styling

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-column">
        <h3>Footwear</h3>
        <ul>
          <li>Sneakers</li>
          <li>Boots</li>
          <li>Sandals</li>
          <li>Running Shoes</li>
          <li>Flip-Flops</li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h3>Clothing</h3>
        <ul>
          <li>Shirts</li>
          <li>Jackets</li>
          <li>Pants</li>
          <li>Hoodies</li>
          <li>Shorts</li>
        </ul>
      </div>
      <div className="dropdown-column">
        <h3>Accessories</h3>
        <ul>
          <li>Hats</li>
          <li>Gloves</li>
          <li>Scarves</li>
          <li>Belts</li>
          <li>Socks</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
