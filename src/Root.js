/* eslint-disable camelcase */
import {getInputProps} from 'remotion';
import {Composition} from 'remotion';
// Stack Compositions
import {hasSponsors} from './PlayHQ/utils/helpers';
import {Basic} from './PlayHQ/templates/Basic';
import {CNSW} from './PlayHQ/templates/CNSW';
import {QLDC} from './PlayHQ/templates/QLDC';
import {CoastalCricketLeague} from './PlayHQ/templates/CoastalCricketLeague';
import {CaloundraCC} from './PlayHQ/templates/CaloundraCC';
import {CNSWREAL} from './PlayHQ/templates/CNSWreal';
import {Sixers} from './PlayHQ/templates/Sixers';
import {Thunder} from './PlayHQ/templates/Thunder';
export const RemotionRoot = () => {
	const {DATA} = getInputProps();

	const OBJ = {
		Basic,
		CNSW,
		QLDC,
		CoastalCricketLeague,
		CaloundraCC,
		CNSWREAL,
		Sixers,
		ThunderJuniorsCC: Thunder,
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
