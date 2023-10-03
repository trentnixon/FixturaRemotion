import React from 'react';
import styled from 'styled-components';
import {Img, useCurrentFrame} from 'remotion';
import {
	GetBackgroundContractColorForText,
	getTitleColorOverGradient,
} from '../../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {parseScore} from '../../../../../utils/copy';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 0px;
	width: 40%;
	height: 100%;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	
	align-items: center;
    width: 100%;
    padding: 20px 1.2em 20px 115px;
}
`;

const TeamScore = styled.div`
	line-height: 1em;
	font-weight: 600;
	margin: 0;
	text-align: left;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Runs = styled(TeamScore)`
	font-size: 5em;
`;

const Overs = styled(TeamScore)`
	font-size: 2em;
	font-weight: 100;
	margin-top: 10px;
	letter-spacing: -0.05em;
	text-align: center;
`;

const LogoHolder = styled.div`
	margin: 0em;
`;

const generateTeamStyle = (COLOR) => {
	//const frame = useCurrentFrame();
	return {
		color: COLOR,
		clipPath: FromLeftToRight(15, 'Slow'),
		//opacity: interpolateOpacityByFrame(frame, 20, 50, 0, 1),
	};
};

const generateLogoStyle = () => {
	const frame = useCurrentFrame();
	return {
		left: 0,
		top: 0,
		opacity: interpolateOpacityByFrame(frame, 15, 45, 0, 1),
	};
};

const TeamDetail = ({
	team,
	fontFamily,
	imgStyles,
	score,
	overs,
	direction,
	justifyContent,
	THEME,
}) => {
	return (
		<>
			<TeamScoreContainer
				style={{flexDirection: direction, justifyContent: justifyContent}}
			>
				<LogoHolder style={generateLogoStyle()}>
					<Img src={team.logo} style={{...imgStyles}} />
				</LogoHolder>
				<TeamScore
					fontFamily={fontFamily}
					style={generateTeamStyle(
						getTitleColorOverGradient(THEME.primary, THEME.secondary, 0.45)
					)}
				>
					<Runs>{score}</Runs>
					{overs && <Overs>{`(${overs})`}</Overs>}
				</TeamScore>
			</TeamScoreContainer>
		</>
	);
};

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 120, 80];
	const teamHomeLogoStyles = useImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = useImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<TeamsAndScoresContainer
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
			<TeamDetail
				team={{logo: teamHomeLogo, Name: homeTeam.name}}
				fontFamily={fontFamily}
				imgStyles={teamHomeLogoStyles}
				score={homeScore}
				overs={homeOvers}
				direction="column"
				justifyContent="flex-start"
				THEME={THEME}
			/>
			<TeamDetail
				team={{logo: teamAwayLogo, Name: awayTeam.name}}
				fontFamily={fontFamily}
				imgStyles={teamAwayLogoStyles}
				score={awayScore}
				overs={awayOvers}
				direction="column"
				justifyContent="flex-start"
				THEME={THEME}
			/>
		</TeamsAndScoresContainer>
	);
};
