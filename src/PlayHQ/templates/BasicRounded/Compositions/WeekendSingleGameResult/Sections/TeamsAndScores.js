import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';
import {splitSocreByRunsAndOvers} from '../../../../../utils/copy';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {Img} from 'remotion';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
	margin:20px 0 0px;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 10px 0 0;
`;

const TeamScoreDiv = styled.div`
	font-weight: 900;
	margin: 0;
	letter-spacing: -0.1em;
	margin: 0;
	line-height: 1em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const TeamScore = styled.h3`
	font-weight: 900;
	margin: 0;
	letter-spacing: -0.1em;
	margin: 0;
	line-height: 1em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Runs = styled(TeamScore)`
	font-size: 5em;
`;
const Overs = styled(TeamScore)`
	font-size: 2em;
	font-weight: 600;
`;
const TeamName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 1.8em;
	line-height: 0.95em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0 0 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
`;
const ScoresAndLogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const GradeName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 3em;
	line-height: 1em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
`;
const LogoHolder = styled.div`
	margin: 0 2em;
`;

export const TeamsAndScores = (props) => {
	const {homeTeam, awayTeam, fontFamily, gradeName, THEME,teamHomeLogo, teamAwayLogo} = props;

	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = useImageDimensions(
		teamHomeLogo,
		IMGSIZING
	);
	const teamAwayLogoStyles = useImageDimensions(
		teamAwayLogo,
		IMGSIZING
	);

	return (
		<>
			<GradeName
				fontFamily={fontFamily}
				style={{color: getContrastColor(THEME.primary)}}
			>
				{gradeName}
			</GradeName>
			<TeamsAndScoresContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: homeTeam.name, logo: teamHomeLogo}}
						score={HomeScore}
						overs={HomeOvers}
						fontFamily={fontFamily}
						themeColor={THEME.primary}
						imgStyles={teamHomeLogoStyles}
						textAlign="right"
						flexDirection="row"
						// <-- Add this line
					/>
				</TeamScoreContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: awayTeam.name, logo: teamAwayLogo}}
						score={AwayScore}
						overs={AwayOvers}
						fontFamily={fontFamily}
						themeColor={THEME.primary}
						imgStyles={teamAwayLogoStyles}
						textAlign="left"
						flexDirection="row-reverse" // <-- Add this line
					/>
				</TeamScoreContainer>
			</TeamsAndScoresContainer>
		</>
	);
};

const TeamDetails = ({
	team,
	score,
	overs,
	fontFamily,
	themeColor,
	imgStyles,
	textAlign,
	flexDirection,
}) => {
	return (
		<ScoresAndLogoContainer style={{flexDirection: flexDirection}}>
			<TeamScoreDiv
				fontFamily={fontFamily}
				style={{
					color: getContrastColor(themeColor),
					textAlign: textAlign,
				}}
			>
				<Runs>{score}</Runs>
				{overs && <Overs>{` (${overs}`}</Overs>}
			</TeamScoreDiv>
			<LogoHolder>
				<Img src={team.logo} style={{...imgStyles,borderRadius:'100%'}} />
			</LogoHolder>
		</ScoresAndLogoContainer>
	);
};
