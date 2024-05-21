/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, Audio, interpolate} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Roboto';

// Assets
import {TitleSequenceFrame} from './Components/Intro';
import {OutroSequenceFrame} from './Components/Outro';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {CompositionLength} from '../../utils/helpers';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {getStyleConfig} from '../../utils/global/getStyleConfig';
import {createTemplateProps} from '../../utils/global/createTemplateProps';

// END 
export const Template_CNSW = (props) => {
	const {DATA} = props;
	const {fontFamily} = loadFont();
	const {TIMINGS} = DATA;
	const TEMPLATE = DATA.VIDEOMETA.Video.CompositionID;
	const THEME = DATA.VIDEOMETA.Video.Theme;
	const defaultFontFamily = 'Roboto Condensed';
	const defaultCopyFontFamily = 'Roboto Condensed';
	const createStyleProps = {
		THEME,
		defaultFontFamily,
		defaultCopyFontFamily,
	};
	const Heights = {
		AssetHeight: 1350,
		Header: 230,
		Footer: 120,
	};

	const StyleConfig = getStyleConfig(createStyleProps);
	const RenderTemplate = (StyleConfig) => {
		const Component = TEMPLATES_COMPONENTS[TEMPLATE];
		if (!Component) {
			console.error(`No component mapped for template: ${TEMPLATE}`);
			return null;
		}
		const templateProps = {
			...StyleConfig,
			...createTemplateProps(DATA, TIMINGS),
			SectionHeights: {
				Header: Heights.Header,
				Body: Heights.AssetHeight - (Heights.Header + Heights.Footer),
				Footer: Heights.Footer,
			},
			SponsorPositionAndAnimations :{
				animationType: 'FromTop',
				alignSponsors: 'left',
			}
		};
		if (TEMPLATE === 'Top5BattingList') {
			return <Component {...templateProps} TYPE="BATTING" />;
		}
		if (TEMPLATE === 'Top5BowlingList') {
			return <Component {...templateProps} TYPE="BOWLING" />;
		}
		return <Component {...templateProps} />;
	};

	const BuildProps = {
		HeroImage: DATA.VIDEOMETA.Video.HeroImage,
		TemplateVariation: DATA.VIDEOMETA.Video.TemplateVariation,
		TIMINGS: TIMINGS.FPS_MAIN + 210,
		THEME,
		fontFamily: {fontFamily},
		Sport: DATA.VIDEOMETA.Club.Sport,
	};

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill>
				<BGImageAnimation BuildProps={BuildProps} />
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<TitleSequenceFrame
								StyleConfig={StyleConfig}
								FPS_INTRO={TIMINGS.FPS_INTRO}
								VIDEOMETA={DATA.VIDEOMETA}
							/>
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							{RenderTemplate(StyleConfig)}
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_OUTRO}>
							<OutroSequenceFrame
								fontFamily={fontFamily}
								FPS={TIMINGS.FPS_OUTRO}
								DATA={DATA}
								BuildProps={BuildProps}
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
