import {HeaderContainer} from './HeaderContainer';
import {ResultStatement} from '../../../../../../structural/sport/afl/ResultStatments/ResultStatment';
import {DisplayBothQuartersAsRows} from '../../../../../../structural/sport/afl/DisplayQuaters/DisplayBothQuartersAsRows';
import {LogoScoreTeamName} from '../../../../../../structural/sport/afl/TeamsAndScores/LogoScoreTeamName';
import {GoalScorersTwoListsHomeAwayStatic} from '../../../../../../structural/sport/afl/GoalScorers/GoalScorersTwoListsHomeAwayStatic';
import {BestPlayersAsString} from '../../../../../../structural/sport/afl/BestPlayers/BestPlayersAsString';
import { AFLMatchContainer } from '../../../../../../structural/sport/afl/Containers/AFLMatchContainer';

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
		<AFLMatchContainer MarginBottom='60px'>
			<LogoScoreTeamName {...props} ComponentFPS={ComponentFPS} />
			<ResultStatement {...props} />
			<DisplayBothQuartersAsRows
				{...props}
				ComponentFPS={ComponentFPS.Display}
			/>
			<HeaderContainer {...props} />

			<GoalScorersTwoListsHomeAwayStatic {...props} />
			<BestPlayersAsString {...props} />
		</AFLMatchContainer>
	);
};
