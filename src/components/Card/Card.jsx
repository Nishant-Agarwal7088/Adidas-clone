import React, { useState } from "react";
import "./Card.css";
import "./ShoeList.css";
import { assets } from "../../assets/assets";


const Card = ({
  title,
  price,
  mrp,
  category,
  color,
  discount,
  imageUrl,
  hoverImageUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <button
          className="basket-icon-btn"
          onClick={() => alert("Added to cart")}
        >
          <img src={assets.basket} alt="Add to Cart" className="basket-icon" />
        </button>
        <a href="https://www.adidas.co.in/astoundrun-shoes/IU6246.html">
          <img
            src={isHovered ? hoverImageUrl : imageUrl}
            alt={title}
            className="card-image"
          />
        </a>
      </div>
      <div className="card-content">
        <p className="card-price">
          <p className="current-price">₹{price} </p>
          <span className="mrp">₹{mrp}</span>{" "}
          <span className="discount">
            {discount} <span className="original-price">Original price</span>
          </span>
        </p>
        <h2 className="card-title">{title}</h2>
        <p className="card-category">{category}</p>
        <p className="card-category">{color}</p>
      </div>
    </div>
  );
};

export default Card;
