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
	font-size: 2em;
	font-weight: 400;
	color: ${(props) => props.color};
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -0.065em;
`;

const Performance = styled.span`
	font-size: 2em;
	font-weight: 600;
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
					{homeTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-batting-${index}`}
							bgColor={setOpacity(THEME.secondary, 0.8)}
							borderRadius={TemplateVariation.borderRadius}
						>
							<Name
								borderRadius={TemplateVariation.borderRadius}
								color={getContrastColor(setOpacity(THEME.secondary, 0.6))}
							>
								{performance.player}
							</Name>
							<Performance
								bgColor={setOpacity(THEME.secondary, 0.7)}
								color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
								borderRadius={TemplateVariation.borderRadius}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>
						Bowling
					</LabelWrapper>

					{homeTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-bowling-${index}`}
							bgColor={setOpacity(darkenColor(THEME.primary), 0.7)}
							borderRadius={TemplateVariation.borderRadius}
							
						>
							<Name
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								borderRadius={TemplateVariation.borderRadius}
							>
								{performance.player}
							</Name>
							<Performance
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								borderRadius={TemplateVariation.borderRadius}
							>
								{`${performance.wickets}/${performance.runs} (${performance.overs})`}
							</Performance>
						</PerformanceItem>
					))}
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
					{awayTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-batting-${index}`}
							bgColor={setOpacity(THEME.secondary, 0.8)}
							borderRadius={TemplateVariation.borderRadius}
						>
							<Name
								color={getContrastColor(setOpacity(THEME.secondary, 0.6))}
								bgColor={setOpacity(THEME.secondary, 0.8)}
								borderRadius={TemplateVariation.borderRadius}
							>
								{restrictString(performance.player, 20)}
							</Name>
							<Performance
								borderRadius={TemplateVariation.borderRadius}
								color={getContrastColor(setOpacity(THEME.secondary, 0.7))}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
					>
						Bowling
					</LabelWrapper>
					{awayTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-bowling-${index}`}
							bgColor={setOpacity(darkenColor(THEME.primary), 0.7)}
							borderRadius={TemplateVariation.borderRadius}
						>
							<Name
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								borderRadius={TemplateVariation.borderRadius}
							>
								{restrictString(performance.player, 20)}
							</Name>
							<Performance
								color={getContrastColor(darkenColor(THEME.primary))}
								bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								borderRadius={TemplateVariation.borderRadius}
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
