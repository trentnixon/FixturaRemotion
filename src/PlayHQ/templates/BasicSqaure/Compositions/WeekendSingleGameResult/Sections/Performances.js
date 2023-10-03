import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
	setOpacity,
} from '../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {restrictString} from '../../../../../utils/copy';
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

const PerformanceList = styled.ul`
	font-family: ${(props) => props.fontFamily};
	margin: 0px 0 0 0;
	padding: 0;
	list-style: none;
	width: 100%;
`;
const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	padding: 4px 5px;
	margin-bottom: 10px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2em;
	font-weight: 400;
	color: ${(props) => props.color};
	background-color: ${(props) => props.bgColor};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -0.065em;
`;

const Performance = styled.span`
	font-size: 2em;
	font-weight: 600;
	color: ${(props) => props.color};
	text-align: center;
	width: 30%;
	margin-left: 10px;
	background-color: ${(props) => props.bgColor};
	letter-spacing: -0.065em;
`;
const LabelWrapper = styled.div`
	font-size: 1.6em;
	font-weight: 900;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const PlayerPerformances = ({ 
	homeTeam,
	awayTeam,
	THEME,
	fontFamily,
	FPS_SCORECARD,
}) => {
	const frame = useCurrentFrame();
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper color={getContrastColor(darkenColor(THEME.primary))}>
						Batting
					</LabelWrapper>
					{homeTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-batting-${index}`}
							bgColor={setOpacity(THEME.secondary, 0.8)}
						>
							<Name color={getContrastColor(setOpacity(THEME.secondary, 0.6))}>
								{performance.player}
							</Name>
							<Performance
								bgColor={setOpacity(THEME.secondary, 0.7)}
								color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper color={getContrastColor(darkenColor(THEME.primary))}>
						Bowling
					</LabelWrapper>

					{awayTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-bowling-${index}`}
							bgColor={setOpacity(THEME.primary, 0.7)}
						>
							<Name
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
							>
								{performance.player}
							</Name>
							<Performance
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
							>
								{`${performance.wickets}/${performance.runs} (${performance.overs})`}
							</Performance>
						</PerformanceItem>
					))}
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper color={getContrastColor(darkenColor(THEME.primary))}>
						Batting
					</LabelWrapper>
					{awayTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-batting-${index}`}
							bgColor={setOpacity(THEME.secondary, 0.8)}
						>
							<Name
								color={getContrastColor(setOpacity(THEME.secondary, 0.6))}
								bgColor={setOpacity(THEME.secondary, 0.8)}
							>
								{restrictString(performance.player, 20)}
							</Name>
							<Performance
								color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper color={getContrastColor(darkenColor(THEME.primary))}>
						Bowling
					</LabelWrapper>
					{homeTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-bowling-${index}`}
							bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
						>
							<Name
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
							>
								{restrictString(performance.player, 20)}
							</Name>
							<Performance
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
							>
								{`${performance.wickets}/${performance.runs} (${performance.overs})`}
							</Performance>
						</PerformanceItem>
					))}
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};
