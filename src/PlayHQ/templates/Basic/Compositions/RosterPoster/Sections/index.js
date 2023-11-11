import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PrincipalSponsorAlwaysShow} from '../../../Components/Intro/PrincipalSponsor';
import { DisplayFixtureData } from './DisplayFixtureData';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			
			<DisplayFixtureData {...props} />
			<HeaderContainer {...props} />
			<TeamsAndScores {...props} />
			{/* <PrincipalSponsorAlwaysShow FPS={30} {...props} />  */}
			
		</MatchContainer>
	);
};
