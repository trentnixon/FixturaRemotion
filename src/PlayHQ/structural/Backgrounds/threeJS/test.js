// ThreeBasic.js
import React from 'react';
import { ThreeCanvas } from '@remotion/three';
import { useVideoConfig } from 'remotion';
import AnimatedPlane from './Plane';
import AnimatedScene from './AnimatedScene';

const ThreeBasic = () => {
  const { width, height } = useVideoConfig();

  return (
    <ThreeCanvas
      orthographic={false}
      width={width}
      height={height}
      style={{ backgroundColor: 'white' }}
      camera={{ fov: 75, position: [0, 0, 470] }}
    >
      <ambientLight intensity={0.15} />
      <pointLight args={[undefined, 0.4]} position={[200, 200, 0]} />
      <AnimatedScene />
    </ThreeCanvas>
  );
};

export default ThreeBasic;
