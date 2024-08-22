import React, {createContext, useContext} from 'react';
import {createStyleProps, loadFonts} from '../utils/global/init/initialize';
import {getStyleConfig} from '../utils/global/init/getStyleConfig';

const StylesContext = createContext();

export const StylesProvider = ({children, THEME, settings}) => {
	const defaultFontFamily = settings.fontConfig.fontFamily;

	// Load fonts
	// Load both the default font and the default copy font
	// if the font is local, use the loadLocalFont function
	// if the font is remote, use the loadRemoteFont function
	// if the font is not provided, do nothing
	const { fontConfig, defaultCopyFontFamily } = settings;

	// Load the default font (used for all text except copy)
	const loadLocalFont = (font) => font.isLocal && font.loadFont();
	const loadRemoteFont = (font) => !font.isLocal && loadFonts(font);
	loadLocalFont(fontConfig) || loadRemoteFont(fontConfig);

	// Load the default copy font (used for copy text only)
	loadLocalFont(defaultCopyFontFamily) || loadRemoteFont(defaultCopyFontFamily);



	// Theme  cusomisation specific Overrides
	const overrides = {
		forceCopyColor:
			settings.Video.TemplateVariation.Background === 'Graphics'
				? 'black'
				: false,
	};

	// Create style config
	const StyleConfig = getStyleConfig(
		createStyleProps(
			THEME,
			defaultFontFamily,
			settings.defaultCopyFontFamily,
			settings.gradientDegree,
			overrides
		)
	);

	const BuildProps = {
		HeroImage: settings.Video.HeroImage,
		TemplateVariation: settings.Video.TemplateVariation,
		TIMINGS: settings.TIMINGS.FPS_MAIN + 210,
		THEME,
		fontFamily: {defaultFontFamily},
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
