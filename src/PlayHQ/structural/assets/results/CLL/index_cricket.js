// Styled component for the top block

import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {TeamLogoCCL} from '../../../../templates/CoastalCricketLeague/Components/Common/TeamLogo';
import {TeamNameAndResultContainerCCL} from '../../../../templates/CoastalCricketLeague/Components/Common/TeamNameContainer';
import {VSVG} from '../../../../templates/CoastalCricketLeague/Components/Common/VSVG';
import {parseScore} from '../../../../utils/copy';
import {CLLPlayerPerformances} from '../../../sport/cricket/PlayerPerformances/CCL_PlayerPerformances';
import {
	ContainerFixtureCCL,
	ContainerStructureContentBlockCCLWithAnimation,
	ContentContainerCCL,
	GroupedCCL,
	TeamsAndScoresContainerCCL,
} from '../../common/Containers/CCL/StructureSidebarBlock';

import {StructureTop} from './components/StructureTop';
import styled from 'styled-components';

const GroupPerformances = styled.div`
	display: flex;
	width: 90%;
	flex-direction: row;
`;

export const CCLResults = (props) => {
	const {matchData, StyleConfig, FPS_SCORECARD} = props;
	const {Color} = StyleConfig;
	const {homeTeam, awayTeam} = matchData;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<ContainerFixtureCCL>
			<StructureTop {...props} />
			<ContainerStructureContentBlockCCLWithAnimation
				borderColor={Color.Secondary.Main}
				FPS_SCORECARD={FPS_SCORECARD}
			>
				<TeamsAndScoresContainerCCL backgroundColor={Color.Primary.Main}>
					<TeamLogoCCL FPS_SCORECARD={FPS_SCORECARD} />
					<ContentContainerCCL>
						<GroupedCCL>
							<TeamNameAndResultContainerCCL
								StyleConfig={StyleConfig}
								FPS_SCORECARD={FPS_SCORECARD}
								START={7}
								TEAM={homeTeam.name}
								RESULTS={{
									score: homeScore,
									overs: homeOvers,
								}}
								textAlign="center"
							/>

							<VSVG />
							<TeamNameAndResultContainerCCL
								StyleConfig={StyleConfig}
								FPS_SCORECARD={FPS_SCORECARD}
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
					<TeamLogoCCL FPS_SCORECARD={FPS_SCORECARD} />
				</TeamsAndScoresContainerCCL>
			</ContainerStructureContentBlockCCLWithAnimation>
			<GroupPerformances>
				<CLLPlayerPerformances
					{...props}
					Batting={homeTeam.battingPerformances}
					Bowling={awayTeam.bowlingPerformances}
				/>
				<CLLPlayerPerformances
					{...props}
					Batting={awayTeam.battingPerformances}
					Bowling={homeTeam.bowlingPerformances}
				/>
			</GroupPerformances>
		</ContainerFixtureCCL>
	);
};
