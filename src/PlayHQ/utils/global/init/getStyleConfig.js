import {
	GetBackgroundContractColorForText,
	darkenColor,
	generateGradientBackground,
	generateGradientBackground3Color,
	getBackgroundColor,
	getContrastColor,
	lightenColor,
	setOpacity,
} from '../../colors';
// Refactored and improved getStyleConfig function to be moved to a utils file.
// This refactoring includes dynamic font loading, bug checks, and removes hardcoded values.

// Dev Notes:
// - Moved hardcoded font families to dynamic inputs for better flexibility.
// - Added null pointer checks for THEME to avoid runtime errors.
// - Removed hardcoded color manipulations, making them dependent on the THEME object.
// - Introduced error handling for missing or undefined THEME object.
// - Recommended to further abstract color manipulation functions (darken, lighten, setOpacity)
//   into a separate module for better code organization and reuse.

// Future Improvements:
// - Consider extending THEME validation to ensure it contains all required color properties.
// - Explore the possibility of integrating a theme validation schema.

/**
 * Generates a style configuration object based on a given theme.
 *
 * @param {Object} THEME - The theme object containing primary and secondary color definitions.
 * @returns {Object} A configuration object containing styles based on the provided theme.
 * @throws {Error} Throws an error if the THEME object is not provided or incomplete.
 */

// Function to generate style configuration
export const getStyleConfig = (STYLEOBJ) => {
	const {
		THEME,
		defaultFontFamily,
		fontSizing,
		letterSpacing,
		lineHeight,
		defaultCopyFontFamily,
		gradientDegree,
		overrides,
	} = STYLEOBJ;

	console.log('overrides ', overrides);
	if (
		!THEME ||
		typeof THEME !== 'object' ||
		!THEME.primary ||
		!THEME.secondary
	) {
		throw new Error(
			'Invalid THEME object provided. THEME must contain primary and secondary color definitions.'
		);
	}

	const primaryBgColor = darkenColor(
		getBackgroundColor(THEME.primary, THEME.secondary),
		15
	);
	const secondaryBgColor = darkenColor(
		getBackgroundColor(THEME.secondary, THEME.primary),
		15
	);
	const gradient = `linear-gradient(${gradientDegree}, ${darkenColor(
		THEME.secondary
	)}, ${THEME.primary}, ${THEME.primary}, ${lightenColor(THEME.secondary)})`;
	const inverseGradient = `linear-gradient(${gradientDegree}, ${darkenColor(
		THEME.primary
	)}, ${THEME.secondary}, ${THEME.secondary}, ${lightenColor(THEME.primary)})`;

	// Add new gradient colors
	const QLDCgradient = `linear-gradient(${gradientDegree}, ${darkenColor(
		THEME.primary,
		25
	)}, ${lightenColor(THEME.primary)})`;

	return {
		Font: {
			Label: defaultFontFamily,
			CopyLabel: defaultCopyFontFamily.fontFamily,
			Title: {fontFamily: defaultFontFamily, fontWeight: 900},
			TitleAlt: {fontFamily: defaultFontFamily, fontWeight: 400},
			Copy: {fontFamily: defaultCopyFontFamily.fontFamily, fontWeight: 400},
			fontSizing,
			letterSpacing,
			lineHeight,
		},
		Color: {
			Primary: {
				Main: THEME.primary,
				Contrast: getContrastColor(THEME.primary),
				BackgroundContractColor: overrides.forceCopyColor
					? overrides.forceCopyColor
					: GetBackgroundContractColorForText(THEME.primary, THEME.secondary),
				Darken: darkenColor(THEME.primary),
				Lighten: lightenColor(THEME.primary),
				Opacity: (opacity) => setOpacity(THEME.primary, opacity),
			},
			Secondary: {
				Main: THEME.secondary,
				Contrast: getContrastColor(THEME.secondary),
				BackgroundContractColor: GetBackgroundContractColorForText(
					THEME.secondary,
					THEME.primary
				),
				Darken: darkenColor(THEME.secondary),
				Lighten: lightenColor(THEME.secondary),
				Opacity: (opacity) => setOpacity(THEME.secondary, opacity),
			},
			Background: {
				Color: primaryBgColor,
				Gradient: gradient,
				Gradients: {
					QLDC: QLDCgradient,
					DualTone: {
						Horizontal: {
							Primary: generateGradientBackground(
								THEME.primary,
								THEME.secondary,
								'90deg'
							),
							PrimaryWhite: generateGradientBackground(
								THEME.primary,
								'#fff',
								'90deg'
							),
							PrimaryDark: generateGradientBackground(
								THEME.primary,
								darkenColor(THEME.primary),
								'90deg'
							),
							Secondary: generateGradientBackground(
								THEME.secondary,
								THEME.primary,
								'90deg'
							),
							SecondaryWhite: generateGradientBackground(
								THEME.secondary,
								'#fff',
								'90deg'
							),
							SecondaryDark: generateGradientBackground(
								THEME.secondary,
								darkenColor(THEME.secondary),
								'90deg'
							),
						},
						Vertical: {
							Primary: generateGradientBackground(
								THEME.primary,
								THEME.secondary,
								'0deg'
							),
							PrimaryWhite: generateGradientBackground(
								THEME.primary,
								'#fff',
								'0deg'
							),
							PrimaryDark: generateGradientBackground(
								THEME.primary,
								darkenColor(THEME.primary),
								'0deg'
							),
							Secondary: generateGradientBackground(
								THEME.secondary,
								THEME.primary,
								'0deg'
							),
							SecondaryWhite: generateGradientBackground(
								THEME.secondary,
								'#fff',
								'0deg'
							),
							SecondaryDark: generateGradientBackground(
								THEME.secondary,
								darkenColor(THEME.secondary),
								'0deg'
							),
						},
					},
					TriTone: {
						Horizontal: {
							Primary: generateGradientBackground3Color(
								THEME.primary,
								THEME.secondary,
								'90deg'
							),
							PrimaryWhite: generateGradientBackground3Color(
								THEME.primary,
								'#fff',
								'90deg'
							),
							PrimaryDark: generateGradientBackground3Color(
								THEME.primary,
								darkenColor(THEME.primary),
								'90deg'
							),
							Secondary: generateGradientBackground3Color(
								THEME.secondary,
								THEME.primary,
								'90deg'
							),
							SecondaryWhite: generateGradientBackground3Color(
								THEME.secondary,
								'#fff',
								'90deg'
							),
							SecondaryDark: generateGradientBackground3Color(
								THEME.secondary,
								darkenColor(THEME.secondary),
								'90deg'
							),
						},
						Vertical: {
							Primary: generateGradientBackground3Color(
								THEME.primary,
								THEME.secondary,
								'0deg'
							),
							PrimaryWhite: generateGradientBackground3Color(
								THEME.primary,
								'#fff',
								'0deg'
							),
							PrimaryDark: generateGradientBackground3Color(
								THEME.primary,
								darkenColor(THEME.primary),
								'0deg'
							),
							Secondary: generateGradientBackground3Color(
								THEME.secondary,
								THEME.primary,
								'0deg'
							),
							SecondaryWhite: generateGradientBackground3Color(
								THEME.secondary,
								'#fff',
								'0deg'
							),
							SecondaryDark: generateGradientBackground3Color(
								THEME.secondary,
								darkenColor(THEME.secondary),
								'0deg'
							),
						},
					},
				},
				Contrast: getContrastColor(primaryBgColor),
				Inverse: {
					Color: secondaryBgColor,
					Gradient: inverseGradient,
					Contrast: getContrastColor(secondaryBgColor),
				},
				Opposite: {
					PrimaryAsSecondary: generateGradientBackground(
						THEME.secondary,
						THEME.primary,
						gradientDegree
					),
					SecondaryAsPrimary: generateGradientBackground(
						THEME.primary,
						THEME.secondary,
						gradientDegree
					),
				},
			},
		},
	};
};

// Notes for LLM:
// This function, getStyleConfig, is designed to generate a style configuration based on a provided theme.
// It is part of a larger front-end framework or library, specifically used for theming and styling components.
// This function should be located in a utils or helpers directory within the project's structure, to be imported
// where needed for styling components according to the application's theme.
