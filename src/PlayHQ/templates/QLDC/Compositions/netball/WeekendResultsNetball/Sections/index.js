import {MatchContainer} from './MatchContainer';
import {ScoreLogoTeamName} from '../../../../../../structural/sport/netball/TeamsAndScores/ScoreLogoTeamName';
import {ResultStatement} from '../../../../../../structural/sport/netball/ResultStatment/ResultStatment';
import {MetaDataTimeSplit} from '../../../../../../structural/assets/upcoming/FixtureMetadata/MetaDataTimeSplit/MetaDataTimeSplit';
import { DisplayBasicQuarters } from '../../../../../../structural/sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import { BasicPlayerPerformances } from '../../../../../../structural/sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';

export const Match = (props) => {
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
			<ScoreLogoTeamName {...props} />
			<ResultStatement {...props} />
			<MetaDataTimeSplit {...props} ComponentFPS={ComponentFPS} />
			<DisplayBasicQuarters {...props} ComponentFPS={ComponentFPS.Display} />
			<BasicPlayerPerformances {...props} ComponentFPS={ComponentFPS.Players} />
		</MatchContainer> 
	);
};
