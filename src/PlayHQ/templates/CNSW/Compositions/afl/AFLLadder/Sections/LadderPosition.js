import styled from 'styled-components';
import {
	darkenColor,
	getContrastColor,
	lightenColor,
} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {ImageWithFallback} from '../../../../Components/Common/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';
import { FromLeftToRight } from '../../../../../../Animation/ClipWipe';

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

const TitleContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const MetaContainer = styled.div`
	background-color: ${(props) => props.bgColor};
	height: ${(props) => props.Height}px;
	width: 40%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 5px 0;
`;
const ImgContainer = styled.div``;

const Name = styled.span`
	font-size: 1.6em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 100%;
	margin-left: 10px;
`;

const Performance = styled.span`
	font-size: 1.4em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	width: -webkit-fill-available;
`;

export const LadderPosition = (props) => {
	const {
		LadderItem,
		THEME,
		fontFamily,
		LADDERINT,
		isTeam,
		FPS_LADDER,
		Ladder,
		TemplateVariation,
	} = props;
	const {D, L, W, P, position, PTS, BYE, teamName, teamLogo} = LadderItem;
	const frame = useCurrentFrame();
	const NumTeams = Ladder.League.length + 1;
	//console.log(LadderItem);
	const useTHEMECOLOR = isTeam ? THEME.secondary : lightenColor(THEME.primary);

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
				width: `${SpringToFrom(LADDERINT * 1, 0, 100, 'Wobbly')}%`,
				paddingLeft: `${SpringToFrom(LADDERINT * 1, 0, 10, 'Wobbly')}px`,
				paddingRight: `${SpringToFrom(LADDERINT * 1, 0, 10, 'Wobbly')}px`,
				/* clipPath: FromLeftToRight(30 + INT * 3, 'Slow'), */
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
			<TitleContainer>
				<ImgContainer
					style={{
						width: `${ContainerHeight / NumTeams / 1.5}px`,
						textAlign: 'center',
						opacity: interpolateOpacityByFrame(
							frame,
							LADDERINT * 2,
							LADDERINT * 2 + 30,
							0,
							1
						),
					}}
				>
					<ImageWithFallback
						src={teamLogo}
						style={{...TemLogoStyles, borderRadius: '100%'}}
					/>
				</ImgContainer>
				<Name
					color={getContrastColor(useTHEMECOLOR)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{position}. {restrictString(teamName, 38)}
				</Name>
			</TitleContainer>
			<MetaContainer
				bgColor={darkenColor(THEME.primary)}
				Height={(ContainerHeight / NumTeams - 4) * 0.75}
				style={{clipPath: FromLeftToRight(15 + LADDERINT * 2, 'Slow')}}
			>
				<Performance
					color={getContrastColor(THEME.primary)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{P}
				</Performance>
				<Performance
					color={getContrastColor(THEME.primary)}
					
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{W}
				</Performance>
				<Performance
					color={getContrastColor(THEME.primary)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{L}
				</Performance>
				<Performance
					color={getContrastColor(THEME.primary)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{D}
				</Performance>

				<Performance
					color={getContrastColor(THEME.primary)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{BYE}
				</Performance>
				<Performance
					color={getContrastColor(THEME.primary)}
					style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
				>
					{PTS}
				</Performance>
			</MetaContainer>
		</LadderPositionContainer>
	);
};
