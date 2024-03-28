// Importing necessary libraries and functions
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight, FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../../../utils/colors';

// Styled components for player performances
const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px;
`;

const PerformancesContainer = styled.div`
	display: flex;
	flex-direction: column; // Players are listed vertically within each team's column
	width: 50%; // Each team's performances take up half the container width
`;

const PlayerList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const PlayerItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	padding: 7px 10px;
	margin: 2px;
`;

const PlayerName = styled.span`
	font-size: 2em;
	color: ${(props) => props.color};
	flex: 3; // Name takes up more space to accommodate longer names
`;

const GoalsScored = styled.span`
	font-size: 1.8em;
	color: ${(props) => props.color};
	flex: 1; // Score takes up less space
	text-align: right;
`;
const SmallCopy = styled.span`
	font-size: 1.5em;
	color: ${(props) => props.color};
	text-align: ${(props) => props.textAlign};
	flex: 3; // Name takes up more space to accommodate longer names
`;
// Main component updated to handle AFL player stats, separated into home and away
export const PlayerPerformances = ({
	matchData,
	ComponentFPS,
	TemplateVariation,
	Font,
	Color,
}) => {
	const frame = useCurrentFrame();
	const Display = interpolateOpacityByFrame(
		frame,
		ComponentFPS.Start - 1,
		ComponentFPS.Start,
		0,
		1
	);

	// Function to sort and render top 5 player performance items for each team
	const renderTopPerformers = (players, teamColor, FontColor) => {
		const topPerformers = [...players]
			.sort((a, b) => b.goals - a.goals)
			.slice(0, 3);

		return (
			<>
				<PlayerItem
					style={{
						...Font.Copy, // Apply the same font styling as other items
					}}
				>
					<SmallCopy
						color={GetBackgroundContractColorForText(
							Color.Primary.Main,
							Color.Secondary.Main
						)}
						textAlign="left"
					>
						Player
					</SmallCopy>

					<SmallCopy
						color={GetBackgroundContractColorForText(
							Color.Primary.Main,
							Color.Secondary.Main
						)}
						textAlign="right"
					>
						Goals
					</SmallCopy>
				</PlayerItem>
				{topPerformers.map((player, index) => (
					<PlayerItem
						key={`${player.number}-${index}`}
						bgColor={teamColor}
						borderRadius={TemplateVariation.borderRadius}
						style={{
							...Font.Copy,
							clipPath: FromRightToLeft(ComponentFPS.Start + index * 5, 'Slow'),
							opacity: interpolateOpacityByFrame(
								frame,
								ComponentFPS.End - 15,
								ComponentFPS.End,
								1,
								0
							),
						}}
					>
						<PlayerName color={FontColor}>{player.player}</PlayerName>
						<GoalsScored color={FontColor}>{player.goals}</GoalsScored>
					</PlayerItem>
				))}
			</>
		);
	};

	return (
		<VideoContainer style={{display: Display === 1 ? 'flex' : 'none'}}>
			<PerformancesContainer>
				<PlayerList>
					{renderTopPerformers(
						matchData.teams.home.playerStats,
						Color.Primary.Main,
						Color.Primary.Contrast
					)}
				</PlayerList>
			</PerformancesContainer>
			<PerformancesContainer>
				<PlayerList>
					{renderTopPerformers(
						matchData.teams.away.playerStats,
						Color.Secondary.Main,
						Color.Secondary.Contrast
					)}
				</PlayerList>
			</PerformancesContainer>
		</VideoContainer>
	);
};

// Dev Notes:
// - Modified the PlayerPerformances component to split the display of home and away top goal scorers.
// - The component now features two separate lists for each team positioned side by side.
// - Updated the component to include player numbers in the key to avoid potential React key conflicts.
// - Each list highlights the top 5 players in terms of goals scored for their respective teams.

// LLM Notes:
// This PlayerPerformances component is now specialized for displaying top AFL player stats in a video format.
// It's used within a sports broadcasting application and designed to fit within the `components/PlayerPerformances` directory.
// The component is integrated with Remotion for video sequencing and uses styled-components for styles.
// It accepts a matchData prop with separate playerStats arrays for home and away teams, displaying the top 5 scorers from each.
