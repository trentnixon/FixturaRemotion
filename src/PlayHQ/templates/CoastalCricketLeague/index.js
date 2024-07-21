/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill} from 'remotion';

import {BGImageAnimation} from './Components/Common/BGImageAnimation';

import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';
import {GlobalProvider} from '../../context/GlobalProvider';
import {useVideoDataContext} from '../../context/VideoDataContext';
import {useLayoutContext} from '../../context/LayoutContext';
import {useStylesContext} from '../../context/StyleContext';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {renderTemplate} from '../../utils/global/init/initialize';
import fonts from '../../utils/global/init/fonts';
import {FixturaOutroBasic} from '../../structural/Outro/Basic';
import {AlternativeOutro} from '../../structural/Outro/Basic/AlternativeOutro';

const settings = {
	fontConfig: fonts.alfaSlabOne,
	defaultCopyFontFamily: fonts.robotoCondensed,
	gradientDegree: '0deg',
	heights: {
		AssetHeight: 1350,
		Header: 170,
		Footer: 130,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'right',
	},
};

export const Template_CoastalCricketLeague = (props) => {
	return (
		<GlobalProvider settings={settings} DATA={props.DATA}>
			<MainTemplate />
		</GlobalProvider>
	);
};

const MainTemplate = () => {
	const {DATA, Video} = useVideoDataContext();
	const {THEME} = useStylesContext();
	const {hasPrimarySponsor} = useLayoutContext();
	const {TIMINGS} = DATA;

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							{' '}
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{renderTemplate(TEMPLATES_COMPONENTS, Video.CompositionID)}
						</Series.Sequence>
						<Series.Sequence
							durationInFrames={hasPrimarySponsor ? TIMINGS.FPS_OUTRO : 30}
						>
							{hasPrimarySponsor ? <FixturaOutroBasic /> : <AlternativeOutro />}
						</Series.Sequence>
					</Series>
				</AbsoluteFill>
				<BGImageAnimation />
				<AssetFullAudioTrack />
			</AbsoluteFill>
		</ThemeProvider>
	);
};
