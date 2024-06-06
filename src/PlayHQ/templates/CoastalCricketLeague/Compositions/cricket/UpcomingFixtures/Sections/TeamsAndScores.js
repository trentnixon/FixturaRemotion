import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
} from '../../../../../../Animation/ClipWipe';
import {
	DisplayGradeName,
	DisplayGroundName,
} from '../../../../Components/Common/DEPRECATED_CommonVariables';
import {HeaderContainer} from './HeaderContainer';
import {
	ContainerStructureContentBlockCCL,
	ContainerFixtureCCL,
	ItemTopLabelContainer,
	ContentContainerCCL,
	GroupedCCL,
	TeamsAndScoresContainerCCL,
	ContainerStructureContentBlockCCLWithAnimation,
	ItemTopLabelContainerWithAnimation,
} from '../../../../../../structural/assets/common/Containers/CCL/StructureSidebarBlock';
import {VSVG} from '../../../../Components/Common/VSVG';
import {TeamLogoCCL} from '../../../../Components/Common/TeamLogo';
import {TeamNameContainerCCL} from '../../../../Components/Common/TeamNameContainer';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: row;
	position: relative;
	border-radius: 100px;
	background-color: ${({backgroundColor}) => backgroundColor};
`;

const TeamName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 2em;
	line-height: 1em;
	width: 100%;
	margin: 0 10px;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	text-align: left;
`;

export const TeamsAndScores = (props) => {
	const {matchData, FPS_SCORECARD, StyleConfig} = props;
	const {teamHome, teamAway} = matchData;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();

	const gradeNameCustom = {
		color: Color.Secondary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize: '1.2em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'center',
	};

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<ContainerFixtureCCL>
			<ItemTopLabelContainerWithAnimation
				backgroundColor={Color.Secondary.Main}
				FPS_SCORECARD={FPS_SCORECARD}
			>
				<DisplayGroundName {...props} customStyles={gradeNameCustom} />
			</ItemTopLabelContainerWithAnimation>
			<ContainerStructureContentBlockCCLWithAnimation
				borderColor={Color.Secondary.Main}
				FPS_SCORECARD={FPS_SCORECARD}
			>
				<TeamsAndScoresContainerCCL backgroundColor={Color.Primary.Main}>
					<TeamLogoCCL FPS_SCORECARD={FPS_SCORECARD} />
					<ContentContainerCCL>
						<GroupedCCL>
							<TeamNameContainerCCL
								StyleConfig={StyleConfig}
								FPS_SCORECARD={FPS_SCORECARD}
								START={7}
								TEAM={teamHome}
								textAlign="left"
							/>
							<VSVG />
							<TeamNameContainerCCL
								StyleConfig={StyleConfig}
								FPS_SCORECARD={FPS_SCORECARD}
								START={14}
								TEAM={teamAway}
								textAlign="right"
							/>
						</GroupedCCL>

						<HeaderContainer {...props} />
					</ContentContainerCCL>
					<TeamLogoCCL FPS_SCORECARD={FPS_SCORECARD} />
				</TeamsAndScoresContainerCCL>
			</ContainerStructureContentBlockCCLWithAnimation>
		</ContainerFixtureCCL>
	);
};

const BYEContainer = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const {teamHome, teamAway} = matchData;
	const frame = useCurrentFrame();

	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize: '2em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};

	const CreateBye = (teamHome, teamAway) => {
		let displayString;
		if (teamHome === 'Bye') {
			displayString = `${restrictString(teamAway, 30)} : Bye`;
		} else {
			displayString = `${restrictString(teamHome, 30)} : Bye`;
		}
		return displayString;
	};
	return (
		<TeamsAndScoresContainer>
			<ItemTopLabelContainer>
				<DisplayGradeName {...props} customStyles={gradeNameCustom} />
			</ItemTopLabelContainer>
			<ItemTopLabelContainer
				style={{
					clipPath: FromLeftToRight(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
				borderRadius={TemplateVariation.borderRadius}
				bgColor={Color.Primary.Darken}
			>
				<TeamName
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
						clipPath: FromTopToBottom(30, 'Slow'),
						opacity: interpolateOpacityByFrame(
							frame,
							FPS_SCORECARD - 30,
							FPS_SCORECARD,
							1,
							0
						),
					}}
				>
					{CreateBye(teamHome, teamAway)}
				</TeamName>
			</ItemTopLabelContainer>
		</TeamsAndScoresContainer>
	);
};
