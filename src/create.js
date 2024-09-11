/* eslint-disable camelcase */
import {Composition, Folder} from 'remotion';
import _ from 'lodash';
import TEMPLATES from './PlayHQ/templates';
import DATASET from './PlayHQ/DATA';
import {hasSponsors} from './PlayHQ/utils/helpers';

export const RemotionRoot = () => {
	return (
		<>
			{TEMPLATES.map((template, templateIndex) => (
				<Folder key={templateIndex} name={template.Name.name}>
					{template.Variants.map((variant, variantIndex) => (
						<Folder key={variantIndex} name={variant}>
							{Object.values(DATASET).map((data, compIndex) => {
								// Fetch the variant data for this template
								const variantData = template.VariantData
									? template.VariantData[variant]
									: {};

								console.log('template.VariantData ', template.VariantData);
								console.log('variantData ', variantData);
								// Process the data, including merging variantData into mergedData
								const {id, mergedData, durationInFrames} = processData(
									data,
									variantData
								);
								console.log('mergedData ', mergedData);
								return (
									<Composition
										key={compIndex}
										id={`${template.Name.name}-${variant}-${id}`}
										component={template.Name}
										durationInFrames={durationInFrames}
										fps={30}
										width={1080}
										height={1350}
										defaultProps={{
											DATA: mergedData, // Pass the mergedData that includes variant data
										}}
									/>
								);
							})}
						</Folder>
					))}
				</Folder>
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
const processData = (data, variantData) => {
	const mergedData = mergeData(data); // Merges your internal data
	const durationInFrames = calculateDuration(mergedData); // Calculates duration based on data

	// Merge the variantData.Video into the existing data.VIDEOMETA.Video using Lodash merge
	const mergedVideoData = _.merge(
		{},
		mergedData.VIDEOMETA.Video,
		variantData?.Video
	);

	// Replace the existing Video object with the merged version
	mergedData.VIDEOMETA.Video = mergedVideoData;

	// Return the processed data with id, mergedData, and duration
	return {
		id: mergedData.VIDEOMETA.Video.CompositionID || 'default-id', // Fallback for missing ID
		mergedData, // Send the final merged data to templates
		durationInFrames,
	};
};
