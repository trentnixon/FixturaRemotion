import styled, {css} from 'styled-components';
import {splitSocreByRunsAndOvers} from '../../../../../../utils/copy';

import {EraseFromMiddle} from '../../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../../templates/CNSW/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../../templates/CNSW/Components/Body/TeamNameDisplay';
import {DisplayYetToBat} from '../../../../../../templates/CNSW/Components/Body/DisplayYetToBat';
import {DisplayInningsScore} from '../../../../../../templates/CNSW/Components/Body/DisplayInningsScore';
import {InningsPerformance} from '../../../../../../templates/CNSW/Compositions/cricket/WeekendSingleGameResult/Sections/Performances';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 10px;
	margin: 10px 0px;
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
	height: 1.7em;
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
	width: auto;
	margin: 5px;
	padding: 5px 25px;
	color: black;
	text-align: center;
	min-height: 40px;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamsAndScores = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

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
							firstInnings={homeTeam.homeScoresFirstInnings}
							overs={HomeOvers}
							Type={matchData.type}
							imgStyles={teamHomeLogoStyles}
							textAlign="right"
							flexDirection="row"
						/>
					</TeamScoreContainer>
					<InningsPerformance {...props} innings="home" />
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
							firstInnings={awayTeam.awayScoresFirstInnings}
							overs={AwayOvers}
							Type={matchData.type}
							imgStyles={teamAwayLogoStyles}
							textAlign="right"
							flexDirection="row"
						/>
					</TeamScoreContainer>
					<InningsPerformance {...props} innings="away" />
				</InningsContianer>
			</TeamsAndScoresContainer>
		</>
	);
};

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};
	min-height: 50px;
`;
export const TeamDetails = ({
	team,
	score,
	overs,
	imgStyles,
	flexDirection,
	Type,
	firstInnings,
}) => {
	const {StyleConfig} = useStylesContext();

	const {Color} = StyleConfig;
	return (
		<ScoresAndLogoContainer style={{flexDirection}} BG={Color.Secondary.Main}>
			<DisplayTeamLogo
				logoUrl={team.logo}
				imgStyles={imgStyles}
				FPS_SCORECARD={180}
			/>

			<TeamandScores BG={Color.Secondary.Main}>
				<TeamNameDisplay name={team.name} FPS_SCORECARD={180} />
				<ScoreIntContainerAnimated BG={Color.Primary.Main} FPS_SCORECARD={180}>
					{score === 'Yet to Bat' ? (
						<DisplayYetToBat FPS_SCORECARD={180} score={score} />
					) : (
						<DisplayInningsScore
							FPS_SCORECARD={180}
							firstInnings={firstInnings}
							Type={Type}
							score={score}
							overs={overs}
						/>
					)}
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</ScoresAndLogoContainer>
	);
};
