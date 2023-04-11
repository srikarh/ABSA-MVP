import React from 'react';
import ProgressBar from './Component/ProgressBar';

const MyComponent = () => {
  return (
    <div>
      <h1>My Component</h1>
      <ProgressBar progress={95} />
    </div>
  );
};

export default MyComponent;
