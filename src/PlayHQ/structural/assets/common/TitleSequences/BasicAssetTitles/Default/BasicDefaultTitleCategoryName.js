import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import { useStylesContext } from '../../../../../../context/StyleContext';
import { BundleCategoryName } from '../../../../../../common/components/presentational/BundleCategory';

export const BasicDefaultTitleCategoryName = () => {
	const {TIMINGS} = useLayoutContext();
	const {StyleConfig} = useStylesContext()
	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;
	const {Color, Font} = StyleConfig;

	const styleObj = {
		...Font.Title,
		color: Color.Primary.BackgroundContractColor,
		fontSize: '1.6em',
		lineHeight: '1.1em',
		fontStyle: 'normal',
		letterSpacing: '0.02em',
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '500px',
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return (
		<BundleCategoryName
			styleObj={styleObj}
			animationObj={animationObj}
		/>
	);
};
