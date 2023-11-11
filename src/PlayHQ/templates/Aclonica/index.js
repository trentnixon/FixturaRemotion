/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, Audio, interpolate} from 'remotion';
// Import {RemotionThemes} from '../../theme/themes'
import {loadFont} from '@remotion/google-fonts/Aclonica';
import * as Aclonica from '@remotion/google-fonts/Aclonica';
import * as Roboto from '@remotion/google-fonts/Roboto';
// Import Design Templates for MATCHDAYRESULT.
// Add new deisng patterns below
// Componnets

// Assets
import {TitleSequenceFrame} from './Components/Intro';
import {OutroSequenceFrame} from './Components/Outro';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {CompositionLength} from '../../utils/helpers';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {IntroLogoBackgroundWithPrimaryColor} from './Components/Common/IntroLogoBackgroundWithPrimaryColor';

// END
export const Template_Aclonica = (props) => {
	const {DATA} = props;
	const {fontFamily} = loadFont();
	const {AclonicaFamily} = Aclonica.loadFont();
	const {RobotoFamily} = Roboto.loadFont();
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;

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
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<TitleSequenceFrame
								THEME={THEME}
								fontFamily={fontFamily}
								FPS_INTRO={TIMINGS.FPS_INTRO}
								VIDEOMETA={DATA.VIDEOMETA}
							/>
							<IntroLogoBackgroundWithPrimaryColor
								HeroImage={DATA.VIDEOMETA.Video.HeroImage}
								TIMINGS={TIMINGS.FPS_MAIN + 210}
								THEME={THEME}
								{...props}
							/>
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{RenderTemplate()}
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
