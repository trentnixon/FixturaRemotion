import styled from 'styled-components';
import {GetBackgroundContractColorForText} from '../../../../../utils/colors';
import {splitSocreByRunsAndOvers} from '../../../../../utils/copy';
import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../utils/global/calculateImageDimensions';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
	margin: 20px 0 0px;
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
const FirstInningsRuns = styled(TeamScore)`
	font-size: 2em;
	font-weight: 400;
`;
const YetToBat = styled(TeamScore)`
	font-size: 3em;
`;

const Overs = styled(TeamScore)`
	font-size: 2em;
	font-weight: 600;
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
const TeamName = styled(TeamScore)`
	font-size: 1.6em;
	font-weight: 400;
	letter-spacing: -0.085em;
`;
export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const {homeTeam, awayTeam, gradeName, teamHomeLogo, teamAwayLogo} = matchData;

	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	console.log(awayTeam.AwayscoresFirstInnings);
	return (
		<>
			<GradeName
				fontFamily={fontFamily}
				style={{
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
				}}
			>
				{gradeName}
			</GradeName>
			<TeamsAndScoresContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: homeTeam.name, logo: teamHomeLogo}}
						score={HomeScore}
						FirstInnings={homeTeam.HomescoresFirstInnings}
						overs={HomeOvers}
						fontFamily={fontFamily}
						Type={matchData.type}
						THEME={THEME}
						imgStyles={teamHomeLogoStyles}
						textAlign="right"
						flexDirection="row"
					/>
				</TeamScoreContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: awayTeam.name, logo: teamAwayLogo}}
						score={AwayScore}
						FirstInnings={awayTeam.AwayscoresFirstInnings}
						overs={AwayOvers}
						fontFamily={fontFamily}
						Type={matchData.type}
						THEME={THEME}
						imgStyles={teamAwayLogoStyles}
						textAlign="left"
						flexDirection="row-reverse" // <-- Add this line
					/>
				</TeamScoreContainer>
			</TeamsAndScoresContainer>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type, fontFamily} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns fontFamily={fontFamily}>{FirstInnings}</FirstInningsRuns>
	);
};

const TeamDetails = ({
	team,
	score,
	overs,
	fontFamily,
	THEME,
	imgStyles,
	textAlign,
	flexDirection,
	Type,
	FirstInnings,
}) => {
	return (
		<ScoresAndLogoContainer style={{flexDirection: flexDirection}}>
			<TeamScoreDiv
				fontFamily={fontFamily}
				style={{
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
					textAlign: textAlign,
				}}
			>
				{score === 'Yet to Bat' ? (
					<YetToBat>{score}</YetToBat>
				) : (
					<>
						<FirstInningsScore
							fontFamily={fontFamily}
							FirstInnings={FirstInnings}
							Type={Type}
							THEME={THEME}
						/>
						<Runs>{score}</Runs>
					</>
				)}

				{overs && <Overs>{` (${overs}`}</Overs>}
				<TeamName fontFamily={fontFamily}>{team.name}</TeamName>
			</TeamScoreDiv>
			<LogoHolder>
				<ImageWithFallback
					src={team.logo}
					style={{
						...imgStyles,
						borderRadius: '100%',
						height: '150px',
						width: '150px',
						objectFit: 'cover',
					}}
				/>
			</LogoHolder>
		</ScoresAndLogoContainer>
	);
};
