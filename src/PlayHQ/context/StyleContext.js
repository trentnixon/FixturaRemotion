import React, { createContext, useContext } from 'react';
import { createStyleProps, loadFonts } from '../utils/global/init/initialize';
import { getStyleConfig } from '../utils/global/init/getStyleConfig';

const StylesContext = createContext();

export const StylesProvider = ({ children, THEME, settings }) => {
  const defaultFontFamily = settings.fontConfig.fontFamily;

  // Load fonts
  loadFonts(settings.fontConfig);

  // Create style config
  const StyleConfig = getStyleConfig(
    createStyleProps(THEME, defaultFontFamily, settings.defaultCopyFontFamily, settings.gradientDegree)
  );

  const BuildProps = {
    HeroImage: settings.Video.HeroImage,
    TemplateVariation: settings.Video.TemplateVariation,
    TIMINGS: settings.TIMINGS.FPS_MAIN + 210,
    THEME,
    fontFamily: { defaultFontFamily },
    Sport: settings.Club.Sport,
    BackgroundStyles: StyleConfig.Color.Background,
  };

  const contextValue = {
    THEME,
    StyleConfig,
    BuildProps,
  };

  return (
    <StylesContext.Provider value={contextValue}>
      {children}
    </StylesContext.Provider>
  );
};

export const useStylesContext = () => {
  return useContext(StylesContext);
};
 