import React, { useState, useEffect } from 'react';
import "../../styles/Step1.css";

const Step5 = ({ data, handleChange }) => {
 



 
  return (
    <div>
      <h2>Complete!</h2>
      <div className='background'>
        <div className='textContainer'>
          <div className='Resolutions'>
            <div className='Resolution1'></div>
            <div className='Resolution2'></div>
            <div className='Resolution3'></div>
          </div>
          <div className='username-text'></div>
        </div>
        <div className='polaroid-background'><div className='img-container'></div></div>
        <div className='artTag-text'></div>

      </div>
    </div>
  )
}

export default Step5;