//import React from "react";

function ProctoringDashboard() {
  return (
    <div className="proctoring-dashboard">
      <h1>Proctoring Dashboard</h1>
      <div className="student-list">
        {/* List of students being monitored */}
        <div className="student">
          <h3>Student 1</h3>
          <video src="student1-webcam-feed" autoPlay muted />
          <video src="student1-screen-feed" autoPlay muted />
        </div>
      </div>
    </div>
  );
}

export default ProctoringDashboard;