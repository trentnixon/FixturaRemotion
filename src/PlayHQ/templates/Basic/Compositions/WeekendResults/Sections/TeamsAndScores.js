import React, {useState} from 'react';
import styled from 'styled-components';
import {Img, useCurrentFrame} from 'remotion';
import {GetBackgroundContractColorForText} from '../../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {parseScore} from '../../../../../utils/copy';
import { ImageWithFallback } from '../../../Components/Common/ImageWithFallback';

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
	line-height: 1em;
	font-weight: 900;
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Runs = styled(TeamScore)`
	font-size: 5em;
`;
const YetToBat = styled(TeamScore)`
	font-size: 2em;
`;

const Overs = styled(TeamScore)`
	font-size: 2em;
	font-weight: 600;
`;

const LogoHolder = styled.div`
	margin: 0 2em;
`;

const generateTeamStyle = (FPS_SCORECARD, THEME) => {
	const frame = useCurrentFrame();
	return {
		color: GetBackgroundContractColorForText(THEME.primary, THEME.secondary),
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
	direction,
	justifyContent,
	THEME,
}) => {
	return (
		<TeamScoreContainer
			style={{flexDirection: direction, justifyContent: justifyContent}}
		>
			<div>
				{score === 'Yet to Bat' ? (
					<YetToBat
						fontFamily={fontFamily}
						style={generateTeamStyle(FPS_SCORECARD, THEME)}
					>
						{score}
					</YetToBat>
				) : (
					<Runs
						fontFamily={fontFamily}
						style={generateTeamStyle(FPS_SCORECARD, THEME)}
					>
						{score}
					</Runs>
				)}

				{overs && (
					<Overs
						fontFamily={fontFamily}
						style={generateTeamStyle(FPS_SCORECARD, THEME)}
					>{`(${overs})`}</Overs>
				)}
			</div>
			<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
				<ImageWithFallback
					src={team.logo}
					fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
					style={{
						...imgStyles,
						borderRadius: '100%',
						height: '120px',
						width: '120px',
						objectFit: 'cover',
					}}
				/>
			</LogoHolder>
		</TeamScoreContainer>
	);
};

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const primaryColor = props.THEME.primary;

	const IMGSIZING = [100, 140, 120];
	const teamHomeLogoStyles = useImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = useImageDimensions(teamAwayLogo, IMGSIZING);

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
