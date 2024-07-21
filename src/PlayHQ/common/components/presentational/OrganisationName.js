import React from 'react';
import { useVideoDataContext } from '../../../context/VideoDataContext';
import { H, P } from '../../type/primitives';

// Default styles for the Title, without any animation
const defaultStyleObj = {
  margin: '0',
  padding: '0',
};

export const PresentationalOrganisationName = ({ as = 'h1', level = 1, styleObj = {}, animationObj = {} }) => {
  const { DATA } = useVideoDataContext();
  const { Club } = DATA.VIDEOMETA;

  const combinedStyles = {
    ...defaultStyleObj, 
    ...styleObj,
    ...animationObj,
  };

  return (
    <>
      {as === 'p' ? (
        <P {...combinedStyles}>{Club.Name}</P>
      ) : (
        <H level={level} {...combinedStyles}>
          {Club.Name}
        </H>
      )}
    </>
  );
};
