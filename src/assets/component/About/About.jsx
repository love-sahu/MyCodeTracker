//import React from 'react';
import './About.css'; // Include a CSS file for custom styling
import MeetOurTeam from './MeetOurTeam';
import Faqpage from './faqpage';

function About() {
  return (<>
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Code Tracker?</h1>
        <p className="about-description">
          Mini Cheat is an online exam integrity system designed to prevent cheating during online exams.
          Our platform offers real-time monitoring with advanced technologies like eye-tracking, voice recognition, and user behavior analysis.
        </p>
       {/* Features Section */}
       <section className="about-features">
        <h2>Key Features</h2>
        <ul>
        <li><strong>Real-Time Proctoring:</strong> Monitors exams through live video activity tracking to ensure exam integrity.</li>
          <li><strong>Real-Time Monitoring:</strong> Provides real-time video and audio feeds to supervisors.</li>
          <li><strong>Voice Recognition:</strong> Detects unauthorized conversations during the exam.</li>
          <li><strong>Eye Tracking:</strong> Monitors candidates eye movements to prevent unauthorized reference.</li>
        </ul>
      </section>

      {/* Mission/Goal Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to promote fairness and transparency in online exams. By using AI to detect cheating, Mini Cheat 
          ensures that every exam reflects a student’s true capabilities and prevents academic dishonesty.
        </p>
      </section>
        <div className="about-buttons">
          <button className="demo-btn">Book a Demo</button>
          <button className="test-btn">Take a Proctored Test</button>
        </div>
      </div>


      

      <div className="about-image">
      <img src="./src/assets/component/About/final logo.jpg" alt="Mini Cheat Overview" />

      </div>


      


    

    </div>
     
   
      <>
      
      <section className="how-it-works">
  <h2>How it Works</h2>
  <div className="steps-container">
    <div className="step">
      <img src="./src/assets/component/About/Settings.jpg" alt="Integrate with LMS" />
      <h3>Integrate with LMS</h3>
      <p>ProctorEdu allows easy and quick incorporation into any learning management system.</p>
    </div>
    <div className="step">
      <img src="./src/assets/component/About/test person.jpeg" alt="Conduct the test" />
      <h3>Conduct the Test</h3>
      <p>Our system verifies the identity of the test-taker and tracks behavior throughout the test.</p>
    </div>
    <div className="step">
      <img src="./src/assets/component/About/Report.jpeg" alt="Get the report" />
      <h3>Get the Report</h3>
      <p>Once the exam is completed, our system evaluates it and creates a report.</p>
    </div>
  </div>
</section>
      </>



      <MeetOurTeam />
     <Faqpage/>
     
     </>

 




  );
}

export default About;


