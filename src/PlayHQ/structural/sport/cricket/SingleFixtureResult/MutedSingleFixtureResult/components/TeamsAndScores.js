import styled, {css} from 'styled-components';
import {
	parseScore,
	splitSocreByRunsAndOvers,
} from '../../../../../../utils/copy';

import {EraseFromMiddle} from '../../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../../templates/Thunder/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../../templates/Thunder/Components/Body/TeamNameDisplay';
import {DisplayYetToBat} from '../../../../../../templates/Thunder/Components/Body/DisplayYetToBat';
import {DisplayInningsScore} from '../../../../../../templates/Thunder/Components/Body/DisplayInningsScore';
import {InningsPerformance} from '../../../../../../templates/Thunder/Compositions/cricket/WeekendSingleGameResult/Sections/Performances';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {MutedDivider} from '../../../../../../templates/Muted/Components/Common/Divider';
import {InningContainer} from '../../../TeamsAndScores/Muted/InningContainer';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 0px;
`;

const InningsContianer = styled.div`
	width: 100%;
	margin-bottom: 150px;
`;

const ScoresAndLogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	background-color: transparent;
	min-height: 80px;
`;

const ScoreIntContainer = styled.div`
	background-color: ${(props) => props.BG};
	width: 300px;
	display: flex;
	align-items: center;
	margin: 5px;
	padding: 5px;
	color: black;
	text-align: center;
	min-height: 80px;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamsAndScores = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	/* 	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);
 */
	const IMGSIZING = [150, 130, 150];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);
	// Determine if home or away team is "our team"
	const isOurTeamHome = homeTeam.isClubTeam;
	const ourTeam = isOurTeamHome ? homeTeam : awayTeam;
	const opponentTeam = isOurTeamHome ? awayTeam : homeTeam;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<>
			<TeamsAndScoresContainer>
				<InningContainer
					team={{logo: isOurTeamHome ? teamHomeLogo : teamAwayLogo}}
					imgStyles={isOurTeamHome ? teamHomeLogoStyles : teamAwayLogoStyles}
					score={isOurTeamHome ? homeScore : awayScore}
					overs={isOurTeamHome ? homeOvers : awayOvers}
					firstInnings={
						isOurTeamHome
							? homeTeam.homeScoresFirstInnings
							: awayTeam.awayScoresFirstInnings
					}
					name={ourTeam.name}
					type={null}
					performances={
						isOurTeamHome
							? ourTeam.battingPerformances
							: ourTeam.bowlingPerformances
					}
					statType={isOurTeamHome ? 'batting' : 'bowling'} // Show opponent's bowling
					bottom="40px"
					limit={3}
				/>
				<MutedDivider />
				<InningContainer
					team={{logo: isOurTeamHome ? teamAwayLogo : teamHomeLogo}}
					imgStyles={isOurTeamHome ? teamAwayLogoStyles : teamHomeLogoStyles}
					score={isOurTeamHome ? awayScore : homeScore}
					overs={isOurTeamHome ? awayOvers : homeOvers}
					firstInnings={
						isOurTeamHome
							? awayTeam.awayScoresFirstInnings
							: homeTeam.homeScoresFirstInnings
					}
					name={opponentTeam.name}
					type={null}
					performances={
						isOurTeamHome
							? ourTeam.bowlingPerformances
							: ourTeam.battingPerformances
					}
					statType={isOurTeamHome ? 'bowling' : 'batting'} // Show our team's bowling
					bottom="50px"
					limit={3}
				/>
				<MutedDivider />
			</TeamsAndScoresContainer>
		</>
	);
};

/* Const FirstInningsScore = (props) => {
	const {FirstInnings, Type, fontFamily} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns fontFamily={fontFamily}>{FirstInnings}</FirstInningsRuns>
	);
}; */

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: transparent;
`;
export const TeamDetails = ({
	team,
	score,
	overs,
	imgStyles,
	flexDirection,
	Type,
	FirstInnings,
}) => {
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<ScoresAndLogoContainer style={{flexDirection}}>
			<DisplayTeamLogo
				logoUrl={team.logo}
				imgStyles={imgStyles}
				FPS_SCORECARD={180}
			/>

			<TeamandScores>
				<TeamNameDisplay name={team.name} FPS_SCORECARD={180} />
				<ScoreIntContainerAnimated BG={Color.Primary.Main} FPS_SCORECARD={180}>
					{score === 'Yet to Bat' ? (
						<DisplayYetToBat FPS_SCORECARD={180} score={score} />
					) : (
						<DisplayInningsScore
							FPS_SCORECARD={180}
							FirstInnings={FirstInnings}
							Type={Type}
							score={score}
							overs={overs}
						/>
					)}
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</ScoresAndLogoContainer>
	);
};
