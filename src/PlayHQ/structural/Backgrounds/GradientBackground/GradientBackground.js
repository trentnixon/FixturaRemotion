import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';

export const SimpleGradientBackground = () => {
	const {BuildProps} = useStylesContext();
	const {BackgroundStyles} = BuildProps ?? {};
	return (
		<>
			<div
				style={{
					background: BackgroundStyles.Gradient,
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

export const QLDCGradientBackground = () => {
	const {TIMINGS} = useLayoutContext();
	const {StyleConfig} = useStylesContext();
	const {Gradients} = StyleConfig.Color.Background;

	const GradientBackgroundStyles = {
		background: Gradients.QLDC,
		width: '103%',
		height: '100%',
		filter: 'drop-shadow(rgba(0, 0, 0, 0.3) -10px 0px 10px)',
		zIndex: 1,
		position: 'absolute',
		right: 0,
		transform: `translateX(${SpringToFrom(0, 1200, 600, 'Wobbly')}px) 
				  translateX(${SpringToFrom(90 - 30, 0, -243, 'Slow')}px)
				  translateX(${SpringToFrom(TIMINGS.FPS_MAIN + 90, 0, -350, 'Slow')}px)`,
	};

	return <div style={GradientBackgroundStyles} />;
};
