//import styled from 'styled-components';
import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
//import {PlayerPerformances} from './Performances';

/* Import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor, darkenColor} from '../../../../utils/colors';
import {restrictString} from '../../../../utils/copy'; */

export const Match = ({matchData, THEME, fontFamily, FPS_SCORECARD}) => {
	
	const {teamHome, teamAway, type, ground, round, time, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<TeamsAndScores
				homeTeam={teamHome} 
				awayTeam={teamAway}
				time={time}
				THEME={THEME}
				ground={ground}
				gradeName={gradeName}
				fontFamily={fontFamily}
				teamAwayLogo={teamAwayLogo}
				teamHomeLogo={teamHomeLogo}
				FPS_SCORECARD={FPS_SCORECARD}
			/>
			<HeaderContainer
				type={type}
				ground={ground}
				gradeName={gradeName}
				round={round}
				THEME={THEME}
				time={time}
				fontFamily={fontFamily}
				FPS_SCORECARD={FPS_SCORECARD}
			/>
		</MatchContainer>
	);
};

/*
<PlayerPerformances
				THEME={THEME}
				homeTeam={homeTeam}
        awayTeam={awayTeam}
        fontFamily={fontFamily}
        FPS_SCORECARD={FPS_SCORECARD}
			/> 
*/
