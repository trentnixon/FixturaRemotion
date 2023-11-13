/* eslint-disable camelcase */
import {Composition} from 'remotion';
// DATASETS
import DATA_RESULTS from './PlayHQ/utils/PLAYHQ_Results.json';
import DATA_FIXTURES from './PlayHQ/utils/upcoming_v2.json';
import DATA_TOP5_RUNS from './PlayHQ/utils/Top5RunsV2.json';
import DATA_TOP5_WICKETS from './PlayHQ/utils/Top5WicketsV2.json';
import DATA_LADDER_V2 from './PlayHQ/utils/LadderV2.json';
import DATA_WEEKENDRESULTSV2 from './PlayHQ/utils/WeekendResultsV2.json';
import DATA_ROSTERPOSTER from './PlayHQ/utils/RosterPoster.json'; 
// Data Variables 
import {themes} from './PlayHQ/utils/VideoThemes'; 
import {sponsors} from './PlayHQ/utils/VideoSponsors';
import {heroImages} from './PlayHQ/utils/VideoHeroImages';
// Templates
//import {Template_Basic_Sqaure} from './PlayHQ/templates/BasicSqaure/index';
//import {Template_Basic_Rounded} from './PlayHQ/templates/BasicRounded/index';
import {Template_Sutherland} from './PlayHQ/templates/Sutherland';
import {Template_Basic} from './PlayHQ/templates/Basic';
import {Template_Basic} from './PlayHQ/templates/Basic';
import {hasSponsors} from './PlayHQ/utils/helpers'; 
import { Template_Aclonica } from './PlayHQ/templates/Aclonica';
 
export const RemotionRoot = () => {  
	const TEMPLATE = 0;    
	const THEME = 0;    
	const HERO = 1;    
  
	const DATASET = {  
		DATA_RESULTS,  
		DATA_FIXTURES,  
		DATA_TOP5_RUNS,
		DATA_TOP5_WICKETS, 
		DATA_LADDER_V2,
		DATA_WEEKENDRESULTSV2, 
		DATA_ROSTERPOSTER 
	}; 
	const TEMPLATES = [Template_Basic, Template_Sutherland, Template_Aclonica];

	const THEMES = [
		themes.theme1,
		themes.theme2, 
		themes.theme3,
		themes.theme4,
		themes.theme5,
		themes.theme6,
		themes.theme7,
		themes.theme8,
		themes.theme9,
		themes.theme10,
	];

	const HEROIMAGES = [heroImages.heroImage0,heroImages.heroImage1, heroImages.heroImage2, heroImages.heroImage3];
	const currentTheme = THEMES[THEME];
	const currentHeroImage = HEROIMAGES[HERO];

	return (
		<>
			{Object.keys(DATASET).map((key, index) => {
				const DATA = DATASET[key];

				// Merging the theme and sponsors data with the existing DATASET data
				const mergedVideoMeta = {
					...DATA.VIDEOMETA.Video,
					HeroImage: currentHeroImage, // Updating the HeroImage path with the new hero image data
					Theme: currentTheme,
				};
				const mergedData = {
					...DATA,
					VIDEOMETA: {
						...DATA.VIDEOMETA,
						Video: mergedVideoMeta,
						Club: {
							...DATA.VIDEOMETA.Club,
							Sponsors: sponsors, // Updating the Sponsors path with the new sponsors data
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
