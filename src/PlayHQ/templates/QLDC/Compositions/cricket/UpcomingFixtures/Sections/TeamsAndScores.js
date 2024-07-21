import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {
	DisplayGradeName,
	DisplayTeamName,
} from '../../../../Components/Common/DEPRECATED_CommonVariables';
import {P} from '../../../../Components/Common/DEPRECATED_type';
import {HeaderContainer} from './HeaderContainer';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {
	ContainerStructureContentBlock,
	ContainerStructureMainBlock,
	ContainerStructureSidebarBlock,
} from '../../../../../../structural/assets/common/Containers/QLDC/StructureSidebarBlock';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 15px 0;

	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
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
	const {matchData} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;

	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const IMGSIZING = [100, 100, 100];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		fontSize: '1.5em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer matchData={matchData} />;

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<DisplayGradeName
					gradeName={matchData.gradeName}
					customStyles={gradeNameCustom}
				/>
			</TeamScoreContainer>
			<TeamContainer
				START={7}
				LOGO={teamHomeLogo}
				STYLES={teamHomeLogoStyles}
				TEAM={teamHome}
			/>
			<TeamScoreContainer style={{marginTop: '-25px'}}>
				<P {...gradeNameCustom}>vs</P>
			</TeamScoreContainer>
			<TeamContainer
				START={14}
				LOGO={teamAwayLogo}
				STYLES={teamAwayLogoStyles}
				TEAM={teamAway}
			/>
			<ContainerStructureMainBlock>
				<ContainerStructureSidebarBlock />
				<HeaderContainer matchData={matchData} />
			</ContainerStructureMainBlock>
		</TeamsAndScoresContainer>
	);
};

const TeamContainer = (props) => {
	const {START, LOGO, STYLES, TEAM} = props;

	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const IMGRATIO = '95px';
	const fallbackSrc = 'https://fallback.url/image.png';
	const TeamNameStyles = {
		...Font.Copy,
		fontSize: '1.9em',
		width: '100%',
		margin: '0 10px',
		color: Color.Secondary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '-0.03em',
	};

	return (
		<ContainerStructureMainBlock>
			<ContainerStructureSidebarBlock>
				<ImageWithFallback
					src={LOGO}
					fallbackSrc={fallbackSrc}
					style={{
						...STYLES,
						objectFit: 'cover',
						height: IMGRATIO,
						width: IMGRATIO,
						marginRight: '5px',
						clipPath: FromRightToLeft(20, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							FPS_SCORECARD - 30,
							FPS_SCORECARD,
							1,
							0
						),
					}}
				/>
			</ContainerStructureSidebarBlock>
			<ContainerStructureContentBlock>
				<TeamScoreContainer
					bgColor={Color.Secondary.Main}
					style={{
						maxHeight: '100px',
						width: `${SpringToFrom(START, 0, 100, 'Wobbly')}%`,
						opacity: interpolateOpacityByFrame(
							frame,
							FPS_SCORECARD - 30,
							FPS_SCORECARD,
							1,
							0
						),
					}}
				>
					<DisplayTeamName
						name={restrictString(TEAM, 45)}
						customStyles={TeamNameStyles}
					/>
				</TeamScoreContainer>
			</ContainerStructureContentBlock>
		</ContainerStructureMainBlock>
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
			<TeamScoreContainer>
				<DisplayGradeName {...props} customStyles={gradeNameCustom} />
			</TeamScoreContainer>
			<TeamScoreContainer
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
			</TeamScoreContainer>
		</TeamsAndScoresContainer>
	);
};
