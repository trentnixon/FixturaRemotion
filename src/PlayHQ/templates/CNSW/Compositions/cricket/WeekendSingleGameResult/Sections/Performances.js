import styled from 'styled-components';
import {getContrastColor, setOpacity} from '../../../../../../utils/colors';

import {restrictName} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

const PerformancesContainer = styled.div`
	width: 100%;
`;

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

	min-height: 55px;
	margin-bottom: 15px;
`;

const Name = styled.span`
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -2px;
	background-color: white;
	padding: 0px 20px;
	min-height: 55px;
	display: flex;
	align-items: center;
`;

const Performance = styled.span`
	color: ${(props) => props.color};
	text-align: center;
	width: 30%;
	letter-spacing: -2px;
	padding: 5px 10px;
`;

export const InningsPerformance = (props) => {
	const {matchData, innings} = props;
	const {homeTeam, awayTeam} = matchData;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const useInnings = innings === 'home' ? homeTeam : awayTeam;
	const {StyleConfig} = useStylesContext();
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
								bgColor={Color.Secondary.Main}
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
								bgColor={setOpacity(Color.Primary.Main, 1)}
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
			style={{
				...TextStyles.copyMedium,
			}}
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
			style={{
				...TextStyles.copyMediumBold,
			}}
			borderRadius={borderRadius}
			color={color}
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
			style={{
				...TextStyles.copyMediumBold,
			}}
			color={color}
			bgColor={bgColor}
			borderRadius={borderRadius}
		>
			{`${wickets}/${runs} (${overs})`}
		</Performance>
	);
};
