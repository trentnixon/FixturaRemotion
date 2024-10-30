import React, {createContext, useContext} from 'react';
import {createStyleProps, loadFonts} from '../utils/global/init/initialize';
import {getStyleConfig} from '../utils/global/init/getStyleConfig';

const StylesContext = createContext();

export const StylesProvider = ({children, THEME, settings}) => {
	const defaultFontFamily = settings.fontConfig.fontFamily;

	// Load fonts as you already have it
	const {fontConfig, defaultCopyFontFamily} = settings;
	const loadLocalFont = (font) => font.isLocal && font.loadFont();
	const loadRemoteFont = (font) => !font.isLocal && loadFonts(font);
	loadLocalFont(fontConfig) || loadRemoteFont(fontConfig);
	loadLocalFont(defaultCopyFontFamily) || loadRemoteFont(defaultCopyFontFamily);

	// Theme customization specific overrides
	const overrides = {
		forceCopyColor:
			settings.Video.TemplateVariation.Background === 'Graphics'
				? 'black'
				: false,
	};

	// Create the style config
	const StyleConfig = getStyleConfig(
		createStyleProps(
			THEME,
			defaultFontFamily,
			settings.defaultCopyFontFamily,
			settings.fontSizing,
			settings.letterSpacing,
			settings.lineHeight,
			settings.gradientDegree,
			overrides
		)
	);

	// Utility to build font styles for different elements
	// Utility to build font styles for different elements
	const buildTextStyle = (
		key,
		size = 'M',
		weight = 'Normal',
		customOverrides = {}
	) => {
		const fontSizing = settings.fontSizing[key] || {};
		const letterSpacing = settings.letterSpacing[key] || '0em';
		const lineHeight = settings.lineHeight[key] || '1em';

		// Determine the correct font family and font weight based on the key (Title or Copy)
		const isTitle = key.includes('Title');
		const fontFamily = isTitle
			? fontConfig.fontFamily
			: defaultCopyFontFamily.fontFamily;
		const fontWeight =
			settings.fontWeight[isTitle ? 'Title' : 'Copy'][weight] || '400';

		return {
			fontSize: fontSizing[size] || '1em',
			letterSpacing,
			lineHeight,
			fontWeight, // Apply the dynamic font weight
			fontFamily, // Apply the appropriate font family
			...customOverrides,
		};
	};

	// Example predefined styles for different UI elements
	const TextStyles = {
		// Intro Section
		introTitle: buildTextStyle('Title', 'L', 'Bold'), // Large intro title, bold weight
		introSubtitle: buildTextStyle('Title', 'M', 'Normal'), // Medium intro subtitle, normal weight
		introCopy: buildTextStyle('Title', 'S', 'Normal'), // Medium intro copy, normal weight

		// Asset Section
		assetTitle: buildTextStyle('TitleAlt', 'XL', 'Bold'), // Large asset title, bold weight
		assetSubtitle: buildTextStyle('TitleAlt', 'L', 'Normal'), // Medium asset subtitle, normal weight
		assetSubtitleBold: buildTextStyle('TitleAlt', 'L', 'Bold'),
		assetSubtitleMedium: buildTextStyle('TitleAlt', 'M', 'Normal'),
		assetSubtitleSmall: buildTextStyle('TitleAlt', 'S', 'Normal'),
		assetSubtitleMediumBold: buildTextStyle('TitleAlt', 'M', 'Bold'),
		assetSubtitleSmallBold: buildTextStyle('TitleAlt', 'S', 'Bold'),
		// Section Titles
		sectionTitle: buildTextStyle('Copy', 'XL', 'Bold'), // Large section title, bold weight
		sectionSubtitle: buildTextStyle('Copy', 'M', 'Normal'), // Medium section subtitle, normal weight

		// Copy Variations
		copyLarge: buildTextStyle('Copy', 'L', 'Normal'), // Large copy, normal weight
		copyMedium: buildTextStyle('Copy', 'M', 'Normal'), // Medium copy, normal weight
		copySmall: buildTextStyle('Copy', 'S', 'Normal'), // Small copy, normal weight
		copyXSmall: buildTextStyle('Copy', 'XS', 'Normal'),

		// Special Copy Types
		copyXLargeBold: buildTextStyle('Copy', 'XL', 'Bold'),
		copyLargeBold: buildTextStyle('Copy', 'L', 'Bold'),
		copyMediumBold: buildTextStyle('Copy', 'M', 'Bold'),
		copySmallBold: buildTextStyle('Copy', 'S', 'Bold'),
		copyXSmallBold: buildTextStyle('Copy', 'XS', 'Bold'),
		copyStandout: buildTextStyle('Copy', 'M', 'Bold', {
			textTransform: 'uppercase',
		}), // Standout copy in bold and uppercase

		// Metadata
		metadata: buildTextStyle('Copy', 'XS', 'Thin'), // Thin metadata (e.g., player names)
	};

	// Other build props and context value
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
		TextStyles, // Inject the generated text styles into the context
	};

	return (
		<StylesContext.Provider value={contextValue}>
			{children}
		</StylesContext.Provider>
	);
};

// Hook to use the StylesContext
export const useStylesContext = () => {
	return useContext(StylesContext);
};
