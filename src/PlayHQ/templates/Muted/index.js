/* eslint-disable camelcase */
import styled, {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill, useCurrentFrame, interpolate} from 'remotion';
import {TEMPLATES_COMPONENTS} from './AssetList';

import {FixturaIntroMutedLeague} from '../../structural/Intros/Muted';
import {
	FixturaOutroBasic,
	FixturaOutroMuted,
} from '../../structural/Outro/Basic';
import {AlternativeOutro} from '../../structural/Outro/Basic/AlternativeOutro';

import {BGImageAnimation} from './Components/Common/BGImageAnimation';
import {AssetFullAudioTrack} from '../../structural/assets/common/audio/AssetBackgroundAudio';

import {GlobalProvider} from '../../context/GlobalProvider';
import {useVideoDataContext} from '../../context/VideoDataContext';
import {useStylesContext} from '../../context/StyleContext';
import {useLayoutContext} from '../../context/LayoutContext';
// import fonts from '../../utils/global/init/fonts';
import {renderTemplate} from '../../utils/global/init/initialize';
import {settings} from './settings';
import {ImageWithFallback} from '../../utils/global/ImageWithFallback';

export const Muted = (props) => {
	return (
		<GlobalProvider settings={settings} DATA={props.DATA}>
			<MainTemplate />
		</GlobalProvider>
	);
};

const MainTemplate = () => {
	const {DATA, Video} = useVideoDataContext();
	const {THEME} = useStylesContext();
	const {doesAccountHaveSponsors} = useLayoutContext();
	const {TIMINGS} = DATA;

	return (
		<ThemeProvider theme={THEME}>
			<AbsoluteFill style={{zIndex: 1000}}>
				<TwoColumnLayout>
					<FirstColumn className="first-column">
						<SeriesContainer>
							<Series layout="none">
								<Series.Sequence
									durationInFrames={TIMINGS.FPS_INTRO}
									layout="none"
								>
									<FixturaIntroMutedLeague />
								</Series.Sequence>
								<Series.Sequence
									durationInFrames={TIMINGS.FPS_MAIN}
									layout="none"
								>
									{renderTemplate(TEMPLATES_COMPONENTS, Video.CompositionID)}
								</Series.Sequence>
								<Series.Sequence
									layout="none"
									durationInFrames={
										doesAccountHaveSponsors ? TIMINGS.FPS_OUTRO : 30
									}
								>
									{doesAccountHaveSponsors ? (
										<FixturaOutroMuted />
									) : (
										<AlternativeOutro />
									)}
								</Series.Sequence>
							</Series>
						</SeriesContainer>
					</FirstColumn>
					<SecondColumn>
						<SideImg />
					</SecondColumn>
				</TwoColumnLayout>
			</AbsoluteFill>
			<BGImageAnimation />
			<AssetFullAudioTrack />
		</ThemeProvider>
	);
};

const TwoColumnLayout = styled.div`
	display: flex;
	width: 100%;
	height: 100%; /* Ensure the layout takes the full height */
`;

const FirstColumn = styled.div`
	flex: 1;
	padding: 5px;
	background-image: url('https://fixtura.s3.ap-southeast-2.amazonaws.com/Background_Small_Sqaures_418ad31fc7.png');
	background-size: cover;
	background-position: center;
	height: 100%;
	width: 730px; /* Constrain width to the column */
	display: flex;
	flex-direction: column;
`;

const SeriesContainer = styled.div`
	width: 100%; /* Ensure children don't overflow */
	height: 100%; /* Full height for better layout control */
	display: flex;
	flex-direction: column;
	justify-content: space-between; /* This allows spacing between sequences */
`;

const SecondColumn = styled.div`
	width: 350px;
	height: 100%; /* Ensure this column takes full height */
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

const StyledImageContainer = styled.div`
	max-width: 100%;
	max-height: 100%;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background: ${(props) => props.mutedColor};
		mix-blend-mode: color;
		pointer-events: none;
	}
`;

const SideImg = () => {
	const frame = useCurrentFrame();
	const {BuildProps} = useStylesContext();
	const {HeroImage, TemplateVariation} = BuildProps ?? {};

	const {DATA} = useVideoDataContext();
	const {TIMINGS} = DATA;
	console.log('[TIMINGS]', TIMINGS);
	// Add scaling animation from 1.5 to 1 over the duration of FPS_MAIN
	const scaleValue = interpolate(
		frame,
		[0, TIMINGS.FPS_MAIN + TIMINGS.FPS_OUTRO],
		[1.5, 1],
		{
			extrapolateRight: 'clamp',
		}
	);

	return (
		<Container>
			<StyledImageContainer
				mutedColor={TemplateVariation.useMutedColor}
				style={{
					transform: `scale(${scaleValue})`,
				}}
			>
				<ImageWithFallback
					src={HeroImage}
					alt="Hero"
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
					}}
				/>
			</StyledImageContainer>
		</Container>
	);
};
