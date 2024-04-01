import {useState, useEffect} from 'react';

// Default dimensions if the image fails to load
//const defaultDimensions = {width: 100, height: 100};

/**
 * Calculates the appropriate dimensions for an image based on aspect ratio and provided dimensions.
 *
 * @param {string} src The source URL of the image.
 * @param {array} dimensions An array containing portrait, landscape, and square dimensions.
 * @returns {Promise<object>} A promise that resolves with the calculated dimensions.
 */
export const calculateDimensions = async (
	src,
	dimensions = [150, 250, 150]
) => {
	try {
		console.log('src ', src);
		const [portraitDimension, landscapeDimension, squareDimension] = dimensions;
		const {width, height} = src;
		const aspectRatio = width / height;

		if (aspectRatio > 1) {
			return {width: `${landscapeDimension}px`, height: 'auto'};
		} else if (aspectRatio < 1) {
			return {width: 'auto', height: `${portraitDimension}px`};
		} else {
			return {width: `${squareDimension}px`, height: `${squareDimension}px`};
		}
	} catch (error) {
		console.error('Failed to calculate image dimensions:', error);
		return {width: 'auto', height: 'auto'}; // Fallback dimensions in case of error
	}
};

/**
 * Custom hook to obtain image dimensions based on provided dimensions for portrait, landscape, and square images.
 *
 * @param {string} src The source URL of the image.
 * @param {array} dimensions An array containing portrait, landscape, and square dimensions.
 * @returns {object|null} The calculated dimensions or null.
 */
const useImageDimensions = calculateDimensions;

export default useImageDimensions;
