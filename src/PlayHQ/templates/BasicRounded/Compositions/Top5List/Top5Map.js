import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor, darkenColor} from '../../../../utils/colors';
import {restrictString} from '../../../../utils/copy';

export const Top5PlayersMap = ({DATA, THEME, fontFamily, FPS_MAIN, TYPE}) => {
	console.log(TYPE)
	const frame = useCurrentFrame();
	return (
		<PlayerContainer>
			{DATA.map((player, i) => {
				console.log(player);
				return (
					<PlayerROW
						key={i}
						style={{
							backgroundColor: i === 0 ? THEME.secondary : THEME.primary,
							opacity: interpolateOpacityByFrame(
								frame,
								30 * (5 - i + 1),
								40 * (5 - i + 1),
								0,
								1
							),
							transform: `translateX(${SpringToFrom(
								30 * (5 - i + 1),
								-1440,
								0,
								'Wobbly'
							)}px) translateX(${SpringToFrom(
								FPS_MAIN - 30 + i,
								0,
								1440,
								'Wobbly'
							)}px)`,
						}}
					>
						<SmallBoxLeftSide
							style={{
								background: i === 0 ? THEME.primary : THEME.secondary,
								borderColor: i === 0 ? THEME.secondary : THEME.primary,
							}}
						/>

						<PlayerMetaContainer>
							<PlayerName
								style={{
									color: getContrastColor(
										i === 0 ? THEME.secondary : THEME.primary
									),
									fontFamily,
								}}
							>
								{player.name}
							</PlayerName>
							<PlayerGradeTeam
								style={{
									fontSize: '35px',
									fontWeight: 900,
									color: getContrastColor(
										i === 0 ? THEME.secondary : THEME.primary
									),
									fontFamily,
								}}
							>
								{restrictString(player.playedFor, 50)}
							</PlayerGradeTeam>
							<PlayerGradeTeam
								style={{
									color: getContrastColor(
										i === 0 ? THEME.secondary : THEME.primary
									),
									fontFamily,
								}}
							>
								vs: {restrictString(player.playedAgainst, 30)}
							</PlayerGradeTeam>
						</PlayerMetaContainer>
						<PlayerScoreContianer
							style={{
								background: darkenColor(
									i === 0 ? THEME.secondary : THEME.primary
								),
								borderColor: i === 0 ? THEME.secondary : THEME.primary,
							}}
						>
							{TYPE === 'BATTING' ? <BattingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(
										darkenColor(i === 0 ? THEME.secondary : THEME.primary)
									)}
								/>: <BowlingScores
								player={player}
								fontFamily={fontFamily}
								COLOR={getContrastColor(
									darkenColor(i === 0 ? THEME.secondary : THEME.primary)
								)}
							/>}
						
						</PlayerScoreContianer>
					</PlayerROW>
				);
			})}
		</PlayerContainer>
	);
};

const BattingScores = ({COLOR, player, fontFamily}) => {
	console.log("player", player)
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily,
			}}
		>
			{player.key}{' '}
			<span
				style={{
					fontSize: '50px',
				}}
			>
				{player.param1 === 0 ? '' : `(${player.param1})`}
			</span>
		</PlayerScore>
	);
};

const BowlingScores = ({COLOR, player, fontFamily}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily,
			}}
		>
			{player.key}{'/'}{player.param2}
			<span
				style={{
					fontSize: '55px',
					fontWeight:400
				}}
			>
				{' '}
				{player.param1 === 0 ? '' : `(${player.param1})`}
			</span>
		</PlayerScore>
	);
};


// PlayedFor
const PlayerContainer = styled.div`
	position: absolute;
	width: 94%;
	height: 1280px;
	left: 3%;
	top: 33%;
	z-index: 1000;
	border-radius: 1em;
`;

const PlayerROW = styled.div`
	position: relative;
	height: 190px;
	margin-bottom: 30px;
	border-radius: 1em;
`;

const PlayerScoreContianer = styled.div`
	box-sizing: border-box;
	position: absolute;
	right: 0px;
	top: 0%;
	bottom: 86.11%;
	width: 341px;
	height: 190px;
	border: 1px solid;
	border-radius: 0 1em 1em 0 ;
`;

const PlayerScore = styled.h1`
	width: 100%;
	height: 190px;
	font-style: normal;
	font-weight: 700;
	font-size: 7em;
	line-height: 0.5em;
	text-align: center;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	margin: revert;
`;

const SmallBoxLeftSide = styled.div`
	box-sizing: border-box;
	position: absolute;
	left: 0%;
	top: 0%;
	height: 190px;
	width: 35px;
	border: 1px solid;
	border-radius: 1em;
`;

const PlayerMetaContainer = styled.div`
	height: 190px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0 0 0 60px;

	font-style: normal;
	font-weight: 400;
	font-size: 65px;
	line-height: 65px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0 0 0 60px;
	font-style: normal;
	font-weight: 400;
	font-size: 45px;
	line-height: 50px;
	letter-spacing: -0.005em;
	text-transform: uppercase;
`;
