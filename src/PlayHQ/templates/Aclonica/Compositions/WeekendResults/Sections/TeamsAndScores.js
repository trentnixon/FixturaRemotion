import React,  from 'react';
import styled from 'styled-components';
import { useCurrentFrame} from 'remotion';
import { getContrastColor} from '../../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';

import {parseScore} from '../../../../../utils/copy';
import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../utils/global/calculateImageDimensions';

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

const FirstInningsRuns = styled(TeamScore)`
	font-size: 2em;
	font-weight: 400;
`;
const TeamName = styled(TeamScore)`
	font-size: 1.5em;
	font-weight: 400;
`;
const Runs = styled(TeamScore)`
	font-size: 3.5em;
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

const generateTeamStyle = (FPS_SCORECARD, THEME,textAlign) => {
	const frame = useCurrentFrame();
	return {
		textAlign,
		color: getContrastColor(THEME.primary),
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

const FirstInningsScore = (props) => {
	const {FirstInnings, Type, fontFamily, FPS_SCORECARD, THEME,textAlign} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns
			fontFamily={fontFamily}
			style={generateTeamStyle(FPS_SCORECARD, THEME,textAlign)}
		>
			{FirstInnings}
		</FirstInningsRuns>
	);
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
	FirstInnings,
	Type,
	Name,
	textAlign
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
					<>
						<FirstInningsScore
							fontFamily={fontFamily}
							FPS_SCORECARD={FPS_SCORECARD}
							FirstInnings={FirstInnings}
							Type={Type}
							THEME={THEME}
							textAlign={textAlign}
						/>

						<Runs
							fontFamily={fontFamily}
							style={generateTeamStyle(FPS_SCORECARD, THEME,textAlign)}
						>
							{score}
						</Runs>
					</>
				)}

				{overs && (
					<Overs
						fontFamily={fontFamily}
						style={generateTeamStyle(FPS_SCORECARD, THEME,textAlign)}
					>{`(${overs})`}</Overs>
				)}
				<TeamName
					fontFamily={fontFamily}
					style={generateTeamStyle(FPS_SCORECARD, THEME,textAlign)}
				>
					{Name}
				</TeamName>
			</div>
			<LogoHolder style={generateLogoStyle(FPS_SCORECARD)}>
				<ImageWithFallback
					src={team.logo}
					style={{
						...imgStyles,
						borderRadius: '100%',
						height: '80px',
						width: '80px',
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
	const {
		homeTeam,
		awayTeam,
		teamHomeLogo,
		teamAwayLogo,
		HomescoresFirstInnings,
	} = matchData;

	const primaryColor = props.THEME.primary;

	console.log(homeTeam);

	const IMGSIZING = [80, 80, 80];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<TeamsAndScoresContainer>
			<TeamDetail
				team={{logo: teamHomeLogo}}
				fontFamily={'Roboto'}
				imgStyles={teamHomeLogoStyles}
				score={homeScore}
				overs={homeOvers}
				FirstInnings={homeTeam.HomescoresFirstInnings}
				Name={homeTeam.name}
				FPS_SCORECARD={FPS_SCORECARD}
				primaryColor={primaryColor}
				THEME={THEME}
				Type={matchData.type}
				direction="row-reverse"
				justifyContent="flex-end"
				textAlign='left'
			/>
			<TeamDetail
				Name={awayTeam.name}
				team={{logo: teamAwayLogo}}
				fontFamily={'Roboto'}
				imgStyles={teamAwayLogoStyles}
				FirstInnings={awayTeam.AwayscoresFirstInnings}
				score={awayScore}
				overs={awayOvers}
				Type={matchData.type}
				FPS_SCORECARD={FPS_SCORECARD}
				primaryColor={primaryColor}
				THEME={THEME}
				direction="row"
				justifyContent="flex-end"
				textAlign='right'
			/>
		</TeamsAndScoresContainer>
	);
};
