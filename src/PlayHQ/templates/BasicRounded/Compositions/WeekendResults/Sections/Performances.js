import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
} from '../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
} from '../../../../../Animation/ClipWipe';
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
	padding: 2px 5px;
	margin-bottom: 1px;
	width: auto;
	border-radius:5px;
`;

const Name = styled.span`
	font-size: 1.45em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
`;

const Performance = styled.span`
	font-size: 1.45em;
	font-weight: 900;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
`;
const LabelWrapper = styled.div`
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const PlayerPerformances = ({
	homeTeam,
	awayTeam,
	THEME,
	fontFamily,
	FPS_SCORECARD,
}) => {
	const frame = useCurrentFrame();

	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={getContrastColor(darkenColor(THEME.primary))}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						Batting
					</LabelWrapper>
					{homeTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-batting-${index}`}
							bgColor={lightenColor(THEME.secondary)}
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
							<Name color={getContrastColor(lightenColor(THEME.secondary))}>
								{performance.player}
							</Name>
							<Performance
								color={getContrastColor(lightenColor(THEME.secondary))}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper
						color={getContrastColor(darkenColor(THEME.primary))}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						Bowling
					</LabelWrapper>

					{awayTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-bowling-${index}`}
							bgColor={darkenColor(THEME.primary)}
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
							<Name color={getContrastColor(darkenColor(THEME.primary))}>
								{performance.player}
							</Name>
							<Performance color={getContrastColor(darkenColor(THEME.primary))}>
								{`${performance.wickets}/${performance.runs} (${performance.overs})`}
							</Performance>
						</PerformanceItem>
					))}
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={getContrastColor(darkenColor(THEME.primary))}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						Batting
					</LabelWrapper>
					{awayTeam.battingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`away-batting-${index}`}
							bgColor={lightenColor(THEME.secondary)}
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
							<Name color={getContrastColor(lightenColor(THEME.secondary))}>
								{performance.player}
							</Name>
							<Performance
								color={getContrastColor(lightenColor(THEME.secondary))}
							>
								{`${performance.runs} (${performance.balls})`}
							</Performance>
						</PerformanceItem>
					))}
					<LabelWrapper
						color={getContrastColor(darkenColor(THEME.primary))}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						Bowling
					</LabelWrapper>
					{homeTeam.bowlingPerformances.map((performance, index) => (
						<PerformanceItem
							key={`home-bowling-${index}`}
							bgColor={darkenColor(THEME.primary)}
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
							<Name color={getContrastColor(darkenColor(THEME.primary))}>
								{performance.player}
							</Name>
							<Performance color={getContrastColor(darkenColor(THEME.primary))}>
								{`${performance.wickets}/${performance.runs} (${performance.overs})`}
							</Performance>
						</PerformanceItem>
					))}
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};