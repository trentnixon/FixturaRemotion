import styled from 'styled-components';
import {
	capitalizeFirstLetterOfName,
	restrictString,
} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

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
	min-height: 60px;
`;

const Name = styled.span`
	border-radius: ${(props) => props.borderRadius};
	width: 70%;
	margin-right: 2px;
`;

const Performance = styled.span`
	border-radius: ${(props) => props.borderRadius};
	text-align: center;
	width: 30%;
	margin-left: 10px;
`;
const LabelWrapper = styled.div`
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const PlayerPerformances = (props) => {
	const {matchData} = props;
	const {homeTeam, awayTeam} = matchData;
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;

	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList>
					<LabelWrapper
						style={{
							...Font.Copy,
							...TextStyles.copySmall,
							color: Color.Primary.BackgroundContractColor,
						}}
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
								bgColor={Color.Secondary.Opacity(0.9)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={Color.Secondary.Contrast}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBatting
									borderRadius={TemplateVariation.borderRadius}
									color={Color.Secondary.Contrast}
									runs={performance.runs}
									balls={performance.balls}
								/>
							</PerformanceItem>
						);
					})}
					<LabelWrapper
						style={{
							...Font.Copy,
							...TextStyles.copySmall,
							color: Color.Primary.BackgroundContractColor,
						}}
					>
						Bowling
					</LabelWrapper>

					{homeTeam.bowlingPerformances.map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return ''; // Skip rendering for this iteration if player name is in restrictedValues
						}
						if (!performance.player) {
							return '';
						}
						return (
							<PerformanceItem
								key={`away-bowling-${index}`}
								bgColor={Color.Primary.Opacity(0.9)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={Color.Primary.Contrast}
									borderRadius={TemplateVariation.borderRadius}
								/>

								<PerformanceBowling
									color={Color.Primary.Contrast}
									backgroundColor={Color.Primary.Opacity(0.6)}
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
				<PerformanceList>
					<LabelWrapper
						style={{
							...Font.Copy,
							...TextStyles.copySmall,
							color: Color.Primary.BackgroundContractColor,
						}}
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
								bgColor={Color.Secondary.Opacity(0.9)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={Color.Secondary.Contrast}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBatting
									borderRadius={TemplateVariation.borderRadius}
									color={Color.Secondary.Contrast}
									runs={performance.runs}
									balls={performance.balls}
								/>
							</PerformanceItem>
						);
					})}
					<LabelWrapper
						style={{
							...Font.Copy,
							...TextStyles.copySmall,
							color: Color.Primary.BackgroundContractColor,
						}}
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
								bgColor={Color.Primary.Opacity(0.9)}
								borderRadius={TemplateVariation.borderRadius}
							>
								<DisplayPlayerName
									NAME={performance.player}
									color={Color.Primary.Contrast}
									borderRadius={TemplateVariation.borderRadius}
								/>
								<PerformanceBowling
									color={Color.Primary.Contrast}
									backgroundColor={Color.Primary.Opacity(0.9)}
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
	const {color, NAME, borderRadius} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;

	return (
		<Name
			style={{
				...Font.Copy,
				...TextStyles.copyMedium,
				color,
			}}
			borderRadius={borderRadius}
		>
			{restrictString(capitalizeFirstLetterOfName(NAME), 20)}
		</Name>
	);
};

const PerformanceBatting = (props) => {
	const {borderRadius, color, runs, balls} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	const restrictedValues = ['', 0, 'undefined']; // Array contains both empty string and value 0

	if (restrictedValues.includes(runs)) {
		return false;
	}

	return (
		<Performance
			style={{
				...Font.Copy,
				...TextStyles.copyMediumBold,
				color,
			}}
			borderRadius={borderRadius}
		>
			{runs}
			{balls !== '0' && balls !== 'undefined' ? ` (${balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {color, backgroundColor, borderRadius, wickets, runs, overs} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	return (
		<Performance
			style={{
				...Font.Copy,
				...TextStyles.copyMediumBold,
				color,
				backgroundColor,
			}}
			borderRadius={borderRadius}
		>
			{`${wickets}/${runs} (${overs})`}
		</Performance>
	);
};
