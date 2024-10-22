import styled from 'styled-components';
import {parseScore} from '../../../utils/copy';
import {calculateImageDimensions} from '../../../utils/global/calculateImageDimensions';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {DisplayMetaItem} from '../../sport/cricket/TeamsAndScores/Muted/MetaItem';
import {InningContainer} from '../../sport/cricket/TeamsAndScores/Muted/InningContainer';
import {MutedDivider} from '../../../templates/Muted/Components/Common/Divider';

export const CricketMutedLeagueResultsBuild = ({matchData}) => {
	const {
		homeTeam,
		awayTeam,
		teamHomeLogo,
		teamAwayLogo,
		gradeName,
		round,
		type,
		result,
		status,
	} = matchData;

	// Determine if home or away team is "our team"
	const isOurTeamHome = homeTeam.isClubTeam;
	const ourTeam = isOurTeamHome ? homeTeam : awayTeam;
	const opponentTeam = isOurTeamHome ? awayTeam : homeTeam;

	const IMGSIZING = [85, 85, 85];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	if (status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} useColor="Secondary" />;

	return (
		<MatchContainerStyles>
			{/* <DisplayMetaItem VALUE={`${gradeName} ${round} `} /> */}
			<TeamsAndScoresContainer>
				{/* InningContainer for Our Team */}
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
					type={type}
					performances={
						isOurTeamHome
							? ourTeam.battingPerformances
							: ourTeam.bowlingPerformances
					}
					statType={isOurTeamHome ? 'batting' : 'bowling'} // Show opponent's bowling
					bottom="40px"
				/>

				{/* InningContainer for Opponent Team */}
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
					type={type}
					performances={
						isOurTeamHome
							? ourTeam.bowlingPerformances
							: ourTeam.battingPerformances
					}
					statType={isOurTeamHome ? 'bowling' : 'batting'} // Show our team's bowling
					bottom="0px"
				/>

				{/* <DisplayMetaItem VALUE={` ${result} | ${type} `} /> */}
			</TeamsAndScoresContainer>
			<MutedDivider />
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
	margin-bottom: 30px;
`;
