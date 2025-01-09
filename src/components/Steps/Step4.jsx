import React, { useState, useEffect } from 'react';
import "../../styles/Step1.css";

const Step4 = ({ data, handleChange }) => {
  const [selectedFont, setSelectedFont] = useState('');
  
  const fonts = [
    'Inter',
    'The Nautigal',
    'Montserrat',
    'Lato',
    'The Girl Next Door',
    'Habibi'
  ]

  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fonts.join('&family=').replace(/ /g, '+')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [])

  const handleFontSelect = (font , targetFont) => {
    setSelectedFont(font);
    handleChange(targetFont, font);
  }
  

  return (
    <div>
      <h2>Font Selection</h2>
      <h3>Choose a Primary Style</h3>
      <div className="button-grid">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() => handleFontSelect(font, 'primaryFont')}
            className={`font-button ${selectedFont === font ? 'selected' : ''}`}
            style={{ fontFamily: `"${font}", sans-serif` }}
          >
            {font}
          </button>
        ))}
      </div>
      <h3>Choose a Secondary Style</h3>
      <div className="button-grid">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() => handleFontSelect(font, 'secondaryFont')}
            className={`font-button ${selectedFont === font ? 'selected' : ''}`}
            style={{ fontFamily: `"${font}", sans-serif` }}
          >
            {font}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Step4;