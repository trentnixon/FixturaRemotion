import {parseScore} from '../../../../../../utils/copy';
import {ContainerStructureContainer} from '../../../../../../structural/assets/results/QLDC/components/Containers';
import {StructureTop} from '../../../../../../structural/assets/results/QLDC/StructureTop';
import {StructureBottom} from '../../../../../../structural/assets/results/QLDC/StructureBottom';
import {StructureMain} from '../../../../../../structural/assets/results/QLDC/StructureMain';

// Styled component for the top block

export const Match = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<>
			<ContainerStructureContainer>
				<StructureTop {...props} />
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
