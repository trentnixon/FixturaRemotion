import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {darkenColor, lightenColor} from '../../../utils/colors';

export const SimpleGradientBackground = ({THEME, DEG = '15deg'}) => {
	const gradient = `linear-gradient(${DEG}, ${darkenColor(THEME.secondary)}, ${
		THEME.primary
	}, ${THEME.primary},${lightenColor(THEME.secondary)})`;
	return (
		<>
			<div
				style={{
					background: gradient,
					width: '100%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
					opacity: 0.8,
				}}
			/>
			<div
				style={{
					background: '#777777',
					width: '100%',
					height: '100%',
					zIndex: 0,
					position: 'absolute',
					opacity: 1,
				}}
			/>
		</>
	);
};

export const GradientBackground = ({gradient, FPS_MAIN}) => {
	const GradientBackgroundStyles = {
		background: gradient,
		width: `103%`,
		height: '100%',
		zIndex: 1,
		position: 'absolute',
		right: 0,
		transform: `translateX(${SpringToFrom(
			0,
			1100,
			600,
			'Wobbly'
		)}px) translateX(${SpringToFrom(90 - 20, 0, -300, 'Slow')}px)
        translateX(${SpringToFrom(FPS_MAIN + 90, 0, -300, 'Slow')}px)
        `,
	};

	return <div style={GradientBackgroundStyles} />;
};
