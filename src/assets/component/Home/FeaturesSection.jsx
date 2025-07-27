//import React from 'react';
import './FeaturesSection.css'; // External CSS for styling
import centerImage from './Home Featuress.png'; // Path to your image

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Headings in the center */}
      <div className="heading-container">
        <h2>Features for unmatched testing experience</h2>
        <h6>ProctorEdu provides organizations and institutions with a solution </h6>
        <h6>to secure online certification exams while maintaining full control over processes.</h6>
      <br/>
      </div>

      <div className="features-content">
        {/* Left side content */}
        <div className="left-side">
          <ul>
            <li>Smart behavior analytics</li>
            <h6> Automatic assessment of confidence in test  </h6>
            <h6> results,biometric verification of identity.</h6>
            <li>Mobile support</li>
            <h6>Support on Android and iOS mobile devices.</h6>
            <li>Minimum network requirements</li>
            <h6>256 Kbit/s (100 MB/h) + </h6>
            <h6> automatic recovery after disconnection.</h6>
          </ul>
        </div>

        {/* Center image */}
        <div className="image-container">
          <img src={centerImage} alt="Laptop, Tablet, Mobile" />
        </div>

        {/* Right side content */}
        <div className="right-side">
          <ul>
            <li>No downloads</li>
            <h6> No need to download anything </h6>
            <h6>on the test takers computers.</h6>
            <li>Additional camera</li>
            <h6>Connect an additional mobile  </h6>
            <h6> camera for the view of 360°.</h6>
            <li>Observation</li>
            <h6> Online monitoring of up to 30 </h6>
            <h6>  participants simultaneously for </h6>
            <h6>each proctor.</h6>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
