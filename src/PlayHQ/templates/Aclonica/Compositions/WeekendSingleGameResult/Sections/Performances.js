import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	setOpacity,
	GetBackgroundContractColorForText,
} from '../../../../../utils/colors';

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
	border-radius: ${(props) => props.borderRadius};
	padding: 4px 5px;
	margin-bottom: 10px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2.2em;
	font-weight: 600;
	color: ${(props) => props.color};
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -0.065em;
`;

const Performance = styled.span`
	font-size: 2.2em;
	font-weight: 900;
	color: ${(props) => props.color};
	border-radius: ${(props) => props.borderRadius};
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

export const PlayerPerformances = (props) => {
	const {matchData, THEME, fontFamily, TemplateVariation} = props;
	const {homeTeam, awayTeam} = matchData;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>
						Batting
					</LabelWrapper>
					{homeTeam.battingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`home-batting-${index}`}
								bgColor={setOpacity(THEME.secondary, 0.8)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={getContrastColor(setOpacity(THEME.secondary, 0.6))}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBatting
									borderRadius={TemplateVariation.borderRadius}
									color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
									runs={performance.runs}
									balls={performance.balls}
								/>
							</PerformanceItem>
						);
					})}
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>Bowling
					</LabelWrapper>

					{homeTeam.bowlingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`away-bowling-${index}`}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.7)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={getContrastColor(darkenColor(THEME.primary))}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
									borderRadius={TemplateVariation.borderRadius}
								/>

								<PerformanceBowling
									color={getContrastColor(darkenColor(THEME.primary))}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
									borderRadius={TemplateVariation.borderRadius}
									wickets={performance.wickets}
									runs={performance.runs}
									overs={performance.overs}
								/>
							</PerformanceItem>
						);
					})}
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>
						Batting
					</LabelWrapper>
					{awayTeam.battingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`away-batting-${index}`}
								bgColor={setOpacity(THEME.secondary, 0.8)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={getContrastColor(setOpacity(THEME.secondary, 0.6))}
									bgColor={setOpacity(THEME.secondary, 0.8)}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBatting
									borderRadius={TemplateVariation.borderRadius}
									color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
									runs={performance.runs}
									balls={performance.balls}
								/>
							</PerformanceItem>
						);
					})}
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>
						Bowling
					</LabelWrapper>
					{awayTeam.bowlingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`home-bowling-${index}`}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.7)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={getContrastColor(darkenColor(THEME.primary))}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBowling
									color={getContrastColor(darkenColor(THEME.primary))}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
									borderRadius={TemplateVariation.borderRadius}
									wickets={performance.wickets}
									runs={performance.runs}
									overs={performance.overs}
								/>
							</PerformanceItem>
						);
					})}
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};

const DisplayPlayerName = (props) => {
	const {color, NAME, bgColor, borderRadius} = props;
	return (
		<Name color={color} bgColor={bgColor} borderRadius={borderRadius}>
			{restrictString(NAME, 20)}
		</Name>
	);
};

const PerformanceBatting = (props) => {
	const {borderRadius, color, runs, balls} = props;
	const restrictedValues = ['', 0,'undefined']; // Array contains both empty string and value 0

	if (restrictedValues.includes(runs)) {
		return false;
	}

	return (
		<Performance borderRadius={borderRadius} color={color}>
			{runs}
			{balls !== '0' && balls !== 'undefined' ? ` (${balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {color, bgColor, borderRadius, wickets, runs, overs} = props;
	return (
		<Performance color={color} bgColor={bgColor} borderRadius={borderRadius}>
			{`${wickets}/${runs} (${overs})`}
		</Performance>
	);
};
