import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import {ResultStatement} from './ResultStatment';
import {DisplayQuarters} from './DisplayQuaters';

export const Match = (props) => {
	console.log('props ', props.TemplateVariation);
	const ComponentFPS = {
		Display: {
			Start: 15,
			End: props.FPS_SCORECARD / 2,
		},
		Players: {
			Start: props.FPS_SCORECARD / 2,
			End: props.FPS_SCORECARD,
		},
	};

	return (
		<MatchContainer>
			<TeamsAndScores {...props} /> 
			<ResultStatement {...props} />
			<HeaderContainer {...props} ComponentFPS={ComponentFPS} />
			<DisplayQuarters {...props} ComponentFPS={ComponentFPS.Display} />
			<PlayerPerformances {...props} ComponentFPS={ComponentFPS.Players} />
		</MatchContainer> 
	);
};
