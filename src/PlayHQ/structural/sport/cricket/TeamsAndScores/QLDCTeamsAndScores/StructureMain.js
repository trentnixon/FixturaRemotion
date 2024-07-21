import {
	ContainerStructureContentBlock,
	ContainerStructureMainBlock,
} from '../../../../assets/common/Containers/QLDC/StructureSidebarBlock';

import {PlayerPerformances} from '../../PlayerPerformances/QLDC_PlayerPerformances';
import {TeamDetail} from '../../TeamDetail/QLDC_TeamDetail';
import {SideBlockWithImage} from './SideBlockWithImage';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

// Styled component for the top block

export const StructureMain = (props) => {
	const {matchData} = props;

	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
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
					FPS_SCORECARD={TIMINGS.FPS_SCORECARD}
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
