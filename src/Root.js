/* eslint-disable camelcase */
import {getInputProps} from 'remotion';
import {Composition} from 'remotion';
import * as Heebo from '@remotion/google-fonts/Heebo';
import * as RobotoBlack from '@remotion/google-fonts/Roboto';

// Stack Compositions
import {hasSponsors} from './PlayHQ/utils/helpers';
import {Template_Basic} from './PlayHQ/templates/Basic';
import {Template_CNSW} from './PlayHQ/templates/CNSW';

export const RemotionRoot = () => {
	const {DATA} = getInputProps();

	const OBJ = {
		Basic: Template_Basic,
		CNSW: Template_CNSW,
	};
	Heebo.loadFont();
	RobotoBlack.loadFont();

	// this was the old way of loading in fonts if teh lambda func broke
	// if it is fixed them remove this code
	
	//const [handle] = useState(() => delayRender());
	//console.log(`Load in Tempalte ${DATA.VIDEOMETA.Video.Template}`);

	/* useEffect(() => {
		console.log('FONT CHECK! Initiating font loading');
		loadLocalFonts(DATA.VIDEOMETA.Video.Template)
			.then(() => {
				console.log('FONT CHECK! All fonts loaded');
				setTimeout(() => {
					console.log('Wait 3 seconds to load in the fonts');
					continueRender(handle);
				}, 5000);
			})
			.catch((err) => {
				console.error('FONT CHECK! Error loading fonts:', err);
				continueRender(handle); // Continue rendering even in case of error
			});
	}, [handle, DATA.VIDEOMETA.Video.Template]); */

	return (
		<>
			<Composition
				id={DATA.VIDEOMETA.Video.CompositionID}
				component={OBJ[DATA.VIDEOMETA.Video.Template]}
				durationInFrames={[
					DATA.TIMINGS.FPS_INTRO,
					hasSponsors(DATA),
					DATA.TIMINGS.FPS_MAIN,
				].reduce((a, b) => a + b, 0)}
				fps={30}
				width={1080}
				height={1350}
				defaultProps={{
					DATA,
				}}
			/>
		</>
	);
};
