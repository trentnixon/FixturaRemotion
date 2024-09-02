import styled from 'styled-components';
import {getContrastColor, setOpacity} from '../../../../../../utils/colors';

import {restrictName} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

const PerformancesContainer = styled.div`
	width: 100%;
`;

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
	height: 50px;
	margin-bottom: 3px;
`;

const Name = styled.p`
	display: flex;
	align-items: center;
	color: ${(props) => props.color};
	width: 65%;
	margin-right: 2px;
	background-color: white;
	padding: 0px 10px;
	margin: 0;
	height: 50px;
`;

const Performance = styled.span`
	color: ${(props) => props.color};
	text-align: center;
	width: 35%;
	padding: 5px 10px;
`;

export const InningsPerformance = (props) => {
	const {matchData, innings} = props;
	const {homeTeam, awayTeam} = matchData;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const useInnings = innings === 'home' ? homeTeam : awayTeam;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<PerformancesContainer>
			<PerformanceList style={{...StyleConfig.Font.Copy}}>
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
								<DisplayPlayerName NAME={performance.player} Color="black" />
								<PerformanceBatting
									color={getContrastColor(Color.Secondary.Darken)}
									runs={performance.runs}
									balls={performance.balls}
								/>
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
								bgColor={setOpacity(Color.Primary.Darken, 1)}
							>
								<DisplayPlayerName NAME={performance.player} Color="black" />

								<PerformanceBowling
									color={getContrastColor(Color.Primary.Darken)}
									bgColor={setOpacity(Color.Primary.Darken, 1)}
									wickets={performance.wickets}
									runs={performance.runs}
									overs={performance.overs}
								/>
							</PerformanceItem>
						);
					})}
				</InningContainer>
			</PerformanceList>
		</PerformancesContainer>
	);
};

const DisplayPlayerName = (props) => {
	const {color, NAME, bgColor, borderRadius} = props;
	const {TextStyles} = useStylesContext();
	return (
		<Name
			style={{...TextStyles.copyMedium}}
			color={color}
			bgColor={bgColor}
			borderRadius={borderRadius}
		>
			{restrictName(NAME, 17)}
		</Name>
	);
};

const PerformanceBatting = (props) => {
	const {borderRadius, color, runs, balls} = props;
	const restrictedValues = ['', 0, 'undefined']; // Array contains both empty string and value 0
	const {TextStyles} = useStylesContext();
	if (restrictedValues.includes(runs)) {
		return false;
	}

	return (
		<Performance
			borderRadius={borderRadius}
			color={color}
			style={{...TextStyles.copyMediumBold}}
		>
			{runs}
			{balls !== '0' && balls !== 'undefined' ? ` (${balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {color, bgColor, borderRadius, wickets, runs, overs} = props;
	const {TextStyles} = useStylesContext();
	return (
		<Performance
			style={{...TextStyles.copyMediumBold}}
			color={color}
			bgColor={bgColor}
			borderRadius={borderRadius}
		>
			{`${wickets}/${runs} (${overs})`}
		</Performance>
	);
};
