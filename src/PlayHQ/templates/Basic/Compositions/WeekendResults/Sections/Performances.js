import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
} from '../../../../../Animation/ClipWipe';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../../utils/copy';
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

const MinHeight = styled.div`
	min-height: 110px;
`;
const PerformanceList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
`;
const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	padding: 4px 10px;
	margin-bottom: 1px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2em;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -1px;
`;

const Performance = styled.span`
	font-size: 1.8em;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
	letter-spacing: -2px;
`;
const LabelWrapper = styled.div`
	font-weight: 700;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const PlayerPerformances = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation, StyleConfig} =
		props;
	const {Font, Color} = StyleConfig;
	const {homeTeam, awayTeam} = matchData;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList>
					<LabelWrapper
						color={Color.Primary.BackgroundContractColor}
						style={{
							...Font.Copy,
							fontSize: '1.3em',
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{homeTeam.score === 'Yet to Bat' ? false : 'Batting'}
					</LabelWrapper>
					<MinHeight>
						{homeTeam.battingPerformances
							.slice(0, 2)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`home-batting-${index}`}
										bgColor={Color.Secondary.Main}
										borderRadius={TemplateVariation.borderRadius}
										style={{
											clipPath: FromLeftToRight(45 + index * 7, 'Slow'),
											opacity: interpolateOpacityByFrame(
												frame,
												FPS_SCORECARD - 30,
												FPS_SCORECARD,
												1,
												0
											),
										}}
									>
										<DisplayPlayerName
											StyleConfig={StyleConfig}
											NAME={performance.player}
											Color={Color.Secondary.Contrast}
										/>

										<PerformanceBatting
											StyleConfig={StyleConfig}
											Color={Color.Secondary.Contrast}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
											isNotOut={performance.notOut}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>
					<LabelWrapper
						color={Color.Primary.BackgroundContractColor}
						style={{
							...Font.Copy,
							fontSize: '1.3em',
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{homeTeam.score === 'Yet to Bat' ? false : 'Bowling'}
					</LabelWrapper>
					<MinHeight>
						{homeTeam.bowlingPerformances
							.slice(0, 2)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`home-bowling-${index}`}
										bgColor={Color.Primary.Darken}
										borderRadius={TemplateVariation.borderRadius}
										style={{
											clipPath: FromLeftToRight(45 + index * 7, 'Slow'),
											opacity: interpolateOpacityByFrame(
												frame,
												FPS_SCORECARD - 30,
												FPS_SCORECARD,
												1,
												0
											),
										}}
									>
										<DisplayPlayerName
											StyleConfig={StyleConfig}
											NAME={performance.player}
											Color={Color.Primary.Contrast}
										/>

										<PerformanceBowling
											StyleConfig={StyleConfig}
											Color={Color.Primary.Contrast}
											Name={performance.player}
											Wickets={performance.wickets}
											Runs={performance.runs}
											Overs={performance.overs}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList>
					<LabelWrapper
						color={Color.Primary.BackgroundContractColor}
						style={{
							...Font.Copy,
							fontSize: '1.3em',
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{awayTeam.score === 'Yet to Bat' ? false : 'Batting'}
					</LabelWrapper>
					<MinHeight>
						{awayTeam.battingPerformances
							.slice(0, 2)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`away-batting-${index}`}
										bgColor={Color.Secondary.Main}
										borderRadius={TemplateVariation.borderRadius}
										style={{
											clipPath: FromLeftToRight(45 + index * 7, 'Slow'),
											opacity: interpolateOpacityByFrame(
												frame,
												FPS_SCORECARD - 30,
												FPS_SCORECARD,
												1,
												0
											),
										}}
									>
										<DisplayPlayerName
											StyleConfig={StyleConfig}
											NAME={performance.player}
											Color={Color.Secondary.Contrast}
										/>

										<PerformanceBatting
											StyleConfig={StyleConfig}
											Color={Color.Secondary.Contrast}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
											isNotOut={performance.notOut}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>
					<LabelWrapper
						color={Color.Primary.BackgroundContractColor}
						style={{
							...Font.Copy,
							fontSize: '1.3em',
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{awayTeam.score === 'Yet to Bat' ? false : 'Bowling'}
					</LabelWrapper>
					<MinHeight>
						{awayTeam.bowlingPerformances
							.slice(0, 2)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`away-bowling-${index}`}
										bgColor={Color.Primary.Darken}
										borderRadius={TemplateVariation.borderRadius}
										style={{
											clipPath: FromLeftToRight(45 + index * 7, 'Slow'),
											opacity: interpolateOpacityByFrame(
												frame,
												FPS_SCORECARD - 30,
												FPS_SCORECARD,
												1,
												0
											),
										}}
									>
										<DisplayPlayerName
											StyleConfig={StyleConfig}
											NAME={performance.player}
											Color={Color.Primary.Contrast}
										/>

										<PerformanceBowling
											StyleConfig={StyleConfig}
											Color={Color.Primary.Contrast}
											Name={performance.player}
											Wickets={performance.wickets}
											Runs={performance.runs}
											Overs={performance.overs}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};

const DisplayPlayerName = (props) => {
	const {Color, NAME, StyleConfig} = props;
	const {Font} = StyleConfig;
	const restrictedNames = ['Total', 'Extras', 'Private Player']; // Replace with your array of restricted names

	if (NAME && !restrictedNames.includes(NAME)) {
		return (
			<Name style={{...Font.Copy}} color={Color}>
				{restrictName(capitalizeFirstLetterOfName(NAME), 20)}
			</Name>
		);
	}

	return false;
};

const PerformanceBatting = (props) => {
	const {Color, Name, Runs, Balls, isNotOut, StyleConfig} = props;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0
	const {Font} = StyleConfig;
	if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
		return false;
	}

	return (
		<Performance color={Color} style={{...Font.Copy, fontWeight: 800}}>
			{Runs}
			{isNotOut ? '*' : ''}
			{Balls !== '0' && Balls !== 'undefined' ? ` (${Balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {Color, Name, Wickets, Runs, Overs, StyleConfig} = props;
	const {Font} = StyleConfig;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name)) {
		return false;
	}

	return (
		<Performance
			color={Color}
			style={{...Font.Copy, fontWeight: 800}}
		>{`${Wickets}/${Runs} (${Overs})`}</Performance>
	);
};
