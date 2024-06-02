import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FixtureMetaData} from '../../../../../../common/components/copy/commonAssetTypes';

export const FixtureMetaDataPoint = (props) => {
	const {Value, FPS_SCORECARD, StyleConfig, width, pointStyle} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
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
		color: Color.Primary.BackgroundContractColor,
		fontStyle: 'normal',
		display: 'block',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		width,
		fontSize: '1.5em',
		lineHeight: '1.1em',
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
