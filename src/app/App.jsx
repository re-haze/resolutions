import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Step1 from "../components/Steps/Step1";
import Step2 from"../components/Steps/Step2";
import Step3 from"../components/Steps/Step3";
import Step4 from"../components/Steps/Step4";
import "../styles/App.css"

const App = () => {
  const totalSteps = 5; 
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    resolution: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleDownload = () => {
    alert("Form submitted: " + JSON.stringify(formData));
    setCurrentStep(totalSteps + 1);
  };

  const handleShare = () => {
    alert("Form submitted: " + JSON.stringify(formData));
    setCurrentStep(totalSteps + 1);
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 data={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 data={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 data={formData} handleChange={handleChange} />;
      case 5:
        return (
          <div>
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleShare}>Share</button>
        </div>
          
        );
      default:
        return null;
    }
  };

  return (
    <div className="container dark-mode" >
      <h1>2025 Resolutions</h1>
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div>{renderStep()}</div>
      {currentStep <= totalSteps && (
        <div className="buttons">
          {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
          {currentStep < totalSteps && <button onClick={nextStep}>Next</button>}
        </div>
      )}
    </div>
  );
};

export default App;
