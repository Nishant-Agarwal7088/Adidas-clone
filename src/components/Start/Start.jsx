import React from "react";
import "./Start.css";
import { assets } from "../../assets/assets";
const Start = () => {
  return (
    <>
      <div className="start-container">
        <div className="top">
          <p className="back">BACK </p>
          <p className="home">Home</p>
          <p className="outlet">Outlet</p>
        </div>

        <br />
        <h1>
          SHOES, CLOTHING & ACCESSORIES SALE: UP TO 60% OFF<sub>[4031]</sub>
        </h1>
      </div>

      <div className="content">
        <div className="background"></div>
        <div className="adds">
         
            <div className="image-item">
            <a href="https://www.adidas.co.in/men-outlet">
              <img src={assets.image_1} alt="" />
              </a>
              <p>MEN</p>
            </div>
         

            <div className="image-item">
          <a href="https://www.adidas.co.in/men-outlet">
              <img src={assets.image_2} alt="" />
          </a>
              <p>WOMEN</p>
            </div>

            <div className="image-item">
          <a href="https://www.adidas.co.in/men-outlet">
              <img src={assets.image_3} alt="" />
          </a>
              <p>KIDS</p>
            </div>

            <div className="image-item">
          <a href="https://www.adidas.co.in/men-outlet">
              <img src={assets.image_4} alt="" />
          </a>
              <p>SUMMER WEAR</p>
            </div>

            <div className="image-item">
          <a href="https://www.adidas.co.in/men-outlet">
              <img src={assets.image_5} alt="" />
          </a>
              <p>FLAT 50% OFF + <br /> EXTRA 20% OFF <br /> ON ORDERS ABOVE <br /> INR 4999</p>
            </div>
            
        </div>
       
        
      </div>
    </>
  );
};

export default Start;
