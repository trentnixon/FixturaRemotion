import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';
import {useVideoDataContext} from '../../../../../../context/VideoDataContext';

const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '70px'; // Normal size
	if (textLength <= 20) return '70px'; // Large size
	return '45px'; // Extra-large size for longer texts
};

export const CaloundraCCDefaultTitleCategoryName = () => {
	const {TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {StyleConfig, TextStyles} = useStylesContext();
	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;
	const {Font} = StyleConfig;
	const {grouping_category} = DATA.VIDEOMETA;

	const styleObj = {
		...Font.Title,
		...TextStyles.assetTitle,
		color: '#fff',
		fontSize: getDynamicFontSize(grouping_category.length),
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '100%',
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
		clipPath: FromTopToBottom(0, 'Wobbly'),
	};
	return <BundleCategoryName styleObj={styleObj} animationObj={animationObj} />;
};
