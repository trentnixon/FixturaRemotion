import styled from 'styled-components';
import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import { PrincipalSponsorAlwaysShow } from '../../../Components/Intro/PrincipalSponsor';

/* Import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor, darkenColor} from '../../../../utils/colors';
import {restrictString} from '../../../../utils/copy'; */

export const Match = ({matchData, THEME, fontFamily, FPS_SCORECARD, DATA}) => {
	const {homeTeam, awayTeam, type, ground, round, gradeName,teamHomeLogo, teamAwayLogo} = matchData;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<TeamsAndScores
				homeTeam={homeTeam}
				awayTeam={awayTeam}
				THEME={THEME}
				fontFamily={fontFamily} 
				FPS_SCORECARD={FPS_SCORECARD}
				gradeName={gradeName}
				teamHomeLogo={teamHomeLogo}
				teamAwayLogo={teamAwayLogo}
			/>

			<PlayerPerformances
				THEME={THEME}
				homeTeam={homeTeam}
				awayTeam={awayTeam}
				fontFamily={fontFamily}
				FPS_SCORECARD={FPS_SCORECARD} 
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
			<PrincipalSponsorAlwaysShow
				fontFamily={fontFamily}
				DATA={DATA}
				theme={THEME}
				FPS={30}
			/>
		</MatchContainer>
	);
};
