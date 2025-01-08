import { useState, useEffect } from 'react'

const Step1 = ({ data, handleChange }) => {
  return (
    <div>
      <label htmlFor="resolution">What's your resolution?</label>
      <textarea
        id="resolution"
        name="resolution"
        value={data.resolution}
        onChange={handleChange}
        maxLength={280}
      />
    </div>
  );
};

export default Step1;
