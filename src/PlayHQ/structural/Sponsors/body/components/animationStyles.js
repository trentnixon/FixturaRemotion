// src/structural/Sponsors/body/Upcoming/animationStyles.js

import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

const animationStyles = {
	FromTop: (frame, FPS, IMGStyles, delay) => ({
		clipPath: FromTopToBottom(10 + delay, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
		height: IMGStyles.height,
		width: IMGStyles.width,
		marginBottom: '10px',
	}),
	fadeIn: (frame, FPS, IMGStyles, delay) => ({
		opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
		height: IMGStyles.height,
		width: IMGStyles.width,
		marginBottom: '10px',
		transition: `opacity 1s ease-in ${delay}s`,
	}),
	// Add more animation styles as needed
};

export default animationStyles;
