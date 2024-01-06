import styled from 'styled-components';
import {getContrastColor, darkenColor} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {restrictString} from '../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {
	DisplayGradeName,
	DisplayTeamName,
} from '../../../Components/Common/CommonVariables';
import {P} from '../../../Components/Common/type';

const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
`;
const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: center;
	align-items: normal;
`;
const StructureContentBlock = styled.div`
	width: 80%; // Takes remaining width of the container
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;

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
	font-family: ${(props) => props.fontFamily};
`;

const LogoHolder = styled.div`
	position: absolute;
	z-index: 1000;
`;

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;

	const frame = useCurrentFrame();
	const IMGSIZING = [100, 100, 100];
	const teamHomeLogoStyles = useImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = useImageDimensions(teamAwayLogo, IMGSIZING);

	const gradeNameCustom = {
		color: getContrastColor(props.THEME.primary),
		fontFamily: props.fontFamily,
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

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<DisplayGradeName {...props} customStyles={gradeNameCustom} />
			</TeamScoreContainer>
			<TeamContainer
				THEME={THEME}
				FPS_SCORECARD={FPS_SCORECARD}
				START={7}
				LOGO={teamHomeLogo}
				STYLES={teamHomeLogoStyles}
				TEAM={teamHome}
				fontFamily={fontFamily}
			/>
			<TeamScoreContainer>
				<P {...gradeNameCustom}>vs</P>
			</TeamScoreContainer>
			<TeamContainer
				THEME={THEME}
				FPS_SCORECARD={FPS_SCORECARD}
				START={14}
				LOGO={teamAwayLogo}
				STYLES={teamAwayLogoStyles}
				TEAM={teamAway}
				fontFamily={fontFamily}
			/>
		</TeamsAndScoresContainer>
	);
};

const TeamContainer = (props) => {
	const {THEME, FPS_SCORECARD, START, LOGO, STYLES, TEAM, fontFamily} = props;
	const frame = useCurrentFrame();
	const fallbackSrc = 'https://fallback.url/image.png';
	const TeamNameStyles = {
		fontStyle: 'normal',
		fontSize: '2em',
		width: '100%',
		margin: '0 10px',
		color: getContrastColor(THEME.secondary),
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '-0.03em',
		fontFamily: fontFamily,
	};

	return (
		<StructureMainBlock>
			<TeamScoreContainer
				bgColor={THEME.secondary}
				style={{
					maxHeight: '62px',
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
				<StructureSidebarBlock>
					<ImageWithFallback
						src={LOGO}
						fallbackSrc={fallbackSrc}
						style={{
							...STYLES,
							borderRadius: '10%',
							objectFit: 'cover',
							height: 'auto',
							width: '100%',
							marginRight: '10px',
							objectFit: 'cover',
							clipPath: FromRightToLeft(20, 'Wobbly'),
							opacity: interpolateOpacityByFrame(
								frame,
								props.FPS_SCORECARD - 30,
								props.FPS_SCORECARD,
								1,
								0
							),
						}}
					/>
				</StructureSidebarBlock>
				{/* <LogoHolder
				style={{
					 // Align with the vertical center of the container
					//transform: 'translateY(-50%)',
					textAlign: 'center',
					opacity: interpolateOpacityByFrame(frame, START + 15, 45, 0, 1),
					height: '100px',
				}}
			>
				<ImageWithFallback
					fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
					src={LOGO}
					style={{
						...STYLES,
						borderRadius: '10%',
						objectFit: 'cover',
					}}
				/>
			</LogoHolder> */}
				<StructureContentBlock>
					<DisplayTeamName
						name={restrictString(TEAM, 45)}
						customStyles={TeamNameStyles}
					/>
				</StructureContentBlock>
			</TeamScoreContainer>
		</StructureMainBlock>
	);
};

const BYEContainer = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, gradeName} = matchData;
	const frame = useCurrentFrame();

	const gradeNameCustom = {
		color: getContrastColor(props.THEME.primary),
		fontFamily: props.fontFamily,
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
				bgColor={darkenColor(THEME.primary)}
			>
				<TeamName
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(THEME.primary),
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
