import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
	GetBackgroundContractColorForText,
	setOpacity,
	getTitleColorOverGradient,
} from '../../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	EraseFromMiddle,
	FromMiddle,
} from '../../../../../../Animation/ClipWipe';
import {restrictName} from '../../../../../../utils/copy';
const VideoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 60%;
	padding: 0px;
`;

const PerformancesContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
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
`;

const Name = styled.span`
	font-size: 2.5em;
	font-weight: 200;
	letter-spacing: 0px;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
	line-height: 1em;
`;

const Performance = styled.span`
	font-size: 2.1em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
`;
const LabelWrapper = styled.div`
	font-size: 1.2em;
	font-weight: 400;
	color: ${(props) => props.color};
	letter-spacing: 2px;
	transform: rotate(270deg);
	text-transform: uppercase;
`;

const GlassLayer = styled.div`
	border-radius: 5px;
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: rgba(0, 0, 0, 0.45);
	backdrop-filter: blur(20px);
	margin-bottom: 10px;
	padding: 5px;
	min-height:125px;
`;

export const PlayerPerformances = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD} = props;
	const {homeTeam, awayTeam} = matchData;
	const frame = useCurrentFrame();
 
	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<SkillContainer>
						<LabelWrapperContianer
							frame={frame}
							color={THEME.secondary}
							THEME={THEME}
						>
							Batting 
						</LabelWrapperContianer>
						<GlassLayerContainer frame={frame} FPS_SCORECARD={FPS_SCORECARD}>
							{homeTeam.battingPerformances
								.slice(0, 2)
								.map((performance, index) => (
									<PerformanceItem
										key={`home-batting-${index}`}
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
											{restrictName(performance.player, 40)}
										</Name>
										<Performance color={getContrastColor(THEME.primary)}>
											{`${performance.runs} (${performance.balls})`}
										</Performance> 
									</PerformanceItem>
								))}
						</GlassLayerContainer>
					</SkillContainer>
					<SkillContainer>
						<LabelWrapperContianer
							frame={frame}
							color={THEME.secondary}
							THEME={THEME}
						>
							Bowling
						</LabelWrapperContianer>
						<GlassLayerContainer frame={frame} FPS_SCORECARD={FPS_SCORECARD}>
							{homeTeam.bowlingPerformances
								.slice(0, 2)
								.map((performance, index) => (
									<PerformanceItem
										key={`away-bowling-${index}`}
										/* bgColor={darkenColor(THEME.primary)} */
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
											{restrictName(performance.player, 40)}
										</Name>
										<Performance color={getContrastColor(THEME.primary)}>
											{`${performance.wickets}/${performance.runs} (${performance.overs})`}
										</Performance>
									</PerformanceItem>
								))}
						</GlassLayerContainer>
					</SkillContainer>
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<SkillContainer>
						<LabelWrapperContianer
							frame={frame}
							color={THEME.primary}
							THEME={THEME}
						>
							Batting
						</LabelWrapperContianer>
						<GlassLayerContainer frame={frame} FPS_SCORECARD={FPS_SCORECARD}>
							{awayTeam.battingPerformances
								.slice(0, 2)
								.map((performance, index) => (
									<PerformanceItem
										key={`away-batting-${index}`}
										/* bgColor={lightenColor(THEME.secondary)} */
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
											{restrictName(performance.player, 40)}
										</Name>
										<Performance color={getContrastColor(THEME.primary)}>
											{`${performance.runs} (${performance.balls})`}
										</Performance>
									</PerformanceItem>
								))}
						</GlassLayerContainer>
					</SkillContainer>

					<SkillContainer>
						<LabelWrapperContianer
							frame={frame}
							color={THEME.primary}
							THEME={THEME}
						>
							Bowling
						</LabelWrapperContianer>

						<GlassLayerContainer frame={frame} FPS_SCORECARD={FPS_SCORECARD}>
							{awayTeam.bowlingPerformances
								.slice(0, 2)
								.map((performance, index) => (
									<PerformanceItem
										key={`home-bowling-${index}`}
										/* bgColor={darkenColor(THEME.primary)} */
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
											{restrictName(performance.player, 40)}
										</Name>
										<Performance color={getContrastColor(THEME.primary)}>
											{`${performance.wickets}/${performance.runs} (${performance.overs})`}
										</Performance>
									</PerformanceItem>
								))}
						</GlassLayerContainer>
					</SkillContainer>
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};

const GlassLayerContainer = (props) => {
	const {frame, FPS_SCORECARD} = props;
	return (
		<GlassLayer
			style={{
				clipPath: FromLeftToRight(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			{props.children}
		</GlassLayer>
	);
};

const SkillContainer = (props) => {
	return (
		<div
			style={{
				position: 'relative',
				height: '130px',
			}}
		>
			{props.children}
		</div>
	);
};

const LabelWrapperContianer = (props) => {
	const {frame, color} = props;
	return (
		<LabelWrapper
			color={getContrastColor(darkenColor(color))}
			style={{
				position: 'absolute',
				left: '5px',
				bottom: '-9px',
				zIndex: '10',
				width: '123px',
				transform: 'translateY(-50%) rotate(-90deg)',
				transformOrigin: 'left bottom',
				backgroundColor: color,
				textAlign: 'center',
				padding: '1px',
				borderRadius: '5px 5px 0px 0px',
				opacity: interpolateOpacityByFrame(frame, 60, 90, 0, 1),
				clipPath: EraseFromMiddle(180, 'Slow'),
			}}
		>
			{props.children}
		</LabelWrapper>
	);
};
