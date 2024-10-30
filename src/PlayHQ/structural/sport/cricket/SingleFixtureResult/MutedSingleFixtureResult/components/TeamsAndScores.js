/* eslint-disable complexity */
import styled, {css} from 'styled-components';
import {parseScore} from '../../../../../../utils/copy';

import {EraseFromMiddle} from '../../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../../templates/Thunder/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../../templates/Thunder/Components/Body/TeamNameDisplay';
import {DisplayYetToBat} from '../../../../../../templates/Thunder/Components/Body/DisplayYetToBat';
import {DisplayInningsScore} from '../../../../../../templates/Thunder/Components/Body/DisplayInningsScore';

import {useStylesContext} from '../../../../../../context/StyleContext';
import {MutedDivider} from '../../../../../../templates/Muted/Components/Common/Divider';
import {InningContainer} from '../../../TeamsAndScores/Muted/InningContainer';
import {CricketMatchAbandoned} from '../../../MatchAbandoned/CricketMatchAbandoned';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 0px;
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

export const TeamsAndScores = ({matchData}) => {
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo, type, status} =
		matchData;

	// Identify "our club" and the opponent
	const isOurTeamHome = homeTeam.isClubTeam;
	const ourTeam = isOurTeamHome ? homeTeam : awayTeam;
	const opponentTeam = isOurTeamHome ? awayTeam : homeTeam;

	// Determine which team batted first
	const battedFirstTeam = homeTeam.homeScoresFirstInnings ? homeTeam : awayTeam;
	const isOurTeamBattedFirst = battedFirstTeam === ourTeam;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	if (status === 'Abandoned') {
		return <CricketMatchAbandoned matchData={matchData} useColor="Secondary" />;
	}

	return (
		<MatchContainerStyles>
			<TeamsAndScoresContainer>
				{/* First Innings Display */}
				<InningContainer
					team={{
						logo: teamHomeLogo,
					}}
					score={homeScore}
					overs={homeOvers}
					firstInnings={homeTeam.homeScoresFirstInnings}
					name={homeTeam.name} // Correct name for first innings
					type={type}
					performances={
						!isOurTeamBattedFirst
							? opponentTeam.bowlingPerformances
							: ourTeam.battingPerformances
					}
					statType={isOurTeamBattedFirst ? 'batting' : 'bowling'}
					bottom="120px"
					limit={3}
				/>

				{/* Second Innings Display */}
				<InningContainer
					team={{
						logo: teamAwayLogo,
					}}
					score={awayScore}
					overs={awayOvers}
					firstInnings={awayTeam.awayScoresFirstInnings}
					name={awayTeam.name} // Correct name for second innings
					type={type}
					performances={
						isOurTeamBattedFirst
							? opponentTeam.bowlingPerformances
							: ourTeam.battingPerformances
					}
					statType={isOurTeamBattedFirst ? 'bowling' : 'batting'}
					bottom="80px"
					limit={3}
				/>
			</TeamsAndScoresContainer>
		</MatchContainerStyles>
	);
};

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
`;

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
