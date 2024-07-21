import React from 'react';
import { VideoDataProvider } from './VideoDataContext';
import { LayoutProvider } from './LayoutContext';
import { StylesProvider } from './StyleContext';

export const GlobalProvider = ({ children, settings, DATA }) => {
  const { TIMINGS, VIDEOMETA } = DATA;
  const { Video, Club } = VIDEOMETA;
  const THEME = Video.Theme;

  return (
    <VideoDataProvider Video={Video} DATA={DATA}>
      <StylesProvider THEME={THEME} settings={{ ...settings, Video, TIMINGS, Club }}>
        <LayoutProvider TIMINGS={TIMINGS} Club={Club} settings={settings}>
          {children}
        </LayoutProvider>
      </StylesProvider>
    </VideoDataProvider>
  );
};
