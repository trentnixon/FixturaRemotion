import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
	getBackgroundColor,
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
	min-height: 110px;
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
	border-radius: ${(props) => props.borderRadius};
	padding: 2px 10px;
	margin-bottom: 1px;
	width: auto;
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

export const PlayerPerformances = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {homeTeam, awayTeam} = matchData;
	const frame = useCurrentFrame();

	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{homeTeam.score === 'Yet to Bat' ? false : 'Batting'}
					</LabelWrapper>
					<MinHeight>
						{homeTeam.battingPerformances.map((performance, index) => (
							<PerformanceItem
								key={`home-batting-${index}`}
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
								<Name color={getContrastColor(THEME.secondary)}>
									{restrictName(performance.player, 30)}
								</Name>
								<Performance color={getContrastColor(THEME.secondary)}>
									{`${performance.runs}`}{' '}
									{performance.balls !== '0'
										? ` (${performance.balls})`
										: false}
								</Performance>
							</PerformanceItem>
						))}
					</MinHeight>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{homeTeam.score === 'Yet to Bat' ? false : 'Bowling'}
					</LabelWrapper>
					<MinHeight>
						{homeTeam.bowlingPerformances.map((performance, index) => (
							<PerformanceItem
								key={`away-bowling-${index}`}
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
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 30)}
								</Name>
								<Performance color={getContrastColor(THEME.primary)}>
								{performance.player === ''
										? false
										: `${performance.wickets}/${performance.runs} (${performance.overs})`}
								</Performance>
							</PerformanceItem>
						))}
					</MinHeight>
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{awayTeam.score === 'Yet to Bat' ? false : 'Batting'}
					</LabelWrapper>
					<MinHeight>
						{awayTeam.battingPerformances.map((performance, index) => (
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
								<Name color={getContrastColor(THEME.secondary)}>
									{restrictName(performance.player, 30)}
								</Name>
								<Performance color={getContrastColor(THEME.secondary)}>
									{`${performance.runs}`}
									{performance.balls !== '0'
										? ` (${performance.balls})`
										: false}
								</Performance>
							</PerformanceItem>
						))}
					</MinHeight>
					<LabelWrapper
						color={GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						)}
						style={{
							opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
							clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
						}}
					>
						{awayTeam.score === 'Yet to Bat' ? false : 'Bowling'}
					</LabelWrapper>
					<MinHeight>
						{awayTeam.bowlingPerformances.map((performance, index) => (
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
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 30)}
								</Name>
								<Performance color={getContrastColor(THEME.primary)}>
									{performance.player === ''
										? false
										: `${performance.wickets}/${performance.runs} (${performance.overs})`}
								</Performance>
							</PerformanceItem>
						))}
					</MinHeight>
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};
