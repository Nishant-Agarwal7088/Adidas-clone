import React, { useState, useEffect } from 'react';
import './Dropdown.css'; // Import the CSS for Dropdown styling

const DropdownMenu = ({ isHovered }) => {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (isHovered) {
      setVisible(true);
      if (timeoutId) {
        clearTimeout(timeoutId); // Clear any existing timeout when hovered
      }
    } else {
      const id = setTimeout(() => {
        setVisible(false);
      }, 1000); // Hold dropdown for 1 second
      setTimeoutId(id);
    }

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, [isHovered, timeoutId]);

  return (
    <>
    <div className={`dropdown-menu ${visible ? 'visible' : ''}`}>
      <div className="dropdown-columns">
        <div className="dropdown-column">
          <h3>Footwear</h3>
          <div className="row-items">
            <div className="row-item"><a href="#">Sneakers</a></div>
            <div className="row-item"><a href="#">Boots</a></div>
            <div className="row-item"><a href="#">Sandals</a></div>
            <div className="row-item"><a href="#">Loafers</a></div>
            <div className="row-item"><a href="#">Slippers</a></div>
            <div className="row-item"><a href="#">Heels</a></div>
            <div className="row-item"><a href="#">Athletic Shoes</a></div>
            <div className="row-item"><a href="#">Casual Shoes</a></div>
            <div className="row-item"><a href="#">Work Boots</a></div>
            <div className="row-item"><a href="#">Rain Boots</a></div>
            <div className="row-item"><a href="#">Orthopedic Shoes</a></div>
            <div className="row-item"><a href="#">Flip Flops</a></div>
          </div>
          <div className="column-content">
            <p>Explore our wide range of footwear for all occasions.</p>
          </div>
        </div>
        <div className="dropdown-column">
          <h3>Clothing</h3>
          <div className="row-items">
            <div className="row-item"><a href="#">Shirts</a></div>
            <div className="row-item"><a href="#">Pants</a></div>
            <div className="row-item"><a href="#">Jackets</a></div>
            <div className="row-item"><a href="#">Shorts</a></div>
            <div className="row-item"><a href="#">Dresses</a></div>
            <div className="row-item"><a href="#">T-shirts</a></div>
            <div className="row-item"><a href="#">Sweaters</a></div>
            <div className="row-item"><a href="#">Suits</a></div>
            <div className="row-item"><a href="#">Coats</a></div>
            <div className="row-item"><a href="#">Skirts</a></div>
            <div className="row-item"><a href="#">Activewear</a></div>
            <div className="row-item"><a href="#">Loungewear</a></div>
          </div>
          <div className="column-content">
            <p>Find the latest trends and styles in clothing.</p>
          </div>
        </div>
        <div className="dropdown-column">
          <h3>Accessories</h3>
          <div className="row-items">
            <div className="row-item"><a href="#">Watches</a></div>
            <div className="row-item"><a href="#">Bags</a></div>
            <div className="row-item"><a href="#">Belts</a></div>
            <div className="row-item"><a href="#">Sunglasses</a></div>
            <div className="row-item"><a href="#">Hats</a></div>
            <div className="row-item"><a href="#">Scarves</a></div>
            <div className="row-item"><a href="#">Jewelry</a></div>
            <div className="row-item"><a href="#">Gloves</a></div>
            <div className="row-item"><a href="#">Wallets</a></div>
            <div className="row-item"><a href="#">Ties</a></div>
            <div className="row-item"><a href="#">Headphones</a></div>
            <div className="row-item"><a href="#">Phone Cases</a></div>
          </div>
          <div className="column-content">
            <p>Accessorize your look with our unique selection.</p>
          </div>
        </div>
        <div className="dropdown-column">
          <h3>Clothes</h3>
          <div className="row-items">
            <div className="row-item"><a href="#">Tops</a></div>
            <div className="row-item"><a href="#">Bottoms</a></div>
            <div className="row-item"><a href="#">Outerwear</a></div>
            <div className="row-item"><a href="#">Sleepwear</a></div>
            <div className="row-item"><a href="#">Activewear</a></div>
            <div className="row-item"><a href="#">Underwear</a></div>
            <div className="row-item"><a href="#">Swimwear</a></div>
            <div className="row-item"><a href="#">Maternity Wear</a></div>
            <div className="row-item"><a href="#">Costumes</a></div>
            <div className="row-item"><a href="#">Thermals</a></div>
            <div className="row-item"><a href="#">Lingerie</a></div>
            <div className="row-item"><a href="#">Tracksuits</a></div>
          </div>
          <div className="column-content">
            <p>Discover comfortable and stylish clothing options.</p>
          </div>
        </div>
        
        

      </div>
      
    </div>
    
    </>
  );
};

export default DropdownMenu;
