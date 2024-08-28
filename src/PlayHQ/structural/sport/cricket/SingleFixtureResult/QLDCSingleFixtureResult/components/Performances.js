import styled from 'styled-components';
import {getContrastColor} from '../../../../../../utils/colors';
import {restrictName} from '../../../../../../utils/copy';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../../../../templates/QLDC/Components/Common/DEPRECATED_CommonVariables';
import {useStylesContext} from '../../../../../../context/StyleContext';

const PerformanceList = styled.div`
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
	margin-bottom: 15px;
`;

const PlayerContainer = styled.div`
	width: 70%;
	background-color: white;
	padding: 2px 0px;
	margin: 3px;
	height: 49px;
	display: flex;
	align-items: center;
`;

const PerformanceContainer = styled.div`
	background-color: transparent;
	padding: 2px 5px;
	width: 30%;
`;

export const InningsPerformance = (props) => {
	const {matchData, innings} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font, Color} = StyleConfig;
	const {homeTeam, awayTeam} = matchData;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const useInnings = innings === 'home' ? homeTeam : awayTeam;

	const BattingNameStyles = {
		...Font.Copy,
		...TextStyles.copyMedium,
		color: getContrastColor('white'),
		padding: '0px 10px',
	};

	const BattingPerformanceStyles = {
		...Font.Copy,
		...TextStyles.copyMediumBold,
		color: getContrastColor(Color.Secondary.Darken),
	};
	const BowlingPerformanceStyles = {
		...Font.Copy,
		...TextStyles.copyMediumBold,
		color: getContrastColor(Color.Primary.Darken),
	};
	return (
		<>
			<PerformanceList>
				<InningContainer marginRight="5px">
					{useInnings.battingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`batting-${index}`}
								bgColor={Color.Secondary.Darken}
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
										Color={getContrastColor(Color.Secondary.Darken)}
									/>
								</PerformanceContainer>
							</PerformanceItem>
						);
					})}
				</InningContainer>
				<InningContainer marginRight="0px">
					{useInnings.bowlingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}
						return (
							<PerformanceItem
								key={`bowling-${index}`}
								bgColor={Color.Primary.Darken}
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
