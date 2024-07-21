// Styled component for the top block
import styled from 'styled-components';
import {TeamLogoCCL} from '../../../templates/CoastalCricketLeague/Components/Common/TeamLogo';
import {TeamNameAndResultContainerCCL} from '../../../templates/CoastalCricketLeague/Components/Common/TeamNameContainer';
import {CCLvs} from '../../../common/svg/CCL_vs';
import {parseScore} from '../../../utils/copy';
import {CLLPlayerPerformances} from '../../sport/cricket/PlayerPerformances/CCL_PlayerPerformances';
import {
	ContainerFixtureCCL,
	ContainerStructureContentBlockCCLWithAnimation,
	ContentContainerCCL,
	GroupedCCL,
	TeamsAndScoresContainerCCL,
} from '../../assets/common/Containers/CCL/StructureSidebarBlock';
import {StructureTop} from '../../sport/cricket/TeamsAndScores/CCLTeamsAndScores/StructureTop';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {useStylesContext} from '../../../context/StyleContext';

const GroupPerformances = styled.div`
	display: flex;
	width: 90%;
	flex-direction: row;
`;

export const CricketCCLResultsBuild = (props) => {
	const {matchData} = props;
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;
	const {homeTeam, awayTeam} = matchData;
	Color.Secondary.Main;
	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	if (props.matchData.status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} />;

	return (
		<ContainerFixtureCCL>
			<StructureTop matchData={matchData} />
			<ContainerStructureContentBlockCCLWithAnimation>
				<TeamsAndScoresContainerCCL backgroundColor={Color.Primary.Main}>
					<TeamLogoCCL />
					<ContentContainerCCL>
						<GroupedCCL>
							<TeamNameAndResultContainerCCL
								START={7}
								TEAM={homeTeam.name}
								RESULTS={{
									score: homeScore,
									overs: homeOvers,
								}}
								textAlign="center"
							/>

							<CCLvs />
							<TeamNameAndResultContainerCCL
								START={7}
								TEAM={awayTeam.name}
								RESULTS={{
									score: awayScore,
									overs: awayOvers,
								}}
								textAlign="center"
							/>
						</GroupedCCL>
					</ContentContainerCCL>
					<TeamLogoCCL />
				</TeamsAndScoresContainerCCL>
			</ContainerStructureContentBlockCCLWithAnimation>
			<GroupPerformances>
				<CLLPlayerPerformances
					Batting={homeTeam.battingPerformances}
					Bowling={awayTeam.bowlingPerformances}
				/>
				<CLLPlayerPerformances
					Batting={awayTeam.battingPerformances}
					Bowling={homeTeam.bowlingPerformances}
				/>
			</GroupPerformances>
		</ContainerFixtureCCL>
	);
};
