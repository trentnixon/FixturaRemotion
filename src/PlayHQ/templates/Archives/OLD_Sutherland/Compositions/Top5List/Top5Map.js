import React from 'react';
import styled from 'styled-components';
import {Img} from 'remotion';
import {getContrastColor} from '../../../../../utils/colors';
import {BattingScores, BowlingScores} from './Scores';
import {PlayerPerformance, TeamLogoBox} from './Containers';
import {PlayerDetails} from './PlayerDetials';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';

// PlayedFor
const PlayerContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: flex-end;
	width: 100%;
	margin: 0%;
`;

const PlayerScoreContianer = styled.div``;

export const Top5PlayersMap = ({DATA, THEME, fontFamily, FPS_MAIN, TYPE}) => {
	const IMGSIZING = [80, 80, 80];

	return (
		<PlayerContainer>
			{DATA.map((player, i) => {
				//console.log(player);
				const TemLogoStyles = calculateImageDimensions(
					player.teamLogo,
					IMGSIZING
				);
				return (
					<PlayerPerformance key={i} i={i} THEME={THEME} FPS_MAIN={FPS_MAIN}>
						<PlayerScoreContianer>
							{TYPE === 'BATTING' ? (
								<BattingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(THEME.secondary)}
								/>
							) : (
								<BowlingScores
									player={player}
									fontFamily={fontFamily}
									COLOR={getContrastColor(THEME.secondary)}
								/>
							)}
						</PlayerScoreContianer>
						<TeamLogoBox THEME={THEME} i={i}>
							<Img
								src={player.teamLogo}
								style={{...TemLogoStyles, borderRadius: '100%'}}
							/>
						</TeamLogoBox>
						<PlayerDetails THEME={THEME} i={i} player={player} />
					</PlayerPerformance>
				);
			})}
		</PlayerContainer>
	);
};
