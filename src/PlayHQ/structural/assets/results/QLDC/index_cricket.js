
// Styled component for the top block

import { parseScore } from "../../../../utils/copy";
import { ContainerStructureContainer } from "./components/Containers";
import { StructureBottom } from "./components/StructureBottom";
import { StructureMain } from "./components/StructureMain";
import { StructureTop } from "./components/StructureTop";

export const QLDCResults = (props) => {
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
