import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import clip from "../../assets/clip.svg";
import polaroidFrame from "../../assets/polaroid.png";
import "../../styles/Step5.css";

const Step5 = ({ data, handleChange }) => {
  const {
    goals,
    profilePicture,
    username,
    artTag,
    primaryFont,
    secondaryFont,
    innerBallColor,
    outerBallColor
  } = data;

  const fonts = [primaryFont, secondaryFont].filter(Boolean);

  useEffect(() => {
    if (fonts.length > 0) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${fonts.join('&family=').replace(/ /g, '+')}`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [fonts]);

  const handleDownload = async () => {
    const element = document.getElementById('composition-area');
    if (element) {
      try {
        const canvas = await html2canvas(element, {
          backgroundColor: null,
          scale: 2,
          useCORS: true, // Often helps with external images
          onclone: (clonedDoc) => {
            const clonedElement = clonedDoc.getElementById('composition-area');
            if (clonedElement) {
              // Reset any responsive transforms so the download is full size 1:1
              clonedElement.style.transform = 'none';
              clonedElement.style.margin = '0';
              // Extend height to prevent bottom clipping
              clonedElement.style.height = '600px';

              // Remove skew from wrapper during capture to prevent html2canvas artifacts
              const wrapper = clonedElement.querySelector('.polaroid-wrapper');
              if (wrapper) {
                wrapper.style.transform = 'rotate(15deg)'; // Pure rotation, no skew
              }
            }
          }
        });
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        if (typeof link.download === 'string') {
          link.href = data;
          link.download = `resolutions-2026-${username || 'user'}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
      } catch (error) {
        console.error("Error generating image:", error);
        alert("Failed to generate image.");
      }
    }
  };

  return (
    <div className="step5-container">
      <h2>Your 2026 Resolutions</h2>

      {/* This is the area we will capture */}
      <div id="composition-area" className="final-composition">

        {/* The Card */}
        <div className="goals-card" style={{ border: `8px solid ${outerBallColor || '#d4a373'}` }}>
          <div className="goals-title" style={{ fontFamily: primaryFont ? `"${primaryFont}"` : 'inherit' }}>
            2025 Goals
          </div>

          <div className="resolutions-list">
            {goals.map((goal) => goal.resolution ? (
              <div
                key={goal.id}
                className="resolution-strip"
                style={{
                  fontFamily: secondaryFont ? `"${secondaryFont}"` : 'inherit',
                  backgroundColor: innerBallColor || '#faedcd'
                }}
              >
                {goal.resolution}
              </div>
            ) : null)}
          </div>

          <div className="signature" style={{ fontFamily: primaryFont ? `"${primaryFont}"` : 'serif' }}>
            {username}
          </div>
        </div>



        {/* The Polaroid (Overlapping) */}
        <div className="polaroid-wrapper">
          <img src={clip} alt="clip" className="paperclip" />

          <div className="polaroid-structure">
            {/* The Frame Image */}
            <img src={polaroidFrame} alt="frame" className="polaroid-base" />

            {/* The User Photo (Absolute positioned to fit in frame) */}
            <div className="photo-insert">
              {profilePicture ? (
                <img src={profilePicture} alt="User Profile" className="profile-pic" />
              ) : (
                <div className="no-image-placeholder">No Image</div>
              )}
            </div>

            {/* Text Overlay */}
            <div className="art-tag" style={{ fontFamily: primaryFont ? `"${primaryFont}"` : 'cursive' }}>
              {artTag || '#2025'}
            </div>
          </div>
        </div>

      </div>

      <button className="download-btn" onClick={handleDownload}>
        Download Image
      </button>
    </div>
  )
}

export default Step5;