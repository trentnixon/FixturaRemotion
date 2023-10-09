import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';

export const Match = (props) => {
	const {THEME, fontFamily} = props;

	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<TeamsAndScores {...props} />
			<HeaderContainer {...props} />
		</MatchContainer> 
	);
};
