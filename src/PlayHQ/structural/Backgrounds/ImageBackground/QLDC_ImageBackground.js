import {useEffect, useState} from 'react';
import {useCurrentFrame} from 'remotion';

import {landscapeAnimation} from './landscapeAnimation';
//import {portraitAnimation} from './portraitAnimation';

import {SpringToFrom} from '../../../Animation/RemotionSpring';

export const QLDCImageBackground = (props) => {
	const {FPS_MAIN, HeroImage, TIMINGS} = props;
	const {ratio} = HeroImage;
	const [direction, setDirection] = useState(null);
	const frame = useCurrentFrame();

	const customImageStyles={
		top: `${SpringToFrom(90 - 20, 65, 50, 'Slow')}%`,
	}
	useEffect(() => {
		if (ratio === 'landscape') {
			setDirection('leftToRight');
		} else {
			setDirection('topToBottom');
		}
	}, [ratio]);

	let IMG;
	if (ratio === 'landscape') {
		IMG = landscapeAnimation(frame, TIMINGS, direction, HeroImage,customImageStyles);
	} else if (ratio === 'portrait') {
		IMG = landscapeAnimation(frame, TIMINGS, direction, HeroImage,customImageStyles);
	} 

	const parentStyles = {
		backgroundColor: 'transparent',
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
	};

	const ImageStyles = {
		backgroundColor: 'transparent',
		height: '1000px',
		width: '555px',
		position: 'absolute',
		overflow: 'hidden',
		zIndex: 1000,
	};

	const ImageAnimation = {
		transform: `translateX(${SpringToFrom(
			0,
			1000,
			200,
			'Wobbly'
		)}px) translateX(${SpringToFrom(90 - 20, 0, '-650', 'Slow')}px)
        translateX(${SpringToFrom(FPS_MAIN + 90, 0, '-1000', 'Slow')}px) 
				
        `,
		//filter: `blur(${SpringToFrom(90 - 20, 0, 6, 'Slow')}px)`,
		height: `${SpringToFrom(90 - 20, 1000, 1350, 'Slow')}px`,
		width: `${SpringToFrom(90 - 20, 555, 470, 'Slow')}px`,
	};

	return (
		<div style={{...parentStyles}}>
			<div style={{...ImageStyles, ...ImageAnimation}}>{IMG}</div>
		</div>
	);
};
