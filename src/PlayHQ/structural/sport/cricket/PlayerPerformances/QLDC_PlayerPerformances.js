import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {getContrastColor} from '../../../../utils/colors';
import {FromLeftToRight, FromRightToLeft} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../utils/copy';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../../templates/QLDC/Components/Common/DEPRECATED_CommonVariables';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';

const PlayerContainer = styled.div`
	width: 70%;
	background-color: white;
	padding: 5px;
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
const PerformanceList = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

const InningContainer = styled.div`
	width: 100%;
	margin-top: 5px;
	margin-right: ${(props) => props.marginRight};
`;

const PerformanceItem = styled.div`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	padding: 0px;
	margin-top: 5px;
	width: auto;
	height: 55px;
`;

export const PlayerPerformances = (props) => {
	const {Bowling, Batting} = props;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const restrictedValues = [
		'Total',
		'Extras',
		'Private Player',
		'',
		0,
		null,
		false,
		undefined,
	];

	const PlayerNameStyles = {
		...Font.Copy,
		...TextStyles.copyMediumBold,
		color: getContrastColor('white'),
	};

	const BattingPerformanceStyles = {
		...Font.Copy,
		...TextStyles.copyMediumBold,
		color: getContrastColor(Color.Secondary.Darken),
	};

	const BowlingPerformanceStyles = {
		...Font.Copy,
		...TextStyles.copyMediumBold,
		color: getContrastColor(Color.Secondary.Darken),
	};

	return (
		<PerformanceList>
			<InningContainer marginRight="5px">
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
							<PlayerContainer>
								<DisplayPlayerName
									NAME={restrictName(
										capitalizeFirstLetterOfName(performance.player),
										14
									)}
									customStyles={PlayerNameStyles}
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
							<PlayerContainer>
								<DisplayPlayerName
									NAME={restrictName(
										capitalizeFirstLetterOfName(performance.player),
										14
									)}
									customStyles={PlayerNameStyles}
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
	);
};
