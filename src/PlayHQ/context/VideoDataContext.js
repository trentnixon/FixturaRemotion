import React, { createContext, useContext } from 'react';

const VideoDataContext = createContext();

export const VideoDataProvider = ({ children, Video, DATA }) => {
  const contextValue = {
    Video,
    DATA,
  };

  return (
    <VideoDataContext.Provider value={contextValue}>
      {children}
    </VideoDataContext.Provider>
  );
}; 

export const useVideoDataContext = () => {
  return useContext(VideoDataContext);
}; 