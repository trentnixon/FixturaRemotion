import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useVideoDataContext} from '../../../../../../context/VideoDataContext';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '4em'; // Normal size
	if (textLength <= 20) return '4em'; // Large size
	return '3em'; // Extra-large size for longer texts
};

export const ThunderBundleTitle = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;

	const frame = useCurrentFrame();
	const {VIDEOMETA} = DATA;
	const {grouping_category} = VIDEOMETA;
	const {FPS_MAIN} = TIMINGS;
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);

	const styleObj = {
		...Font?.Copy,
		color: Color.Background.Contrast,
		fontSize: dynamicFontSize,
		margin: '0',
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '100%',
		lineHeight: '1em',
	};
	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return <BundleCategoryName styleObj={styleObj} animationObj={animationObj} />;
};
