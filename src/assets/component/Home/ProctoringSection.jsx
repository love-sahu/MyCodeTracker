//import React from 'react';
import './ProctoringSection.css';
import proctorImage from './HomePageSec.png'; // Update with the correct image path

const ProctoringSection = () => {
  return (
    <section className="proctoring-section">
        <h2>Easy-To-Use, Secure, and Flexible Online Proctoring Software</h2>
      <div className="proctoring-container">
        <div className="image-container">
          <img src={proctorImage} alt="Code Tracker" />
        </div>
        
        <div className="text-container">
          
          
          
          <ul>
            <li>
              <strong>Accurate and Reliable Results:</strong> Our proctoring solution ensures the integrity of exams, enabling organizations to confidently hire the most competent candidates and recognize the best-performing employees.
            </li>
            <li>
              <strong>Cost-Effective and Scalable:</strong> The solution does not require significant investments in new infrastructure. Its flexible enough to suit small businesses while scalable to support large organizations and institutions with thousands of employees or students.
            </li>
            <li>
              <strong>Professional Certifications:</strong> Proctored exams strengthen relationships with stakeholders, who can be assured that certifications are credible and employees are evaluated rigorously, adding trust to your brand.
            </li>
            <li>
              <strong>Advanced AI Integration:</strong> Code Tracker incorporates cutting-edge artificial intelligence to monitor and prevent cheating, including features like facial recognition, behavioral analytics, and real-time alerts.
            </li>
            <li>
              <strong>Data Privacy and Security:</strong> Your data is safeguarded with advanced encryption and secure cloud storage solutions, ensuring compliance with GDPR and other global data protection standards.
            </li>
            <li>
              <strong>24/7 Technical Support:</strong> We offer around-the-clock technical support to ensure a smooth experience for both exam administrators and candidates, with minimal disruptions.
            </li>
          </ul>

          
        </div>
      </div>
    </section>
  );
};

export default ProctoringSection;
