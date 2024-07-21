import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromMiddle} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import { PresentationalAssetType } from '../../../../../../common/components/presentational/AssetType';

export const BasicDefaultAssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {Color, Font} = StyleConfig;

	const {FPS_MAIN} = TIMINGS;
	const frame = useCurrentFrame();
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
	return <PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />;
};
