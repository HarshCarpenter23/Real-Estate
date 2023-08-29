import React from "react";
import aboutimage from "../images/about.png";
function About() {
  return (
    <div className="about">
      <div className="about-model">
        <img src={aboutimage} alt="about image" />
      </div>
      <div className="about-text">
        <h2>
          We Are The Best <br />
          Real Estate Company
        </h2>
        <p>
          The most innovative real estate company. We have the best network in
          the world. Our agents will help you get the best of which you are
          looking for.
        </p>
        <button>View more</button>
      </div>
    </div>
  );
}

export default About;
