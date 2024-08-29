import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromBottomToTop} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';
import {getBestContrastColor} from '../../../../../../utils/colors';

export const CaloundraCCDefaultAssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {Color, Font} = StyleConfig;

	const {FPS_MAIN} = TIMINGS;
	const frame = useCurrentFrame();
	const styleObj = {
		...Font.Title,
		...TextStyles.assetSubtitle,
		color: getBestContrastColor(
			'#38320E',
			Color.Primary.Main,
			Color.Secondary.Main
		),
		height: 'auto',
		textAlign: 'center',
		textTransform: 'uppercase',
	};
	const animationObj = {
		clipPath: FromBottomToTop(0, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
	};
	return (
		<PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />
	);
};
