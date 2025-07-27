import './UniqueSection.css';

function UniqueSection() {
  return (
    <section className="unique-section">
      <h2 className="section-title">What makes ProctorEdu unique</h2>
      <p className="section-subtitle">Online proctoring service with user-experience in mind.</p>

      <div className="unique-row">
        <div className="unique-column">
          <img src="/Unique img/1st.jpg" alt="Customized Experience" />
          <h3>Customized Experience</h3>
          <p>With both AI and live proctoring options, we align to specific needs of Higher Education and Corporate domains.</p>
        </div>   
        <div className="unique-column">
          <img src="/Unique img/2nd.jpeg" alt="Zero Stress" />
          <h3>Zero Stress</h3>
          <p>We achieved an impressive passing rate of 99%, reflecting efforts to increase the percentage of individuals passing with no issues.</p>
        </div>
        <div className="unique-column">
          <img src="/Unique img/3rd.jpeg" alt="AI tools detection" />
          <h3>AI tools detection</h3>
          <p>To prevent the use of AI extensions such as ChatGPT during online exams, ProctorEdu provides an assortment of tools.</p>
        </div>
      </div>

      <div className="unique-row">
        <div className="unique-column">
          <img src="/Unique img/4th.jpeg" alt="Scalability" />
          <h3>Scalability</h3>
          <p>99.95% of sessions with no downtime, with automated proctoring to meet institutional requirements.</p>
        </div>
        <div className="unique-column">
          <img src="/Unique img/5th.jpeg" alt="Security Matters" />
          <h3>Security Matters</h3>
          <p>We handle data responsibly, ensuring privacy protection and preventing misuse.</p>
        </div>
        <div className="unique-column">
        <img src="/Unique img/6th.jpeg" alt="Single Sign On" />

          <h3>Single Sign On</h3>
          <p>Allows users to enter credentials once for secure access to the system.</p>
        </div>
      </div>
    </section>
  );
}

export default UniqueSection;
