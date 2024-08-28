import {useCurrentFrame} from 'remotion';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {VideoHeader} from '../../../../common/components/copy/titles';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {useStylesContext} from '../../../../context/StyleContext';
import {useVideoDataContext} from '../../../../context/VideoDataContext';

export const OrganisationName = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();

	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;
	const {Color, Font} = StyleConfig;

	const styleObj = {
		...Font.Title,
		...TextStyles.assetSubtitle,
		color: Color.Primary.BackgroundContractColor,
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '500px',
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={DATA.VIDEOMETA.grouping_category}
		/>
	);
};

export const SingleResultOrganisationName = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();

	const frame = useCurrentFrame();
	const {Color, Font} = StyleConfig;
	const {FPS_MAIN} = TIMINGS;
	const styleObj = {
		...Font.Title,
		...TextStyles.assetSubtitle,
		color: Color.Primary.BackgroundContractColor,
		margin: '0',
		textTransform: 'uppercase',
		textAlign: 'left',
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={DATA.VIDEOMETA.grouping_category}
		/>
	);
};
