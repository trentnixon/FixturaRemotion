import styled, {css} from 'styled-components';
import {darkenColor} from '../../../../../../utils/colors';
import {splitSocreByRunsAndOvers} from '../../../../../../utils/copy';

import {EraseFromMiddle} from '../../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../Components/Body/TeamNameDisplay';
import {DisplayYetToBat} from '../../../../Components/Body/DisplayYetToBat';
import {DisplayInningsScore} from '../../../../Components/Body/DisplayInningsScore';
import {InningsPerformance} from './Performances';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
	margin: 0px;
	flex-direction: column;
`;

const InningsContianer = styled.div`
	width: 100%;
	margin-bottom: 150px;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 1.7em;
	height: 1.7em;
	line-height: 1.7em;
	font-weight: 600;
	padding: 10px 0;
	position: relative;
	margin-bottom: 15px;
`;

const ScoresAndLogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;

	position: relative;
	background-color: ${(props) => props.BG};
	width: 100%;
`;

const ScoreIntContainer = styled.div`
	background-color: ${(props) => props.BG};
	width: 200px;
	margin: 5px;
	padding: 5px;
	color: black;
	text-align: center;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const {homeTeam, awayTeam, gradeName, teamHomeLogo, teamAwayLogo} = matchData;

	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	return (
		<>
			<TeamsAndScoresContainer>
				<InningsContianer>
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
					<InningsPerformance {...props} innings={'home'} />
				</InningsContianer>
				<InningsContianer
					style={{
						marginBottom: '0px',
					}}
				>
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
							textAlign="right"
							flexDirection="row"
						/>
					</TeamScoreContainer>
					<InningsPerformance {...props} innings={'away'} />
				</InningsContianer>
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

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};
`;
export const TeamDetails = ({
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
		<ScoresAndLogoContainer
			style={{flexDirection: flexDirection}}
			BG={THEME.secondary}
		>
			<DisplayTeamLogo
				logoUrl={team.logo}
				imgStyles={imgStyles}
				FPS_SCORECARD={180}
			/>

			<TeamandScores BG={THEME.secondary}>
				<TeamNameDisplay
					name={team.name}
					fontFamily={fontFamily}
					THEME={THEME}
					FPS_SCORECARD={180}
				/>
				<ScoreIntContainerAnimated
					BG={darkenColor(THEME.primary)}
					FPS_SCORECARD={180}
				>
					{score === 'Yet to Bat' ? (
						<DisplayYetToBat
							FPS_SCORECARD={180}
							THEME={THEME}
							fontFamily={fontFamily}
							score={score}
						/>
					) : (
						<DisplayInningsScore
							fontFamily={fontFamily}
							FPS_SCORECARD={180}
							FirstInnings={FirstInnings}
							Type={Type}
							THEME={THEME}
							score={score}
							overs={overs}
						/>
					)}
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</ScoresAndLogoContainer>
	);
};

/* <TeamScoreDiv
				fontFamily={fontFamily}
				style={{
					color: getContrastColor(THEME.primary),
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
			</TeamScoreDiv> */
