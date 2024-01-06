import styled from 'styled-components';
import {getContrastColor, darkenColor} from '../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {restrictName} from '../../../../../utils/copy';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../Components/Common/CommonVariables';

const PlayerContainer = styled.div`
	width: 70%;
	background-color: white;
	padding: 2px 5px;
`;
const PerformanceContainer = styled.div`
	background-color: transparent;
	padding: 2px 5px;
	width: 30%;
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
	padding: 0px;
	margin-top: 5px;
	width: auto;

	font-size: 1.7em;
	height: 1.7em;
	line-height: 1.7em;
	font-weight: 500;
`;

export const PlayerPerformances = (props) => {
	const {
		THEME,
		fontFamily,
		FPS_SCORECARD,
		TemplateVariation,
		Bowling,
		Batting,
	} = props;

	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const PlayerNameStyles = {
		color: getContrastColor('white'),
	};

	const BattingPerformanceStyles = {
		color: getContrastColor(darkenColor(THEME.secondary)),
		fontSize: '1.1em',
		fontWeight: '600',
	};

	const BowlingPerformanceStyles = {
		color: getContrastColor(darkenColor(THEME.secondary)),
		fontSize: '1.1em',
		fontWeight: '600',
	};

	return (
		<PerformanceList fontFamily={fontFamily}>
			<InningContainer marginRight={'5px'}>
				{Batting.slice(0, 2).map((performance, index) => {
					if (restrictedValues.includes(performance.player)) {
						return null; // Skip rendering for this iteration if player name is in restrictedValues
					}

					return (
						<PerformanceItem
							key={`home-batting-${index}`}
							bgColor={darkenColor(THEME.secondary)}
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
									NAME={restrictName(performance.player, 14)}
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
									Color={getContrastColor(darkenColor(THEME.secondary))}
								/>
							</PerformanceContainer>
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
							bgColor={darkenColor(THEME.secondary)}
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
									NAME={restrictName(performance.player, 14)}
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
