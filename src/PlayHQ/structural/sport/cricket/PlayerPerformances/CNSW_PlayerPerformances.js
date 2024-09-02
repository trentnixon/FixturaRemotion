import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {FromLeftToRight, FromRightToLeft} from '../../../../Animation/ClipWipe';
import {restrictName} from '../../../../utils/copy';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {useStylesContext} from '../../../../context/StyleContext';

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
	justify-content: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	margin-top: 10px;
	min-height: 55px;
`;

const Name = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: ${(props) => props.color};
	min-height: 40px;
	width: 70%;
	padding: 0px 10px;
	background-color: white;
	min-height: 55px;
`;

const Performance = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => props.color};
	text-align: center;
	width: 30%;
`;

export const CNSWPlayerPerformances = (props) => {
	const {Bowling, Batting} = props;
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;

	const {FPS_SCORECARD} = TIMINGS;
	const {TemplateVariation} = BuildProps;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];
	return (
		<PerformancesContainer>
			<PerformanceList>
				<InningContainer marginRight="5px">
					{Batting.slice(0, 2).map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}

						return (
							<PerformanceItem
								key={`home-batting-${index}`}
								bgColor={Color.Secondary.Main}
								borderRadius={TemplateVariation.borderRadius}
								style={{
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
								<DisplayPlayerName NAME={performance.player} Color="black" />

								<PerformanceBatting
									Color={getContrastColor(Color.Secondary.Main)}
									Name={performance.player}
									Runs={performance.runs}
									Balls={performance.balls}
									isNotOut={performance.notOut}
								/>
							</PerformanceItem>
						);
					})}
				</InningContainer>

				<InningContainer marginRight="0px">
					{Bowling.slice(0, 2).map((performance, index) => {
						if (restrictedValues.includes(performance.player)) {
							return null; // Skip rendering for this iteration if player name is in restrictedValues
						}

						return (
							<PerformanceItem
								key={`home-bowling-${index}`}
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
								<DisplayPlayerName NAME={performance.player} Color="black" />

								<PerformanceBowling
									Color={getContrastColor(Color.Secondary.Main)}
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
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	if (NAME && !restrictedNames.includes(NAME)) {
		return (
			<Name
				color={Color}
				style={{
					...Font.Copy,
					...TextStyles.copyMedium,
				}}
			>
				{restrictName(NAME, 17)}
			</Name>
		);
	}

	return false;
};

const PerformanceBatting = (props) => {
	const {Color, Name, Runs, Balls, isNotOut} = props;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
		return false;
	}

	return (
		<Performance
			color={Color}
			style={{
				...Font.Copy,
				...TextStyles.copyMediumBold,
			}}
		>
			{Runs}
			{isNotOut ? '*' : ''}
			{Balls !== '0' && Balls !== 'undefined' ? ` (${Balls})` : false}
		</Performance>
	);
};

const PerformanceBowling = (props) => {
	const {Color, Name, Wickets, Runs, Overs} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name)) {
		return false;
	}

	return (
		<Performance
			color={Color}
			style={{
				...Font.Copy,
				...TextStyles.copyMediumBold,
			}}
		>{`${Wickets}/${Runs} (${Overs})`}</Performance>
	);
};
