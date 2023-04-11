import React, { useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleStep = (step) => {
    setProgress(progress + step);
  }

  return (
    <div>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="buttons">
        <button onClick={() => handleStep(33)}>Step 1</button>
        <button onClick={() => handleStep(33)}>Step 2</button>
        <button onClick={() => handleStep(34)}>Step 3</button>
      </div>
    </div>
  );
};

export default ProgressBar;
