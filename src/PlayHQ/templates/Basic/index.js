/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, Audio, interpolate} from 'remotion';

// Import Design Templates for MATCHDAYRESULT.
// Add new design patterns below
// Components

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
export const Template_Basic = (props) => {
	const {DATA} = props;
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;
	// create StyleConfig
	const StyleConfig = getStyleConfig(THEME);

	const RenderTemplate = () => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const templateProps = {
			...{StyleConfig},
			...TemplateProps(DATA, TIMINGS) ,
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
					TIMINGS={TIMINGS.FPS_MAIN + 210}
					THEME={THEME}
				/>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<TitleSequenceFrame
								StyleConfig={StyleConfig}
								THEME={THEME}
								FPS_INTRO={TIMINGS.FPS_INTRO}
								VIDEOMETA={DATA.VIDEOMETA}
							/>
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{RenderTemplate()}
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_OUTRO}>
							<OutroSequenceFrame
								theme={THEME}
								FPS={TIMINGS.FPS_OUTRO}
								DATA={DATA}
								StyleConfig={StyleConfig}
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
		Title: {fontFamily: 'Heebo', fontWeight: 900},
		TitleAlt: {fontFamily: 'Heebo', fontWeight: 600},
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
