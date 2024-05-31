import {
	ContainerStructureContentBlock,
	ContainerStructureMainBlock,
} from '../../../common/Containers/QLDC/StructureSidebarBlock';

import {PlayerPerformances} from '../../../../sport/cricket/PlayerPerformances/QLDC_PlayerPerformances';
import {TeamDetail} from '../../../../sport/cricket/TeamDetail/QLDC_TeamDetail';
import {SideBlockWithImage} from './SideBlockWithImage';

// Styled component for the top block

export const StructureMain = (props) => {
	const {matchData, FPS_SCORECARD, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {SCORE, OVERS, TEAM, FIRSTINNINGS} = props.OBJ;

	const primaryColor = Color.Primary.Main;

	return (
		<ContainerStructureMainBlock>
			<SideBlockWithImage {...props} />

			<ContainerStructureContentBlock>
				<TeamDetail
					StyleConfig={StyleConfig}
					score={SCORE}
					overs={OVERS}
					FirstInnings={FIRSTINNINGS}
					Name={TEAM.name}
					FPS_SCORECARD={FPS_SCORECARD}
					primaryColor={primaryColor}
					Type={matchData.type}
					gradeName={matchData.gradeName}
				/>
				<PlayerPerformances
					{...props}
					Batting={TEAM.battingPerformances}
					Bowling={TEAM.bowlingPerformances}
				/>
			</ContainerStructureContentBlock>
		</ContainerStructureMainBlock>
	);
};
