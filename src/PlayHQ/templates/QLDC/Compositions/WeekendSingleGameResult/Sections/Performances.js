import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	setOpacity,
} from '../../../../../utils/colors';

import {restrictName, restrictString} from '../../../../../utils/copy';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../Components/Common/CommonVariables';

const PerformanceList = styled.div`
	font-family: ${(props) => props.fontFamily};
	display: flex;
	flex-direction: row;
	width: 100%;
`;

const InningContainer = styled.div`
	width: 100%;
	margin-right: ${(props) => props.marginRight};
`;

const PerformanceItem = styled.div`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	padding: 0px 0px;
	width: auto;
	font-size: 2em;
	line-height: 2em;
	margin-bottom: 15px;
`;

const PlayerContainer = styled.div`
	width: 70%;
	background-color: white;
	padding: 2px 0px;
`;

const PerformanceContainer = styled.div`
	background-color: transparent;
	padding: 2px 5px;
	width: 30%;
`;

export const InningsPerformance = (props) => {
	const {matchData, THEME, fontFamily, innings} = props;
	const {homeTeam, awayTeam} = matchData;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const useInnings = innings === 'home' ? homeTeam : awayTeam;

	const BattingNameStyles = {
		color: getContrastColor('white'),
		padding: '0px 10px',
		fontSize: '1em',
		fontWeight: '400',
	};

	const BattingPerformanceStyles = {
		color: getContrastColor(darkenColor(THEME.secondary)),
	};
	const BowlingPerformanceStyles = {
		color: getContrastColor(darkenColor(THEME.primary)),
	};
	return (
		<>
			<PerformanceList fontFamily={fontFamily}>
				<InningContainer marginRight={'5px'}>
					{useInnings.battingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`batting-${index}`}
								bgColor={darkenColor(THEME.secondary)}
							>
								<PlayerContainer>
									<DisplayPlayerName
										NAME={restrictName(performance.player, 14)}
										customStyles={BattingNameStyles}
									/>
								</PlayerContainer>

								<PerformanceContainer>
									<PerformanceBatting
										customStyles={BattingPerformanceStyles}
										Performance={{
											Name: performance.player,
											isNotOut: performance.notOut,
											Runs: performance.runs,
											Balls: performance.balls,
										}}
										Color={getContrastColor(darkenColor(THEME.secondary))}
									/>
								</PerformanceContainer>
							</PerformanceItem>
						);
					})}
				</InningContainer>
				<InningContainer marginRight={'0px'}>
					{useInnings.bowlingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`bowling-${index}`}
								bgColor={setOpacity(darkenColor(THEME.primary), 1)}
							>
								<PlayerContainer>
									<DisplayPlayerName
										NAME={restrictName(performance.player, 14)}
										customStyles={BattingNameStyles}
									/>
								</PlayerContainer>
								<PerformanceContainer>
									<PerformanceBowling
										customStyles={BowlingPerformanceStyles}
										Performance={{
											Name: performance.player,
											Wickets: performance.wickets,
											Runs: performance.runs,
											Overs: performance.overs,
										}}
									/>
								</PerformanceContainer>
							</PerformanceItem>
						);
					})}
				</InningContainer>
			</PerformanceList>
		</>
	);
};
