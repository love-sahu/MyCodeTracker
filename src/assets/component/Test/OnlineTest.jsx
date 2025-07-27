import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as faceapi from "face-api.js"; // Import face-api.js
import "./OnlineTest.css";

function OnlineTest() {
  const videoRef = useRef(null);
  const testContainerRef = useRef(null);
  const [error, setError] = useState(null);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [noFaceDetected, setNoFaceDetected] = useState(false);
  const [warningCount, setWarningCount] = useState(0); // Track warning count
  const navigate = useNavigate();

  // Load face-api.js models
  const loadModels = async () => {
    try {
      console.log("Loading models...");
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      console.log("TinyFaceDetector model loaded successfully");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      console.log("FaceLandmark68Net model loaded successfully");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      console.log("FaceExpressionNet model loaded successfully");
    } catch (err) {
      console.error("Error loading models:", err);
    }
  };

  // Start the webcam
  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        console.log("Webcam stream started successfully");
      }
    } catch (err) {
      setError("Unable to access the webcam. Please allow access to continue.");
      console.error("Error accessing webcam:", err);
    }
  };

  // Make the test full-screen
  const enterFullScreen = () => {
    if (testContainerRef.current) {
      if (testContainerRef.current.requestFullscreen) {
        testContainerRef.current.requestFullscreen();
      } else if (testContainerRef.current.mozRequestFullScreen) {
        testContainerRef.current.mozRequestFullScreen(); // Firefox
      } else if (testContainerRef.current.webkitRequestFullscreen) {
        testContainerRef.current.webkitRequestFullscreen(); // Chrome, Safari, Opera
      } else if (testContainerRef.current.msRequestFullscreen) {
        testContainerRef.current.msRequestFullscreen(); // IE/Edge
      }
    }
  };

  // Exit full-screen mode
  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => {
          console.log("Exited fullscreen mode successfully.");
        })
        .catch((error) => {
          console.error("Error exiting fullscreen mode:", error);
        });
    } else {
      console.warn("Document is not in fullscreen mode.");
    }
  };

  // Monitor face detection
  const monitorFaceDetection = () => {
    const checkFace = async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions());
        console.log("Face detections:", detections); // Log detections

        if (detections.length === 0) {
          setNoFaceDetected(true); // No face detected
          setWarningCount((prevCount) => prevCount + 1); // Increment warning count

          if (warningCount >= 3) {
            alert("No face detected after 3 warnings. Your test will be dismissed.");
            handleSubmitTest(); // Submit the test automatically
          } else {
            alert(`No face detected. Warning ${warningCount + 1}/3. Please ensure your face is visible.`);
          }
        } else {
          setNoFaceDetected(false); // Face detected
          setWarningCount(0); // Reset warning count
        }
      }
    };

    const interval = setInterval(checkFace, 1000); // Check for faces every second

    // Return a cleanup function to clear the interval
    return () => clearInterval(interval);
  };

  // Handle test submission
  const handleSubmitTest = async () => {
    const confirmSubmit = window.confirm("Are you sure you want to submit the test?");
    if (confirmSubmit) {
      setIsTestSubmitted(true);
      alert("Test submitted successfully!");

      // Ask the user to turn off the webcam
      const turnOffWebcam = window.confirm("Do you want to turn off the webcam?");
      if (turnOffWebcam) {
        stopWebcam();
      }

      await exitFullScreen(); // Exit full-screen mode
      navigate("/home"); // Redirect to home after submission
    }
  };

  // Stop the webcam
  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop()); // Stop all tracks
      videoRef.current.srcObject = null; // Clear the video source
    }
  };

  // Start the test
  const handleStartTest = () => {
    enterFullScreen(); // Enter full-screen mode
    setIsTestStarted(true); // Mark the test as started
  };

  // Prevent tab switching
  const preventTabSwitch = () => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const confirmSubmit = window.confirm("You are not allowed to leave the test. Do you want to submit the test now?");
        if (confirmSubmit) {
          handleSubmitTest(); // Submit the test
        } else {
          enterFullScreen(); // Return to full-screen mode
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  };

  // Prevent exiting full-screen mode
  const preventExitFullScreen = () => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        const confirmSubmit = window.confirm("You are not allowed to exit full-screen mode. Do you want to submit the test now?");
        if (confirmSubmit) {
          handleSubmitTest(); // Submit the test
        } else {
          enterFullScreen(); // Return to full-screen mode
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  };

  useEffect(() => {
    if (isTestStarted) {
      loadModels(); // Load models when the test starts
      startWebcam(); // Start the webcam
      const cleanupVisibilityListener = preventTabSwitch(); // Prevent tab switching
      const cleanupFullScreenListener = preventExitFullScreen(); // Prevent exiting full-screen mode
      const cleanupFaceDetection = monitorFaceDetection(); // Monitor face detection

      return () => {
        cleanupVisibilityListener(); // Clean up the event listener
        cleanupFullScreenListener(); // Clean up the full-screen listener
        cleanupFaceDetection(); // Clean up the face detection interval
      };
    }
  }, [isTestStarted, warningCount]); // Add warningCount as a dependency

  return (
    <div className="online-test-container" ref={testContainerRef}>
      <h1>Online Test</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : !isTestStarted ? (
        <button onClick={handleStartTest}>Start Test</button>
      ) : (
        <div className="test-layout">
          {/* Webcam Section */}
          <div className="webcam-section">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              width="320"
              height="240"
              style={{ borderRadius: "10px", border: "2px solid #ccc" }}
            />
            {noFaceDetected && (
              <p className="no-face-detected">No face detected. Please ensure your face is visible.</p>
            )}
          </div>

          {/* Test Questions Section */}
          <div className="test-questions-section">
            <h2>Test Questions</h2>
            <div className="question">
              <p>1. What is the capital of France?</p>
              <input type="text" placeholder="Your answer" />
            </div>
            <div className="question">
              <p>2. Solve: 2 + 2 = ?</p>
              <input type="text" placeholder="Your answer" />
            </div>

            {/* Submit Button */}
            <div className="submit-button-container">
              <button onClick={handleSubmitTest} className="submit-button">
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OnlineTest;