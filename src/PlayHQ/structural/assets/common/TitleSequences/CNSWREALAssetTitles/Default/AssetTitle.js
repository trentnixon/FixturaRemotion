import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromMiddle} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';

export const CNSWDefaultAssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();

	const {FPS_MAIN} = TIMINGS;

	const styleObj = {
		...Font?.Title,
		color: Color.Background.Contrast,
		height: 'auto',
		margin: 0,
		fontSize: '8em',
		lineHeight: '0.9em',
		fontWeight: '400',
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
