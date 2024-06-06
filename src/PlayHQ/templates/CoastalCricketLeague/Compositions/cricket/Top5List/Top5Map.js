import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';

import {
	FromLeftToRight,
	FromTopToBottom,
} from '../../../../../Animation/ClipWipe';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../Components/Common/DEPRECATED_CommonVariables';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {
	
	ContainerStructureContentBlockCCLWithAnimation,
	TeamsAndScoresContainerCCL,
} from '../../../../../structural/assets/common/Containers/CCL/StructureSidebarBlock';
import {TeamLogoCCL} from '../../../Components/Common/TeamLogo';

const PlayerScoreContainer = styled.div`
	box-sizing: border-box;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 15px 0 0;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

export const Top5PlayersMap = (props) => {
	const {DATA, FPS_MAIN, TYPE, TemplateVariation, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	console.log('props ', props);
	return (
		<ContainerBodyHeight {...props}>
			<ContainerInnerBodyHeight {...props}>
				{DATA.map((player, i) => {
					return (
						<ContainerStructureContentBlockCCLWithAnimation
							key={i}
							borderColor={Color.Secondary.Main}
							FPS_SCORECARD={FPS_MAIN}
							style={{
								margin: '10px 5%',
								filter: ` drop-shadow(0px 0px 5px #7C7C7C)`,
							}}
						>
							<TeamsAndScoresContainerCCL
								style={{}}
							>
								<TeamLogoCCL FPS_SCORECARD={FPS_MAIN} />
								<PlayerMetaContainer
									style={{
										borderRadius: TemplateVariation.borderRadius,

										width: `${SpringToFrom(Number(i), 0, 100, 'Wobbly')}%`,
										transform: `translateX(${SpringToFrom(
											FPS_MAIN - 15 + i,
											0,
											-1440,
											'Wobbly'
										)}px)`,
									}}
								>
									<DisplayPlayerName
										NAME={restrictName(player.name, 30)}
										customStyles={{
											margin: '0 0 0 10px',
											borderRadius: TemplateVariation.borderRadius,
											color: Color.Primary.Contrast,
											...Font.Copy,
											clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
											fontStyle: 'normal',
											fontWeight: 600,
											fontSize: ' 2.5em',
											lineHeight: '1.3em',
											textTransform: 'uppercase',
											letterSpacing: '-1px',
										}}
									/>

									<DisplayPlayerName
										NAME={restrictString(removeEmojis(player.playedFor), 40)}
										restrictBy={40}
										customStyles={{
											margin: '0 0 0 10px',
											borderRadius: TemplateVariation.borderRadius,
											color: Color.Primary.Contrast,
											...Font.Copy,
											clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
											fontStyle: 'normal',
											fontWeight: 100,
											fontSize: ' 1.8em',
											width: '555px',
											lineHeight: '1.2em',
											textTransform: 'uppercase',
											letterSpacing: '0px',
										}}
									/>
								</PlayerMetaContainer>
								<PlayerScoreContainer
									style={{
										width: `${SpringToFrom(7 + Number(i), 0, 167, 'Wobbly')}px`,
										borderRadius: '100%',
										transform: `translateX(${SpringToFrom(
											FPS_MAIN - 15 + i,
											0,
											1440,
											'Wobbly'
										)}px)`,
										borderColor:
											i === 0 ? Color.Secondary.Main : Color.Primary.Main,
									}}
								>
									{TYPE === 'BATTING' ? (
										<BattingScores
											player={player}
											int={i}
											COLOR={Color.Primary.Contrast}
											StyleConfig={StyleConfig}
										/>
									) : (
										<BowlingScores
											player={player}
											int={i}
											COLOR={Color.Primary.Contrast}
											StyleConfig={StyleConfig}
										/>
									)}
								</PlayerScoreContainer>
							</TeamsAndScoresContainerCCL>
						</ContainerStructureContentBlockCCLWithAnimation>
					);
				})}
			</ContainerInnerBodyHeight>
		</ContainerBodyHeight>
	);
};

const BattingScores = ({COLOR, player, int, StyleConfig}) => {
	console.log('StyleConfig ', StyleConfig);
	const BattingPerformanceStyles = {
		...StyleConfig.Font.TitleAlt,
		color: COLOR,
		fontWeight: '400',
		fontSize: '3.5em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',
		clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.6em',
		fontWeight: '400',
		...StyleConfig.Font.Copy,
	};
	return (
		<>
			<PerformanceBatting
				customStyles={BattingPerformanceStyles}
				customSpanStyles={BallStyles}
				Performance={{
					Name: player.player,
					isNotOut: player.notOut,
					Runs: player.runs,
					Balls: player.balls,
				}}
			/>
		</>
	);
};

const BowlingScores = ({COLOR, player, int, StyleConfig}) => {
	const BowlingPerformanceStyles = {
		...StyleConfig.Font.TitleAlt,
		color: COLOR,
		fontWeight: '400',
		fontSize: '3.5em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',

		clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.6em',
		fontWeight: '400',
		...StyleConfig.Font.Copy,
	};

	return (
		<PerformanceBowling
			customSpanStyles={BallStyles}
			customStyles={BowlingPerformanceStyles}
			Performance={{
				Name: player.key,
				Wickets: player.wickets,
				Runs: player.runs,
				Overs: player.overs,
			}}
		/>
	);
};
