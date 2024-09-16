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

const ImageBackgroundSimple = () => {
	const {BuildProps, StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {HeroImage, BackgroundStyles} = BuildProps ?? {};
	const {ratio} = HeroImage;
	const {Color} = StyleConfig;
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

	// Destructure relevant FPS values
	console.log('TIMINGS ', TIMINGS);
	const {FPS_INTRO, FPS_SCORECARD, FPS_MAIN} = TIMINGS;

	// Calculate opacity based on current frame
	const opacity = useMemo(() => {
		return interpolate(
			frame,
			[0, FPS_INTRO, FPS_INTRO + FPS_SCORECARD || FPS_MAIN, totalFPS],
			[0.2, 0.7, 0.8, 0.9],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}
		);
	}, [frame, FPS_INTRO, FPS_SCORECARD, totalFPS]);

	return (
		<div>
			{/* Primary Overlay with Dynamic Opacity */}
			<Overlay
				color={Color.Primary.Main}
				width="102%"
				height="100%"
				opacity={opacity}
			/>

			{/* Secondary Overlay */}
			<Overlay
				color={BackgroundStyles.Color}
				width="100%"
				height="100%"
				opacity={1} /* Static opacity */
				style={{
					mixBlendMode: 'soft-light',
				}}
			/>

			{/* Animated Image */}
			{IMG}
		</div>
	);
};

export default ImageBackgroundSimple;
