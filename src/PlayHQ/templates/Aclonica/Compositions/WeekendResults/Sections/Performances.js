import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	GetBackgroundContractColorForText,
} from '../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
} from '../../../../../Animation/ClipWipe';
import {restrictName} from '../../../../../utils/copy';
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
	min-height: 120px;
`;
const PerformanceList = styled.ul`
	font-family: ${(props) => props.fontFamily};
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
`;
const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	
	padding: 2px 10px;
	margin-bottom: 1px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2.1em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 60%;
	margin-right: 2px;
	letter-spacing: -2px;
`;

const Performance = styled.span`
	font-size: 2em;
	font-weight: 900;
	color: ${(props) => props.color};
	text-align: right;
	width: 40%;
	margin-left: 10px;
	letter-spacing: -2px;
`;
const LabelWrapper = styled.div`
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const PlayerPerformances = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {homeTeam, awayTeam} = matchData;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={'Roboto'}>
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
										bgColor={darkenColor(THEME.primary)}
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
											NAME={performance.player}
											Color={getContrastColor(THEME.primary)}
										/>

										<PerformanceBatting
											Color={getContrastColor(THEME.primary)}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>

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
										bgColor={darkenColor(THEME.primary)}
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
											NAME={performance.player}
											Color={getContrastColor(THEME.primary)}
										/>

										<PerformanceBowling
											Color={getContrastColor(THEME.primary)}
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
				<PerformanceList fontFamily={'Roboto'}>
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
										bgColor={THEME.secondary}
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
											NAME={performance.player}
											Color={getContrastColor(THEME.secondary)}
										/>

										<PerformanceBatting
											Color={getContrastColor(THEME.secondary)}
											Name={performance.player}
											Runs={performance.runs}
											Balls={performance.balls}
										/>
									</PerformanceItem>
								);
							})}
					</MinHeight>

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
										bgColor={THEME.secondary}
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
											NAME={performance.player}
											Color={getContrastColor(THEME.secondary)}
										/>

										<PerformanceBowling
											Color={getContrastColor(THEME.secondary)}
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
	const restrictedNames = ['Total', 'Extras', 'Private Player']; // Replace with your array of restricted names

	if (NAME && !restrictedNames.includes(NAME)) {
		return <Name color={Color}>{restrictName(NAME, 10)}</Name>;
	}

	return false;
};

const PerformanceBatting = (props) => {
	const {Color, Name, Runs, Balls} = props;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
		return false;
	}

	return (
		<Performance color={Color}>
			{Runs}
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
		<Performance color={Color}>{`${Wickets}/${Runs} (${Overs})`}</Performance>
	);
};
