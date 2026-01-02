import { useState, useEffect } from "react";
import "../../styles/Step1.css";

const Step1 = ({ data, handleChange }) => {
  const maxChars = 300;
  //   const [goals, setGoals] = useState([{ id: 1, resolution: data.resolution || "" }]);


  const handleGoalChange = (id, value) => {
    const updatedGoals = data.goals.map((goal) =>
      goal.id === id ? { ...goal, resolution: value } : goal
    );
    handleChange("goals", updatedGoals);
  }


  const addGoal = () => {
    const newGoal = { id: data.goals.length + 1, resolution: "" };
    handleChange("goals", [...data.goals, newGoal]);
  }

  const removeGoal = (id) => {
    const updatedGoals = data.goals.filter((goal) => goal.id !== id);
    handleChange("goals", updatedGoals);

  }

  return (
    <div>
      <h2>Goals for 2026</h2>
      {data.goals.map((goal) => (
        <div key={goal.id} className="goal-container">
          <div className="input-wrapper">
            <textarea
              id={`goal-${goal.id}`}
              name={`goal-${goal.id}`}
              className="textStyle"
              value={goal.resolution}
              onChange={(e) => handleGoalChange(goal.id, e.target.value)}
              maxLength={maxChars}
              placeholder="Enter Goal here"
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

        </div>
      ))}
      <button className="addButton" onClick={addGoal}>
        + Add Goal
      </button>
    </div>
  );
};

export default Step1;
