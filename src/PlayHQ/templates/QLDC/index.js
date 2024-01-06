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

// END 
export const Template_QLDC = (props) => {
	const {DATA} = props;
	const {fontFamily} = loadFont();
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;

	const Heights={
		AssetHeight:1350,
		Header:170,
		Footer:120
	}


	const RenderTemplate = () => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const commonProps = {
			DATA: DATA.DATA,
			VIDEOMETA: DATA.VIDEOMETA,
			TIMINGS: DATA.TIMINGS,
			THEME: THEME,
			fontFamily,
			FPS_MAIN: TIMINGS.FPS_MAIN,
			FPS_SCORECARD: TIMINGS.FPS_SCORECARD,
			FPS_LADDER: TIMINGS.FPS_LADDER,
			TemplateVariation: DATA.VIDEOMETA.Video.TemplateVariation,
			SectionHeights:{
				Header:Heights.Header,
				Body:(Heights.AssetHeight-(Heights.Header+Heights.Footer)),
				Footer:Heights.Footer
			}
		};
		if (TEMPLATE === 'Top5BattingList') {
			return <Component {...commonProps} TYPE="BATTING" />;
		} else if (TEMPLATE === 'Top5BowlingList') {
			return <Component {...commonProps} TYPE="BOWLING" />;
		}
		return <Component {...commonProps} />;
	};

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill>
				<BGImageAnimation
					HeroImage={DATA.VIDEOMETA.Video.HeroImage}
					TemplateVariation={DATA.VIDEOMETA.Video.TemplateVariation}
					TIMINGS={TIMINGS.FPS_MAIN + 210}
					FPS_MAIN={TIMINGS.FPS_MAIN}
					THEME={THEME}
				/>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Sequence durationInFrames={TIMINGS.FPS_INTRO} from={0}>
						<TitleSequenceFrame
							THEME={THEME}
							fontFamily={fontFamily}
							FPS_INTRO={TIMINGS.FPS_INTRO}
							VIDEOMETA={DATA.VIDEOMETA}
						/>
					</Sequence>
					<Sequence
						durationInFrames={TIMINGS.FPS_MAIN}
						from={TIMINGS.FPS_INTRO}
					>
						{RenderTemplate()}
					</Sequence>
					<Sequence
						durationInFrames={TIMINGS.FPS_OUTRO}
						from={TIMINGS.FPS_INTRO + TIMINGS.FPS_MAIN}
					>
						<OutroSequenceFrame
							theme={THEME}
							fontFamily={fontFamily}
							FPS={TIMINGS.FPS_OUTRO}
							DATA={DATA}
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
