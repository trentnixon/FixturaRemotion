import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	ItemTopLabelContainer,
	ItemTopLabelContainerWithAnimation,
} from '../../../common/Containers/CCL/StructureSidebarBlock';
import {DisplayGradeName} from '../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables';

export const StructureTop = (props) => {
	const {StyleConfig, FPS_SCORECARD} = props;

	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const gradeNameCustom = {
		padding: 0,
		margin: 0,
		color: 'white',
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
				gradeName={props.matchData.gradeName}
				{...props}
				customStyles={gradeNameCustom}
			/>
		</ItemTopLabelContainerWithAnimation>
	);
};
