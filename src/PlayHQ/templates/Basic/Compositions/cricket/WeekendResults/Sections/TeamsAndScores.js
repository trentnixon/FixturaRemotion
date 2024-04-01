import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {parseScore} from '../../../../../../utils/copy';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

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
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
`;

const FirstInningsRuns = styled(TeamScore)`
	font-size: 2em;
`;
const TeamName = styled(TeamScore)`
	font-size: 1.5em;
	font-weight: 200 !important;
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

const generateTeamStyle = (FPS_SCORECARD, textAlign, Font, Color) => {
	const frame = useCurrentFrame();
	return {
		...Font,
		textAlign,
		color: Color,
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
	const {FirstInnings, Type, FPS_SCORECARD, textAlign, StyleConfig} = props;
	const {Font, Color} = StyleConfig;

	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns
			style={generateTeamStyle(
				FPS_SCORECARD,

				textAlign,
				Font.TitleAlt,
				Color.Primary.BackgroundContractColor
			)}
		>
			{FirstInnings}
		</FirstInningsRuns>
	);
};

const TeamDetail = (props) => {
	const {
		team,
		imgStyles,
		score,
		overs,
		FPS_SCORECARD,
		direction,
		justifyContent,

		FirstInnings,
		Type,
		Name,
		textAlign,
		StyleConfig,
	} = props;

	const {Font, Color} = StyleConfig;
	const createStyle = generateTeamStyle(
		FPS_SCORECARD,

		textAlign,
		Font.TitleAlt,
		Color.Primary.BackgroundContractColor
	);
	return (
		<TeamScoreContainer style={{flexDirection: direction, justifyContent}}>
			<div>
				{score === 'Yet to Bat' ? (
					<YetToBat style={createStyle}>{score}</YetToBat>
				) : (
					<>
						<FirstInningsScore
							FPS_SCORECARD={FPS_SCORECARD}
							FirstInnings={FirstInnings}
							Type={Type}
							textAlign={textAlign}
							StyleConfig={StyleConfig}
						/>

						<Runs style={createStyle}>{score}</Runs>
					</>
				)}

				{overs && <Overs style={createStyle}>{`(${overs})`}</Overs>}
				<TeamName style={createStyle}>{Name}</TeamName>
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
	const {matchData, FPS_SCORECARD, StyleConfig} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const IMGSIZING = [80, 80, 80];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<TeamsAndScoresContainer>
			<TeamDetail
				StyleConfig={StyleConfig}
				team={{logo: teamHomeLogo}}
				imgStyles={teamHomeLogoStyles}
				score={homeScore}
				overs={homeOvers}
				FirstInnings={homeTeam.HomescoresFirstInnings}
				Name={homeTeam.name}
				FPS_SCORECARD={FPS_SCORECARD}
				Type={matchData.type}
				direction="row"
				justifyContent="flex-end"
				textAlign="right"
			/>
			<TeamDetail
				StyleConfig={StyleConfig}
				Name={awayTeam.name}
				team={{logo: teamAwayLogo}}
				imgStyles={teamAwayLogoStyles}
				FirstInnings={awayTeam.AwayscoresFirstInnings}
				score={awayScore}
				overs={awayOvers}
				Type={matchData.type}
				FPS_SCORECARD={FPS_SCORECARD}
				direction="row-reverse"
				justifyContent="flex-end"
				textAlign="left"
			/>
		</TeamsAndScoresContainer>
	);
};
