/* eslint-disable camelcase */
//import {getInputProps} from 'remotion';
import {Composition} from 'remotion';
import DATA_FIXTURES from './PlayHQ/utils/upcoming_v2.json';
import {Example_Video_Upcoming} from './PlayHQ/templates/Basic/MarketingExamples/Example_Video_Upcoming';
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
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA: DATA,
				}}
			/>
		</>
	);
};
