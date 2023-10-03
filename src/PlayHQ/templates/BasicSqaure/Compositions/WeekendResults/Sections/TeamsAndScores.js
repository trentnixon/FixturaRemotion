import React from 'react';
import styled from 'styled-components';
import {Img, useCurrentFrame} from 'remotion';
import {GetBackgroundContractColorForText, getBackgroundColor, getContrastColor} from '../../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {parseScore} from '../../../../../utils/copy';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	padding: 10px 0;
`;

const TeamScore = styled.h3`
	font-size: 2.3em;
	line-height: 1em;
	font-weight: 900;
	margin: 0;
	text-align: right;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Runs = styled(TeamScore)``;

const Overs = styled(TeamScore)`
	font-size: 0.9em;
	font-weight: 600;
`;

const LogoHolder = styled.div`
	margin: 0 2em;
`;

const generateTeamStyle = (FPS_SCORECARD, THEME) => {
	const frame = useCurrentFrame();
	return {
		color:GetBackgroundContractColorForText(THEME.primary, THEME.secondary),
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

const generateLogoStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
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
	};
};

const TeamDetail = ({
	team, 
	fontFamily,
	imgStyles,
	score,
	overs,
	FPS_SCORECARD,
	primaryColor,
	direction,
	justifyContent,
	THEME
}) => {

	return (
		<TeamScoreContainer
			style={{flexDirection: direction, justifyContent: justifyContent}}
		>
			<TeamScore
				fontFamily={fontFamily}
				style={generateTeamStyle(FPS_SCORECARD, THEME)}
			>
				<Runs>{score}</Runs>
				{overs && <Overs>{`(${overs})`}</Overs>}
			</TeamScore>
			<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
				<Img src={team.logo} style={{...imgStyles, borderRadius:'100%'}} />
			</LogoHolder>
		</TeamScoreContainer>
	);
};

export const TeamsAndScores = (props) => {
	const {homeTeam, awayTeam, fontFamily, FPS_SCORECARD,teamHomeLogo, teamAwayLogo} = props;
	const primaryColor = props.THEME.primary;
	const THEME = props.THEME;
	const IMGSIZING = [100, 140, 120];
	const teamHomeLogoStyles = useImageDimensions(
		teamHomeLogo,
		IMGSIZING
	);
	const teamAwayLogoStyles = useImageDimensions(
		teamAwayLogo,
		IMGSIZING
	);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<TeamsAndScoresContainer>
			<TeamDetail
				team={{logo: teamHomeLogo}}
				fontFamily={fontFamily}
				imgStyles={teamHomeLogoStyles}
				score={homeScore}
				overs={homeOvers}
				FPS_SCORECARD={FPS_SCORECARD}
				primaryColor={primaryColor}
				THEME={THEME}
				direction="row"
				justifyContent="flex-end"
			/>
			<TeamDetail
				team={{logo: teamAwayLogo}}
				fontFamily={fontFamily}
				imgStyles={teamAwayLogoStyles}
				score={awayScore}
				overs={awayOvers}
				FPS_SCORECARD={FPS_SCORECARD}
				primaryColor={primaryColor}
				THEME={THEME}
				direction="row-reverse"
				justifyContent="flex-end"
			/>
		</TeamsAndScoresContainer>
	);
};
