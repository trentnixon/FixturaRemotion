/* eslint-disable camelcase */
import {getInputProps} from 'remotion';
import {Composition} from 'remotion';

// Stack Compositions
import {Template_Sutherland} from './PlayHQ/templates/Sutherland';
import {hasSponsors} from './PlayHQ/utils/helpers';
import {Template_Basic} from './PlayHQ/templates/Basic';
import {Template_CNSW} from './PlayHQ/templates/CNSW';

export const RemotionRoot = () => {
	const {DATA} = getInputProps();
	const OBJ = {
		Basic: Template_Basic,
		Gradient: Template_Sutherland,
		CNSW:Template_CNSW
	};
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
