/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill} from 'remotion';
import {TEMPLATES_COMPONENTS} from './AssetList';

import {FixturaOutroBasic} from '../../structural/Outro/Basic';
import {AlternativeOutro} from '../../structural/Outro/Basic/AlternativeOutro';

import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';

import {GlobalProvider} from '../../context/GlobalProvider';
import {useVideoDataContext} from '../../context/VideoDataContext';
import {useStylesContext} from '../../context/StyleContext';
import {useLayoutContext} from '../../context/LayoutContext';
// import fonts from '../../utils/global/init/fonts';
import {renderTemplate} from '../../utils/global/init/initialize';
import {settings} from './settings';
import {FixturaIntroKayo} from '../../structural/Intros/Kayo';
export const Kayo = (props) => {
	return (
		<GlobalProvider settings={settings} DATA={props.DATA}>
			<MainTemplate />
		</GlobalProvider>
	);
};

const MainTemplate = () => {
	const {DATA, Video} = useVideoDataContext();
	const {THEME} = useStylesContext();
	const {doesAccountHaveSponsors} = useLayoutContext();
	const {TIMINGS} = DATA;

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<FixturaIntroKayo />
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{renderTemplate(TEMPLATES_COMPONENTS, Video.CompositionID)}
						</Series.Sequence>
						<Series.Sequence
							durationInFrames={
								doesAccountHaveSponsors ? TIMINGS.FPS_OUTRO : 30
							}
						>
							{doesAccountHaveSponsors ? (
								<FixturaOutroBasic />
							) : (
								<AlternativeOutro />
							)}
						</Series.Sequence>
					</Series>
				</AbsoluteFill>
				<BGImageAnimation />
				<AssetFullAudioTrack />
			</AbsoluteFill>
		</ThemeProvider>
	);
};
