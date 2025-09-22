import React from "react";
import "./about.css";

export default function About() {
  return (
    <section id="about" className="about-section" data-section>
      <div className="about-card">
        <h2>About the Project</h2>
        <p>
          Accidental border crossing poses serious risks to fishermen, leading to arrests, fines, 
          and threats to their lives. Our solution uses an <b>Arduino Mega microcontroller</b>, 
          <b> NAVIC GNSS module</b>, <b>GSM communication</b>, <b>servo motor</b> for throttle control, 
          and <b>FRAM storage</b>.
        </p>
        <p>
          The system alerts fishermen, communicates with coastal authorities, 
          and autonomously controls boat speed near borders, ensuring safety and accountability.
        </p>
      </div>
    </section>
  );
}
