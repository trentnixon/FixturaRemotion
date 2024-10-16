/* eslint-disable camelcase */
import styled, {ThemeProvider} from 'styled-components';
import {Series, AbsoluteFill} from 'remotion';
import {TEMPLATES_COMPONENTS} from './AssetList';

import {FixturaIntroMutedLeague} from '../../structural/Intros/Muted';
import {FixturaOutroBasic} from '../../structural/Outro/Basic';
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
			<AbsoluteFill>
				<AbsoluteFill style={{zIndex: 1000}}>
					<Series>
						<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO}>
							<TwoColumnLayout>
								<FirstColumn>
									<FixturaIntroMutedLeague />
								</FirstColumn>
								<SecondColumn>
									<SideImg />
								</SecondColumn>
							</TwoColumnLayout>
						</Series.Sequence>
						<Series.Sequence durationInFrames={TIMINGS.FPS_MAIN}>
							<TwoColumnLayout>
								<FirstColumn>
									{renderTemplate(TEMPLATES_COMPONENTS, Video.CompositionID)}
								</FirstColumn>
								<SecondColumn>
									<SideImg />
								</SecondColumn>
							</TwoColumnLayout>
						</Series.Sequence>
						<Series.Sequence
							durationInFrames={
								doesAccountHaveSponsors ? TIMINGS.FPS_OUTRO : 30
							}
						>
							<TwoColumnLayout>
								<FirstColumn>
									{doesAccountHaveSponsors ? (
										<FixturaOutroBasic />
									) : (
										<AlternativeOutro />
									)}
								</FirstColumn>
								<SecondColumn>
									<SideImg />
								</SecondColumn>
							</TwoColumnLayout>
						</Series.Sequence>
					</Series>
				</AbsoluteFill>
				<BGImageAnimation />
				<AssetFullAudioTrack />
			</AbsoluteFill>
		</ThemeProvider>
	);
};

const TwoColumnLayout = styled.div`
	display: flex;
	width: 100%;
`;

const FirstColumn = styled.div`
	flex: 1;
	padding: 5px;
	background-image: url('https://fixtura.s3.ap-southeast-2.amazonaws.com/Tiled_Plus_00d127b7cf.png');
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 100%;
`;

const SecondColumn = styled.div`
	width: 400px;
	background-color: #f0f0f0;
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
		background: linear-gradient(to top, #1d3251 30%, transparent 100%);
		mix-blend-mode: color;
		pointer-events: none;
	}
`;

const SideImg = () => {
	const {BuildProps} = useStylesContext();
	const {HeroImage} = BuildProps ?? {};

	return (
		<Container>
			<StyledImageContainer>
				<ImageWithFallback
					src={HeroImage}
					alt="Hero"
					style={{width: '100%', height: '100%', objectFit: 'cover'}}
				/>
			</StyledImageContainer>
		</Container>
	);
};
