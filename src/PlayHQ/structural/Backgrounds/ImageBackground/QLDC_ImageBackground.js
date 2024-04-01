import {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';

import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation';

import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {SpringToFrom} from '../../../Animation/RemotionSpring';

export const QLDCImageBackground = (props) => {
	const {FPS_MAIN, HeroImage, TIMINGS} = props;
	const {ratio} = HeroImage;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();
	useEffect(() => {
		if (ratio === 'landscape') {
			setDirection('leftToRight');
		} else {
			setDirection('topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(frame, TIMINGS, direction, HeroImage);
	} else if (ratio === 'portrait') {
		IMG = portraitAnimation(frame, TIMINGS, direction, HeroImage);
	}

	const ImageStyles = {
		height: '1000px',
		width: '555px',
		position: 'absolute',
		overflow: 'hidden',
		zIndex: 1000,
		top: '190px',
		left: '463px',
	};

	const ImageAnimation = {
		transform: `translateX(${SpringToFrom(
			0,
			1000,
			0,
			'Wobbly'
		)}px) translateX(${SpringToFrom(90 - 20, 0, '-450', 'Slow')}px)
        translateX(${SpringToFrom(FPS_MAIN + 90, 0, '-1000', 'Slow')}px)
        `,
		filter: `blur(${interpolateOpacityByFrame(frame, 90, 120, 0, 6)}px)`,
	};

	return <div style={{...ImageStyles, ...ImageAnimation}}>{IMG}</div>;
};
