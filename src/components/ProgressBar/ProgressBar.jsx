import React from "react";
import "../../styles/ProgressBar.css";

const ProgressBar = ({ currentStep, totalSteps }) => {
    return (
      <div className="progress-bar">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`step ${index + 1 <= currentStep ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgressBar;