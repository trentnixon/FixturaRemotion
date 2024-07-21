import React, { createContext, useContext } from 'react';
import { createStyleProps, loadFonts } from '../../utils/global/init/initialize';
import { getStyleConfig } from '../../utils/global/init/getStyleConfig';
import {getPrimarySponsor} from '../../structural/Sponsors/Utils/utils';
const TemplateContext = createContext();

export const TemplateProvider = ({ children, settings, DATA }) => {
  const { TIMINGS, VIDEOMETA } = DATA;
  const { Video, Club } = VIDEOMETA;
  const THEME = Video.Theme;
  const defaultFontFamily = settings.fontConfig.fontFamily;

  // Load fonts
  loadFonts(settings.fontConfig);

  // Create style config
  const StyleConfig = getStyleConfig(
    createStyleProps(THEME, defaultFontFamily, settings.defaultCopyFontFamily, settings.gradientDegree)
  );

  const BuildProps = {
    HeroImage: Video.HeroImage,
    TemplateVariation: Video.TemplateVariation,
    TIMINGS: TIMINGS.FPS_MAIN + 210,
    THEME,
    fontFamily: { defaultFontFamily },
    Sport: Club.Sport,
    BackgroundStyles: StyleConfig.Color.Background,
  };

  const Heights = settings.heights;
  const hasPrimarySponsor = getPrimarySponsor(Club.Sponsors);

  const contextValue = {
    TIMINGS,
    THEME,
    Video,
    Club,
    StyleConfig,
    Heights,
    BuildProps,
    hasPrimarySponsor,
    DATA
  };

  return (
    <TemplateContext.Provider value={contextValue}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
