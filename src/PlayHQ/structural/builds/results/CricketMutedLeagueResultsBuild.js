/* eslint-disable no-negated-condition */
/* eslint-disable complexity */
import styled from 'styled-components';
import {parseScore} from '../../../utils/copy';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {InningContainer} from '../../sport/cricket/TeamsAndScores/Muted/InningContainer';

export const CricketMutedLeagueResultsBuild = ({matchData}) => {
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
					bottom="0px"
				/>

				{/* Second Innings Display */}
				<InningContainer
					team={{
						logo: teamAwayLogo,
					}}
					score={awayScore}
					overs={awayOvers}
					firstInnings={awayTeam.awayScoresFirstInnings}
					name={awayTeam.name} // Correct name for first innings
					type={type}
					performances={
						isOurTeamBattedFirst
							? opponentTeam.bowlingPerformances
							: ourTeam.battingPerformances
					}
					statType={isOurTeamBattedFirst ? 'bowling' : 'batting'}
					bottom="0px"
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

const TeamsAndScoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 80px;
`;
