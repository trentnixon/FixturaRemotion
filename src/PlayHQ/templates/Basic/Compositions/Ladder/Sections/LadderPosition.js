import styled from 'styled-components';
import {
	getContrastColor,
	getForegroundColor,
	setOpacity,
} from '../../../../../utils/colors';
import {Img, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../../hooks/useImageDimensions';

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

const ImgContainer = styled.div``;

const Name = styled.span`
	font-size: 1.6em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 50%;
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
	const {
		LadderItem,
		THEME,
		fontFamily,
		INT,
		isTeam,
		FPS_LADDER,
		Ladder,
		TemplateVariation,
	} = props;
	const {TIE, L, W, P, position, PTS, teamName, teamLogo} = LadderItem;
	const frame = useCurrentFrame();
	const NumTeams = Ladder.League.length + 1;
	//console.log(LadderItem);
	const useTHEMECOLOR = isTeam
		? THEME.secondary
		: setOpacity(getForegroundColor(THEME.primary, THEME.secondary), 0.35);

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
				borderRadius: TemplateVariation.borderRadius,
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
			bgColor={useTHEMECOLOR}
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
			<Name color={getContrastColor(useTHEMECOLOR)}>
				{position}. {teamName}
			</Name>
			<Performance color={getContrastColor(useTHEMECOLOR)}>{P}</Performance>
			<Performance color={getContrastColor(useTHEMECOLOR)}>{W}</Performance>
			<Performance color={getContrastColor(useTHEMECOLOR)}>{L}</Performance>
			<Performance color={getContrastColor(useTHEMECOLOR)}>{TIE}</Performance>
			<Performance color={getContrastColor(useTHEMECOLOR)}>{PTS}</Performance>
		</LadderPositionContainer>
	);
};