import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import BasicBattingScores from '../Batting/BasicBattingScores';
import BasicBowlingScores from '../Bowling/BasicBowlingScores';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {getContrastColor, setOpacity} from '../../../../../utils/colors';
import {calculateImageDimensions} from '../../../../Sponsors/Utils/utils';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';

const PlayerScoreContainer = styled.div`
	box-sizing: border-box;
	position: absolute;
	right: 0px;
	top: 0%;
	bottom: 86.11%;
	width: 250px;
	height: 140px;
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SmallBoxLeftSide = styled.div`
	box-sizing: border-box;
	position: absolute;
	left: 0%;
	top: 0%;
	height: 140px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PlayerMetaContainer = styled.div`
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0 0 0 120px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0 0 0 120px;
	text-transform: uppercase;
`;

const PlayerROW = styled.div`
	position: relative;
	height: 140px;
	margin-bottom: 15px;
`;

const BasicTop5PlayerRow = ({player, i, TYPE}) => {
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90];

	const hasOpacity = (Color) => setOpacity(Color, 0.9);
	const TemLogoStyles = calculateImageDimensions(player.teamLogo, IMGSIZING);

	console.log('Font ', Font);

	return (
		<PlayerROW
			style={{
				borderRadius: TemplateVariation.borderRadius,
				backgroundColor:
					i === 0
						? hasOpacity(Color.Secondary.Main)
						: hasOpacity(Color.Primary.Main),
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
					borderRadius: TemplateVariation.borderRadius,
					background:
						i === 0
							? hasOpacity(Color.Secondary.Main)
							: hasOpacity(Color.Primary.Darken),
					borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
				}}
			>
				<ImageWithFallback
					src={player.teamLogo}
					style={{
						...TemLogoStyles,
						borderRadius: '0%',
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</SmallBoxLeftSide>
			<PlayerMetaContainer>
				<PlayerName
					style={{
						...Font.Copy,
						...TextStyles.copyLargeBold,
						borderRadius: TemplateVariation.borderRadius,
						color: getContrastColor(
							i === 0 ? Color.Secondary.Main : Color.Primary.Main
						),
					}}
				>
					{restrictName(player.name, 30)}
				</PlayerName>
				<PlayerGradeTeam
					style={{
						...Font.Copy,
						...TextStyles.copyMedium,

						color: getContrastColor(
							i === 0 ? Color.Secondary.Main : Color.Primary.Main
						),
					}}
				>
					{restrictString(removeEmojis(player.playedFor), 40)}
				</PlayerGradeTeam>
			</PlayerMetaContainer>
			<PlayerScoreContainer
				style={{
					borderRadius: TemplateVariation.borderRadius,
					background: hasOpacity(
						i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
					),
					borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
				}}
			>
				{TYPE === 'BATTING' ? (
					<BasicBattingScores
						Font={{...Font.Copy, ...TextStyles.copyXLargeBold}}
						player={player}
						COLOR={getContrastColor(
							i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
						)}
					/>
				) : (
					<BasicBowlingScores
						Font={{...Font.Copy, ...TextStyles.copyXLargeBold}}
						player={player}
						COLOR={getContrastColor(
							i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
						)}
					/>
				)}
			</PlayerScoreContainer>
		</PlayerROW>
	);
};

export default BasicTop5PlayerRow;
