import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';

import {
	getContrastColor,
	darkenColor,
	lightenColor,
} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromTopToBottom,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px 0;
	background-color: ${(props) => props.bgColor};
	border-radius: 10px 10px 0 0;
`;

const TeamName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 60px;
	line-height: 60px;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	font-size: 35px;
	line-height: 35px;
	font-weight: 200;
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const TeamsAndScores = (props) => {
	const {homeTeam, awayTeam, fontFamily, FPS_SCORECARD, time, THEME, ground} =
		props;
	console.log(homeTeam);
	const frame = useCurrentFrame();
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
					{ground}
				</TeamScore>
			</TeamScoreContainer>
			<TeamScoreContainer
			
				style={{
					borderRadius: '10px',
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
					{homeTeam}
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
					{awayTeam}
				</TeamName>
			</TeamScoreContainer>
		</TeamsAndScoresContainer>
	);
};
