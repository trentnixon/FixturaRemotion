import styled from 'styled-components';

import {
	getContrastColor,
	darkenColor,
	setOpacity,
} from '../../../../../utils/colors';
import {Img, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromTopToBottom,
	FromRightToLeft,
	FromMiddle,
	EraseFromMiddle,
} from '../../../../../Animation/ClipWipe';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0px;
	width: 85%;
	flex-direction: row;
	background-color: ${(props) => setOpacity(props.bgColor, 0.2)};
	position: relative;
	background-blend-mode: soft-light;
	backdrop-filter: blur(40px);
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	width: 100%;
	background-color: ${(props) => props.bgColor};
`;

const TeamName = styled.h2`
	font-family: Oswald;
	font-style: normal;
	font-weight: 400;
	font-size: 2.5em;
	line-height: 1.1em;
	letter-spacing: 0.005em;
	text-transform: uppercase;
	margin: 0;
	padding: 0 10px;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	font-family: Oswald;
	font-size: 2em;
	line-height: 1.1em;
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
	display: flex;
	width: 85%;
	margin: 0 0%;
	justify-content: space-between;
	margin-bottom: -50px;
	z-index: 0;
`;
const TeamLogo = styled.div`
	width: 200px;
	height: 200px;
	flex-shrink: 0;
	border-radius: 100%;
	border-radius: 200px;
	background: transparent;
	z-index: 10;
	top: 0px;
	text-align: center;
	overflow: hidden;
`;

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;
	const frame = useCurrentFrame();
	return (
		<>
			<LogoHolder
				style={{
					clipPath: EraseFromMiddle(FPS_SCORECARD - 30, 'Slow'),
				}}
			>
				<TeamLogo
					style={{
						marginLeft: `${interpolateOpacityByFrame(
							frame,
							0,
							FPS_SCORECARD,
							-47,
							100
						)}px`,
						clipPath: FromTopToBottom(30, 'Slow'),
					}}
				>
					<Img src={teamHomeLogo} height={'200px'} width={'auto'} />
				</TeamLogo>
				<TeamLogo
					style={{
						marginRight: `${interpolateOpacityByFrame(
							frame,
							0,
							FPS_SCORECARD,
							-47,
							100
						)}px`,
						clipPath: FromTopToBottom(35, 'Slow'),
					}}
				>
					<Img src={teamAwayLogo} height={'200px'} width={'auto'} />
				</TeamLogo>
			</LogoHolder>
			<TeamsAndScoresContainer
				bgColor={setOpacity(darkenColor(THEME.primary), 0.75)}
				style={{
					clipPath: FromMiddle(0, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				<TeamScoreContainer
					style={{
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
							textAlign: 'right',
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
						{teamHome}
					</TeamName>
				</TeamScoreContainer>
				<TeamScoreContainer
					style={{
						padding: '0 20px',
						width: '100px',
						justifyContent: 'center',
						height: '100%',
					}}
				>
					<TeamScore
						fontFamily={fontFamily}
						style={{
							color: getContrastColor(props.THEME.primary),
							clipPath: FromTopToBottom(35, 'Slow'),
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
					/* bgColor={THEME.secondary} */
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
							textAlign: 'left',
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
						{teamAway}
					</TeamName>
				</TeamScoreContainer>
			</TeamsAndScoresContainer>
		</>
	);
};
