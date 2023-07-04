import styled from 'styled-components';
import {getContrastColor, lightenColor} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';

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
	border-radius:10px;
	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) => props.bgColor};
`;

const Name = styled.span`
	font-size: 35px;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 60%;
`;

const Performance = styled.span`
	font-size: 32px;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: right;
	max-width: 7%;
	min-width: 5%;
	margin-left: 10px;
`;

export const LadderPosition = ({
	TeamPosition,
	THEME,
	fontFamily,
	NumTeams,
	INT,
	isTeam,
	FPS_LADDER,
}) => {
	const {TIE, L, W, P, position, PTS, teamName} = TeamPosition; 
	const frame = useCurrentFrame();

	const useTHEMECOLOR = isTeam ? 'secondary' : 'primary';

	const ContainerHeight = 1200;
	return (
		<LadderPositionContainer
			style={{
				clipPath: FromLeftToRight(30 + INT * 3, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			fontFamily={fontFamily}
			bgColor={lightenColor(THEME[useTHEMECOLOR])}
			Height={ContainerHeight / NumTeams - 4}
		>
			<Name color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{position}. {teamName}
			</Name>
			<Performance color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{P}{' '}
			</Performance>
			<Performance color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{W}{' '}
			</Performance>
			<Performance color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{L}{' '}
			</Performance>
			<Performance color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{TIE}{' '}
			</Performance>
			<Performance color={getContrastColor(lightenColor(THEME[useTHEMECOLOR]))}>
				{PTS}{' '}
			</Performance>
		</LadderPositionContainer>
	);
};
