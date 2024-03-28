import styled from 'styled-components';
import {getContrastColor, setOpacity} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';

import {ImageWithFallback} from '../../../../Components/Common/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

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
	background-color: ${(props) => props.bgColor};
`;

const ImgContainer = styled.div``;

const Name = styled.span`
	font-size: 1.8em;
	font-weight: 600;
	color: ${(props) => props.color};
	width: 60%;
	margin-left: 10px;
`;

const Performance = styled.span`
	font-size: 1.6em;
	font-weight: 600;
	color: ${(props) => props.color};
	text-align: center;
	max-width: 5%;
	min-width: 5%;
	margin-left: 10px;
`;

export const LadderPosition = (props) => {
	const {
		LadderItem,
		LADDERINT,
		isTeam,
		FPS_LADDER,
		Ladder,
		TemplateVariation, 
		StyleConfig,
	} = props;

	const {D, L, W, P, position, PTS, BYE, teamName, teamLogo} = LadderItem;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const NumTeams = Ladder.League.length + 1;

	const useTHEMECOLOR = isTeam
		? Color.Secondary.Main
		: setOpacity(Color.Primary.Main, 0.8);

	const ContainerHeight = 950;
	const IMGSIZING = [
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
	];
	const TemLogoStyles = calculateImageDimensions(teamLogo, IMGSIZING);

	return (
		<LadderPositionContainer
			style={{
				borderRadius: TemplateVariation.borderRadius,
				clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			bgColor={useTHEMECOLOR}
			Height={ContainerHeight / NumTeams - 4}
		>
			<ImgContainer
				style={{
					width: `${ContainerHeight / NumTeams / 1.5}px`,
					textAlign: 'center',
				}}
			>
				<ImageWithFallback
					src={teamLogo}
					style={{...TemLogoStyles, borderRadius: '100%'}}
				/>
			</ImgContainer>
			<Name style={{...Font.Copy}} color={getContrastColor(useTHEMECOLOR)}>
				{position}. {restrictString(teamName, 35)}
			</Name>
			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{P}
			</Performance>
			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{W}
			</Performance>
			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{L}
			</Performance>
			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{D}
			</Performance>
			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{BYE}
			</Performance>

			<Performance
				style={{...Font.Copy}}
				color={getContrastColor(useTHEMECOLOR)}
			>
				{PTS}
			</Performance>
		</LadderPositionContainer>
	);
};
