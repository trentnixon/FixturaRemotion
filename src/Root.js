/* eslint-disable camelcase */
import {getInputProps} from 'remotion';
import {Composition} from 'remotion';

// Stack Compositions
import {Template_Basic_Sqaure} from './PlayHQ/templates/BasicSqaure/index';
import {Template_Basic_Rounded} from './PlayHQ/templates/BasicRounded/index';
// Import {WebsiteHeader} from './Fixtura/WebsiteHeader/index'
export const RemotionRoot = () => {
	const {DATA} = getInputProps();
	const OBJ = {
		'Basic Sqaure': Template_Basic_Sqaure,
		'Basic Rounded': Template_Basic_Rounded,
	};

 

	return (
		<>
			<Composition
				id={DATA.VIDEOMETA.Video.CompositionID}
				component={OBJ[DATA.VIDEOMETA.Video.Template]}
				durationInFrames={[
					DATA.TIMINGS.FPS_INTRO,
					DATA.TIMINGS.FPS_OUTRO,
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
			{/* <Composition
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
			/> */}
		</>
	);
};
