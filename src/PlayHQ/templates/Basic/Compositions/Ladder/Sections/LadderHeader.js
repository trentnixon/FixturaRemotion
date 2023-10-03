import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
} from '../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromRightToLeft,
	EraseFromMiddle,
} from '../../../../../Animation/ClipWipe';
const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	margin: 2px auto;
	padding: 5px 10px;
	width: 100%;
	height: ${(props) => props.Height}px;
	background-color: white;
	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) => props.bgColor};
`;

const Name = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 60%;
`;

const Performance = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: right;
	max-width: 7%;
	min-width: 5%;
	margin-left: 10px;
`;

export const LadderHeader = (props) => {
	const {THEME, fontFamily, Ladder, FPS_LADDER} = props;
	const NumTeams = Ladder.League.length + 1;
	const frame = useCurrentFrame();
	const ContainerHeight = 1200;
	return (
		<LadderPositionContainer
			style={{
				clipPath: FromRightToLeft(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			fontFamily={fontFamily}
			bgColor="transparent"
			Height={ContainerHeight / NumTeams - 4}
		>
			<Name color={darkenColor(THEME.secondary)}>{` `}</Name>
			<Performance color={darkenColor(THEME.secondary)}>P </Performance>
			<Performance color={darkenColor(THEME.secondary)}>W</Performance>
			<Performance color={darkenColor(THEME.secondary)}>L</Performance>
			<Performance color={darkenColor(THEME.secondary)}>D</Performance>
			<Performance color={darkenColor(THEME.secondary)}>PTS</Performance>
		</LadderPositionContainer>
	);
};
