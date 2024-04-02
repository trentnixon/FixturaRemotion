import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FixtureLabels} from '../../../../../common/components/copy/commonAssetTypes';
import {TeamScoreContainer} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayFixturesGrade = (props) => {
	const {matchData, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const {round,ground, gradeName} = matchData;

	const frame = useCurrentFrame();

	const AnimationStyles={
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
	}
	const groundCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		fontSize: '1.3em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};


	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
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
			<FixtureLabels customStyles={{...gradeNameCustom,...AnimationStyles}}>{gradeName}</FixtureLabels>
			<FixtureLabels customStyles={{...groundCustom,...AnimationStyles}}>{ground}</FixtureLabels>
		</TeamScoreContainer>
	);
};
