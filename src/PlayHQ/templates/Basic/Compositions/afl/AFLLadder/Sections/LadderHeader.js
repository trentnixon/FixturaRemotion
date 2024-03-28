import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromRightToLeft} from '../../../../../../Animation/ClipWipe';
const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: flex-end;
	margin: 2px auto;
	padding: 5px 10px;
	width: 100%;
	height: ${(props) => props.Height}px;
	background-color: white;
	background-color: ${(props) => props.bgColor};
`;

const Name = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 80%;
`;

const Performance = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	max-width: 5%;
	min-width: 5%;
	margin-left: 10px;
`;

export const LadderHeader = (props) => {
	const {Ladder, FPS_LADDER, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const NumTeams = Ladder.League.length + 1;
	const frame = useCurrentFrame();
	const ContainerHeight = 1200;
	return (
		<LadderPositionContainer
			style={{
				...Font.Copy,
				clipPath: FromRightToLeft(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			bgColor="transparent"
			Height={(ContainerHeight / NumTeams - 4) / 2}
		>
			<Name color={Color.Secondary.Darken}>{` `}</Name>
			<Performance color={Color.Secondary.Darken}>P</Performance>
			<Performance color={Color.Secondary.Darken}>PA</Performance>
			<Performance color={Color.Secondary.Darken}>PTS</Performance>
			<Performance color={Color.Secondary.Darken}>W</Performance>
			<Performance color={Color.Secondary.Darken}>L</Performance>
			<Performance color={Color.Secondary.Darken}>D</Performance>
			<Performance color={Color.Secondary.Darken}>B</Performance>
		</LadderPositionContainer>
	);
};
