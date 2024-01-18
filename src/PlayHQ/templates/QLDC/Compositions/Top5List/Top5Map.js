import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../utils/copy';

import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {
	DisplayPlayerName,
	PerformanceBatting,
	PerformanceBowling,
} from '../../Components/Common/CommonVariables';

// PlayedFor
const PlayerContainer = styled.div`
	width: 78%;
	margin: 0 0 0 20%;
	height: ${(props) => props.Height}px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const PlayerROW = styled.div`
	position: relative;
	margin-bottom: 25px;
	padding: 10px 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: auto;
`;

const PlayerScoreContainer = styled.div`
	box-sizing: border-box;
	position: absolute;
	left: 10px;
	width: 200px;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Top5PlayersMap = (props) => {
	const {DATA, FPS_MAIN, TYPE, TemplateVariation, SectionHeights, StyleConfig} =
		props;
	const {Font, Color} = StyleConfig;
	return (
		<PlayerContainer Height={SectionHeights.Body}>
			{DATA.map((player, i) => {
				return (
					<PlayerROW
						key={i}
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
						<PlayerMetaContainer>
							<DisplayPlayerName
								NAME={restrictName(player.name, 30)}
								customStyles={{
									margin: '0 0 0 220px',
									borderRadius: TemplateVariation.borderRadius,
									color: Color.Primary.Contrast,
									...Font.Copy,
									clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
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
									margin: '0 0 0 220px',
									borderRadius: TemplateVariation.borderRadius,
									color: Color.Primary.Contrast,
									...Font.Copy,
									clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
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
								width: `${SpringToFrom(30 + Number(i), 0, 200, 'Wobbly')}px`,
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
					</PlayerROW>
				);
			})}
		</PlayerContainer>
	);
};

const BattingScores = ({COLOR, player, int, StyleConfig}) => {
	const BattingPerformanceStyles = {
		...StyleConfig.Font.Copy,
		color: COLOR,
		fontWeight: '900',
		fontSize: '3.3em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',
		clipPath: FromLeftToRight(45 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.6em',
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
					Runs: player.key,
					Balls: player.param1,
				}}
			/>
		</>
	);
};

const BowlingScores = ({COLOR, player, int, StyleConfig}) => {
	const BowlingPerformanceStyles = {
		...StyleConfig.Font.Copy,
		color: COLOR,
		fontWeight: '900',
		fontSize: '3.4em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',

		clipPath: FromLeftToRight(45 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.6em',
	};

	return (
		<PerformanceBowling
			customSpanStyles={BallStyles}
			customStyles={BowlingPerformanceStyles}
			Performance={{
				Name: player.key,
				Wickets: player.key,
				Runs: player.param2,
				Overs: player.param1,
			}}
		/>
	);
};
