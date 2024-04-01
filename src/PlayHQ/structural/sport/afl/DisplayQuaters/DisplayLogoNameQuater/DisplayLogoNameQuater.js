import {useCurrentFrame} from 'remotion';
import {FromRightToLeft} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
import {DisplayTeamNameQuarters} from './components/DisplayTeamNameQuarters';
import {TeamDetail} from './components/TeamsAndScores';
import {
	StructureContentBlock,
	StructureMainBlock,
	StructureSidebarBlock,
} from './components/sharedStyles';

export const DisplayLogoNameQuater = (props) => {
	const {matchData, FPS_SCORECARD, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {LOGO, SCORE, BEHINDS, TEAM} = props.OBJ;

	const frame = useCurrentFrame();

	const IMGSIZING = [80, 80, 80];
	const primaryColor = Color.Primary.Main;
	const calculateImage = calculateImageDimensions(LOGO, IMGSIZING);

	const ComponentFPS = {
		Display: {
			Start: 15,
			End: props.FPS_SCORECARD,
		},
	};
	return (
		<StructureMainBlock>
			<StructureSidebarBlock>
				<ImageWithFallback
					src={LOGO}
					style={{
						...calculateImage,
						height: 'auto',
						width: '100%',
						marginRight: '10px',
						objectFit: 'cover',
						clipPath: FromRightToLeft(20, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							props.FPS_SCORECARD - 30,
							props.FPS_SCORECARD,
							1,
							0
						),
					}}
				/>
			</StructureSidebarBlock>
			<StructureContentBlock>
				<TeamDetail
					StyleConfig={StyleConfig}
					score={SCORE}
					behind={BEHINDS}
					Name={TEAM}
					FPS_SCORECARD={FPS_SCORECARD}
					primaryColor={primaryColor}
					gradeName={matchData.gradeName}
				/>
				<DisplayTeamNameQuarters
					{...props}
					ComponentFPS={ComponentFPS.Display}
				/>
			</StructureContentBlock>
		</StructureMainBlock>
	);
};
