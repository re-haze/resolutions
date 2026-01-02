import { useState, useEffect } from "react";
import "../../styles/Step4.css";



const Step2 = ({ data, handleChange }) => {
  const [selectedImage, setSelectedImage] = useState(data.profilePicture || null);


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setSelectedImage(imageData);
        handleChange({
          target: { name: "profilePicture", value: imageData },
        });
      };
      reader.readAsDataURL(file);
    }
  }

  // Styles to match the main buttons from App.css
  const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: 'var(--button-bg)',
    color: 'var(--button-text)',
    border: '2px solid var(--button-border)',
    padding: '12px 24px',
    borderRadius: '30px',
    fontFamily: '"Outfit", sans-serif',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    marginTop: '20px'
  };

  return (
    <div>
      <h2>Choose a Profile Picture</h2>
      <div className="upload-container" style={{ textAlign: 'center' }}>
        <input
          type="file"
          accept="image/*"
          id="file-input"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <label htmlFor="file-input" className="upload-button" style={buttonStyle}>
          Upload
        </label>
      </div>
      {selectedImage && (
        <div className="image-preview">
          <h3>Preview:</h3>
          <img src={selectedImage} alt="Profile Preview" className="preview-img" />
        </div>
      )}
    </div>
  )
}

// maybe let user crop image

export default Step2;
