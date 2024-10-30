import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';

import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';

import MutedBattingScores from '../Batting/MutedBattingScores';
import MutedBowlingScores from '../Bowling/MutedBowlingScores';

const PlayerROW = styled.div`
	position: relative;
	margin-bottom: 10px;
	padding: 10px 40px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const PlayerScoreContianer = styled.div``;

const SmallBoxLeftSide = styled.div`
	box-sizing: border-box;

	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	height: 100%;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PlayerName = styled.h1`
	margin: 0px;
	display: flex;
	align-items: center;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 00px;
	line-height: 1.2em;
	text-transform: uppercase;
`;

const MutedPlayerRow = ({player, i, TYPE}) => {
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	const {Font} = StyleConfig;
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
					-1440,
					'Wobbly'
				)}px)`,
			}}
		>
			<PlayerMetaContainer>
				<PlayerName
					style={{
						...TextStyles.copyMediumBold,
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						color: TemplateVariation.useMutedColor,
						clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
					}}
				>
					{restrictName(player.name, 20)}
				</PlayerName>
				<PlayerGradeTeam
					style={{
						...TextStyles.copySmall,
						color: TemplateVariation.useMutedColor,
						clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
						whiteSpace: 'nowrap',
						overflow: 'hidden',
					}}
				>
					{restrictString(removeEmojis(player.playedFor), 28)}
				</PlayerGradeTeam>
				<MutedDivider />
			</PlayerMetaContainer>
			<SmallBoxLeftSide
				style={{
					clipPath: FromLeftToRight(15 + i * 7, 'Slow'),
				}}
			>
				{TYPE === 'BATTING' ? (
					<MutedBattingScores
						player={player}
						COLOR={TemplateVariation.useMutedColor}
						style={{clipPath: FromLeftToRight(65 + i * 7, 'Slow')}}
					/>
				) : (
					<MutedBowlingScores
						player={player}
						COLOR={TemplateVariation.useMutedColor}
						style={{clipPath: FromLeftToRight(65 + i * 7, 'Slow')}}
					/>
				)}
			</SmallBoxLeftSide>
		</PlayerROW>
	);
};

export default MutedPlayerRow;

const Divider = styled.div`
	width: 200px;
	height: 5px;
	background-color: ${(props) => props.mutedColor};
	margin: 10px 0;
`;
export const MutedDivider = () => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	return (
		<Divider
			mutedColor={TemplateVariation.useMutedColor}
			style={{
				clipPath: FromLeftToRight(10, 'Wobbly'),
			}}
		/>
	);
};
