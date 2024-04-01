import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
	setOpacity,
} from '../../../../../../utils/colors';

import {useCurrentFrame} from 'remotion';
import {restrictName, restrictString} from '../../../../../../utils/copy';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 20px 10px;
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
	font-family: 'Oswald';
	margin: 0px 0 0 0;
	padding: 0;
	list-style: none;
	width: 100%;
	letter-spacing: 0.02em;
`;
const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	//background-color: ${(props) => props.bgColor};
	padding: 4px 15px;
	margin-bottom: 0px;
	width: auto;
`;

const Name = styled.span`
	font-size: 2.1em;
	font-weight: 400;
	color: ${(props) => props.color};
	width: 70%;
	margin-right: 2px;
`;

const Performance = styled.span`
	font-size: 2em;
	font-weight: 400;
	color: ${(props) => props.color};
	text-align: right;
	width: 30%;
	margin-left: 10px;
`;
const LabelWrapper = styled.div`
	font-size: 1.6em;
	font-weight: 900;
	text-align: left;
	color: ${(props) => props.color};
	margin: 15px 10px -0px;
	background-color: ${(props) => props.BG};
	text-align: center;
	padding: 1px;
	border-radius: 10px 10px 0px 0px;
`;

const GlassLayer = styled.div`
	border-radius: 5px;
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(25px);
	margin-bottom: 10px;
	padding: 5px;
`;
export const PlayerPerformances = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const {homeTeam, awayTeam} = matchData;

	return (
		<VideoContainer>
			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={getContrastColor(THEME.secondary)}
						BG={THEME.secondary}
					>
						Batting
					</LabelWrapper>
					<GlassLayerContainer>
						{homeTeam.battingPerformances.map((performance, index) => (
							<PerformanceItem key={`home-batting-${index}`}>
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 20)}
								</Name>
								<Performance
									bgColor={setOpacity(THEME.secondary, 0.7)}
									color={getContrastColor(THEME.primary)}
								>
									{`${performance.runs} (${performance.balls})`}
								</Performance>
							</PerformanceItem>
						))}
					</GlassLayerContainer>
					<LabelWrapper
						color={getContrastColor(THEME.primary)}
						BG={THEME.primary}
					>
						Bowling
					</LabelWrapper>
					<GlassLayerContainer>
						{homeTeam.bowlingPerformances.map((performance, index) => (
							<PerformanceItem
								key={`away-bowling-${index}`}
								bgColor={setOpacity(THEME.primary, 0.7)}
							>
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 20)}
								</Name>
								<Performance
									color={getContrastColor(THEME.primary)}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								>
									{`${performance.wickets}/${performance.runs} (${performance.overs})`}
								</Performance>
							</PerformanceItem>
						))}
					</GlassLayerContainer>
				</PerformanceList>
			</PerformancesContainer>

			<PerformancesContainer>
				<PerformanceList fontFamily={fontFamily}>
					<LabelWrapper
						color={getContrastColor(THEME.secondary)}
						BG={THEME.secondary}
					>
						Batting
					</LabelWrapper>
					<GlassLayerContainer>
						{awayTeam.battingPerformances.map((performance, index) => (
							<PerformanceItem key={`away-batting-${index}`}>
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 20)}
								</Name>
								<Performance
									color={getContrastColor(THEME.primary)}
									bgColor={setOpacity(THEME.secondary, 0.8)}
								>
									{`${performance.runs} (${performance.balls})`}
								</Performance>
							</PerformanceItem>
						))}
					</GlassLayerContainer>
					<LabelWrapper color={getContrastColor(THEME.dark)} BG={THEME.primary}>
						Bowling
					</LabelWrapper>
					<GlassLayerContainer>
						{awayTeam.bowlingPerformances.map((performance, index) => (
							<PerformanceItem key={`home-bowling-${index}`}>
								<Name color={getContrastColor(THEME.primary)}>
									{restrictName(performance.player, 20)}
								</Name>
								<Performance
									color={getContrastColor(THEME.primary)}
									bgColor={setOpacity(darkenColor(THEME.primary), 0.6)}
								>
									{`${performance.wickets}/${performance.runs} (${performance.overs})`}
								</Performance>
							</PerformanceItem>
						))}
					</GlassLayerContainer>
				</PerformanceList>
			</PerformancesContainer>
		</VideoContainer>
	);
};

const GlassLayerContainer = (props) => {
	const {frame, FPS_SCORECARD} = props;
	return (
		<GlassLayer
		/* style={{
				clipPath: FromLeftToRight(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}} */
		>
			{props.children}
		</GlassLayer>
	);
};
