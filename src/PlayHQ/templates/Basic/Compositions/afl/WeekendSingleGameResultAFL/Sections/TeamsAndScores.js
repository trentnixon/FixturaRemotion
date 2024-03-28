import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../Components/Common/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

// Refactored: Consolidated styling for improved maintenance and readability
const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 0 20px 0;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
    align-items: flex-end;
    align-content: flex-end;
`;

const teamScoreStyles = `
  line-height: 1em;
  margin: 0;
  text-align: right;
  letter-spacing: 0em;
  text-transform: uppercase;
`;

const TeamName = styled.h3`
	${teamScoreStyles}
	font-size: 1.5em;
	font-weight: 200 !important;
	display: ${(props) => props.display};
	padding: ${(props) => props.padding};
	width:'100%'
`;
const Points = styled.h3`
	${teamScoreStyles}
	font-size: 6em;
	line-height: 0.9em;
	letter-spacing: -7px;
`;
const Behinds = styled.p`
	${teamScoreStyles}
	font-size: 1.8em;
	font-weight: 100;
	line-height: 0.9em;
	letter-spacing: -0.055em;
`;

const LogoHolder = styled.div`
	margin: 0 2em;
	display: ${(props) => props.display};
`;

const PointsHolder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: flex-start;
`;

// Enhanced readability and reuse of style generation functions
const generateTeamStyle = (FPS_SCORECARD, textAlign, Font, Color, frame) => ({
	...Font,
	textAlign,
	color: Color,
	clipPath: FromTopToBottom(15, 'Slow'),
	opacity: interpolateOpacityByFrame(
		frame,
		FPS_SCORECARD - 15,
		FPS_SCORECARD,
		1,
		0
	),
});

const generateLogoStyle = (FPS_SCORECARD, frame) => ({
	left: 0,
	top: 0,
	clipPath: FromTopToBottom(10, 'Slow'),
	opacity: interpolateOpacityByFrame(
		frame,
		FPS_SCORECARD - 15,
		FPS_SCORECARD,
		1,
		0
	),
});

export const TeamsAndScores = ({matchData, FPS_SCORECARD, StyleConfig}) => {
	// Dev notes: Simplified the main component rendering by mapping team details from a structured object array
	// Future improvements: Consider dynamic theme support and further componentization for reuse in other parts of the application

	const teamDetails = [
		{
			team: matchData?.teams?.home,
			direction: 'row',
			justifyContent: 'flex-end',
			Name: matchData?.teams?.home?.name,
			textAlign: 'right',
			padding: '10px 30px 10px 0',
			GoalsAndBehinds: matchData?.teams?.home?.HomeGoalsAndBehinds,
		},
		{
			team: matchData?.teams?.away,
			direction: 'row-reverse',
			justifyContent: 'flex-end',
			Name: matchData?.teams?.away?.name,
			textAlign: 'left',
			padding: '10px 0 10px 30px',
			GoalsAndBehinds: matchData?.teams?.away?.AwayGoalsAndBehinds,
		},
	];

	return (
		<TeamsAndScoresContainer>
			{TeamDetail({
				teamDetail: teamDetails,
				FPS_SCORECARD,
				StyleConfig,
			})}
		</TeamsAndScoresContainer>
	);
};

const TeamDetail = ({teamDetail, FPS_SCORECARD, StyleConfig}) => {
	const frame = useCurrentFrame();
	const {Font, Color} = StyleConfig || {};

	// Refactor: Merged duplicate logic into a single mapping operation for both teams
	return (
		teamDetail?.map(
			({
				team,
				direction,
				justifyContent,
				Name,
				textAlign,
				padding,
				GoalsAndBehinds,
			}) => {
				const createStyle = generateTeamStyle(
					FPS_SCORECARD,
					textAlign,
					Font?.TitleAlt,
					Color?.Primary?.BackgroundContractColor,
					frame
				);
				const isFrameInRange = (frame, range) => {
					return frame >= range.Start && frame <= range.End;
				};
				const imgStyles = calculateImageDimensions(team?.logo, [80, 80, 80]); // IMGSIZING moved inline for clarity
				const score = isNaN(parseInt(team?.scores, 10))
					? 0
					: parseInt(team?.scores, 10); // Improved error handling for score

				return (
					<>
					<TeamScoreContainer
						key={Name}
						style={{flexDirection: direction, justifyContent, padding}}
					>
						
						<LogoHolder style={generateLogoStyle(FPS_SCORECARD, frame)}>
							<ImageWithFallback
								src={team?.logo}
								style={{
									...imgStyles,
									borderRadius: '100%',
									height: '80px',
									width: '80px',
									objectFit: 'cover',
								}}
							/>
						</LogoHolder>
						<PointsHolder>
							<Points style={createStyle}>{score}</Points>
							<Behinds style={createStyle}>{GoalsAndBehinds}</Behinds>
						</PointsHolder>
						<TeamName style={createStyle} padding={padding}>
							{Name}
						</TeamName>
					</TeamScoreContainer>
					
					</>
				);
			}
		) || []
	);
};
