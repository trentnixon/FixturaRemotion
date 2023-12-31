import React, {useState} from 'react';
import styled from 'styled-components';
import {Img, useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {
	getContrastColor,
	darkenColor,
	setOpacity,
	lightenColor,
} from '../../../../utils/colors';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../utils/copy';
import useImageDimensions from '../../../../hooks/useImageDimensions';
import {ImageWithFallback} from '../../Components/Common/ImageWithFallback';
import {FromLeftToRight, FromRightToLeft} from '../../../../Animation/ClipWipe';

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

const PlayerScoreContianer = styled.div`
	box-sizing: border-box;
	position: absolute;
	left: 10px;
	width: 200px;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PlayerScore = styled.h1`
	width: 100%;
	font-style: normal;
	font-weight: 700;
	font-size: 3em;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	margin: 15px 0;
	padding: 0;
`;

const SmallBoxLeftSide = styled.div`
	box-sizing: border-box;
	position: absolute;
	right: 0%;
	top: 0%;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: -webkit-fill-available;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0 0 0 220px;

	font-style: normal;
	font-weight: 600;
	font-size: 2.5em;
	line-height: 1.2em;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0 0 0 220px;
	font-style: normal;
	font-weight: 400;
	font-size: 1.4em;
	line-height: 1.2em;
	letter-spacing: -0.05em;
	text-transform: uppercase;
`;

export const Top5PlayersMap = (props) => {
	const {
		DATA,
		THEME,
		fontFamily,
		FPS_MAIN,
		TYPE,
		TemplateVariation,
		SectionHeights,
	} = props;

	//const IMGSIZING = [90, 90, 90];

	return (
		<PlayerContainer Height={SectionHeights.Body}>
			{DATA.map((player, i) => {
				//const TemLogoStyles = useImageDimensions(player.teamLogo, IMGSIZING);
				return (
					<PlayerROW
						key={i}
						style={{
							borderRadius: TemplateVariation.borderRadius,
							backgroundColor: lightenColor(THEME.primary),
							width: `${SpringToFrom(i * 1, 0, 100, 'Wobbly')}%`,
							transform: `translateX(${SpringToFrom(
								FPS_MAIN - 30 + i,
								0,
								1440,
								'Wobbly'
							)}px)`,
						}}
					>
						<PlayerMetaContainer>
							<PlayerName
								style={{
									borderRadius: TemplateVariation.borderRadius,
									color: getContrastColor(darkenColor(THEME.primary)),
									fontFamily,
									clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
								}}
							>
								{restrictName(player.name, 30)}
							</PlayerName>
							<PlayerGradeTeam
								style={{
									fontSize: '34px',
									width: '555px',
									fontWeight: 200,
									color: getContrastColor(darkenColor(THEME.primary)),
									fontFamily,
									clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
								}}
							>
								{restrictString(removeEmojis(player.playedFor), 40)}
							</PlayerGradeTeam>
						</PlayerMetaContainer>

						<PlayerScoreContianer
							style={{
								width: `${SpringToFrom(30 + i * 1, 0, 200, 'Wobbly')}px`,
								borderRadius: TemplateVariation.borderRadius,
								background: darkenColor(THEME.primary),
								borderColor: i === 0 ? THEME.secondary : THEME.primary,
							}}
						>
							{TYPE === 'BATTING' ? (
								<BattingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(darkenColor(THEME.primary))}
									style={{clipPath: FromLeftToRight(45 + i * 7, 'Slow')}}
								/>
							) : (
								<BowlingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(darkenColor(THEME.primary))}
									style={{clipPath: FromLeftToRight(45 + i * 7, 'Slow')}}
								/>
							)}
						</PlayerScoreContianer>
					</PlayerROW>
				);
			})}
		</PlayerContainer>
	);
};

const BattingScores = ({COLOR, player, fontFamily, style}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily,
				...style,
			}}
		>
			{player.key}
			{player.notOut ? '*' : ' '}

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

const BowlingScores = ({COLOR, player, fontFamily, style}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily,
				...style,
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
