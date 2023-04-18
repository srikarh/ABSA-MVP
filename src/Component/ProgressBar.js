import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, onChange }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (progress < 33) {
      setStep(1);
    } else if (progress < 66) {
      setStep(2);
    } else {
      setStep(3);
    }
  }, [progress]);

  const handleClick = (step) => {
    let newProgress;
    if (step === 1) {
      newProgress = 33;
    } else if (step === 2) {
      newProgress = 66;
    } else {
      newProgress = 100;
    }
    onChange(newProgress);
  }

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <div className="steps">
        <div className={`step ${step >= 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Step 1</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>Step 2</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>Step 3</div>
      </div>
    </div>
  );
};

export default ProgressBar;
