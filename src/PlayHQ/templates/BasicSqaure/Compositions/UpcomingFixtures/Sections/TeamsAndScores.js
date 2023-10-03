import styled from 'styled-components';
import { getContrastColor, darkenColor } from '../../../../../utils/colors';
import { Img, useCurrentFrame } from 'remotion';
import { interpolateOpacityByFrame } from '../../../../../Animation/interpolate';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import { restrictString } from '../../../../../utils/copy';
import { FromTopToBottom, FromLeftToRight, FromRightToLeft } from '../../../../../Animation/ClipWipe';


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
	width: 100%;
	padding: 15px 0;
	background-color: ${(props) => props.bgColor};
`;

const TeamName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 2em;
	line-height: 1.2em;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	font-size: 2em;
	line-height: 1.2em;
	font-weight: 600;
	text-align: center;
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
	const {
		homeTeam,
		awayTeam,
		fontFamily,
		FPS_SCORECARD,
		time,
		gradeName,
		THEME,
		ground,
		teamAwayLogo,
		teamHomeLogo,
	} = props;

	const frame = useCurrentFrame();
	const IMGSIZING = [120, 160, 120];
	const teamHomeLogoStyles = useImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = useImageDimensions(teamAwayLogo, IMGSIZING);

	console.log(teamAwayLogoStyles);

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<TeamScore
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(props.THEME.primary),
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
			<LogoHolder
				style={{
					left: 0,
					top: 0,
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
				<Img src={teamHomeLogo} style={{...teamHomeLogoStyles,borderRadius:'100%'}} />
			</LogoHolder>
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
				bgColor={darkenColor(THEME.primary)}
			>
				<TeamName
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(THEME.primary)),
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
					{  restrictString(homeTeam,30) }
					
				</TeamName>
			</TeamScoreContainer>
			<TeamScoreContainer>
				<TeamScore
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(props.THEME.primary),
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
			<TeamScoreContainer
				bgColor={THEME.secondary}
				style={{
					clipPath: FromRightToLeft(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				<TeamName
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(THEME.secondary),
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
					{  restrictString(awayTeam,30) }
				</TeamName>
			</TeamScoreContainer>
			<LogoHolder
				style={{
					right: 0,
					bottom: 0,
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
				<Img src={teamAwayLogo} style={{...teamAwayLogoStyles,borderRadius:'100%'}}  />
			</LogoHolder>
		</TeamsAndScoresContainer>
	);
};
