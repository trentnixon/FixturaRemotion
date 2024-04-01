import {MatchContainer} from './MatchContainer';
import {ScoreLogoTeamName} from '../../../../../../structural/sport/netball/TeamsAndScores/ScoreLogoTeamName';
import {ResultStatement} from '../../../../../../structural/sport/netball/ResultStatment/ResultStatment';
import {MetaDataTimeSplit} from '../../../../../../structural/assets/upcoming/FixtureMetadata/MetaDataTimeSplit/MetaDataTimeSplit';
import {DisplayBasicQuarters} from '../../../../../../structural/sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import {BasicPlayerPerformances} from '../../../../../../structural/sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
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
	const StyleConfig = {Font: props.Font, Color: props.Color};
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<ScoreLogoTeamName {...props} StyleConfig={StyleConfig} />
			<ResultStatement {...props} StyleConfig={StyleConfig} />
			<MetaDataTimeSplit
				{...props}
				ComponentFPS={ComponentFPS}
				StyleConfig={StyleConfig}
			/>
			<DisplayBasicQuarters
				{...props}
				ComponentFPS={ComponentFPS.Display}
				StyleConfig={StyleConfig}
			/>
			<BasicPlayerPerformances
				{...props}
				ComponentFPS={ComponentFPS.Players}
				StyleConfig={StyleConfig}
			/>
		</MatchContainer>
	);
};
