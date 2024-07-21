import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {
	ContainerStructureContentBlockCCLWithAnimation,
	TeamsAndScoresContainerCCL,
} from '../../../../assets/common/Containers/CCL/StructureSidebarBlock';
import {TeamLogoCCL} from '../../../../../templates/CoastalCricketLeague/Components/Common/TeamLogo';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {DisplayPlayerName} from '../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables';
import {
	removeEmojis,
	restrictName,
	restrictString,
} from '../../../../../utils/copy';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {CCLBattingScores} from '../Batting/CCLBattingScores';
import {CCLBowlingScores} from '../Bowling/CCLBowlingScores';

const PlayerScoreContainer = styled.div`
	box-sizing: border-box;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 15px 0 0;
`;

const PlayerMetaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

export const CLLTop5PlayerRow = (props) => {
	const {TYPE, player, i} = props;

	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_MAIN} = TIMINGS;
	const {Font, Color} = StyleConfig;

	return (
		<ContainerStructureContentBlockCCLWithAnimation
			key={i}
			style={{
				margin: '10px 5%',
				filter: ` drop-shadow(0px 0px 5px #7C7C7C)`,
			}}
		>
			<TeamsAndScoresContainerCCL>
				<TeamLogoCCL />
				<PlayerMetaContainer
					style={{
						borderRadius: TemplateVariation.borderRadius,
						width: `${SpringToFrom(Number(i), 0, 100, 'Wobbly')}%`,
						transform: `translateX(${SpringToFrom(
							FPS_MAIN - 15 + i,
							0,
							-1440,
							'Wobbly'
						)}px)`,
					}}
				>
					<DisplayPlayerName
						NAME={restrictName(player.name, 30)}
						customStyles={{
							margin: '0 0 0 10px',
							borderRadius: TemplateVariation.borderRadius,
							color: Color.Primary.Contrast,
							...Font.Copy,
							clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
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
							margin: '0 0 0 10px',
							borderRadius: TemplateVariation.borderRadius,
							color: Color.Primary.Contrast,
							...Font.Copy,
							clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
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
						width: `${SpringToFrom(7 + Number(i), 0, 167, 'Wobbly')}px`,
						borderRadius: '100%',
						transform: `translateX(${SpringToFrom(
							FPS_MAIN - 15 + i,
							0,
							1440,
							'Wobbly'
						)}px)`,
						borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
					}}
				>
					{TYPE === 'BATTING' ? (
						<CCLBattingScores
							player={player}
							int={i}
							COLOR={Color.Primary.Contrast}
							StyleConfig={StyleConfig}
						/>
					) : (
						<CCLBowlingScores
							player={player}
							int={i}
							COLOR={Color.Primary.Contrast}
							StyleConfig={StyleConfig}
						/>
					)}
				</PlayerScoreContainer>
			</TeamsAndScoresContainerCCL>
		</ContainerStructureContentBlockCCLWithAnimation>
	);
};
