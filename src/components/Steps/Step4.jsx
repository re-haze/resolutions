import React, { useState, useEffect } from 'react';
import "../../styles/Step4.css";

const Step4 = ({ data, handleChange }) => {
  const [primaryFont, setPrimaryFont] = useState(data.primaryFont || '');
  const [secondaryFont, setSecondaryFont] = useState(data.secondaryFont || '');
  
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

  
  const handleFontSelect = (font, type) => {
    if (type === 'primaryFont') {
      setPrimaryFont(font);
    } else {
      setSecondaryFont(font);
    }
    
    const changeEvent = {
      target: {
        type: 'button',
        name: type,
        value: font
      }
    };
    handleChange(changeEvent);
  };


  return (
    <div>
      <h2>Font Selection</h2>
      <h3>Choose a Primary Style</h3>
      <div className="button-grid">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() => handleFontSelect(font, 'primaryFont')}
            className={`font-button ${primaryFont === font ? 'selected' : ''}`}
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
            className={`font-button ${secondaryFont === font ? 'selected' : ''}`}
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