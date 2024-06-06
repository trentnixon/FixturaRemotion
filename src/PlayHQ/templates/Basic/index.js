/* eslint-disable camelcase */
import {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill} from 'remotion';
//import * as Heebo from '@remotion/google-fonts/Heebo';
import {fontFamily, loadFont} from '@remotion/google-fonts/Heebo';
// Assets
import {TitleSequenceFrame} from './Components/Intro';
import {OutroSequenceFrame} from './Components/Outro';
import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {TEMPLATES_COMPONENTS} from './AssetList';
import {getStyleConfig} from '../../utils/global/getStyleConfig';
import {createTemplateProps} from '../../utils/global/createTemplateProps';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';
import {AlternativeOutro} from './Components/Outro/AlternativeOutro';
import {getPrimarySponsor} from '../../structural/Sponsors/Utils/utils';
// END

/**
 * Renders a basic template for a video.
 *
 * @param {Object} props - The properties for the template.
 * @param {Object} props.DATA - The data for the video.
 * @param {number} props.DATA.TIMINGS - The timings for the video.
 * @param {string} props.DATA.VIDEOMETA.Video.CompositionID - The composition ID for the video.
 * @param {string} props.DATA.VIDEOMETA.Video.Theme - The theme for the video.
 * @param {string} props.DATA.VIDEOMETA.Video.HeroImage - The hero image for the video.
 * @param {string} props.DATA.VIDEOMETA.Video.audio_option - The audio option for the video.
 * @return {JSX.Element} The rendered template.
 */
export const Template_Basic = (props) => {
	const {DATA} = props;

	const {waitUntilDone} = loadFont('normal', {
		weights: ['200', '400', '600', '800', '900'],
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
	const createStyleProps = {
		THEME,
		defaultFontFamily,
		defaultCopyFontFamily,
	};
	const StyleConfig = getStyleConfig(createStyleProps);
	const Heights = {
		AssetHeight: 1350,
		Header: 190,
		Footer: 110,
	};

	const hasPrimarySponsor = getPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors);

	const RenderTemplate = () => {
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
				alignSponsors: 'center',
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
							{RenderTemplate(StyleConfig)}
						</Series.Sequence>
						<Series.Sequence
							durationInFrames={hasPrimarySponsor ? TIMINGS.FPS_OUTRO : 30}
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
						</Series.Sequence>
					</Series>
				</AbsoluteFill>
				<BGImageAnimation BuildProps={BuildProps} /> 
				<AssetFullAudioTrack
					useAudio={DATA.VIDEOMETA.Video.audio_option}
					DATA={DATA}
				/>
			</AbsoluteFill>
		</ThemeProvider>
	);
};
