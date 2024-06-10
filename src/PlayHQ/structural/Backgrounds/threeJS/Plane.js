// Plane.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import SimplexNoise from 'simplex-noise';
import { useCurrentFrame } from 'remotion';

const Plane = ({ conf, mousePosition }) => {
  const planeRef = useRef();
  const simplex = new SimplexNoise();
  const frame = useCurrentFrame();

  useFrame(() => {
    const time = frame * 0.02; // Adjust the animation speed
    const gArray = planeRef.current.geometry.attributes.position.array;

    for (let i = 0; i < gArray.length; i += 3) {
      gArray[i + 2] = simplex.noise4D(
        gArray[i] / conf.xyCoef,
        gArray[i + 1] / conf.xyCoef,
        time,
        mousePosition.current.x + mousePosition.current.y
      ) * conf.zCoef;
    }

    planeRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <mesh ref={planeRef} rotation={[-Math.PI / 2 - 0.2, 0, 0]} position={[0, -25, 0]}>
      <planeBufferGeometry args={[conf.width, conf.height, conf.width / 2, conf.height / 2]} />
      <meshLambertMaterial color={0xffffff} side={'double'} />
    </mesh>
  );
};

export default Plane;
