import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./Autotext.css";

const AutoText = () => {
  const [text, setText] = useState("SIGN UP & GET 15% OFF");
  const [step, setStep] = useState(1);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        if (step === 1) {
          setText("FREE DELIVERY, RETURN & EXCHANGE");
          setStep(2);
        } else if (step === 2) {
          setText("EXTRA 5% OFF ON PREPAID ORDERS");
          setStep(3);
        } else {
          setText("SIGN UP & GET 15% OFF");
          setStep(1);
        }
        setFade(true);
      }, 200);
    }, 5000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={`fade-text ${fade ? "fade-in" : "fade-out"}`}>
      <p>
        <b>{text}</b>
        <img className="arrow" src={assets.arrow} alt="" />
      </p>
    </div>
  );
};

export default AutoText;
