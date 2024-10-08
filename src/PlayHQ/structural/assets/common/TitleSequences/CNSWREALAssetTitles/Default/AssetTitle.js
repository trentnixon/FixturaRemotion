import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromMiddle} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';

export const CNSWDefaultAssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();

	const {FPS_MAIN} = TIMINGS;

	const styleObj = {
		...Font?.Title,
		...TextStyles.assetTitle,
		color: Color.Background.Contrast,
		height: 'auto',
		margin: 0,
		textAlign: 'left',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromMiddle(7, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
	};

	return (
		<PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />
	);
};
