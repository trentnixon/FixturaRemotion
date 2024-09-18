import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useCurrentFrame} from 'remotion';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {getContrastColor} from '../../../../../utils/colors';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';
import CNSWBattingScores from '../Batting/CNSWBattingScores';
import CNSWBowlingScores from '../Bowling/CNSWBowlingScores';
import ThunderBattingScores from '../Batting/ThunderBattingScores';
import ThunderBowlingScores from '../Bowling/ThunderBowlingScores';

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
	display: flex;
	align-items: center;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0 0 0 110px;
	line-height: 1.2em;
	text-transform: uppercase;
`;

const ThunderLeaguePlayerRow = ({player, i, TYPE}) => {
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90];

	const TemLogoStyles = calculateImageDimensions(player.teamLogo, IMGSIZING);

	return (
		<PlayerROW
			style={{
				...Font.Copy,
				borderRadius: TemplateVariation.borderRadius,
				width: `${SpringToFrom(Number(i) * 1, 0, 100, 'Wobbly')}%`,
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
					clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
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
						...TextStyles.copyLargeBold,
						borderRadius: TemplateVariation.borderRadius,
						color: 'black',
						clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
					}}
				>
					{restrictName(player.name, 20)}
				</PlayerName>
				<PlayerGradeTeam
					style={{
						...TextStyles.copyMedium,
						fontWeight: 200,
						color: 'black',
						clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
					}}
				>
					{restrictString(removeEmojis(player.playedFor), 32)}
				</PlayerGradeTeam>
			</PlayerMetaContainer>
			<PlayerScoreContianer
				style={{
					width: `${SpringToFrom(45 + Number(i) * 1, 0, 250, 'Wobbly')}px`,
					borderRadius: TemplateVariation.borderRadius,
					background: Color.Secondary.Main,
					borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
				}}
			>
				{TYPE === 'BATTING' ? (
					<ThunderBattingScores
						player={player}
						COLOR={getContrastColor(Color.Secondary.Darken)}
						style={{clipPath: FromLeftToRight(65 + i * 7, 'Slow')}}
					/>
				) : (
					<ThunderBowlingScores
						player={player}
						COLOR={getContrastColor(Color.Secondary.Darken)}
						style={{clipPath: FromLeftToRight(65 + i * 7, 'Slow')}}
					/>
				)}
			</PlayerScoreContianer>
		</PlayerROW>
	);
};

export default ThunderLeaguePlayerRow;
