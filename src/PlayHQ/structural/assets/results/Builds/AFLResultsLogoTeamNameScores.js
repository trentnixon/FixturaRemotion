import styled from 'styled-components';
import { TimeLocationRound } from '../ResultMetadata/TimeLocationRound/TimeLocationRound';
import { DisplayLogoNameQuater } from '../../../sport/afl/DisplayQuaters/DisplayLogoNameQuater/DisplayLogoNameQuater';
import { ResultStatement } from '../../../sport/afl/DisplayQuaters/DisplayLogoNameQuater/components/ResultStatement';

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

// Main container with display flex
const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	height: auto; // Full viewport height for demo
	flex-wrap: wrap; // Allow the children to wrap as needed
	margin-bottom: 20px;
`;

export const AFLResultsLogoTeamNameScores = (props) => {
	const {matchData} = props;
	const {teams} = matchData;

	return (
		<FixtureContainer>
			<StructureContainer>
				<TimeLocationRound {...props} />
				<DisplayLogoNameQuater
					OBJ={{
						LOGO: teams.home.logo,
						SCORE: teams.home.scores,
						BEHINDS: teams.home.HomeGoalsAndBehinds,
						TEAM: teams.home.name,
						QUARTER: teams.home.quarterScores,
					}}
					{...props}
				/>
			</StructureContainer>
			<StructureContainer>
				<DisplayLogoNameQuater
					OBJ={{
						LOGO: teams.away.logo,
						SCORE: teams.away.scores,
						BEHINDS: teams.away.HomeGoalsAndBehinds,
						TEAM: teams.away.name,
						QUARTER: teams.away.quarterScores,
					}}
					{...props}
				/>

				<ResultStatement {...props} />
			</StructureContainer>
		</FixtureContainer>
	);
};
