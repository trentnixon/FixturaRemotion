import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {VideoHeader} from '../../../../common/components/copy/titles';

export const DisplayVideoTitleTop = (props) => {
	const {frame, FPS_MAIN, VALUE, StyleConfig} = props;
	const {Color, Font} = StyleConfig;

	const styleObj = {
		...Font.Title,
		color: Color.Primary.BackgroundContractColor,
		height: 'auto',
		fontSize: '5em',
		lineHeight: '0.9em',
		textAlign: 'center',
		textTransform: 'uppercase',
	};
	const animationObj = {
		clipPath: FromMiddle(7, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={VALUE}
		/>
	);
};

export const DisplayVideoTitleBottom = (props) => {
	const {frame, FPS_MAIN, VALUE, StyleConfig} = props;
	const {Color, Font} = StyleConfig;
	const styleObj = {
		...Font.Title,
		color: Color.Primary.BackgroundContractColor,
		fontSize: '4.5em',
		lineHeight: '1em',
		margin: 0,
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromTopToBottom(15, 'Slow'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={VALUE}
		/>
	);
};
