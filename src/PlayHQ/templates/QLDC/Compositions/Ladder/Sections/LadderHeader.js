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
	align-items: flex-end;
	margin: 2px auto;
	padding: 5px 10px;
	width: 100%;
	height: ${(props) => props.Height}px;
	background-color: white;
	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) => props.bgColor};
`;

const Name = styled.span`
	font-size: 1.4em;
	font-weight: 900;
	color: ${(props) => props.color};
	width: 80%;
`;

const Performance = styled.span`
	font-size: 1.3em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	max-width: 6.2%;
	min-width: 6.2%;
`;

export const LadderHeader = (props) => {
	const {THEME, fontFamily, Ladder, FPS_LADDER} = props;
	const {name, competition} = Ladder;
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
			Height={(ContainerHeight / NumTeams - 4) / 2}
		>
			<Name color={getContrastColor(THEME.primary)}>{name}</Name>
			<Performance color={getContrastColor(THEME.primary)}>P </Performance>
			<Performance color={getContrastColor(THEME.primary)}>W</Performance>
			<Performance color={getContrastColor(THEME.primary)}>L</Performance>
			<Performance color={getContrastColor(THEME.primary)}>D</Performance>
			<Performance color={getContrastColor(THEME.primary)}>PTS</Performance>
		</LadderPositionContainer>
	);
};
