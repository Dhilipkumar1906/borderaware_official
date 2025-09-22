import React from "react";
import "./Features.css";
import { CheckCircle } from "lucide-react"; // neat tick icon

const features = [
  "Real-time location tracking with NAVIC GNSS.",
  "Pre-programmed geofencing limits.",
  "Multi-step alert mechanism (Buzzer + LED).",
  "Automatic SMS alerts to authorities and family.",
  "Servo-based throttle control to reduce boat speed.",
  "FRAM storage for event and route logging.",
  "Manual reset and override functions.",
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <CheckCircle className="icon" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
