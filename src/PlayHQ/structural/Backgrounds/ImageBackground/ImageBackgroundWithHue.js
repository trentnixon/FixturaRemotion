import React, {useEffect, useState, useMemo} from 'react';
import {useCurrentFrame, interpolate} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation';
import styled from 'styled-components';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';

// Styled Overlay Component
const Overlay = styled.div`
	background: ${({color}) => color};
	width: ${({width}) => width || '100%'};
	height: ${({height}) => height || '100%'};
	z-index: 1;
	position: absolute;
	opacity: ${({opacity}) => opacity};
	transition: opacity 0.3s ease; /* Optional: Smooth transition */
`;

const ImageBackgroundWithHue = () => {
	const {BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {HeroImage, BackgroundStyles} = BuildProps ?? {};
	const {ratio} = HeroImage;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();

	// Calculate totalFPS using useMemo for performance
	const totalFPS = useMemo(() => {
		return Object.values(TIMINGS).reduce(
			(accumulator, currentValue) => accumulator + currentValue,
			0
		);
	}, [TIMINGS]);

	// console.log('TIMINGS ', TIMINGS);

	useEffect(() => {
		if (ratio) {
			setDirection(ratio === 'landscape' ? 'leftToRight' : 'topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(frame, totalFPS, direction, HeroImage);
	} else if (ratio === 'portrait') {
		IMG = portraitAnimation(frame, totalFPS, direction, HeroImage);
	}
	return (
		<div>
			{/* Animated Image */}
			{IMG}
		</div>
	);
};

export default ImageBackgroundWithHue;
