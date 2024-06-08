/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, Audio, interpolate} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Heebo';
import {BGImageAnimation} from '../Components/Common/BGImageAnimation';
import {TitleSequenceFrame} from '../Components/Intro';
import {OutroSequenceFrame} from '../Components/Outro';
import {Fixtures} from '../Compositions/UpcomingFixtures';
import {CompositionLength} from '../../../utils/helpers';
import {WeekendResults} from '../Compositions/WeekendResults';

export const Example_Video_WeekendResults = (props) => {
	const {DATA} = props;
	const {fontFamily} = loadFont();
	const {TIMINGS} = DATA;

	const THEME = DATA.VIDEOMETA.Video.Theme;

	const commonProps = {
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
							<WeekendResults {...commonProps} />
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
