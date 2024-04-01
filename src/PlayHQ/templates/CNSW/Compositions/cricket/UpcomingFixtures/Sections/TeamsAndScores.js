import styled from 'styled-components';
import {getContrastColor, darkenColor} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';

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
	margin: 0 130px;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	text-align: left;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	font-size: 2em;
	line-height: 1.2em;
	font-weight: 400;
	text-align: right;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const LogoHolder = styled.div`
	position: absolute;
	z-index: 1000;
`;

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;

	const frame = useCurrentFrame();
	const IMGSIZING = [100, 100, 100];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<TeamScore
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
					{gradeName}
				</TeamScore>
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
				<TeamScore
					fontFamily={fontFamily}
					style={{
						padding: '10px 0 ',
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
					vs
				</TeamScore>
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
	return (
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
			<LogoHolder
				style={{
					left: 10,
					bottom: '0%', // Align with the vertical center of the container
					//transform: 'translateY(-50%)',
					textAlign: 'center',
					opacity: interpolateOpacityByFrame(frame, START + 15, 45, 0, 1),
					width: '100px',
				}}
			>
				<ImageWithFallback
					src={LOGO}
					style={{
						...STYLES,
						borderRadius: '10%',
						objectFit: 'cover',
					}}
				/>
			</LogoHolder>
			<TeamName
				fontFamily={fontFamily}
				style={{
					color: getContrastColor(THEME.secondary),
					clipPath: FromLeftToRight(30 + START, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				{restrictString(TEAM, 50)}
			</TeamName>
		</TeamScoreContainer>
	);
};

const BYEContainer = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, gradeName} = matchData;
	const frame = useCurrentFrame();
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
				<TeamScore
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
					{gradeName}
				</TeamScore>
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
