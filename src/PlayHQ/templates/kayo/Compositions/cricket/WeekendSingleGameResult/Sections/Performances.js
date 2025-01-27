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
	height: 3.5em;
	min-height: 3.5em;
	margin-top: 10px;
`;

const Name = styled.span`
	color: ${(props) => props.color};
	width: 65%;
	min-height: auto;
	margin-right: 2px;

	background-color: white;
	padding: 0px 20px;
	font-weight: 500;
	height: inherit;
	align-items: center;
	justify-content: flex-start;
	display: flex;
`;

const Performance = styled.span`
	font-weight: 400;
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
									color={getContrastColor(Color.Secondary.Main)}
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
								bgColor={setOpacity(Color.Secondary.Main, 1)}
							>
								<DisplayPlayerName NAME={performance.player} Color="black" />

								<PerformanceBowling
									color={getContrastColor(Color.Secondary.Main)}
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
	const {StyleConfig, TextStyles} = useStylesContext();
	return (
		<Name
			color={color}
			bgColor={bgColor}
			borderRadius={borderRadius}
			style={{
				...StyleConfig.Font.Copy,
				...TextStyles.copyMedium,
			}}
		>
			{restrictName(NAME, 17)}
		</Name>
	);
};

const PerformanceBatting = (props) => {
	const {borderRadius, color, runs, balls} = props;
	const restrictedValues = ['', 0, 'undefined']; // Array contains both empty string and value 0
	const {StyleConfig, TextStyles} = useStylesContext();
	if (restrictedValues.includes(runs)) {
		return false;
	}

	return (
		<Performance
			borderRadius={borderRadius}
			color={color}
			style={{
				...StyleConfig.Font.Copy,
				...TextStyles.copyMediumBold,
			}}
		>
			{runs}
			{balls !== '0' && balls !== 'undefined' ? ` (${balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {color, bgColor, borderRadius, wickets, runs, overs} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	return (
		<Performance
			color={color}
			bgColor={bgColor}
			borderRadius={borderRadius}
			style={{
				...StyleConfig.Font.Copy,
				...TextStyles.copyMediumBold,
			}}
		>
			{`${wickets}/${runs} (${overs})`}
		</Performance>
	);
};
