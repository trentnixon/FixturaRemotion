import styled from 'styled-components';
import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';

/* Import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor, darkenColor} from '../../../../utils/colors';
import {restrictString} from '../../../../utils/copy'; */

export const Match = ({matchData, THEME, fontFamily, FPS_SCORECARD}) => {
	const {homeTeam, awayTeam, type, ground, round, gradeName, teamHomeLogo, teamAwayLogo} = matchData;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<TeamsAndScores
				homeTeam={homeTeam} 
				awayTeam={awayTeam}
				THEME={THEME}
				fontFamily={fontFamily}
				FPS_SCORECARD={FPS_SCORECARD}
				teamHomeLogo={teamHomeLogo}
				teamAwayLogo={teamAwayLogo}
			/>
			<HeaderContainer
				type={type}
				ground={ground}
				gradeName={gradeName}
				round={round}
				THEME={THEME}
				fontFamily={fontFamily}
				FPS_SCORECARD={FPS_SCORECARD}
			/>
			<PlayerPerformances
				THEME={THEME}
				homeTeam={homeTeam}
				awayTeam={awayTeam}
				fontFamily={fontFamily}
				FPS_SCORECARD={FPS_SCORECARD}
			/>
		</MatchContainer>
	);
};
