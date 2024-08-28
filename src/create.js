/* eslint-disable camelcase */
import {Composition} from 'remotion';
import TEMPLATES from './PlayHQ/templates';
import DATASET from './PlayHQ/DATA';
import {hasSponsors} from './PlayHQ/utils/helpers';

export const RemotionRoot = () => {
	const TEMPLATE =2;
	const compositions = Object.values(DATASET).map(processData);

	return (
		<>
			{compositions.map(({id, mergedData, durationInFrames}, index) => (
				<Composition
					key={index}
					id={id}
					component={TEMPLATES[TEMPLATE]}
					durationInFrames={durationInFrames}
					fps={30}
					width={1080}
					height={1350}
					defaultProps={{DATA: mergedData}}
				/>
			))}
		</>
	);
};

// Function to merge data
const mergeData = (data) => {
	const {Video: videoMeta, Club: clubMeta} = data.VIDEOMETA;
	return {
		...data,
		VIDEOMETA: {
			...data.VIDEOMETA,
			Video: {...videoMeta},
			Club: {...clubMeta},
		},
	};
};

// Function to calculate duration
const calculateDuration = (data) => {
	return [
		data.TIMINGS.FPS_INTRO,
		hasSponsors(data),
		data.TIMINGS.FPS_MAIN,
	].reduce((a, b) => a + b, 0);
};

// Function to process data
const processData = (data) => {
	const mergedData = mergeData(data);
	const durationInFrames = calculateDuration(mergedData);
	return {
		id: mergedData.VIDEOMETA.Video.CompositionID,
		mergedData,
		durationInFrames,
	};
};
