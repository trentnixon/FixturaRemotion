import styled from 'styled-components';
import {splitSocreByRunsAndOvers} from '../../../../../../utils/copy';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

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
	margin: 0;
`;

const TeamScore = styled.h3`
	font-weight: 900;
	margin: 0;
	letter-spacing: -0.1em;
	margin: 0;
	line-height: 1em;
	text-transform: uppercase;
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
	font-size: 3em;
	line-height: 1em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: center;
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
	const {matchData, StyleConfig} = props;
	const {homeTeam, awayTeam, gradeName, teamHomeLogo, teamAwayLogo} = matchData;
	const {Font, Color} = StyleConfig;
	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	console.log(awayTeam.AwayscoresFirstInnings);
	return (
		<>
			<GradeName
				style={{
					...Font.Copy,
					color: Color.Primary.BackgroundContractColor,
				}}
			>
				{gradeName}
			</GradeName>
			<TeamsAndScoresContainer>
				<TeamScoreContainer>
					<TeamDetails
						StyleConfig={StyleConfig}
						team={{name: homeTeam.name, logo: teamHomeLogo}}
						score={HomeScore}
						FirstInnings={homeTeam.HomescoresFirstInnings}
						overs={HomeOvers}
						Type={matchData.type}
						imgStyles={teamHomeLogoStyles}
						textAlign="right"
						flexDirection="row"
					/>
				</TeamScoreContainer>
				<TeamScoreContainer>
					<TeamDetails
						StyleConfig={StyleConfig}
						team={{name: awayTeam.name, logo: teamAwayLogo}}
						score={AwayScore}
						FirstInnings={awayTeam.AwayscoresFirstInnings}
						overs={AwayOvers}
						Type={matchData.type}
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
	const {FirstInnings, Type, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns
			style={{...Font.Copy, color: Color.Primary.BackgroundContractColor}}
		>
			{FirstInnings}
		</FirstInningsRuns>
	);
};

const TeamDetails = ({
	team,
	score,
	overs,
	imgStyles,
	textAlign,
	flexDirection,
	Type,
	FirstInnings,
	StyleConfig,
}) => {
	const {Font, Color} = StyleConfig;
	return (
		<ScoresAndLogoContainer style={{flexDirection}}>
			<TeamScoreDiv
				style={{
					...Font.Copy,
					color: Color.Primary.BackgroundContractColor,
					textAlign,
				}}
			>
				{score === 'Yet to Bat' ? (
					<YetToBat
						style={{
							...Font.Copy,
							color: Color.Primary.BackgroundContractColor,
						}}
					>
						{score}
					</YetToBat>
				) : (
					<>
						<FirstInningsScore
							FirstInnings={FirstInnings}
							Type={Type}
							StyleConfig={StyleConfig}
						/>
						<Runs
							style={{
								...Font.Copy,
								fontSize: '5em',
								fontWeight: 900,
								color: Color.Primary.BackgroundContractColor,
							}}
						>
							{score}
						</Runs>
					</>
				)}

				{overs && <Overs>{` (${overs}`}</Overs>}
				<TeamName
					style={{
						...Font.Copy,
						fontWeight: 200,
						color: Color.Primary.BackgroundContractColor,
					}}
				>
					{team.name}
				</TeamName>
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
