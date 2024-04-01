import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FixtureLabels} from '../../../../../common/components/copy/commonAssetTypes';
import {TeamScoreContainer} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayFixturesGrade = (props) => {
	const {matchData, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const {round, gradeName} = matchData;

	const frame = useCurrentFrame();
	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize: '2em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};
	return (
		<TeamScoreContainer>
			<FixtureLabels customStyles={gradeNameCustom}>{gradeName}</FixtureLabels>
			<FixtureLabels customStyles={gradeNameCustom}>{round}</FixtureLabels>
		</TeamScoreContainer>
	);
};
