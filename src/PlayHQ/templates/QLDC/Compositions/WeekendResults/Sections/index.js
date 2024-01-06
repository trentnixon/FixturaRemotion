import {TeamDetail} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import styled from 'styled-components';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {parseScore} from '../../../../../utils/copy';
import {getContrastColor} from '../../../../../utils/colors';
import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import {
	DisplayGradeName,
	DisplayMatchType,
} from '../../../Components/Common/CommonVariables';
import {
	FromRightToLeft,
	FromTopToBottom,
} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

// Main container with display flex
const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	height: auto; // Full viewport height for demo
	flex-wrap: wrap; // Allow the children to wrap as needed
	margin-bottom: 50px;
`;

// Styled component for the top block
const StructureTopBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 5px;
`;

// Styled component for the main content area
const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap; 
	width: 100%; // Takes full width of the container
`;

// Styled component for the sidebar block
const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: center;
	align-items: normal;
`;

// Styled component for the content block
const StructureContentBlock = styled.div`
	width: 80%; // Takes remaining width of the container
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;

// Styled component for the bottom block
const StructureBottomBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 5px;
`;

export const Match = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<FixtureContainer>
			<StructureContainer>
				<StructureTop {...props} />
				<StructureMain
					{...props}
					OBJ={{
						LOGO: teamHomeLogo,
						SCORE: homeScore,
						OVERS: homeOvers,
						TEAM: homeTeam,
						FIRSTINNINGS: homeTeam.HomescoresFirstInnings,
					}}
				/>
			</StructureContainer>
			<StructureContainer>
				<StructureMain
					{...props}
					OBJ={{
						LOGO: teamAwayLogo,
						SCORE: awayScore,
						OVERS: awayOvers,
						TEAM: awayTeam,
						FIRSTINNINGS: awayTeam.HomescoresFirstInnings,
					}}
				/>
				<StructureBottom {...props} />
			</StructureContainer>
		</FixtureContainer>
	);
};

const StructureTop = (props) => {
	const frame = useCurrentFrame();
	const gradeNameCustom = {
		color: getContrastColor(props.THEME.primary),
		fontFamily: props.fontFamily,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
	};
	return (
		<StructureTopBlock>
			<DisplayGradeName {...props} customStyles={gradeNameCustom} />
		</StructureTopBlock>
	);
};

const StructureMain = (props) => {
	const {fontFamily, THEME, matchData, FPS_SCORECARD} = props;
	const {LOGO, SCORE, OVERS, TEAM, FIRSTINNINGS} = props.OBJ;
	const frame = useCurrentFrame();
	const fallbackSrc = 'https://fallback.url/image.png';
	const IMGSIZING = [80, 80, 80];
	const primaryColor = props.THEME.primary;
	return (
		<StructureMainBlock> 
			<StructureSidebarBlock>
				<ImageWithFallback 
					src={LOGO}
					fallbackSrc={fallbackSrc}
					style={{
						...useImageDimensions(LOGO, IMGSIZING),
						height: 'auto',
						width: '100%',
						marginRight:'10px',
						objectFit: 'cover',
						clipPath: FromRightToLeft(20, 'Wobbly'),
						opacity: interpolateOpacityByFrame(
							frame,
							props.FPS_SCORECARD - 30,
							props.FPS_SCORECARD,
							1,
							0
						),
					}}
				/>
			</StructureSidebarBlock>
			<StructureContentBlock>
				<TeamDetail
					fontFamily={fontFamily}
					score={SCORE}
					overs={OVERS}
					FirstInnings={FIRSTINNINGS}
					Name={TEAM.name}
					FPS_SCORECARD={FPS_SCORECARD}
					primaryColor={primaryColor}
					THEME={THEME}
					Type={matchData.type}
					gradeName={matchData.gradeName}
				/>
				<PlayerPerformances
					{...props}
					Batting={TEAM.battingPerformances}
					Bowling={TEAM.bowlingPerformances}
				/>
			</StructureContentBlock>
		</StructureMainBlock>
	);
};

const StructureBottom = (props) => {
	const frame = useCurrentFrame();
	const roundCustomStyles = {
		color: getContrastColor(props.THEME.primary),
		fontFamily: props.fontFamily,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
	};
	return (
		<StructureBottomBlock>
			<DisplayMatchType customStyles={roundCustomStyles} {...props} />
		</StructureBottomBlock>
	);
};
