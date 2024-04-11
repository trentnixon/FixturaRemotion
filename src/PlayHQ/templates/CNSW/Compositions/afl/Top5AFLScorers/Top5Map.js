import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
	setOpacity,
} from '../../../../../utils/colors';
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
	console.log(props);
	const {DATA, FPS_MAIN, TemplateVariation, Font, Color} = props;

	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90];
	const hasOpacity = (Color) => setOpacity(Color, 0.9);
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
								borderRadius: TemplateVariation.borderRadius,
								backgroundColor: lightenColor(Color.Primary.Main),
								width: `${SpringToFrom(Number(i), 0, 100, 'Wobbly')}%`,
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
										color: getContrastColor(darkenColor(Color.Primary.Main)),
										fontFamily: Font.Title.fontFamily,
										clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
									}}
								>
									{restrictName(player.name, 30)}
								</PlayerName>
								<PlayerGradeTeam
									style={{
										fontSize: '34px',
										fontWeight: 200,
										color: getContrastColor(darkenColor(Color.Primary.Main)),
										fontFamily: Font.Title.fontFamily,
										clipPath: FromLeftToRight(45 + i * 7, 'Slow'),
									}}
								>
									{restrictString(removeEmojis(player.team), 30)}
								</PlayerGradeTeam>
							</PlayerMetaContainer>

							<PlayerScoreContianer
								style={{
									width: `${SpringToFrom(30 + Number(i), 0, 250, 'Wobbly')}px`,
									borderRadius: TemplateVariation.borderRadius,
									background: hasOpacity(
										i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
									),
									borderColor:
										i === 0 ? Color.Secondary.Main : Color.Primary.Main,
								}}
							>
								<GoalsScored
									Font={Font.Copy}
									player={player}
									style={{clipPath: FromLeftToRight(45 + i * 7, 'Slow')}}
									COLOR={getContrastColor(
										i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
									)}
								/>
							</PlayerScoreContianer>
						</PlayerROW>
					);
				})}
			</PlayerContainer>
		</ContainerBodyHeight>
	);
};

const GoalsScored = ({COLOR, player, Font, style}) => {
	console.log('player ', player);
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...style,
				...Font,
				fontWeight: 600,
			}}
		>
			{player.goals}
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
