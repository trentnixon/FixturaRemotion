import styled from 'styled-components';
import {splitSocreByRunsAndOvers} from '../../../../../../utils/copy';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';

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
	margin: 0;
	text-transform: uppercase;
`;

const Runs = styled(TeamScore)``;
const FirstInningsRuns = styled(TeamScore)``;
const YetToBat = styled(TeamScore)``;

const Overs = styled(TeamScore)``;

const ScoresAndLogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const GradeName = styled.h2`
	text-transform: uppercase;
	margin: 40px 0;
	text-align: center;
`;
const LogoHolder = styled.div`
	margin: 0 2em;
`;
const TeamName = styled(TeamScore)``;
export const TeamsAndScores = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, gradeName, teamHomeLogo, teamAwayLogo} = matchData;

	const {StyleConfig, TextStyles} = useStylesContext();

	const {Font, Color} = StyleConfig;
	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	console.log('FirstInnings ', homeTeam.homeScoresFirstInnings);
	return (
		<>
			<TeamsAndScoresContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: homeTeam.name, logo: teamHomeLogo}}
						score={HomeScore}
						FirstInnings={homeTeam.homeScoresFirstInnings}
						overs={HomeOvers}
						Type={matchData.type}
						imgStyles={teamHomeLogoStyles}
						textAlign="right"
						flexDirection="row"
					/>
				</TeamScoreContainer>
				<TeamScoreContainer>
					<TeamDetails
						team={{name: awayTeam.name, logo: teamAwayLogo}}
						score={AwayScore}
						FirstInnings={awayTeam.awayScoresFirstInnings}
						overs={AwayOvers}
						Type={matchData.type}
						imgStyles={teamAwayLogoStyles}
						textAlign="left"
						flexDirection="row-reverse" // <-- Add this line
					/>
				</TeamScoreContainer>
			</TeamsAndScoresContainer>
			<GradeName
				style={{
					...Font.Copy,
					...TextStyles.copyLarge,
					color: Color.Primary.BackgroundContractColor,
				}}
			>
				{gradeName}
			</GradeName>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type, StyleConfig, TextStyles} = props;
	const {Font, Color} = StyleConfig;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return (
		<FirstInningsRuns
			style={{
				...Font.Copy,
				...TextStyles.copySmallBold,
				color: Color.Primary.BackgroundContractColor,
			}}
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
}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
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
							...TextStyles.copySmallBold,
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
							TextStyles={TextStyles}
						/>
						<Runs
							style={{
								...Font.Copy,
								...TextStyles.copyXLargeBold,
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
						...TextStyles.copyMedium,
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
