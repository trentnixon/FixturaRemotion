import React, {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {preloadImage} from '@remotion/preload';

const ImageBackgroundSimple = () => {
	const {BuildProps, BackgroundStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {HeroImage} = BuildProps ?? {};
	const {ratio} = HeroImage;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();
	preloadImage(HeroImage.url);
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
					backgroundColor: BackgroundStyles.Color,
					width: '102%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
					opacity: 0.8,
				}}
			/>
			<div
				style={{
					backgroundColor: BackgroundStyles.Color,
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
