import {SpringToFrom} from '../../../Animation/RemotionSpring';

export const BlankColorBackground = ({backgroundColor}) => {
	const BlankColorBackgroundStyles = {
		backgroundColor,
		width: `${SpringToFrom(90 - 15, 45, 70, 'Wobbly')}%`,
		height: '100%',
		zIndex: 1,
		position: 'absolute',
		opacity: 0.8,
		right: 0,
	};

	return <div style={BlankColorBackgroundStyles} />;
};


export const SimpleBlankColorBackground = ({backgroundColor}) => (
	<div
		style={{
			backgroundColor,
			width: '100%',
			height: '100%',
			zIndex: 1,
			position: 'absolute',
			opacity: 1,
		}}
	/>
);