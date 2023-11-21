/* eslint-disable camelcase */
//import {getInputProps} from 'remotion';
import {Composition} from 'remotion';
import DATA_FIXTURES from './PlayHQ/utils/upcoming_v2.json';
import DATA_TOP5_RUNS from './PlayHQ/utils/Top5RunsV2.json';
import DATA_TOP5_WICKETS from './PlayHQ/utils/Top5WicketsV2.json';
import DATA_LADDER_V2 from './PlayHQ/utils/LadderV2.json';


import {Example_Video_Upcoming} from './PlayHQ/templates/Basic/MarketingExamples/Example_Video_Upcoming';
import {Example_Video_Top5Runs} from './PlayHQ/templates/Basic/MarketingExamples/Example_Video_Top5Runs';
import {Example_Video_Top5Bowlers} from './PlayHQ/templates/Basic/MarketingExamples/Example_Video_Top5Bowlers';
import {Example_Video_Ladder} from './PlayHQ/templates/Basic/MarketingExamples/Example_Video_Ladder';
export const RemotionRoot = () => {
	const DATA = DATA_FIXTURES;

	return (
		<>
			<Composition
				id={'UpComingFixtures'}
				component={Example_Video_Upcoming}
				durationInFrames={[
					DATA.TIMINGS.FPS_INTRO,
					DATA.TIMINGS.FPS_MAIN,
					DATA.TIMINGS.FPS_OUTRO
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: DATA,
				}}
			/>

			<Composition
				id={'Top5BattingList'}
				component={Example_Video_Top5Runs}
				durationInFrames={[
					DATA_TOP5_RUNS.TIMINGS.FPS_INTRO,
					DATA_TOP5_RUNS.TIMINGS.FPS_MAIN,
					DATA.TIMINGS.FPS_OUTRO
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: DATA_TOP5_RUNS,
				}}
			/>

			<Composition
				id={'Top5BowlingList'}
				component={Example_Video_Top5Bowlers}
				durationInFrames={[
					DATA_TOP5_WICKETS.TIMINGS.FPS_INTRO,
					DATA_TOP5_WICKETS.TIMINGS.FPS_MAIN,
					DATA.TIMINGS.FPS_OUTRO
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: DATA_TOP5_WICKETS,
				}}
			/>

			<Composition
				id={'Ladder'}
				component={Example_Video_Ladder}
				durationInFrames={[
					DATA_LADDER_V2.TIMINGS.FPS_INTRO,
					DATA_LADDER_V2.TIMINGS.FPS_MAIN,
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: DATA_LADDER_V2,
				}}
			/>
		</>
	);
};
