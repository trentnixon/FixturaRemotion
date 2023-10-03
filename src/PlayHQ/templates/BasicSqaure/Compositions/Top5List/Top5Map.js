import React from 'react';
import styled from 'styled-components';
import {Img, useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor, darkenColor, setOpacity} from '../../../../utils/colors';
import {restrictString} from '../../../../utils/copy';
import useImageDimensions from '../../../../hooks/useImageDimensions';

export const Top5PlayersMap = ({DATA, THEME, fontFamily, FPS_MAIN, TYPE}) => {
	console.log(TYPE);
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90]; 

	return (
		<PlayerContainer>
			{DATA.map((player, i) => {
				console.log(player);
				const TemLogoStyles = useImageDimensions(player.teamLogo, IMGSIZING);
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
								background: i === 0 ? setOpacity(THEME.primary,1)  : setOpacity(darkenColor(THEME.primary),0.5) ,
								borderColor: i === 0 ? THEME.secondary : THEME.primary,
							}}
						>
							<Img src={player.teamLogo} style={{...TemLogoStyles, borderRadius: '100%'}} />
						</SmallBoxLeftSide>
						<PlayerMetaContainer>
							<PlayerName
								style={{
									color: getContrastColor(
										i === 0 ? THEME.secondary : THEME.primary
									),
									fontFamily,
								}}
							>
								{restrictString(player.name, 50)}
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
								{restrictString(player.playedFor, 25)}
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
							{TYPE === 'BATTING' ? (
								<BattingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(
										darkenColor(i === 0 ? THEME.secondary : THEME.primary)
									)}
								/>
							) : (
								<BowlingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(
										darkenColor(i === 0 ? THEME.secondary : THEME.primary)
									)}
								/>
							)}
							
						</PlayerScoreContianer>
					</PlayerROW>
				);
			})}
		</PlayerContainer>
	);
};

const BattingScores = ({COLOR, player, fontFamily}) => {

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
					fontSize: '.6em',
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
			{player.key}
			{'/'}
			{player.param2}
			<span
				style={{
					fontSize: '.6em',
					fontWeight: 400,
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
	height: 940px;
	left: 3%;
	top: 400px;
	z-index: 1000;
`;

const PlayerROW = styled.div`
	position: relative;
	height: 175px;
	margin-bottom: 15px;
`;

const PlayerScoreContianer = styled.div`
	box-sizing: border-box;
	position: absolute;
	right: 0px;
	top: 0%;
	bottom: 86.11%;
	width: 341px;
	height: 175px;
	border: 1px solid;
`;

const PlayerScore = styled.h1`
	width: 100%;
	height: 175px;
	font-style: normal;
	font-weight: 700;
	font-size: 5em;
	line-height: 1em;
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
	height: 175px;
	width: 100px;
	border: 1px solid;
	display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayerMetaContainer = styled.div`
	height: 175px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0 0 0 110px;

	font-style: normal;
	font-weight: 400;
	font-size: 3em;
	line-height: 1.2em;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0 0 0 110px;
	font-style: normal;
	font-weight: 400;
	font-size: 1.4em;
	line-height: 1.2em;
	letter-spacing: -0.005em;
	text-transform: uppercase;
`;
