import React from "react";
import oceanBg from "./ocean-bg.jpg";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="home">
        
      {/* Centered Content */}
      <div className="hero-content">
        <h1>Border-Aware Autonomous Speed Control and Safety Communication System for Fishermen</h1>
        <h3>Smart Navigation, Safety, and Communication at Sea</h3>
        <div className="hero-buttons">
          <button className="btn primary">Explore Features</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>

      {/* Bottom Overlay */}
      <div className="hero-overlay">
        <p>
          INBUILD FISHERMEN TRACKING AND COMMUNICATION SYSTEM WITH BORDER
          DETECTION AND WEATHER UPDATES
        </p>
      </div>
    </div>
  );
}

export default Hero;
