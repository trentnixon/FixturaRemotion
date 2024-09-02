import React from 'react';
import styled from 'styled-components';
import TeamDetail from './TeamDetail';
import {calculateImageDimensions} from '../../../../Sponsors/Utils/utils';
import {parseScore} from '../../../../../utils/copy';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
`;

export const BasicTeamsAndScores = ({matchData}) => {
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const IMGSIZING = [80, 80, 80];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<TeamsAndScoresContainer>
			<TeamDetail
				team={{logo: teamHomeLogo}}
				imgStyles={teamHomeLogoStyles}
				score={homeScore}
				overs={homeOvers}
				FirstInnings={homeTeam.homeScoresFirstInnings}
				Name={homeTeam.name}
				direction="row"
				justifyContent="flex-end"
				textAlign="right"
			/>
			<TeamDetail
				team={{logo: teamAwayLogo}}
				imgStyles={teamAwayLogoStyles}
				score={awayScore}
				overs={awayOvers}
				FirstInnings={awayTeam.awayScoresFirstInnings}
				Name={awayTeam.name}
				direction="row-reverse"
				justifyContent="flex-end"
				textAlign="left"
			/>
		</TeamsAndScoresContainer>
	);
};
