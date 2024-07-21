import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

// Top Level
export const ContainerFixtureCCL = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	margin-top: 50px;
	filter: drop-shadow(0px 0px 10px #7c7c7c);
`;

export const ItemTopLabelContainer = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 8px 0;
	justify-content: center;
	align-items: center;
	width: 70%;
	border-radius: 100px;
	margin-bottom: -2px;
	background-color: ${({backgroundColor}) => backgroundColor};
`;

export const ContentContainerCCL = styled.div`
	display: flex;
	width: inherit;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GroupedCCL = styled.div`
	display: flex;
	width: inherit;
	flex-direction: row;
	justify-content: space-between;
	align-items: self-end;
`;

export const TeamsAndScoresContainerCCL = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: row;
	position: relative;
	border-radius: 100px;
	background-color: ${({backgroundColor}) => backgroundColor};
`;

export const ContainerStructureSidebarBlockCCL = styled.div`
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: normal;
`;

export const ContainerStructureMainBlockCCL = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
`;

export const ContainerStructureContentBlockCCL = styled.div`
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	width: 90%;
	background-color: transparent;
	border: 5px solid ${({borderColor}) => borderColor};
	border-radius: 100px;
`;

export const ItemTopLabelContainerWithAnimation = (props) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Color} = StyleConfig;
	const frame = useCurrentFrame();
	return (
		<ItemTopLabelContainer
			backgroundColor={Color.Secondary.Main}
			style={{
				clipPath: FromTopToBottom(15, 'Slow'),
				marginBottom: '-10px',
				zIndex: -1,
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			{props.children}
		</ItemTopLabelContainer>
	);
};

export const ContainerStructureContentBlockCCLWithAnimation = (props) => {
	const {style = {}} = props;
	const frame = useCurrentFrame();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;

	return (
		<ContainerStructureContentBlockCCL
			borderColor={Color.Secondary.Main}
			style={{
				...style,
				clipPath: FromTopToBottom(15, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					TIMINGS.FPS_MAIN - 30,
					TIMINGS.FPS_MAIN,
					1,
					0
				),
			}}
		>
			{props.children}
		</ContainerStructureContentBlockCCL>
	);
};
