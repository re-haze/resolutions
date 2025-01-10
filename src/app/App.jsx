import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Step1 from "../components/Steps/Step1";
import Step2 from"../components/Steps/Step2";
import Step3 from"../components/Steps/Step3";
import Step4 from"../components/Steps/Step4";
import Step5 from"../components/Steps/Step4";
import "../styles/App.css"

const App = () => {
  
  const totalSteps = 5; 
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    goals: [{ id: 1, resolution: "" }], 
    profilePicture: "",
    username: "",
    artTag: "",
    primaryFont: "",
    secondaryFont: "",
    innerBallColor: "",
    outerBallColor: "",
  })

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

 

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  }

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
        return <Step5 data={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  }

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
  )
}

export default App;
