import React from "react";

function Howitwork() {
  return (
    <div className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="flex">
          <div>
            <span className="fas fa-home"></span>
            <h4>Find a Property</h4>
            <p>Our search will help you find property of your wish.</p>
          </div>

          <div>
            <span className="fas fa-dollar-sign"></span>
            <h4>Buy a Property</h4>
            <p>If you like and it comes in budget...Go for it</p>
          </div>

          <div>
            <span className="fas fa-chart-line"></span>
            <h4>Investing</h4>
            <p>Buying property is the best and safest way of investing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howitwork;
