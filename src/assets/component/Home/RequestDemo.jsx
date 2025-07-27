//import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './RequestDemo.css';

const RequestDemo = () => {
  return (
    <div className="request-demo-container">
      <div className="request-demo-content">
        <p>Any questions? Leave a request, and we will contact you!</p>
        {/* Use Link to navigate to the Contact page */}
        <Link to="/contact" className="request-button">
          Request a Demo
        </Link>
      </div>
    </div>
  );
};

export default RequestDemo;
