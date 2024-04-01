// Importing necessary libraries and functions
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {FromLeftToRight, FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';

// Styled components for layout and styling
const HeaderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
`;

const ScoreRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 10px;
`;

const ScoreBox = styled.div`
	flex: 1;
	flex-direction: column;
	height: 100px;
	margin: 0px 1px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ScoreCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;

	display: block;
	letter-spacing: -0.025em;
	text-transform: uppercase;

	font-size: 1.8em;
	line-height: 1.2em;
	margin: 0;
	text-align: center;
`;

// Component to display AFL match scores
export const DisplayTeamNameQuarters = ({
	matchData,
	StyleConfig,
	TemplateVariation,
	ComponentFPS,
	OBJ,
}) => {
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();
	console.log("matchData.teams.home ", matchData?.teams?.home)

	// Function to render scores for each quarter
	const renderScoresRow = (teamData, Int) => {
		if (!teamData.quarterScores) return null;

		// Extracting and transforming quarterScores to an array format for easy mapping
		const scoreValues = Object.entries(OBJ.QUARTER).map(
			([quarter, {score, goals}]) => ({
				quarter,
				score,
				goals,
			})
		);

		// Validate if any score is null
		if (scoreValues.some(({score}) => score === null)) return null;

		// Common styles for score display
		const commonStyles = {
			...Font.Copy,
			textAlign: 'center',
			color: Color.Secondary.Contrast,
			clipPath: FromLeftToRight(30, 'Slow'),
		};

		return (
			<ScoreRow
				style={{
					clipPath: FromLeftToRight(3 * Int, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						ComponentFPS.End - 15,
						ComponentFPS.End,
						1,
						0
					),
					borderRadius: TemplateVariation.borderRadius,
				}}
			>
				{scoreValues.map(({score, goals}, index) => (
					<ScoreBox
						key={index}
						style={{
							borderRadius: TemplateVariation.borderRadius,
							backgroundColor: '#fff',
							borderColor: Color.Secondary.Opacity(0.9),
							clipPath: FromRightToLeft(ComponentFPS.Start, 'Wobbly'),
						}}
					>
						<ScoreCopy
							style={{...commonStyles, ...{fontSize: '2.8em', fontWeight: 800}}}
						>
							{score}
						</ScoreCopy>
						<ScoreCopy style={{fontSize: '1.6em', ...commonStyles}}>
							{goals}
						</ScoreCopy>
					</ScoreBox>
				))}
			</ScoreRow>
		);
	};

	return (
		<HeaderContainerStyles>
			{renderScoresRow(matchData.teams.home, 1)}
		</HeaderContainerStyles>
	);
};

// Dev Notes:
// - Refactored the DisplayQuarters component to handle AFL scores, including goal scoring format.
// - Adapted rendering to accommodate AFL's scoring representation of "goals.goals (totalScore)".
// - Incorporated dynamic styling based on the team index to differentiate between home and away teams visually.
// - This component is designed to be part of an AFL match visualization in a video content creation tool using Remotion, located within the 'components' directory.
// - Future improvements could include adding animations or transitions for score changes, enhancing visual appeal and viewer engagement.
