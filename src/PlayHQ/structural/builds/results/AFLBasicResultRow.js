import {AFLMatchContainer} from '../../sport/afl/Containers/AFLMatchContainer';
import {DisplayBothQuartersAsRows} from '../../sport/afl/DisplayQuaters/DisplayBothQuartersAsRows';
import {GoalScorersTwoListsHomeAway} from '../../sport/afl/GoalScorers/GoalScorersTwoListsHomeAway';
import {ResultStatement} from '../../sport/afl/ResultStatments/ResultStatment';
import {LogoScoreTeamName} from '../../sport/afl/TeamsAndScores/LogoScoreTeamName';
import {MetaDataTimeSplit} from '../../assets/common/FixtureMetadata/MetaDataTimeSplit/MetaDataTimeSplit';
import {TwoMetaPoints} from '../../assets/common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';

export const AFLBasicResultRow = (props) => {
	return (
		<AFLMatchContainer MarginBottom={60}>
			<LogoScoreTeamName {...props} ComponentFPS={props.ComponentFPS} />
			<ResultStatement {...props} />
			<DisplayBothQuartersAsRows
				{...props}
				ComponentFPS={props.ComponentFPS.Display}
			/>

			<GoalScorersTwoListsHomeAway
				{...props}
				ComponentFPS={props.ComponentFPS.Players}
			/>

			{/* <MetaDataTimeSplit {...props} ComponentFPS={props.ComponentFPS} /> */}
			<TwoMetaPoints
				{...props}
				ComponentFPS={props.ComponentFPS}
				MetaPoints={['gradeName', 'round']}
			/>
		</AFLMatchContainer>
	);
};
