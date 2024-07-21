import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {DisplayTeamName} from '../../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables';
import {
	ContainerFixtureCCL,
	ContainerStructureContentBlockCCLWithAnimation,
} from '../../../../common/Containers/CCL/StructureSidebarBlock';
import {TeamLogoCCL} from '../../../../../../templates/CoastalCricketLeague/Components/Common/TeamLogo';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-apart;
	align-content: center;
	align-items: center;
	margin: 2px auto;
	padding: 0px;
	width: 100%;
	height: ${(props) => props.Height}px;
`;

const MetaContainer = styled.div`
	background-color: ${(props) => props.bgColor};
	width: 40%;
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

const Performance = styled.span`
	font-size: 1.6em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	max-width: 20%;
	min-width: 20%;
`;

const TeamNameAndLadderContainer = styled.div`
	width: 885px;
	background-color: green;
	display: flex;
	height: 100%;
`;

export const LadderPosition = (props) => {
	const {LadderItem, LADDERINT} = props;
	// Deconstructors
	const {position, teamName} = LadderItem;

	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	// Const's

	// OBJS
	const TeamNameStyles = {
		...Font.TitleAlt,
		fontSize: '1.6em',
		fontWeight: 400,
		color: Color.Primary.Contrast,
		width: '100%',
		marginLeft: '10px',
		fontStyle: 'normal',
		clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow'),
	};
	return (
		<ContainerFixtureCCL
			style={{
				marginTop: '10px',
			}}
		>
			<ContainerStructureContentBlockCCLWithAnimation
				borderColor={Color.Secondary.Main}
				FPS_SCORECARD={FPS_LADDER}
			>
				<LadderPositionContainer style={{...Font.Copy}} Height={85}>
					<TeamLogoCCL FPS_SCORECARD={FPS_LADDER} Ratio={90} />

					<TeamNameAndLadderContainer
						style={{
							backgroundColor: 'transparent',
							width: `${SpringToFrom(Number(LADDERINT), 0, 885, 'Wobbly')}px`,
							opacity: interpolateOpacityByFrame(
								frame,
								FPS_LADDER - 30,
								FPS_LADDER,
								1,
								0
							),
						}}
					>
						<TeamLogoNameContainer>
							<DisplayTeamName
								name={`${position}. ${restrictString(teamName, 25)}`}
								customStyles={TeamNameStyles}
							/>
						</TeamLogoNameContainer>
						<LadderPTS
							LADDERINT={LADDERINT}
							Color={Color.Primary.Contrast}
							Font={Font.TitleAlt}
							LadderItem={LadderItem}
						/>
					</TeamNameAndLadderContainer>
				</LadderPositionContainer>
			</ContainerStructureContentBlockCCLWithAnimation>
		</ContainerFixtureCCL>
	);
};

//

const LadderPTS = (props) => {
	const {LADDERINT, Color, LadderItem, Font} = props;

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
						style={{
							...Font,
							fontWeight: 200,
							clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow'),
						}}
					>
						{LadderItem[Item]}
					</Performance>
				);
			})}
		</MetaContainer>
	);
};
