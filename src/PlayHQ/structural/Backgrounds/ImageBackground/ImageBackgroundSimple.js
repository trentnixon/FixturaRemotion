import React, {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation';

const ImageBackgroundSimple = (props) => {
	const {HeroImage, TIMINGS, backgroundColor} = props;
	console.log("HeroImage ", HeroImage)
	const {ratio} = HeroImage;

	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();

	useEffect(() => {
		if (ratio) {
			setDirection(ratio === 'landscape' ? 'leftToRight' : 'topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(frame, TIMINGS, direction, HeroImage);
	} else if (ratio === 'portrait') {
		IMG = portraitAnimation(frame, TIMINGS, direction, HeroImage);
	}
	return (
		<div>
			<div
				style={{
					backgroundColor,
					width: '102%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
					opacity: 0.8,
				}}
			/>
			<div
				style={{
					backgroundColor,
					mixBlendMode: 'color',
					width: '100%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
				}}
			/>
			{IMG}
		</div>
	);
};

export default ImageBackgroundSimple;
