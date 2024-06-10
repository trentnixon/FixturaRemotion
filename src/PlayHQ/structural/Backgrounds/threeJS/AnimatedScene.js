// AnimatedScene.js
import React, { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import Plane from './Plane';
import { useCurrentFrame } from 'remotion';

const AnimatedScene = () => {
  const conf = {
    fov: 75,
    cameraZ: 75,
    xyCoef: 50,
    zCoef: 10,
    lightIntensity: 0.9,
    ambientColor: 0x000000,
    light1Color: 0x0E09DC,
    light2Color: 0x1CD1E1,
    light3Color: 0x18C02C,
    light4Color: 0xee3bcf,
    width: 100,
    height: 100,
  };

  const mousePosition = useRef({ x: 0, y: 0 });
  const frame = useCurrentFrame();

  // Add lights to the scene
  useThree(({ scene }) => {
    const lightDistance = 500;
    const r = 30;
    const y = 10;
    const time = frame * 0.01; // Adjust the animation speed
    const d = 50;

    const light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
    light1.position.set(Math.sin(time * 0.1) * d, y, Math.cos(time * 0.2) * d);
    scene.add(light1);

    const light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
    light2.position.set(Math.cos(time * 0.3) * d, -y, Math.sin(time * 0.4) * d);
    scene.add(light2);

    const light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
    light3.position.set(Math.sin(time * 0.5) * d, y, Math.sin(time * 0.6) * d);
    scene.add(light3);

    const light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
    light4.position.set(Math.sin(time * 0.7) * d, y, Math.cos(time * 0.8) * d);
    scene.add(light4);

    return () => {
      scene.remove(light1);
      scene.remove(light2);
      scene.remove(light3);
      scene.remove(light4);
    };
  });

  return (
    <>
      <Plane conf={conf} mousePosition={mousePosition} />
    </>
  );
};

export default AnimatedScene;
