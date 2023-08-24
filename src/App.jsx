import React from "react";
import "./LandingPage.css"; // Import your CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to MyRTO App</h1>
        <p>Your One-Stop Solution for Road Taxes and RTO Services</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Road Tax Payment</h2>
          <p>Pay your road taxes hassle-free using our mobile app.</p>
        </div>
        <div className="feature">
          <h2>RTO Services</h2>
          <p>
            Access a range of RTO services like vehicle registration, license
            renewal, and more.
          </p>
        </div>
      </section>
      <section className="download">
        <h2>Download Our App</h2>
        <p>Experience the convenience of managing RTO services on the go.</p>
        <div className="app-store-buttons">
          <a href="#" className="app-store-link">
            <img src="google-play-badge.png" alt="Download on Google Play" />
          </a>
          <a href="#" className="app-store-link">
            <img src="app-store-badge.png" alt="Download on the App Store" />
          </a>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 MyRTO App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
