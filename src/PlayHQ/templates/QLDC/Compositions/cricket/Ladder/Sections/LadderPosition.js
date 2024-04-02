import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {DisplayTeamName} from '../../../../Components/Common/DEPRECATED_CommonVariables';
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
const ImgContainer = styled.div``;

const Performance = styled.span`
	font-size: 1.6em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	max-width: 20%;
	min-width: 20%;
`;

export const LadderPosition = (props) => {
	const {
		LadderItem,
		LADDERINT,
		isTeam,
		FPS_LADDER,
		Ladder,
		SectionHeights,
		StyleConfig,
	} = props;
	// Deconstructors
	const {position, teamName, teamLogo} = LadderItem;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	// Const's
	const NumTeams = Ladder.League.length + 1;
	const ContainerHeight = SectionHeights.Body;
	const useTHEMECOLOR = isTeam ? Color.Secondary.Main : Color.Primary.Lighten;

	// OBJS
	const TeamNameStyles = {
		...Font.Copy,
		fontSize: '1.5em',
		fontWeight: 400,
		color: Color.Primary.Contrast,
		width: '60%',
		marginLeft: '10px',
		fontStyle: 'normal',
		clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow'),
	};
	return (
		<LadderPositionContainer
			style={{
				...Font.Copy,
				backgroundColor: useTHEMECOLOR,
				width: `${SpringToFrom(Number(LADDERINT), 0, 100, 'Wobbly')}%`,
				paddingLeft: `${SpringToFrom(Number(LADDERINT), 0, 10, 'Wobbly')}px`,
				paddingRight: `${SpringToFrom(Number(LADDERINT), 0, 10, 'Wobbly')}px`,

				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
			Height={ContainerHeight / NumTeams - 4}
		>
			<TeamLogoNameContainer>
				<TeamLogo
					W={ContainerHeight / NumTeams / 1.5}
					LADDERINT={LADDERINT}
					teamLogo={teamLogo}
				/>

				<DisplayTeamName
					name={`${position}. ${restrictString(teamName, 25)}`}
					customStyles={TeamNameStyles}
				/>
			</TeamLogoNameContainer>
			<LadderPTS
				LADDERINT={LADDERINT}
				Color={Color.Primary.Contrast}
				LadderItem={LadderItem}
			/>
		</LadderPositionContainer>
	);
};

//
const TeamLogo = (props) => {
	const {LADDERINT, W, teamLogo} = props;
	const frame = useCurrentFrame();
	const IMGSIZING = [W, W, W];
	const TemLogoStyles = calculateImageDimensions(teamLogo, IMGSIZING);

	return (
		<ImgContainer
			style={{
				width: `${W}px`,
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
	);
};

const LadderPTS = (props) => {
	const {LADDERINT, Color, LadderItem} = props;
	const LadderArr = ['P', 'W', 'L', 'TIE', 'PTS'];
	return (
		<MetaContainer
			style={{clipPath: FromLeftToRight(15 + LADDERINT * 2, 'Slow')}}
		>
			{LadderArr.map((Item, i) => {
				return (
					<Performance
						key={i}
						color={Color}
						style={{clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow')}}
					>
						{LadderItem[Item]}
					</Performance>
				);
			})}
		</MetaContainer>
	);
};
