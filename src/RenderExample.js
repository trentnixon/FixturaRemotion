/* eslint-disable camelcase */
import {getInputProps} from 'remotion';
import {Composition} from 'remotion';
import DATA_FIXTURES from './PlayHQ/utils/upcoming_v2.json';
// Stack Compositions
import {Template_Basic} from './PlayHQ/templates/Basic';
// Data Variables
import {themes} from './PlayHQ/utils/VideoThemes';
import {sponsors} from './PlayHQ/utils/VideoSponsors';
import {heroImages} from './PlayHQ/utils/VideoHeroImages';
export const RemotionRoot = () => {
  
    const DATA = DATA_FIXTURES
	const THEME = 1;
	const HERO = 0;

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

	const HEROIMAGES = [
		heroImages.heroImage0,
		heroImages.heroImage1,
		heroImages.heroImage2,
		heroImages.heroImage3,
	];
	const currentTheme = THEMES[THEME];
	const currentHeroImage = HEROIMAGES[HERO];
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

	console.log(mergedData);
	return (
		<>
			<Composition
				id={'UpComingFixtures'}
				component={Template_Basic}
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
