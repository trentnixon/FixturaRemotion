// src/components/TeamDetail/utils.js

import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';

export const generateTeamStyle = (FPS_SCORECARD, textAlign, Font, Color) => {
	const frame = useCurrentFrame();
	return {
		...Font,
		textAlign,
		color: Color,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

export const generateLogoStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
		left: 0,
		top: 0,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};
