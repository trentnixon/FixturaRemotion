/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {AbsoluteFill, Audio, interpolate, Sequence} from 'remotion';
// Import {RemotionThemes} from '../../theme/themes'
import {loadFont} from '@remotion/google-fonts/RobotoCondensed';

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
	darkenColor,
	GetBackgroundContractColorForText,
	getContrastColor,
	lightenColor,
	setOpacity,
} from '../../utils/colors';

// END
export const Template_QLDC = (props) => {
	const {DATA} = props;
	loadFont();
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;
	// Create StyleConfig
	const StyleConfig = getStyleConfig(THEME);
	const Heights = {
		AssetHeight: 1350,
		Header: 170,
		Footer: 120, 
	};

	const RenderTemplate = (StyleConfig) => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const templateProps = {
			...{StyleConfig},
			...TemplateProps(DATA, TIMINGS),

			SectionHeights: {
				Header: Heights.Header,
				Body: Heights.AssetHeight - (Heights.Header + Heights.Footer),
				Footer: Heights.Footer,
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
					<Sequence durationInFrames={TIMINGS.FPS_INTRO} >
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
						<OutroSequenceFrame
							FPS={TIMINGS.FPS_OUTRO}
							DATA={DATA}
							StyleConfig={StyleConfig}
						/>
					</Sequence>
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
// OBJ Name StyleConfig
const getStyleConfig = (THEME) => ({
	Font: {
		Label: 'Roboto Condensed',
		CopyLabel: 'Arial',
		Title: {fontFamily: 'Roboto Condensed', fontWeight: 900},
		TitleAlt: {fontFamily: 'Roboto Condensed', fontWeight: 400},
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
