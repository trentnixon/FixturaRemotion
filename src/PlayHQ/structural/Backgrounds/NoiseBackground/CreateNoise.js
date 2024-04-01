import React from 'react';
import {NoiseComp} from './niose3D'; // Adjust the import path as needed

const CreateNoiseBackground = ({backgroundColor, THEME}) => {
  return (
    <div
      style={{
        backgroundColor,
        height: '100%',
        width: '100%',
      }}
    >
      <NoiseComp speed={0.01} circleRadius={5} maxOffset={60} THEME={THEME} />
    </div>
  );
};

export default CreateNoiseBackground;
