import { useState, useEffect,useRef } from "react";
import { HexColorPicker } from "react-colorful";
import "../../styles/Step3.css";



const Step3 = ({ data, handleChange }) => {
  
  const [innerBallColor, setInnerBallColor] = useState("#CD9876");
  const [outerBallColor, setOuterBallColor] = useState("#FEFCFD");
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
  const [currentBall, setCurrentBall] = useState("");
  const colorPickerRef = useRef(null);

  const handleColorChange = (color, ball) => {
    if (ball === "inner") {
      setInnerBallColor(color);
    } else if (ball === "outer") {
      setOuterBallColor(color);
    }
  }
  const handleClickOutside = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
      setIsColorPickerVisible(false); 
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleColorPicker = (ball) => {
    setCurrentBall(ball);
    setIsColorPickerVisible((prev) => !prev);
  };


  return (
    <div>
      <h2>User Info</h2>
      <div className="form-group">
        <label htmlFor="username">Name  </label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username || ""} 
          onChange={handleChange}
          placeholder="What's your name?"
          className="username-input"
        />
          <label htmlFor="artTag">Art Tag </label>
        <input
          type="text"
          id="artTag"
          name="artTag"
          value={data.artTag || ""}
          onChange={handleChange}
          placeholder="#ArtTag"
          className="artTag-input"
        />
      </div>
      <h2>Colours</h2>
      <div className="circle-container">
        <div
          className="ball outer-ball"
          style={{ backgroundColor: outerBallColor }}
          onClick={() => toggleColorPicker("outer")}
        ></div>
        {isColorPickerVisible && currentBall === "outer" && (
          <div ref={colorPickerRef} className="color-picker-container">
            <HexColorPicker
              color={outerBallColor}
              onChange={(color) => handleColorChange(color, "outer")}
            />
          </div>
        )}

        <div
          className="ball inner-ball"
          style={{ backgroundColor: innerBallColor }}
          onClick={() => toggleColorPicker("inner")}
        ></div>
        {isColorPickerVisible && currentBall === "inner" && (
          <div ref={colorPickerRef} className="color-picker-container">
            <HexColorPicker
              color={innerBallColor}
              onChange={(color) => handleColorChange(color, "inner")}
            />
          </div>
        )}
      </div>
    </div>
  )
};

export default Step3;
