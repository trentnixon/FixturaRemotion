/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';

import {Series, AbsoluteFill} from 'remotion';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {FixturaIntroBasic} from '../../structural/Intros/Basic';
import {FixturaOutroBasic} from '../../structural/Outro/Basic';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';
import {AlternativeOutro} from '../../structural/Outro/Basic/AlternativeOutro';
import {GlobalProvider} from '../../context/GlobalProvider';
import {useVideoDataContext} from '../../context/VideoDataContext';
import {useLayoutContext} from '../../context/LayoutContext';
import {renderTemplate} from '../../utils/global/init/initialize';
import {useStylesContext} from '../../context/StyleContext';
import {settings} from './settings';

export const Basic = (props) => {
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
							<FixturaIntroBasic />
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
