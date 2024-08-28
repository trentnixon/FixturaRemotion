import {useCurrentFrame} from 'remotion';
import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {VideoHeader} from '../../../../common/components/copy/titles';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {useStylesContext} from '../../../../context/StyleContext';
import {useVideoDataContext} from '../../../../context/VideoDataContext';

export const DisplayVideoTitleTop = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Video} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();

	const {Color, Font} = StyleConfig;
	const VALUE = Video.TitleSplit[0];
	const {FPS_MAIN} = TIMINGS;
	const frame = useCurrentFrame();
	const styleObj = {
		...Font.Title,
		...TextStyles.assetTitle,
		color: Color.Primary.BackgroundContractColor,
		height: 'auto',
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

export const DisplayVideoTitleBottom = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Video} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;

	const {FPS_MAIN} = TIMINGS;
	const frame = useCurrentFrame();
	const VALUE = Video.TitleSplit[1];

	const styleObj = {
		...Font.Title,
		...TextStyles.assetSubtitle,
		color: Color.Primary.BackgroundContractColor,
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
