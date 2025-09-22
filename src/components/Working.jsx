import React from "react";


export default function Working() {
  return (
    <section id="working" className="section" data-section>
      <div className="container">
        <h2>Working Mechanism</h2>
        <ol className="steps">
          <li>GNSS module acquires live boat position.</li>
          <li>Arduino verifies position against geofence limits.</li>
          <li>Local alert via buzzer and LED if near boundary.</li>
          <li>GSM module sends SMS to coastal authorities and relatives.</li>
          <li>Servo motor reduces throttle speed automatically.</li>
          <li>FRAM stores navigation and violation data.</li>
        </ol>
      </div>
    </section>
  );
}
