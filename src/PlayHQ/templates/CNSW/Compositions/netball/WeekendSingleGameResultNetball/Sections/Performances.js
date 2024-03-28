// Improved version of the PlayerPerformances component and its related styled components
// and functions, incorporating error handling, code efficiency, and readability enhancements.

import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
} from '../../../../../../Animation/ClipWipe';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../../../utils/copy';

// Styled components definition
const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px;
`;

const PerformancesContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	&:first-child {
		margin-right: 5px;
	}
`;

const MinHeight = styled.div`
	min-height: 10px;
`;

const PerformanceList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
`;

const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	padding: 4px 10px;
	margin-bottom: 1px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2em;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -1px;
`;

const Performance = styled.span`
	font-size: 1.8em;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
	letter-spacing: -2px;
`;

const LabelWrapper = styled.div`
	font-weight: 700;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;

// Main component
export const PlayerPerformances = ({
	matchData,
	ComponentFPS,
	TemplateVariation,
	Font,
	Color,
}) => {
	const StyleConfig = {Font, Color};
	const {home, away} = matchData.teams;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	// Function to render player performance items
	const renderPerformanceItems = (team, side) => {
		return team.playerStats.slice(0, 3).map((performance, index) => {
			if (restrictedValues.includes(performance.player)) {
				return null; // Skip rendering for restricted player names
			}

			return (
				<PerformanceItem
					key={`${side}-batting-${index}`}
					bgColor={Color.Secondary.Main}
					borderRadius={TemplateVariation.borderRadius}
					style={{
						clipPath: FromLeftToRight(ComponentFPS.Start, 'Slow'),
						opacity: interpolateOpacityByFrame(
							frame,
							ComponentFPS.End - 15,
							ComponentFPS.End,
							1,
							0
						),
					}}
				>
					<DisplayPlayerName
						StyleConfig={StyleConfig}
						NAME={performance.player}
						Color={Color.Secondary.Contrast}
					/>
					<HighlightPlayerPerformance
						StyleConfig={StyleConfig}
						Color={Color.Secondary.Contrast}
						Name={performance.player}
						Goals={performance.goals}
					/>
				</PerformanceItem>
			);
		});
	};

	return (
		<VideoContainer>
			{[home, away].map((team, index) => (
				<PerformancesContainer key={index}>
					<PerformanceList>
						<LabelWrapper
							color={Color.Primary.BackgroundContractColor}
							style={{
								...Font.Copy,
								fontSize: '1.3em',
								opacity: interpolateOpacityByFrame(
									frame,
									ComponentFPS.Start,
									ComponentFPS.Start + 15,
									0,
									1
								),
								clipPath: EraseFromMiddle(ComponentFPS.End - 15, 'Slow'),
							}}
						>
							Player
						</LabelWrapper>
						<MinHeight>
							{renderPerformanceItems(team, index === 0 ? 'home' : 'away')}
						</MinHeight>
					</PerformanceList>
				</PerformancesContainer>
			))}
		</VideoContainer>
	);
};

// Component to display player names
const DisplayPlayerName = ({Color, NAME, StyleConfig}) => {
	const {Font} = StyleConfig;
	const restrictedNames = ['Total', 'Extras', 'Private Player'];

	if (NAME && !restrictedNames.includes(NAME)) {
		return (
			<Name style={{...Font.Copy}} color={Color}>
				{restrictName(capitalizeFirstLetterOfName(NAME), 20)}
			</Name>
		);
	}
	return null;
};

// Component to highlight player performance
const HighlightPlayerPerformance = ({Color, Name, Goals, StyleConfig}) => {
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	const {Font} = StyleConfig;
	if (!restrictedValues.includes(Name) && !restrictedValues.includes(Goals)) {
		return (
			<Performance color={Color} style={{...Font.Copy, fontWeight: 800}}>
				{Goals}
			</Performance>
		);
	}
	return null;
};

// Dev Notes:
// - Encapsulated the rendering of performance items into a separate function to avoid code duplication and enhance readability.
// - Error handling is not explicitly required in this component as it deals with UI rendering based on props.
// - Future improvements could include dynamic handling of player stats size instead of slicing the first two stats.
// - Ensure props validation (e.g., PropTypes) for better type safety and debugging.

// LLM Notes:
// This component is part of a sports analytics application, specifically designed for rendering player performance statistics in a video format. It resides under the `components/PlayerPerformances` directory.
// It utilizes Remotion for video rendering and styled-components for styling. The component is responsible for displaying player performances from two teams in a match, filtering out restricted values.
