/* eslint-disable camelcase */
import {Composition} from 'remotion';
import DATA_TOP5 from './PlayHQ/utils/DATA_TOP5.json';

import DATA_RESULTS from './PlayHQ/utils/PLAYHQ_Results.json';

import DATA_LADDERS from './PlayHQ/utils/DATA_LADDERS.json';
// V2
import DATA_FIXTURES from './PlayHQ/utils/upcoming_v2.json';
import DATA_TOP5_RUNS from './PlayHQ/utils/Top5RunsV2.json';
import DATA_TOP5_WICKETS from './PlayHQ/utils/Top5WicketsV2.json';
import DATA_LADDER_V2 from './PlayHQ/utils/LadderV2.json';
import DATA_WEEKENDRESULTSV2 from './PlayHQ/utils/WeekendResultsV2.json';

import {Template_Basic_Sqaure} from './PlayHQ/templates/BasicSqaure/index';
import {Template_Basic_Rounded} from './PlayHQ/templates/BasicRounded/index';

// Fixtura Promotional
import {Promotion} from './Fixtura/Promo/index'
import {WebsiteHeader} from './Fixtura/WebsiteHeader/index'
export const RemotionRoot = () => {
	const useData = 'DATA_LADDER_V2';
	const DATASET = {
		DATA_TOP5, 
		DATA_RESULTS,  
		DATA_FIXTURES,
		DATA_LADDERS,
		DATA_TOP5_RUNS,
		DATA_TOP5_WICKETS,
		DATA_LADDER_V2,
		DATA_WEEKENDRESULTSV2
	};

	const DATA = DATASET[useData];

	console.log(DATA)
	const OBJ = {
		'Basic Sqaure': Template_Basic_Sqaure,
		'Basic Rounded': Template_Basic_Rounded,
	};
 
	 

	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id={DATA.VIDEOMETA.Video.CompositionID}
				component={OBJ[DATA.VIDEOMETA.Video.Template]}
				durationInFrames={[
					DATA.TIMINGS.FPS_INTRO,
					(DATA.TIMINGS.FPS_OUTRO-DATA.TIMINGS.FPS_OUTRO),
					DATA.TIMINGS.FPS_MAIN,
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1440}
				height={1920}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					DATA,
				}}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="Promotion"
				component={Promotion}
				durationInFrames={180}
				fps={30}
				width={1440}
				height={1920}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					DATA,
				}}
			/>
				<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="WebsiteHeader"
				component={WebsiteHeader}
				durationInFrames={360}
				fps={30}
				width={1280}
				height={720}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					DATA,
				}}
			/>



		</>
	);
};
