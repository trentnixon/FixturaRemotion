import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {ItemTopLabelContainerWithAnimation} from '../../../../assets/common/Containers/CCL/StructureSidebarBlock';
import {DisplayGradeName} from '../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

export const StructureTop = ({matchData}) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const gradeNameCustom = {
		padding: 0,
		margin: 0,
		color: Color.Background.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
	return (
		<ItemTopLabelContainerWithAnimation
			backgroundColor={Color.Secondary.Main}
			FPS_SCORECARD={FPS_SCORECARD}
		>
			<DisplayGradeName
				gradeName={matchData.gradeName}
				matchData={matchData}
				customStyles={gradeNameCustom}
			/>
		</ItemTopLabelContainerWithAnimation>
	);
};
