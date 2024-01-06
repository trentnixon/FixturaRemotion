import styled, {css} from 'styled-components';
import {darkenColor, getContrastColor} from '../../../../../utils/colors';
import {splitSocreByRunsAndOvers} from '../../../../../utils/copy';
import useImageDimensions from '../../../../../hooks/useImageDimensions';

import {EraseFromMiddle} from '../../../../../Animation/ClipWipe';

import {InningsPerformance} from './Performances';
import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import {
	DisplayInningsScore,
	DisplayTeamName,
	FirstInningsScore,
} from '../../../Components/Common/CommonVariables';
// NEW
// Styled component for the main content area
const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
	height: 275px;
`;

const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;
// Styled component for the content block
const StructureContentBlock = styled.div`
	width: 80%; // Takes remaining width of the container
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};
	padding: 0px;
`;

const TeamNameContainer = styled.div`
	width: 70%;
`;
const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;
`;

const ScoreIntContainer = styled.div`
	background-color: ${(props) => props.BG};
	width: 30%;
	margin: 5px;
	padding: 5px 5px;
	color: black;
	text-align: center;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TeamsAndScores = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;
	const fallbackSrc = 'https://fallback.url/image.png';
	const [HomeScore, HomeOvers] = splitSocreByRunsAndOvers(homeTeam.score);
	const [AwayScore, AwayOvers] = splitSocreByRunsAndOvers(awayTeam.score);

	const IMGSIZING = [190, 240, 180];
	const teamHomeLogoStyles = useImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = useImageDimensions(teamAwayLogo, IMGSIZING);

	return (
		<>
			<StructureMainBlock>
				<StructureSidebarBlock>
					<ImageWithFallback
						src={teamHomeLogo}
						fallbackSrc={fallbackSrc}
						style={{
							...useImageDimensions(teamHomeLogo, IMGSIZING),
							height: 'auto',
							marginRight:'10px',
							width: '100%',
							objectFit: 'contain',
						}}
					/>
				</StructureSidebarBlock>
				<StructureContentBlock>
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
					<InningsPerformance {...props} innings={'home'} />
				</StructureContentBlock>
			</StructureMainBlock>
			<StructureMainBlock>
				<StructureSidebarBlock>
					<ImageWithFallback
						src={teamAwayLogo}
						fallbackSrc={fallbackSrc}
						style={{
							...useImageDimensions(teamHomeLogo, IMGSIZING),
							height: 'auto',
							width: '100%',
							objectFit: 'contain',
						}}
					/>
				</StructureSidebarBlock>
				<StructureContentBlock>
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
				</StructureContentBlock>
			</StructureMainBlock>
		</>
	);
};

export const TeamDetails = ({
	team,
	score,
	overs,
	fontFamily,
	THEME,
	Type,
	FirstInnings,
}) => {
	const teamNameCustomStyles = {
		color: getContrastColor(THEME.secondary),
		fontFamily: fontFamily,
		fontSize: '2rem',
	};
	const RunsStyles = {
		color: getContrastColor(darkenColor(THEME.primary)),
		fontSize: '2rem',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		padding: '5px 0',
		textAlign: 'center',
		textTransform: 'uppercase',
		fontFamily: fontFamily,
	};
	return (
		<TeamScoreContainer BG={THEME.secondary}>
			<TeamandScores BG={THEME.secondary}>
				<TeamNameContainer>
					<DisplayTeamName
						name={team.name}
						fontFamily={fontFamily}
						customStyles={teamNameCustomStyles}
					/>
				</TeamNameContainer>
				<ScoreIntContainerAnimated
					BG={darkenColor(THEME.primary)}
					FPS_SCORECARD={180}
				>
					<FirstInningsScore
						FirstInnings={FirstInnings}
						Type={Type}
						customStyles={RunsStyles}
					/>{' '}
					<DisplayInningsScore
						score={score}
						overs={overs}
						customStyles={RunsStyles}
					/>
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</TeamScoreContainer>
	);
};
