import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	GetBackgroundContractColorForText,
} from '../../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
	FromRightToLeft,
} from '../../../../../../Animation/ClipWipe';
import {restrictName} from '../../../../../../utils/copy';

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
	padding: 0px;
	margin-bottom: 5px;
	width: auto;

	font-size: 1.7em;
	height: 1.7em;
	line-height: 1.7em;
	font-weight: 500;
`;

const Name = styled.span`
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	letter-spacing: -2px;
	background-color: white;
	padding: 5px 10px;
`;

const Performance = styled.span`
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: center;
	width: 30%;
	letter-spacing: -2px;
	padding: 5px 10px;
`;

export const PlayerPerformances = (props) => {
	const {
		fontFamily,
		FPS_SCORECARD,
		TemplateVariation,
		Bowling,
		Batting,
		StyleConfig,
	} = props;

	const {Color} = StyleConfig;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<PerformancesContainer>
			<PerformanceList fontFamily={fontFamily}>
				<InningContainer marginRight={'5px'}>
					{Batting.slice(0, 2).map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}

						return (
							<PerformanceItem
								key={`home-batting-${index}`}
								bgColor={Color.Secondary.Darken}
								borderRadius={TemplateVariation.borderRadius}
								style={{
									...StyleConfig.Font.Copy,
									clipPath: FromRightToLeft(45 + index * 7, 'Slow'),
									opacity: interpolateOpacityByFrame(
										frame,
										FPS_SCORECARD - 30,
										FPS_SCORECARD,
										1,
										0
									),
								}}
							>
								<DisplayPlayerName NAME={performance.player} Color={`black`} />

								<PerformanceBatting
									Color={getContrastColor(Color.Secondary.Darken)}
									Name={performance.player}
									Runs={performance.runs}
									Balls={performance.balls}
									isNotOut={performance.notOut}
								/>
							</PerformanceItem>
						);
					})}
				</InningContainer>

				<InningContainer marginRight={'0px'}>
					{Bowling.slice(0, 2).map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}

						return (
							<PerformanceItem
								key={`home-bowling-${index}`}
								bgColor={Color.Secondary.Darken}
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
								<DisplayPlayerName NAME={performance.player} Color={`black`} />

								<PerformanceBowling
									Color={getContrastColor(Color.Secondary.Darken)}
									Name={performance.player}
									Wickets={performance.wickets}
									Runs={performance.runs}
									Overs={performance.overs}
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
	const {Color, NAME} = props;
	const restrictedNames = ['Total', 'Extras', 'Private Player']; // Replace with your array of restricted names

	if (NAME && !restrictedNames.includes(NAME)) {
		return <Name color={Color}>{restrictName(NAME, 20)}</Name>;
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
		<Performance color={Color}>
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
		<Performance color={Color}>{`${Wickets}/${Runs} (${Overs})`}</Performance>
	);
};
