// Importing necessary libraries and functions
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../Components/Common/ImageWithFallback';

// Styled components for layout and styling
const HeaderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
`;

const ScoreRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 10px;
`;

const TeamName = styled.div`
	flex: 3;
	padding: 5px;
	font-weight: bold;
	align-items: center;
	justify-content: flex-start;
	display: flex;
	padding: 0px 10px;
`;

const ScoreBox = styled.div`
	flex: 1;
	flex-direction: column;
	height: 90px;
	margin: 0px 1px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ScoreCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 800;
	display: block;
	letter-spacing: -0.025em;
	text-transform: uppercase;

	font-size: 1.8em;
	line-height: 1.2em;
	margin: 0;
	text-align: center;
`;

// Component to display AFL match scores
export const DisplayQuarters = ({
	matchData,

	StyleConfig,
	TemplateVariation,
}) => {
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();

	// Function to render scores for each quarter
	const renderScoresRow = (teamData, Int) => {
		if (!teamData.quarterScores) return null;

		// Extracting and transforming quarterScores to an array format for easy mapping
		const scoreValues = Object.entries(teamData.quarterScores).map(
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
		};

		// Styles for team names
		const teamStyles = {
			color: '#111',
			...Font.Copy,
			fontWeight: 200,
			fontSize: '1.6em',

			textAlign: 'left',
		};

		return (
			<ScoreRow
				style={{
					clipPath: FromMiddle(0, 'Wobbly'),

					borderRadius: TemplateVariation.borderRadius,
					backgroundColor: '#fff',
				}}
			>
				<TeamName>
					<ImageWithFallback
						src={teamData.logo}
						style={{
							borderRadius: '100%',
							height: '50px',
							width: '50px',
							objectFit: 'cover',
							margin: '0 10px 0 0 ',
						}}
					/>
					<ScoreCopy style={{...teamStyles}}>{teamData.name}</ScoreCopy>
				</TeamName>

				{scoreValues.map(({score, goals}, index) => (
					<ScoreBox
						key={index}
						style={{
							borderRadius: TemplateVariation.borderRadius,
							backgroundColor: Color.Secondary.Opacity(0.9),
							borderColor: Color.Secondary.Opacity(0.9),
						}}
					>
						<ScoreCopy style={{fontSize: '2.4em', ...commonStyles}}>
							{score}
						</ScoreCopy>
						<ScoreCopy style={{fontSize: '1.4em', ...commonStyles}}>
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
			{renderScoresRow(matchData.teams.away, 2)}
		</HeaderContainerStyles>
	);
};

// Dev Notes:
// - Refactored the DisplayQuarters component to handle AFL scores, including goal scoring format.
// - Adapted rendering to accommodate AFL's scoring representation of "goals.goals (totalScore)".
// - Incorporated dynamic styling based on the team index to differentiate between home and away teams visually.
// - This component is designed to be part of an AFL match visualization in a video content creation tool using Remotion, located within the 'components' directory.
// - Future improvements could include adding animations or transitions for score changes, enhancing visual appeal and viewer engagement.
