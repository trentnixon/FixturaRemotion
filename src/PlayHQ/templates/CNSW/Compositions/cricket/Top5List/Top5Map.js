import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {getContrastColor} from '../../../../../utils/colors';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
import {ContainerBodyHeight} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const Top5PlayersMap = (props) => {
	const {DATA, fontFamily, FPS_MAIN, TYPE, TemplateVariation, StyleConfig} =
		props;
	const {Color} = StyleConfig;
	//console.log(StyleConfig)
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90];

	return (
		<ContainerBodyHeight {...props}>
			<PlayerContainer>
				{DATA.map((player, i) => {
					const TemLogoStyles = calculateImageDimensions(
						player.teamLogo,
						IMGSIZING
					);
					return (
						<PlayerROW
							key={i}
							style={{
								...StyleConfig.Font.Copy,
								borderRadius: TemplateVariation.borderRadius,
								backgroundColor: Color.Primary.Lighten,
								width: `${SpringToFrom(i * 1, 0, 100, 'Wobbly')}%`,
								transform: `translateX(${SpringToFrom(
									FPS_MAIN - 30 + i,
									0,
									1440,
									'Wobbly'
								)}px)`,
							}}
						>
							<SmallBoxLeftSide
								style={{
									opacity: interpolateOpacityByFrame(
										frame,
										i * 10,
										i * 10 + 30,
										0,
										1
									),
								}}
							>
								<ImageWithFallback
									src={player.teamLogo}
									style={{...TemLogoStyles, borderRadius: '0%'}}
								/>
							</SmallBoxLeftSide>
							<PlayerMetaContainer>
								<PlayerName
									style={{
										borderRadius: TemplateVariation.borderRadius,
										color: getContrastColor(Color.Primary.Darken),
										fontFamily,
										clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
									}}
								>
									{restrictName(player.name, 20)}
								</PlayerName>
								<PlayerGradeTeam
									style={{
										fontSize: '34px',
										fontWeight: 200,
										color: getContrastColor(Color.Primary.Darken),
										fontFamily,
										clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
									}}
								>
									{restrictString(removeEmojis(player.playedFor), 32)}
								</PlayerGradeTeam>
							</PlayerMetaContainer>

							<PlayerScoreContianer
								style={{
									width: `${SpringToFrom(30 + i * 1, 0, 250, 'Wobbly')}px`,
									borderRadius: TemplateVariation.borderRadius,
									background: Color.Primary.Darken,
									borderColor:
										i === 0 ? Color.Secondary.Main : Color.Primary.Main,
								}}
							>
								{TYPE === 'BATTING' ? (
									<BattingScores
										player={player}
										fontFamily={fontFamily}
										COLOR={getContrastColor(Color.Primary.Darken)}
										style={{clipPath: FromLeftToRight(45 + i * 7, 'Slow')}}
									/>
								) : (
									<BowlingScores
										player={player}
										fontFamily={fontFamily}
										COLOR={getContrastColor(Color.Primary.Darken)}
										style={{clipPath: FromLeftToRight(45 + i * 7, 'Slow')}}
									/>
								)}
							</PlayerScoreContianer>
						</PlayerROW>
					);
				})}
			</PlayerContainer>
		</ContainerBodyHeight>
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
			{player.runs}
			{player.notOut ? '*' : ' '}

			<span
				style={{
					fontSize: '.4em',
				}}
			>
				{player.balls === 0 ? '' : `(${player.balls})`}
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
			{player.wickets}
			{'/'}
			{player.runs}
			<span
				style={{
					fontSize: '.6em',
					fontWeight: 400,
				}}
			>
				{' '}
				{player.overs === 0 ? '' : `(${player.overs})`}
			</span>
		</PlayerScore>
	);
};

// PlayedFor
const PlayerContainer = styled.div`
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 100%;
`;

const PlayerROW = styled.div`
	position: relative;
	margin-bottom: 25px;
	padding: 10px 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 108px;
`;

const PlayerScoreContianer = styled.div`
	box-sizing: border-box;
	position: absolute;
	right: 10px;
	top: 14px;
	bottom: 86.11%;
	width: 250px;
	height: 80px;
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
	left: 0%;
	top: 0%;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0 0 0 110px;

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
	margin: 0 0 0 110px;
	font-style: normal;
	font-weight: 400;
	font-size: 1.4em;
	line-height: 1.2em;
	letter-spacing: -0.05em;
	text-transform: uppercase;
`;
