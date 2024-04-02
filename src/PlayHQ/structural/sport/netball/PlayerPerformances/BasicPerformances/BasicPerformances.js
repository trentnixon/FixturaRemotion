// Improved version of the PlayerPerformances component and its related styled components
// and functions, incorporating error handling, code efficiency, and readability enhancements.

import {useCurrentFrame} from 'remotion';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';

import {
	MinHeight,
	PerformanceItem,
	PerformanceList,
	PerformancesContainer,
	VideoContainer,
} from './components/sharedStyles';
import {DisplayPlayerName} from './components/DisplayPlayerName';
import {HighlightPlayerPerformance} from './components/DisplayHighlightPlayerPerformance';
import {DisplayPlayerLabel} from './components/DisplayPlayerLabel';

// Styled components definition

// Main component
export const BasicPlayerPerformances = (props) => {
	const {matchData, ComponentFPS, TemplateVariation, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {home, away} = matchData.teams;
	const {Players} = ComponentFPS;
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
						clipPath: FromLeftToRight(Players.Start, 'Slow'),
						opacity: interpolateOpacityByFrame(
							frame,
							Players.End - 15,
							Players.End,
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
						<DisplayPlayerLabel {...props} />
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

// Component to highlight player performance

// Dev Notes:
// - Encapsulated the rendering of performance items into a separate function to avoid code duplication and enhance readability.
// - Error handling is not explicitly required in this component as it deals with UI rendering based on props.
// - Future improvements could include dynamic handling of player stats size instead of slicing the first two stats.
// - Ensure props validation (e.g., PropTypes) for better type safety and debugging.

// LLM Notes:
// This component is part of a sports analytics application, specifically designed for rendering player performance statistics in a video format. It resides under the `components/PlayerPerformances` directory.
// It utilizes Remotion for video rendering and styled-components for styling. The component is responsible for displaying player performances from two teams in a match, filtering out restricted values.
