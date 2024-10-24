import React from "react";
import "./Footer.css"; 

const Footer = () => {
  const categories = [
    "Shoes",
    "T-Shirts",
    "Socks",
    "Gloves",
    "Hoodies",
    "Jackets",
    "Shorts",
    "Caps",
    "Pants",
    "Sweaters",
    "Bags",
    "Scarves",
    "Belts",
    "Watches",
    "Sunglasses",
    "Backpacks",
    "Headphones",
    "Sportswear",
    "Underwear",
    "Jewelry",
    "Wallets",
    "Perfumes",
    "Shoelaces",
    "Keychains",
    "Shoes",
    "T-Shirts",
    "Socks",
    "Gloves",
    "Hoodies",
    "Jackets",
    "Shorts",
    "Caps",
    "Pants",
    "Sweaters",
    "Bags",
    "Scarves",
    "Belts",
    "Watches",
    "Sunglasses",
    "Backpacks",
    "Headphones",
    "Sportswear",
    "Underwear",
    "Jewelry",
    "Wallets",
    "Perfumes",
    "Shoelaces",
    "Keychains",
    "Shoes",
    "T-Shirts",
    "Socks",
    "Gloves",
    "Hoodies",
    "Jackets",
    "Shorts",
    "Caps",
    "Pants",
    "Sweaters",
    "Bags",
    "Scarves",
    "Belts",
    "Watches",
    "Sunglasses",
    "Backpacks",
    "Headphones",
    "Sportswear",
    "Underwear",
    "Jewelry",
    "Wallets",
    "Perfumes",
    "Shoelaces",
    "Keychains",
  ];
  const additionalCategories = [
    "Delivery",
    "Store Finder",
    "Returns & Refunds",
    "adiClub",
    "Order Tracker",
    "adiclub Terms and conditions",
    "Help"
  
  ];
  const largeScreenCategories = {
    Footwear: ['Shoes', 'Sandals', 'Boots', 'Slippers', 'Flip-Flops'],
    Clothing: ['T-Shirts', 'Hoodies', 'Jackets', 'Pants', 'Shorts'],
    Accessories: ['Belts', 'Watches', 'Sunglasses', 'Wallets', 'Bags'],
    Sportswear: ['Sweatshirts', 'Tracksuits', 'Gym Wear', 'Headbands', 'Gloves'],
    Others: ['Socks', 'Scarves', 'Keychains', 'Jewelry', 'Perfumes']
  };

  return (
    <footer className="footer" style={{height:"1105px"}}>
      <h2>OUR CLOTHING AND SHOE CATEGORIES</h2>
      <div className="footer-container">
        {categories.map((category, index) => (
          <div key={index} className="footer-item">
            {category}
          </div>
        ))}
      </div>
      <div className="yellow-strip">
        <h1>JOIN ADIDAS AND GET 15% OFF</h1>

        <button>SIGN UP FOR FREE</button>
      </div>
      <div className="large-screen-container">
        {Object.entries(largeScreenCategories).map(([heading, items], index) => (
          <div key={index} className="large-column">
            <h3 className="column-heading">{heading}</h3>
            {items.map((item, i) => (
              <div key={i} className="column-item">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="extra-container">
        {additionalCategories.map((category, index) => (
          <div key={index} className="extra-item">
            {category}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
          <a href="/cookies">Cookies</a>
        </div>
        <div className="footer-copyright">
          &copy; 2024 adidas India Marketing Pvt. Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
