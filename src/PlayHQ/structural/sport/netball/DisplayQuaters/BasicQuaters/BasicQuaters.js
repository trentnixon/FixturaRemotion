import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromMiddle} from '../../../../../Animation/ClipWipe';
import {DisplayTeamName} from './components/DisplayTeamName';
import {HeaderContainerStyles, ScoreRow} from './components/sharedStyles';
import {DisplayScoreBox} from './components/DisplayScoreBox';

export const DisplayBasicQuarters = (props) => {
	const {matchData, ComponentFPS, StyleConfig, TemplateVariation} = props;
	const {Color} = StyleConfig;

	const frame = useCurrentFrame();

	const renderScoresRow = (scores, Int) => {
		if (!scores.quarterScores) return null;

		const Display = interpolateOpacityByFrame(
			frame,
			ComponentFPS.End - 1,
			ComponentFPS.End,
			1,
			0
		);

		const RowStyles = {
			clipPath: FromMiddle(0, 'Wobbly'),
			display: Display === 0 ? 'none' : 'flex',
			borderRadius: TemplateVariation.borderRadius,
			backgroundColor:
				Int === 1 ? Color.Secondary.Opacity(0.3) : Color.Primary.Opacity(0.3),
		};

		const scoreValues = Object.values(scores.quarterScores);

		if (scoreValues.some((score) => score === null)) return null;

		return (
			<ScoreRow style={RowStyles}>
				<DisplayTeamName Name={scores.name} {...props} />
				{scoreValues.splice(0, 4).map((score, index) => (
					<DisplayScoreBox key={index} score={score} Int={Int} {...props} />
				))}
			</ScoreRow>
		);
	};

	return (
		<HeaderContainerStyles>
			{renderScoresRow(matchData.teams.home, 1)}
			{renderScoresRow(matchData.teams.away, 2)}
		</HeaderContainerStyles>
	);
};
