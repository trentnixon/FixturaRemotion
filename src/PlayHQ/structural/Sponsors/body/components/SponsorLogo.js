// src/structural/Sponsors/body/Upcoming/SponsorLogo.js

import React from 'react';
import {Img, useCurrentFrame} from 'remotion';
import animationStyles from './animationStyles';

const SponsorLogo = ({src, FPS, IMGStyles, delay, animationType}) => {
	const frame = useCurrentFrame();
	const animationStyle =
		animationStyles[animationType] || animationStyles.wobblyFromTop;
	const style = animationStyle(frame, FPS, IMGStyles, delay);

	return <Img src={src} style={style} />;
};

export default SponsorLogo;
