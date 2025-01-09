import { useState, useEffect } from "react";
import "../../styles/Step1.css";

const Step1 = ({ data, handleChange }) => {
  const maxChars = 300;
  const [goals, setGoals] = useState([{ id: 1, resolution: data.resolution || "" }]);

  
  const handleGoalChange = (id, value) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, resolution: value } : goal
      )
    )
  }


  const addGoal = () => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: prevGoals.length + 1, resolution: "" },
    ]);
  }

  const removeGoal = (id) => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    
  }

  return (
    <div>
      <h2>Goals for 2025</h2>
      {goals.map((goal) => (
        <div key={goal.id} className="goal-container">
          <textarea
            id={`goal-${goal.id}`}
            name={`goal-${goal.id}`}
            className="textStyle"
            value={goal.resolution}
            onChange={(e) => handleGoalChange(goal.id, e.target.value)}
            maxLength={maxChars}
            placeholder={`Enter Goal here`}
            
            
          />
           <div className="charCount">
            {goal.resolution.length}/{maxChars}
          </div>
         
           
            <button
              className="removeButton"
              onClick={() => removeGoal(goal.id)}
            >X
            </button>
          
          
        </div>
      ))}
      <button className="addButton" onClick={addGoal}>
        + Add Goal
      </button>
    </div>
  )
}

export default Step1;
