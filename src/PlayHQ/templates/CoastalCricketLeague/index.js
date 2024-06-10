/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {AbsoluteFill, Sequence} from 'remotion';
import {fontFamily, loadFont} from '@remotion/google-fonts/AlfaSlabOne';

// Import Design Templates for MATCHDAYRESULT.
// Add new design patterns below
// Components

// Assets
import {TitleSequenceFrame} from './Components/Intro';
import {OutroSequenceFrame} from './Components/Outro';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';

import {TEMPLATES_COMPONENTS} from './AssetList';
import {getStyleConfig} from '../../utils/global/getStyleConfig';
import {createTemplateProps} from '../../utils/global/createTemplateProps';
import {getPrimarySponsor} from '../../structural/Sponsors/Utils/utils';
import {AlternativeOutro} from './Components/Outro/AlternativeOutro';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';

// END
export const Template_CoastalCricketLeague = (props) => {
	const {DATA} = props;

	const {waitUntilDone} = loadFont('normal', {
		weights: ['400'],
		subsets: ['latin'],
	});

	// Optional: Act once the font has been loaded
	waitUntilDone().then(() => {
		console.log('Font is loaded');
	});

	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;

	const defaultFontFamily = fontFamily;
	const defaultCopyFontFamily = 'Arial';
	// Create StyleConfig
	const hasPrimarySponsor = getPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors);
	const createStyleProps = {
		THEME,
		defaultFontFamily,
		defaultCopyFontFamily,
	};
	const StyleConfig = getStyleConfig(createStyleProps);

	const Heights = {
		AssetHeight: 1350,
		Header: 170,
		Footer: 130,
	};

	const RenderTemplate = (StyleConfig) => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const templateProps = {
			...{StyleConfig},
			...createTemplateProps(DATA, TIMINGS),
			SectionHeights: {
				Header: Heights.Header,
				Body: Heights.AssetHeight - (Heights.Header + Heights.Footer),
				Footer: Heights.Footer,
			},
			SponsorPositionAndAnimations: {
				animationType: 'FromTop',
				alignSponsors: 'right',
			},
		};
		if (TEMPLATE === 'Top5BattingList') {
			return <Component {...templateProps} TYPE="BATTING" />;
		}
		if (TEMPLATE === 'Top5BowlingList') {
			return <Component {...templateProps} TYPE="BOWLING" />;
		}

		return <Component {...templateProps} />;
	};

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill>
				<BGImageAnimation
					HeroImage={DATA.VIDEOMETA.Video.HeroImage}
					TemplateVariation={DATA.VIDEOMETA.Video.TemplateVariation}
					TIMINGS={TIMINGS.FPS_MAIN + 210}
					FPS_MAIN={TIMINGS.FPS_MAIN}
					StyleConfig={StyleConfig}
				/>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Sequence durationInFrames={TIMINGS.FPS_INTRO}>
						{/* <TitleSequenceFrame
							StyleConfig={StyleConfig}
							FPS_INTRO={TIMINGS.FPS_INTRO}
							VIDEOMETA={DATA.VIDEOMETA}
						/> */}
					</Sequence>
					<Sequence
						durationInFrames={TIMINGS.FPS_MAIN}
						from={TIMINGS.FPS_INTRO}
					>
						{RenderTemplate(StyleConfig)}
					</Sequence>
					<Sequence
						durationInFrames={TIMINGS.FPS_OUTRO}
						from={TIMINGS.FPS_INTRO + TIMINGS.FPS_MAIN}
					>
						{hasPrimarySponsor ? (
							<OutroSequenceFrame
								FPS={TIMINGS.FPS_OUTRO}
								DATA={DATA}
								StyleConfig={StyleConfig}
							/>
						) : (
							<AlternativeOutro />
						)}
					</Sequence>
					
				</AbsoluteFill>
				<AssetFullAudioTrack
					useAudio={DATA.VIDEOMETA.Video.audio_option}
					DATA={DATA}
				/>
			</AbsoluteFill>
		</ThemeProvider>
	);
};
