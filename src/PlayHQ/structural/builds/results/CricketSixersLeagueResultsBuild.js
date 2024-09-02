import styled from 'styled-components';
import {parseScore} from '../../../utils/copy';

import {calculateImageDimensions} from '../../../utils/global/calculateImageDimensions';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {DisplayMetaItem} from '../../sport/cricket/TeamsAndScores/SixersLeagueTeamsAndScores/MetaItem';
import {InningContainer} from '../../sport/cricket/TeamsAndScores/SixersLeagueTeamsAndScores/InningContainer';

export const CricketSixersLeagueResultsBuild = ({matchData}) => {
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo, gradeName, round} =
		matchData;

	const IMGSIZING = [80, 80, 80];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	if (matchData.status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} useColor="Secondary" />;

	return (
		<MatchContainerStyles>
			<DisplayMetaItem VALUE={`${gradeName} ${round} `} />
			<TeamsAndScoresContainer>
				<InningContainer
					team={{logo: teamHomeLogo}}
					imgStyles={teamHomeLogoStyles}
					score={homeScore}
					overs={homeOvers}
					firstInnings={homeTeam.homeScoresFirstInnings}
					name={homeTeam.name}
					type={matchData.type}
					battingPerformances={homeTeam.battingPerformances}
					bowlingPerformances={homeTeam.bowlingPerformances}
					bottom="40px"
				/>
				<InningContainer
					team={{logo: teamAwayLogo}}
					imgStyles={teamAwayLogoStyles}
					score={awayScore}
					overs={awayOvers}
					firstInnings={awayTeam.awayScoresFirstInnings}
					name={awayTeam.name}
					type={matchData.type}
					battingPerformances={awayTeam.battingPerformances}
					bowlingPerformances={awayTeam.bowlingPerformances}
					direction="row-reverse"
					justifyContent="flex-end"
					textAlign="left"
					bottom="0px"
				/>

				<DisplayMetaItem VALUE={` ${matchData.result} | ${matchData.type} `} />
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
	justify-content: space-between;
	align-items: flex-start;
`;
