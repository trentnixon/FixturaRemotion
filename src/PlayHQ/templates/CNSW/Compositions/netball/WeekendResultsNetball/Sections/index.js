import {MatchContainer} from './MatchContainer';
import {PlayerPerformances} from './PlayerPerformances';
import {TeamsAndScores} from './TeamsAndScores';
import {ResultStatement} from './ResultStatement';
import {DisplayQuarters} from './DisplayQuarters';
import {FixtureDetails} from './FixtureDetails';

export const Match = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const ComponentFPS = {
		Display: {
			Start: 0,
			End: props.FPS_SCORECARD / 2,
		},
		Players: {
			Start: props.FPS_SCORECARD / 2,
			End: props.FPS_SCORECARD,
		},
	};
	console.log(matchData);

	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			 <TeamsAndScores {...props} ComponentFPS={ComponentFPS} />
			<ResultStatement {...props} />
			<FixtureDetails {...props} ComponentFPS={ComponentFPS} />
			 <DisplayQuarters {...props} ComponentFPS={ComponentFPS.Display} />
			<PlayerPerformances {...props} ComponentFPS={ComponentFPS.Players} />
			
		</MatchContainer>
	);
};
