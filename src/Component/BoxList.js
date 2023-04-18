import React, { useState } from 'react';
import './BoxList.css';
import ProgressBar from './ProgressBar';

const BoxList = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [progressValues, setProgressValues] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [newBoxText, setNewBoxText] = useState('');

  const handleBoxClick = (boxIndex) => {
    setActiveBox(boxIndex);
  }

  const handleProgressBarChange = (newProgress, boxIndex) => {
    const updatedProgressValues = [...progressValues];
    updatedProgressValues[boxIndex] = newProgress;
    setProgressValues(updatedProgressValues);
  }

  const handleNewBoxTextChange = (event) => {
    setNewBoxText(event.target.value);
  }

  const handleAddBox = () => {
    const newBox = { text: newBoxText };
    setBoxes([...boxes, newBox]);
    setProgressValues([...progressValues, 0]);
    setNewBoxText('');
  }

  return (
    <div className="box-list">
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`box ${index === activeBox ? 'active' : ''}`}
            onClick={() => handleBoxClick(index)}
          >
            {box.text}
          </div>
        ))}
        <div className="new-box-form">
          <input type="text" value={newBoxText} onChange={handleNewBoxTextChange} placeholder="Enter box text" />
          <button onClick={handleAddBox}>Add Box</button>
        </div>
      </div>
      {activeBox !== null &&
        <div className="progress-container">
          <ProgressBar progress={progressValues[activeBox]} onChange={(newProgress) => handleProgressBarChange(newProgress, activeBox)} />
        </div>
      }
    </div>
  );
};

export default BoxList;
