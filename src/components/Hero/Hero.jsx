import React from "react";
import "./Hero.css";
import darkArrow from "./../../assets/dark-arrow.png";
function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edage curriculam is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={darkArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
