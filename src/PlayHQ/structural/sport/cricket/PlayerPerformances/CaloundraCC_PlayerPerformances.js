import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../utils/copy';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';
const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px;
	margin-top: 00px;
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
	margin: 20px 0 20px;
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
	border: 1px solid ${(props) => props.BorderColor};
	border-radius: 100px;
	padding: 4px 10px;
	margin-bottom: 7px;
	width: auto;
`;

const Name = styled.span`
	font-size: 1.65em;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -1px;
`;

const Performance = styled.span`
	font-size: 1.65em;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
	letter-spacing: -2px;
`;

export const CaloundraCCPlayerPerformances = (props) => {
	const {matchData, slice=2} = props;

	const {StyleConfig} = useStylesContext();

	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Color} = StyleConfig;
	const {homeTeam, awayTeam} = matchData;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList>
					<MinHeight>
						{homeTeam.battingPerformances
							.slice(0, slice)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`home-batting-${index}`}
										bgColor={Color.Primary.Opacity(0.6)}
										BorderColor={Color.Primary.Lighten}
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

										<PerformanceBatting
											StyleConfig={StyleConfig}
											Color={Color.Primary.Contrast}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
											isNotOut={performance.notOut}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>

					<MinHeight>
						{homeTeam.bowlingPerformances
							.slice(0, slice)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`home-bowling-${index}`}
										bgColor={Color.Primary.Opacity(0.5)}
										BorderColor={Color.Primary.Lighten}
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
					<MinHeight>
						{awayTeam.battingPerformances
							.slice(0, slice)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`away-batting-${index}`}
										bgColor={Color.Primary.Opacity(0.5)}
										BorderColor={Color.Primary.Lighten}
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

										<PerformanceBatting
											StyleConfig={StyleConfig}
											Color={Color.Primary.Contrast}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
											isNotOut={performance.notOut}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>

					<MinHeight>
						{awayTeam.bowlingPerformances
							.slice(0, slice)
							.map((performance, index) => {
								if (restrictedValues.includes(performance.player)) {
									return null; // Skip rendering for this iteration if player name is in restrictedValues
								}

								return (
									<PerformanceItem
										key={`away-bowling-${index}`}
										bgColor={Color.Primary.Opacity(0.5)}
										BorderColor={Color.Primary.Lighten}
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
	const {Color, NAME} = props;
	const {StyleConfig} = useStylesContext();
	const {Font} = StyleConfig;
	const restrictedNames = ['Total', 'Extras', 'Private Player']; // Replace with your array of restricted names

	if (NAME && !restrictedNames.includes(NAME)) {
		return (
			<Name
				style={{
					fontFamily: 'Arial',
				}}
				color={Color}
			>
				{restrictName(capitalizeFirstLetterOfName(NAME), 20)}
			</Name>
		);
	}

	return false;
};

const PerformanceBatting = (props) => {
	const {Color, Name, Runs, Balls, isNotOut} = props;

	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
		return false;
	}

	return (
		<Performance color={Color} style={{fontFamily: 'Arial', fontWeight: 800}}>
			{Runs}
			{isNotOut ? '*' : ''}
			{Balls !== '0' && Balls !== 'undefined' ? ` (${Balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {Color, Name, Wickets, Runs, Overs} = props;

	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name)) {
		return false;
	}

	return (
		<Performance
			color={Color}
			style={{fontFamily: 'Arial', fontWeight: 800}}
		>{`${Wickets}/${Runs} (${Overs})`}</Performance>
	);
};
