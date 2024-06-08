import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';

import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../../Components/Common/DEPRECATED_CommonVariables';
import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';

const PlayerROW = styled.div`
	height: 120px;
	position: relative;
	margin: 10px 0 25px;
	padding: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const PlayerScoreContainer = styled.div`
	box-sizing: border-box;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 6px 0 0;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

export const Top5PlayersMap = (props) => {
	const {DATA, FPS_MAIN, TYPE, TemplateVariation, SectionHeights, StyleConfig} =
		props;
	const {Font, Color} = StyleConfig;
	return (
		<ContainerQLDCBodyHeight Height={SectionHeights.Body}>
			<ContainerQLDCAsset>
				{DATA.map((player, i) => {
					return (
						<PlayerROW key={i}>
							<PlayerScoreContainer
								style={{
									width: `${SpringToFrom(7 + Number(i), 0, 300, 'Wobbly')}px`,
									borderRadius: TemplateVariation.borderRadius,
									background: Color.Primary.Darken,
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

							<PlayerMetaContainer
								style={{
									borderRadius: TemplateVariation.borderRadius,
									backgroundColor: Color.Primary.Lighten,
									width: `${SpringToFrom(Number(i), 0, 100, 'Wobbly')}%`,
									transform: `translateX(${SpringToFrom(
										FPS_MAIN - 30 + i,
										0,
										1440,
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
						</PlayerROW>
					);
				})}
			</ContainerQLDCAsset>
		</ContainerQLDCBodyHeight>
	);
};

const BattingScores = ({COLOR, player, int, StyleConfig}) => {
	const BattingPerformanceStyles = {
		...StyleConfig.Font.Copy,
		color: COLOR,
		fontWeight: '600',
		fontSize: '4.5em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0', 
		clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.5em',
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
		...StyleConfig.Font.Copy,
		color: COLOR,
		fontWeight: '600',
		fontSize: '4.5em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',

		clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.5em',
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
