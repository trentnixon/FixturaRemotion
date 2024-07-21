import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: flex-end;
	margin: 2px auto;
	padding: 5px 0px;
	width: 85%;
	height: ${(props) => props.Height}px;
	background-color: white;
`;

const Name = styled.span`
	font-size: 1.4em;
	color: ${(props) => props.color};
	width: 80%;
`;

const Performance = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	width: inherit;
`;

const MetaContainer = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 30%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 5px 0;
`;

const TeamLogoNameContainer = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const LadderHeader = ({Ladder}) => {
	const {name} = Ladder;

	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {FPS_LADDER} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const NumTeams = Ladder.League.length + 1;
	const frame = useCurrentFrame();
	const ContainerHeight = 1200;

	return (
		<LadderPositionContainer
			style={{
				...Font.Copy,
				backgroundColor: 'transparent',
				fontWeight: 200,
				clipPath: FromRightToLeft(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			Height={(ContainerHeight / NumTeams - 4) / 2}
		>
			<TeamLogoNameContainer>
				<Name color={Color.Primary.Contrast}>{name}</Name>
			</TeamLogoNameContainer>
			<MetaContainer>
				<Performance color={Color.Primary.Contrast}>P </Performance>
				<Performance color={Color.Primary.Contrast}>W</Performance>
				<Performance color={Color.Primary.Contrast}>L</Performance>
				<Performance color={Color.Primary.Contrast}>D</Performance>
				<Performance color={Color.Primary.Contrast}>PTS</Performance>
			</MetaContainer>
		</LadderPositionContainer>
	);
};
