import React, {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {preloadImage} from '@remotion/preload';

const ImageBackgroundSimple = () => {
	const {BuildProps, StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {HeroImage, BackgroundStyles} = BuildProps ?? {};
	const {ratio} = HeroImage;
	const {Color} = StyleConfig;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();

	console.log('BackgroundStyles ', BackgroundStyles);

	preloadImage(HeroImage.url);
	useEffect(() => {
		if (ratio) {
			setDirection(ratio === 'landscape' ? 'leftToRight' : 'topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(frame, TIMINGS.FPS_MAIN, direction, HeroImage);
	} else if (ratio === 'portrait') {
		IMG = portraitAnimation(frame, TIMINGS.FPS_MAIN, direction, HeroImage);
	}
	return (
		<div>
			<div
				style={{
					background:
						BackgroundStyles.Gradients.DualTone.Horizontal.PrimaryDark,
					width: '102%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
					opacity: 0.8,
				}}
			/>
			<div
				style={{
					background: BackgroundStyles.Color,
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
