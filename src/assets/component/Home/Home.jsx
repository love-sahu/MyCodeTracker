//import React from 'react'
//import './Home.css'; // Ensure this line is present 
import UniqueSection from './UniqueSection';
import  ProctoringSection from  './ProctoringSection';
import RequestDemo from './RequestDemo';
import FeaturesSection from './FeaturesSection';


function Home() {
    return (      
<>

{/*    */}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-item active">
  <img src="https://thinkexam.com/blog/wp-content/uploads/2019/06/Online-Proctoring-is-the-new-Trend.png" className="d-block w-100" alt="First slide" />
</div>
<div className="carousel-item">
  <img src="https://www.techokie.com/wp-content/uploads/2020/09/online-exam-proctoring.jpg" className="d-block w-100" alt="Second slide" />
  <div className="carousel-caption d-none d-md-block">
    <h1 style={{ color: '#FF7F50' }}>Learn about our advanced AI-powered exam monitoring solution.</h1>
    <p>Explore how AI helps ensure integrity in online exams.</p>
  </div>
</div>
<div className="carousel-item">
  <img src="https://www.projectcubicle.com/wp-content/uploads/2023/06/Grey-and-Blue-Modern-Application-Developer-Business-Presentation-3-1038x584.png" className="d-block w-100" alt="Third slide" />
  <div className="carousel-caption d-none d-md-block">
    <h1 style={{ color: '#FF7F50' }}>Real-Time Monitoring</h1>
    <p>Discover real-time features for exam security.</p>
  </div>
</div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"> </span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"> </span>
      </a>
    </div>
   
 



    
    < ProctoringSection/>
        
  <br/>
    
    
   <RequestDemo/>


<UniqueSection />
<FeaturesSection/>


</>
      );
    };
    
    
    
    
  
  export default Home