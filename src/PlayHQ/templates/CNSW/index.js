/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, Audio, interpolate} from 'remotion';
// Import {RemotionThemes} from '../../theme/themes'
import {loadFont} from '@remotion/google-fonts/Roboto';

// Import Design Templates for MATCHDAYRESULT.
// Add new deisng patterns below
// Componnets

// Assets
import {TitleSequenceFrame} from './Components/Intro';
import {OutroSequenceFrame} from './Components/Outro';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {CompositionLength} from '../../utils/helpers';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {
	GetBackgroundContractColorForText,
	darkenColor,
	getContrastColor,
	lightenColor,
	setOpacity,
} from '../../utils/colors';

// END
export const Template_CNSW = (props) => {
	const {DATA} = props;
	const {fontFamily} = loadFont();
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;
	const StyleConfig = getStyleConfig(THEME);
	const RenderTemplate = (StyleConfig) => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const templateProps = {
			...StyleConfig,
			DATA: DATA.DATA,
			VIDEOMETA: DATA.VIDEOMETA,
			TIMINGS: DATA.TIMINGS,
			THEME,
			fontFamily,
			FPS_MAIN: TIMINGS.FPS_MAIN,
			FPS_SCORECARD: TIMINGS.FPS_SCORECARD,
			FPS_LADDER: TIMINGS.FPS_LADDER,
			TemplateVariation: DATA.VIDEOMETA.Video.TemplateVariation,
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
					THEME={THEME}
				/>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<TitleSequenceFrame
								THEME={THEME}
								fontFamily={fontFamily}
								FPS_INTRO={TIMINGS.FPS_INTRO}
								VIDEOMETA={DATA.VIDEOMETA}
							/>
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{RenderTemplate(StyleConfig)}
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_OUTRO}>
							<OutroSequenceFrame
								theme={THEME}
								fontFamily={fontFamily}
								FPS={TIMINGS.FPS_OUTRO}
								DATA={DATA}
							/>
						</Series.Sequence>
					</Series>
				</AbsoluteFill>
				<Audio
					volume={(f) =>
						interpolate(
							f,
							[CompositionLength(DATA) - 30, CompositionLength(DATA)],
							[0.7, 0],
							{extrapolateLeft: 'clamp'}
						)
					}
					src={`${DATA.VIDEOMETA.Video.audio_option}`}
				/>
			</AbsoluteFill>
		</ThemeProvider>
	);
};

// Use this to define the fonts and colors around the template
const getStyleConfig = (THEME) => ({
	Font: {
		Title: {fontFamily: 'Roboto', fontWeight: 900},
		TitleAlt: {fontFamily: 'Roboto', fontWeight: 600},
		Copy: {fontFamily: 'Arial', fontWeight: 400},
	},
	Color: {
		Primary: {
			Main: THEME.primary,
			Contrast: getContrastColor(THEME.primary),
			BackgroundContractColor: GetBackgroundContractColorForText(
				THEME.primary,
				THEME.secondary
			),
			Darken: darkenColor(THEME.primary),
			Lighten: lightenColor(THEME.primary),
			Opacity: (int) => setOpacity(THEME.primary, int),
		},
		Secondary: {
			Main: THEME.secondary,
			Contrast: getContrastColor(THEME.secondary),
			BackgroundContractColor: GetBackgroundContractColorForText(
				THEME.secondary,
				THEME.primary
			),
			Darken: darkenColor(THEME.secondary),
			Lighten: lightenColor(THEME.secondary),
			Opacity: (int) => setOpacity(THEME.secondary, int),
		},
	},
});

const TemplateProps = (DATA, TIMINGS) => ({
	DATA: DATA.DATA,
	VIDEOMETA: DATA.VIDEOMETA,
	TIMINGS: DATA.TIMINGS,
	FPS_MAIN: TIMINGS.FPS_MAIN,
	FPS_SCORECARD: TIMINGS.FPS_SCORECARD,
	FPS_LADDER: TIMINGS.FPS_LADDER,
	TemplateVariation: DATA.VIDEOMETA.Video.TemplateVariation,
});
