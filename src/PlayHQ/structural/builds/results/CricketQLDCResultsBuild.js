// Styled component for the top block

import {parseScore} from '../../../utils/copy';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {ContainerStructureContainer} from '../../sport/cricket/TeamsAndScores/QLDCTeamsAndScores/Containers';
import {StructureBottom} from '../../sport/cricket/TeamsAndScores/QLDCTeamsAndScores/StructureBottom';

import {StructureMain} from '../../sport/cricket/TeamsAndScores/QLDCTeamsAndScores/StructureMain';
import {StructureTop} from '../../sport/cricket/TeamsAndScores/QLDCTeamsAndScores/StructureTop';

export const CricketQLDCResultsBuild = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	if (props.matchData.status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} />;
	return (
		<>
			<ContainerStructureContainer>
				<StructureTop matchData={matchData} />
				<StructureMain
					{...props}
					OBJ={{
						LOGO: teamHomeLogo,
						SCORE: homeScore,
						OVERS: homeOvers,
						TEAM: homeTeam,
						FIRSTINNINGS: homeTeam.HomescoresFirstInnings,
					}}
				/>
			</ContainerStructureContainer>
			<ContainerStructureContainer>
				<StructureMain
					{...props}
					OBJ={{
						LOGO: teamAwayLogo,
						SCORE: awayScore,
						OVERS: awayOvers,
						TEAM: awayTeam,
						FIRSTINNINGS: awayTeam.HomescoresFirstInnings,
					}}
				/>
				<StructureBottom {...props} />
			</ContainerStructureContainer>
		</>
	);
};
