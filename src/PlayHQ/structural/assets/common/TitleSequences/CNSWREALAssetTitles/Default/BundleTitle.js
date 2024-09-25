import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useVideoDataContext} from '../../../../../../context/VideoDataContext';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '2.8em'; // Normal size
	if (textLength <= 20) return '2.4em'; // Large size
	return '2em'; // Extra-large size for longer texts
};

export const CNSWDefaultBundleTitle = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();
	const {VIDEOMETA} = DATA;
	const {grouping_category} = VIDEOMETA;
	const {FPS_MAIN} = TIMINGS;
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);

	const styleObj = {
		...Font?.Title,
		...TextStyles.copyMedium,
		color: Color.Background.Contrast,
		fontSize: dynamicFontSize,
		margin: '0',
		fontStyle: 'normal',
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '100%',
	};
	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return <BundleCategoryName styleObj={styleObj} animationObj={animationObj} />;
};
