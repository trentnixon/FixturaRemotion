import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useVideoDataContext} from '../../../../../../context/VideoDataContext';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '4.5em'; // Normal size
	if (textLength <= 20) return '2.5em'; // Large size
	return '2.1em'; // Extra-large size for longer texts
};

export const BundleTitle = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig, TextStyles, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {TemplateVariation} = BuildProps;
	const frame = useCurrentFrame();
	const {VIDEOMETA} = DATA;
	const {grouping_category} = VIDEOMETA;
	const {FPS_MAIN} = TIMINGS;
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);

	const styleObj = {
		...Font?.Copy,
		...TextStyles.assetSubtitle,
		color: TemplateVariation.useMutedColor,
		fontSize: dynamicFontSize,
		margin: '0',
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
