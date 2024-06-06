import {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';

import {landscapeAnimation} from './landscapeAnimation';
//import {portraitAnimation} from './portraitAnimation';

import {SpringToFrom} from '../../../Animation/RemotionSpring';

export const QLDCImageBackground = (props) => {
	const {FPS_MAIN, HeroImage, TIMINGS, StyleConfig} = props;
	const {Color} = StyleConfig;
	const backgroundColor = Color.Primary.Main;
	const {ratio} = HeroImage;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();

	const customImageStyles = {
		//top: `${SpringToFrom(90 - 20, 65, 50, 'Slow')}%`,
	};
	useEffect(() => {
		if (ratio === 'landscape') {
			setDirection('leftToRight');
		} else {
			setDirection('topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(
			frame,
			TIMINGS,
			direction,
			HeroImage,
			customImageStyles
		);
	} else if (ratio === 'portrait') {
		IMG = landscapeAnimation(
			frame,
			TIMINGS,
			direction,
			HeroImage,
			customImageStyles
		);
	}

	const parentStyles = {
		backgroundColor,
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
	};

	const ImageStyles = {
		backgroundColor,
		height: '1000px',
		width: '555px',
		position: 'absolute',
		overflow: 'hidden',
		filter: `drop-shadow(rgba(0, 0, 0, 0.3) 10px 0px 10px)`,
		zIndex: 400,
	};

	const ImageAnimation = {
		transform: `translateX(${SpringToFrom(0, 1000, 200, 'Wobbly')}px) 
		translateX(${SpringToFrom(90 - 30, 0, 2000, 'Wobbly')}px)
        `,
	};

	const ImageBackgroundStyles = {
		height: '100%',
		width: 'inherit',
		position: 'absolute',
		overflow: 'hidden',
		zIndex: 1,
		mixBlendMode: 'luminosity',
		opacity: '0.2',
	};
	const ImageBackgroundAnimation = {
		transform: `
		translateX(${SpringToFrom(90 - 36, 1240, -400, 'Wobbly')}px)
        `,
	};

	return (
		<div style={{...parentStyles}}>
			<div style={{...ImageStyles, ...ImageAnimation}}>{IMG}</div>
			<div style={{...ImageBackgroundStyles, ...ImageBackgroundAnimation}}>
				{IMG}
			</div>
		</div>
	);
};
