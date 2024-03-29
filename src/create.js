/* eslint-disable camelcase */
import {Composition, continueRender, delayRender} from 'remotion';

// Templates
import TEMPLATES from './PlayHQ/templates';
// Bring int he TEST data options
import DATASET from './PlayHQ/DATA';
// Theming
import {themes} from './PlayHQ/utils/VideoThemes';
import {heroImages} from './PlayHQ/utils/VideoHeroImages';
// HELPERS
import {hasSponsors} from './PlayHQ/utils/helpers';
import {useState} from 'react';

import {loadLocalFonts} from './PlayHQ/utils/LoadFonts/fonts';
export const RemotionRoot = () => {
	const [handle] = useState(() => delayRender());

	const TEMPLATE = 0;
	const THEME = 'theme1';
	const HERO = 'heroImage1';

	return ( 
		<>
			{Object.keys(DATASET).map((key, index) => {
				const DATA = DATASET[key];

				// Merging the theme and sponsors data with the existing DATASET data
				const mergedVideoMeta = {
					...DATA.VIDEOMETA.Video,
					HeroImage: heroImages[HERO], // Updating the HeroImage path with the new hero image data
					Theme: themes[THEME],
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
				//console.log(mergedData.VIDEOMETA.Video.Template);
				loadLocalFonts(mergedData.VIDEOMETA.Video.Template).then(() => {
					setTimeout(() => {
						console.log('Wait 3 seconds to load in the fonts');
						continueRender(handle);
					}, 3000);
					console.log('All fonts loaded');
				});
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
