const tinycolor = require('tinycolor2');
import ColorThief from 'colorthief';

const colorThief = new ColorThief();

/* Color functions, move to Actions/Utils */
export function getContrastColor(
	hexColor,
	COLORS = {white: '#ffffff', dark: '#111111'}
) {
	const bgColorObj = tinycolor(hexColor);
	console.log('bgColorObj.isDark() ', hexColor, bgColorObj.isDark());
	return bgColorObj.isDark() ? COLORS.white : COLORS.dark;
}

export const lightenColor = (color, by = 10) => {
	const darkColor = tinycolor(color).lighten(by); // darken the color by 10%
	return darkColor.toHexString(); // return the color as a hex string
};

export const darkenColor = (color, by = 10) => {
	const darkColor = tinycolor(color).darken(by); // darken the color by 10%
	return darkColor.toHexString(); // return the color as a hex string
};

export const setOpacity = (color, opacity) => {
	const colorWithOpacity = tinycolor(color).setAlpha(opacity);
	return colorWithOpacity.toRgbString(); // return the color as an rgba string
};

export function checkColorContrast(color1, color2, threshold = 4.5) {
	const colorOne = tinycolor(color1);
	const colorTwo = tinycolor(color2);

	const contrast = tinycolor.readability(colorOne, colorTwo);

	// console.log('Contrast Ratio between', color1, 'and', color2, ':', contrast);

	if (contrast < threshold) {
		/* console.log(
			'Contrast is below the threshold. Consider swapping one of the colors.'
		); */
		return {isContrasting: false, contrast};
	}
	/* console.log('Contrast is acceptable.'); */
	return {isContrasting: true, contrast};
}

const adjustColorLightness = (baseColor, targetColor, minContrast) => {
	let adjustedColor = tinycolor(baseColor);
	let contrast = tinycolor.readability(adjustedColor, targetColor);
	let iterations = 0;

	while (contrast < minContrast && iterations < 100) {
		if (adjustedColor.isLight()) {
			adjustedColor = adjustedColor.darken(1); // darken if base color is light
		} else {
			adjustedColor = adjustedColor.lighten(1); // lighten if base color is dark
		}
		contrast = tinycolor.readability(adjustedColor, targetColor);
		iterations++;
	}

	return contrast >= minContrast ? adjustedColor.toString() : null;
};

export const getBackgroundColor = (primary, secondary) => {
	const {isContrasting, contrast} = checkColorContrast(primary, secondary);
	if (isContrasting) return darkenColor(primary);

	const desiredContrast = 4.5; // Minimum desired contrast ratio for AA level
	// If contrast is below the desired level, try to adjust primary color
	if (contrast < desiredContrast) {
		const adjustedPrimary = adjustColorLightness(
			primary,
			secondary,
			desiredContrast
		);

		// Fallback to darkened primary color if unable to adjust
		return adjustedPrimary || darkenColor(primary);
	}

	return primary; // If contrast is above the desired level, return the primary color as is
};

// Create and Maniplute color palettes

export const getComplementaryColor = (color) => {
	return tinycolor(color).complement().toString();
};

export const getSplitComplementaryColors = (color) => {
	const complementary = tinycolor(color).complement();
	return [
		complementary.triad()[1].toString(),
		complementary.triad()[2].toString(),
	];
};

export const getMonochromaticPalette = (color) => {
	return tinycolor(color)
		.monochromatic()
		.map((c) => c.toString());
};

export const getAnalogousPalette = (color) => {
	return tinycolor(color)
		.analogous()
		.map((c) => c.toString());
};

export const getTriadPalette = (color) => {
	return tinycolor(color)
		.triad()
		.map((c) => c.toString());
};

export const blendColors = (color1, color2) => {
	return tinycolor.mix(color1, color2, 50).toString();
};

export const generateGradientArray = (color1, color2, steps) => {
	const gradientArray = [];
	for (let i = 0; i <= steps; i++) {
		const color = tinycolor
			.mix(color1, color2, (i / steps) * 100)
			.toHexString();
		gradientArray.push(color);
	}
	return gradientArray;
};

export const saturateOrDesaturateColor = (color, amount) => {
	return amount > 0
		? tinycolor(color).saturate(amount).toString()
		: tinycolor(color).desaturate(-amount).toString();
};

/* . END COLORS */

/** ************************************************************************************ */
/** Recipes */
/** ************************************************************************************ */
export function GetBackgroundContractColorForText(primary, secondary) {
	return getContrastColor(getBackgroundColor(primary, secondary));
}
export const getTitleColorOverGradient = (
	primary,
	secondary,
	Opacity = 0.75
) => {
	// Get the background color which is primary with 0.75 opacity
	const backgroundColor = setOpacity(primary, Opacity);

	// Check if secondary color has good contrast over the gradient background
	const {isContrasting: isSecondaryContrasting} = checkColorContrast(
		backgroundColor,
		secondary
	);

	if (isSecondaryContrasting) {
		// If secondary color has good contrast, return it
		return secondary;
	}
	// If secondary color does not have good contrast, compare contrast of white and black with background
	// And return the one with better contrast
	const whiteContrast = checkColorContrast(backgroundColor, '#ffffff').contrast;
	const blackContrast = checkColorContrast(backgroundColor, '#000000').contrast;
	return whiteContrast > blackContrast ? '#ffffff' : '#000000';
};

export const getForegroundColor = (primary, secondary) => {
	const backgroundColor = getBackgroundColor(primary, secondary);
	if (backgroundColor === primary) {
		// If the background color is primary, return a contrasting color to primary
		// This could be a fill-in color or the secondary color.
		return getContrastColor(primary); // or return secondary;
	}
	// If the background color is not primary, return the primary color as the foreground color.
	return primary;
};

/*
  This recipe generates a color palette that includes the primary color,
  its complementary color, and additional accents and shades to provide a
  variety of harmonious color options.
  */
export const generateAccentedPalette = (primary, secondary) => {
	const complementary = getComplementaryColor(primary);
	const analogous = getAnalogousPalette(primary);
	const monochromatic = getMonochromaticPalette(primary);
	const blended = blendColors(primary, secondary);
	return [primary, complementary, ...analogous, ...monochromatic, blended];
};

/** This recipe can create box shadows using the primary or secondary color,
 * which can be useful to maintain a consistent theme throughout the design. */
export const generateThemedShadow = (color, intensity = 10) => {
	const shadowColor = tinycolor(color).setAlpha(0.5).toRgbString(); // Set alpha for shadow color
	return `0px ${intensity}px ${intensity * 2}px ${shadowColor}`;
};

/** This recipe generates a gradient background from the primary and secondary color,
 * which can be used as a background for various elements. */
export const generateGradientBackground = (
	color1,
	color2,
	direction = 'to right'
) => {
	return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

export const generateGradientBackground3Color = (
	color1,
	color2,
	direction = 'to right'
) => {
	return `linear-gradient(${direction}, ${color1}, ${color2}, ${color1})`;
};

/**
 *  Generate Alert Colors
This recipe generates alert colors (success, warning, error) based on the primary color.
It is helpful when you want to maintain a consistent theme but need additional colors for UI alerts.
javascript
 */
export const generateAlertColors = (primary) => {
	const success = tinycolor(primary).spin(90).lighten(10).toString(); // Greenish
	const warning = tinycolor(primary).spin(-60).lighten(10).toString(); // Yellowish
	const error = tinycolor(primary).spin(180).lighten(10).toString(); // Reddish
	return {success, warning, error};
};

/* Generate Dynamic Opacity Variant
This recipe generates a color with dynamic opacity based on whether the color is
light or dark, potentially useful for overlays.
javascript
Copy code */
export const dynamicOpacityVariant = (color) => {
	const dynamicAlpha = tinycolor(color).isLight() ? 0.8 : 0.4;
	return tinycolor(color).setAlpha(dynamicAlpha).toRgbString();
};

export const getDominantColor = async (imgSrc) => {
	try {
		const img = new Image();
		img.crossOrigin = 'Anonymous'; // This enables CORS
		img.src = imgSrc;

		// Ensure the image has loaded before processing
		await new Promise((resolve, reject) => {
			img.onload = resolve;
			img.onerror = reject;
		});

		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.width = img.width;
		canvas.height = img.height;
		context.drawImage(img, 0, 0);

		const getColorAtCorner = (x, y) => {
			const [r, g, b, a] = context.getImageData(x, y, 1, 1).data;
			return {r, g, b, a};
		};

		const corners = [
			getColorAtCorner(0, 0),
			getColorAtCorner(img.width - 1, 0),
			getColorAtCorner(0, img.height - 1),
			getColorAtCorner(img.width - 1, img.height - 1),
		];

		const backgroundColor = corners[0];
		if (
			corners.every(
				(corner) =>
					JSON.stringify(corner) === JSON.stringify(backgroundColor) &&
					corner.a === 255
			)
		) {
			return `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`;
		}

		// No background color detected, proceed to find the dominant color
		const colorThief = new ColorThief();
		const dominantColor = colorThief.getColor(img);
		const dominantColorString = `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`;

		// If the image has transparency, decide between black or white based on the luminosity of the dominant color
		const hasTransparency = corners.some((corner) => corner.a < 255);
		if (hasTransparency) {
			const isDarkLogo = tinycolor(dominantColorString).isDark();
			return isDarkLogo ? '#ffffff' : '#000000'; // return white for dark logos, black for light logos
		}

		return dominantColorString;
	} catch (error) {
		console.error('Failed to get dominant or contrasting color:', error);
		return '#ffffff'; // return white as the default background color in case of any error
	}
};

const getContrastRatio = (color1, color2) => {
	return tinycolor.readability(color1, color2);
};
export const getBestContrastColor = (
	bgColor,
	color1,
	color2,
	fallbackColor = '#FFFFFF'
) => {
	const contrast1 = getContrastRatio(bgColor, color1);
	const contrast2 = getContrastRatio(bgColor, color2);
	const minContrastRatio = 4.5; // Minimum contrast ratio for readability

	if (contrast1 >= minContrastRatio && contrast1 > contrast2) {
		return color1;
	}
	if (contrast2 >= minContrastRatio) {
		return color2;
	}
	return fallbackColor;
};
