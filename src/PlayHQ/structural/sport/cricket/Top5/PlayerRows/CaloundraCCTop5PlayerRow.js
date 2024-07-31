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
import {OuterShell} from '../../../../assets/common/Containers/CaloundraCC/OuterShell';
import {InnerShell} from '../../../../assets/common/Containers/CaloundraCC/InnerShell';
import CaloundraCCBattingScores from '../Batting/CaloundraCCBattingScores';
import CaloundraCCBowlingScores from '../Bowling/CaloundraCCBowlingScores';
import {
	EraseFromMiddle,
	FromBottomToTop,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';

const PlayerROW = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 15px;
	min-height: 140px;
`;

const SmallBoxLeftSide = styled.div`
	box-sizing: border-box;
	width: 150px;
	display: flex;
	margin-right: 10px;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: -webkit-fill-available;
`;

const PlayerName = styled.h1`
	margin: 0;
	font-style: normal;
	font-weight: 400;
	font-size: 4em;
	line-height: 1em;
	display: flex;
	align-items: center;
	letter-spacing: -0.01em;
	text-transform: uppercase;
`;

const PlayerGradeTeam = styled.h1`
	margin: 0;
	font-style: normal;
	font-weight: 400;
	font-size: 1.4em;
	line-height: 1.1em;
	letter-spacing: -0.05em;
	text-transform: uppercase;
`;

const PlayerScoreContianer = styled.div`
	box-sizing: border-box;
	width: 350px;
	border: 1px solid;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CaloundraCCTop5PlayerRow = ({player, i, TYPE}) => {
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const IMGSIZING = [90, 90, 90];

	const hasOpacity = (Color) => setOpacity(Color, 0.9);
	const TemLogoStyles = calculateImageDimensions(player.teamLogo, IMGSIZING);

	console.log(
		'Color.Background.Gradients ',
		Color.Background.Gradients.DualTone.Horizontal.PrimaryDark
	);

	return (
		<PlayerROW
			style={{
				width: `${SpringToFrom(Number(-i + 1), 0, 100, 'Wobbly')}%`,
				clipPath: EraseFromMiddle(FPS_MAIN - 60 + i, 'Wobbly'),
			}}
		>
			<OuterShell
				borderColor={i === 0 ? Color.Primary.Main : Color.Secondary.Main}
				style={{
					padding: `${SpringToFrom(Number(30 - i + 1), 0, 3, 'Smooth')}px`,
				}}
			>
				<InnerShell
					Gradient={
						i === 0
							? Color.Background.Gradients.DualTone.Vertical.SecondaryDark
							: Color.Background.Gradients.DualTone.Vertical.PrimaryDark
					}
					style={{
						padding: 0,
						minHeight: '150px',
					}}
				>
					<SmallBoxLeftSide>
						<ImageWithFallback
							src={player.teamLogo}
							style={{
								...TemLogoStyles,
								borderRadius: '0%',
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								transform: `translateX(${SpringToFrom(
									30 * (5 - i + 1),
									-1440,
									0,

									'Smooth'
								)}px)`,
							}}
						/>
					</SmallBoxLeftSide>
					<PlayerMetaContainer
						style={{
							clipPath: FromLeftToRight(30 * (5 - i + 1), 'Wobbly'),
						}}
					>
						<PlayerName
							style={{
								...Font.Copy,
								whiteSpace: 'nowrap',
								overflow: 'hidden',
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
								fontSize: '34px',
								fontFamily: 'Arial',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								color: getContrastColor(
									i === 0 ? Color.Secondary.Main : Color.Primary.Main
								),
							}}
						>
							{restrictString(removeEmojis(player.playedFor), 40)}
						</PlayerGradeTeam>
					</PlayerMetaContainer>
					<PlayerScoreContianer
						style={{
							clipPath: FromRightToLeft(30 * (5 - i + 1), 'Wobbly'),
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							background: hasOpacity(
								i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
							),
							borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
						}}
					>
						{TYPE === 'BATTING' ? (
							<CaloundraCCBattingScores
								Font={Font.Copy}
								player={player}
								COLOR={getContrastColor(
									i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
								)}
							/>
						) : (
							<CaloundraCCBowlingScores
								Font={Font.Copy}
								player={player}
								COLOR={getContrastColor(
									i === 0 ? Color.Secondary.Darken : Color.Primary.Darken
								)}
							/>
						)}
					</PlayerScoreContianer>
				</InnerShell>
			</OuterShell>
		</PlayerROW>
	);
};

export default CaloundraCCTop5PlayerRow;
