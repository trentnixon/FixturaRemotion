import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FixtureMetaData} from '../../../../../../common/components/copy/commonAssetTypes';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

export const FixtureMetaDataPoint = (props) => {
	const {Value, width, pointStyle} = props;
	const frame = useCurrentFrame();

	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const AnimationStyles = {
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};

	const DisplayTeamNameStyles = {
		...TextStyles.copyMedium,
		color: Color.Primary.BackgroundContractColor,
		display: 'block',
		textTransform: 'uppercase',
		width,
		textAlign: 'center',
	};

	const CustomStyles = {...pointStyle, ...Font.Copy};
	return (
		<FixtureMetaData
			customStyles={{
				...DisplayTeamNameStyles,
				...CustomStyles,
				...AnimationStyles,
			}}
		>
			{Value}
		</FixtureMetaData>
	);
};
