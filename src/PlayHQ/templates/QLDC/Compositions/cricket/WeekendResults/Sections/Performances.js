import styled from 'styled-components';
import {getContrastColor} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../../Animation/ClipWipe';
import {
	capitalizeFirstLetterOfName,
	restrictName,
} from '../../../../../../utils/copy';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../../Components/Common/CommonVariables';

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
	const {FPS_SCORECARD, TemplateVariation, Bowling, Batting, StyleConfig} =
		props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

	const PlayerNameStyles = {
		...Font.Copy,
		fontWeight: 600,
		color: getContrastColor('white'),
	};

	const BattingPerformanceStyles = {
		...Font.Copy,
		color: getContrastColor(Color.Secondary.Darken),
		fontSize: '1.05em',
		letterSpacing:'-1px',
		fontWeight: 600,
	};

	const BowlingPerformanceStyles = {
		...Font.Copy,
		color: getContrastColor(Color.Secondary.Darken),
		fontSize: '1.05em',
		fontWeight: '600',
		letterSpacing:'-1px',
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
