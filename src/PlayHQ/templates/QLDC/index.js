/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill} from 'remotion';
import {FixturaIntroQLDC} from '../../structural/Intros/QLDC';
import {FixturaOutroBasic} from '../../structural/Outro/Basic';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';
import {AlternativeOutro} from '../../structural/Outro/Basic/AlternativeOutro';
import {GlobalProvider} from '../../context/GlobalProvider';
import {useVideoDataContext} from '../../context/VideoDataContext';
import {useLayoutContext} from '../../context/LayoutContext';
import {useStylesContext} from '../../context/StyleContext';
import fonts from '../../utils/global/init/fonts';
import {renderTemplate} from '../../utils/global/init/initialize';
import {TEMPLATES_COMPONENTS} from './AssetList';

const settings = {
	fontConfig: fonts.robotoCondensed,
	defaultCopyFontFamily: fonts.robotoCondensed,
	gradientDegree: '45deg',
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

export const Template_QLDC = (props) => {
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
							<FixturaIntroQLDC />
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

/*
// END
export const Template_QLDC = (props) => {
	const {DATA} = props;

	const {waitUntilDone} = loadFont('normal', {
		weights: ['100', '200', '400', '600', '800', '900'],
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
						<TitleSequenceFrame
							StyleConfig={StyleConfig}
							FPS_INTRO={TIMINGS.FPS_INTRO}
							VIDEOMETA={DATA.VIDEOMETA}
						/>
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
 */
