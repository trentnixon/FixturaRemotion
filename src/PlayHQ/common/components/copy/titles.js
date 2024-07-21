// DEPRECATED MOVE TO THE NEW PRESENTATION LAYER
// Title.js

import React from 'react';
import { P } from '../../type/primitives';

// Default styles for the Title, without any animation
const defaultStyleObj = {
  lineHeight: '1.1',
  textAlign: 'center',
  margin: '0',
  padding: '0',
  textTransform: 'uppercase',
  
};


export const VideoHeader = ({ styleObj = {}, animationObj = {}, value }) => {
  // Merge default styles with the incoming styleObj
  const combinedStyles = {
    ...defaultStyleObj,
    ...styleObj,
    ...animationObj, // Apply animation styles if any
  };

  return (
    <P level={1} {...combinedStyles}>
      {value}
    </P>
  );
}; 
