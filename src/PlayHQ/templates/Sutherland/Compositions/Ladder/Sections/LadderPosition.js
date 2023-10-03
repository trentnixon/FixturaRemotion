import styled from 'styled-components';
import {
	getContrastColor,
	lightenColor,
	setOpacity,
} from '../../../../../utils/colors';
import {Img, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {restrictString} from '../../../../../utils/copy';

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

	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) => props.bgColor};
	border-radius: 5px;
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: ${(props) => setOpacity(props.bgColor, props.useOPACITY)};
	background-blend-mode: soft-light;
	backdrop-filter: blur(20px);
`;

const ImgContainer = styled.div``;

const Name = styled.span`
	font-size: 1.8em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 50%;
	letter-spacing: 1px;
`;

const Performance = styled.span`
	font-size: 1.6em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: right;
	max-width: 7%;
	min-width: 5%;
	margin-left: 10px;
`;

export const LadderPosition = (props) => {
	const {LadderItem, THEME, fontFamily, INT, isTeam, FPS_LADDER, Ladder} =
		props;
	const {TIE, L, W, P, position, PTS, teamName, teamLogo} = LadderItem;
	const NumTeams = Ladder.League.length + 1;
	const frame = useCurrentFrame();

	//console.log(LadderItem);
	const useTHEMECOLOR = isTeam ? 'secondary' : 'primary';
	const useOPACITY = isTeam ? 1 : 0.6;

	const ContainerHeight = 950;
	const IMGSIZING = [
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
	];
	const TemLogoStyles = useImageDimensions(teamLogo, IMGSIZING);

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
			bgColor={THEME[useTHEMECOLOR]}
			useOPACITY={useOPACITY}
			Height={ContainerHeight / NumTeams - 4}
		>
			<ImgContainer
				style={{
					width: `${ContainerHeight / NumTeams / 1.5}px`,
					textAlign: 'center',
				}}
			>
				<Img src={teamLogo} style={{...TemLogoStyles, borderRadius: '100%'}} />
			</ImgContainer>
			<Name color={getContrastColor(THEME[useTHEMECOLOR])}>
				{position}. {restrictString(teamName, 35)}
			</Name>
			<Performance color={getContrastColor(THEME[useTHEMECOLOR])}>
				{P}
			</Performance>
			<Performance color={getContrastColor(THEME[useTHEMECOLOR])}>
				{W}
			</Performance>
			<Performance color={getContrastColor(THEME[useTHEMECOLOR])}>
				{L}
			</Performance>
			<Performance color={getContrastColor(THEME[useTHEMECOLOR])}>
				{TIE}
			</Performance>
			<Performance color={getContrastColor(THEME[useTHEMECOLOR])}>
				{PTS}
			</Performance>
		</LadderPositionContainer>
	);
};
