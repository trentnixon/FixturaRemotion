/* eslint-disable camelcase */
import {Composition} from 'remotion';

// Templates
import TEMPLATES from './PlayHQ/templates';
// Bring int he TEST data options
import DATASET from './PlayHQ/DATA';
// Theming
import {hasSponsors} from './PlayHQ/utils/helpers';
   
export const RemotionRoot = () => { 
	const TEMPLATE = 3;  
	return ( 
		<>
			{Object.keys(DATASET).map((key, index) => {
				const DATA = DATASET[key];
				// Merging the theme and sponsors data with the existing DATASET data
				const mergedVideoMeta = {
					...DATA.VIDEOMETA.Video,
				};
				const mergedData = {
					...DATA,
					VIDEOMETA: {
						...DATA.VIDEOMETA,
						Video: mergedVideoMeta,
						Club: {
							...DATA.VIDEOMETA.Club,
						},
					},
				};

				return (
					<Composition
						key={index}
						id={DATA.VIDEOMETA.Video.CompositionID}
						component={TEMPLATES[TEMPLATE]}
						durationInFrames={[
							DATA.TIMINGS.FPS_INTRO,
							hasSponsors(mergedData),
							DATA.TIMINGS.FPS_MAIN,
						].reduce((a, b) => a + b, 0)}
						fps={30}
						width={1080}
						height={1350}
						defaultProps={{
							DATA: mergedData,
						}}
					/>
				);
			})}
		</>
	);
};
