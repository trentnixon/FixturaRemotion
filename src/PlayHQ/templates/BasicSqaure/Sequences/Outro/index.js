import {Sequence, Series, Img} from 'remotion';
import styled from 'styled-components';

import {useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {

	FromLeftToRight,

	FromTopToBottom,
	SquareWipe,
} from '../../../../Animation/ClipWipe';
import {
	getContrastColor,
	lightenColor,
	darkenColor,
} from '../../../../utils/colors';


export const OutroSequenceFrame = ({theme, fontFamily, DATA, FPS}) => {
	const frame = useCurrentFrame();

	const getGradient = (color, lightColor) => {
		console.log(color);
		return `linear-gradient(to bottom, ${color}, ${lightColor})`;
	};
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS} layout="none">
						<SponsorOuterContainer>
							<SponsorIntroContainer>
								<SponsorsIntroCopy
									style={{
										fontFamily,
										clipPath: FromTopToBottom(15, 'Wobbly'),
										opacity: interpolateOpacityByFrame(
											frame,
											FPS - 15,
											FPS,
											1,
											0
										),
									}}
								>
									Made possible by our Sponsors
								</SponsorsIntroCopy>
							</SponsorIntroContainer>
							<SponsorLogoContainer
								style={{
									clipPath: FromLeftToRight(15, 'Wobbly'),
									opacity: interpolateOpacityByFrame(
										frame,
										FPS - 15,
										FPS,
										1,
										0
									),
								}}
							/>

							<SponsorRows
								DATA={DATA}
								fontFamily={fontFamily}
								theme={theme}
								FPS={FPS}
							/>
						</SponsorOuterContainer>

						<LogoContainer
							style={{
								fontFamily,

								transform: `scale(${SpringToFrom(
									25,
									0,
									1,
									'Wobbly'
								)}) scale(${SpringToFrom(FPS - 15, 1, 0, 'Slow')})`,
							}}
						>
							<Img src={DATA.VIDEOMETA.Club.Logo} width="100%" />
						</LogoContainer>
						<ClubNameContainer>
							<ClubName
								style={{
									fontFamily,
									clipPath: FromTopToBottom(25, 'Wobbly'),
									color: getContrastColor(darkenColor(theme.primary)),
									opacity: interpolateOpacityByFrame(
										frame,
										FPS - 15,
										FPS,
										1,
										0
									),
								}}
							>
								{DATA.VIDEOMETA.Club.Name}
							</ClubName>
						</ClubNameContainer>

						<SqareBG
							style={{
							
								background: getGradient(
									darkenColor(theme.primary),
									lightenColor(theme.primary)
								),
								// Height: `${SpringToFrom(0, 0, 1775, 'Wobbly')}px`,
								
								 borderLeft: `5px solid ${lightenColor(theme.primary)}`,
								 borderRight: `5px solid ${lightenColor(theme.primary)}`,
								 clipPath: SquareWipe(0, 'Smooth'),
								opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
							}}
						/>
				
					</Series.Sequence>
				</Series>
			</Sequence>
		</>
	);
};

// Sponsors
const SponsorOuterContainer = styled.div`
	z-index: 2000;
`;
const SponsorIntroContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 133px;
	left: 0px;
	top: 95px;
`;
const SponsorsIntroCopy = styled.h1`
	font-weight: 400;
	font-size: 3em;
	line-height: 1em;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;
	margin: 0;
`;

const SponsorLogoContainer = styled.div`
	position: absolute;
	width: 1246px;
	height: 493px;
	left: 97px;
	top: 479px;
`;

// End sponsors

const SqareBG = styled.div`
	position: absolute;
	width: 1295px;
	height: 1775px;
	left: 75px;
	top: 75px;
	z-index: 1000;
	background: #00aeef;
`;

const LogoContainer = styled.div`
	position: absolute;
	width: 150px;
	height: 150px;
	left: 653px;
	bottom: 41px;
	z-index: 2000;
	border-radius: 1000px;
`;

const ClubNameContainer = styled.div`
	position: absolute;
	width: 1246px;
	left: 447px;
	bottom: 53px;
	z-index: 2000;
`;

const ClubName = styled.h1`
	position: absolute;

	font-weight: 900;
	font-size: 3em;
	margin: 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.015em;
	text-transform: uppercase;
`;

/*

Const SponsorsNameContianer = styled.div`
	position: absolute;
	width: 1246px;
	height: 132px;
	left: 97px;
	top: 1000px;
`;
*/

const SponsorsNameContianer = styled.div`
	position: absolute;
	width: 1246px;
	left: 100px;
	top: 200px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const TitleSponsorImg = styled.div`
	width: 100%;
	height: 600px;
	margin-bottom: 10px;
	text-align: center;
`;
const SponsorImg = styled.div`
	width: 50%;
	height: 400px;
	margin-bottom: 10px;
	text-align: center;
`;

const SponsorRows = ({DATA, fontFamily, theme, FPS}) => {
	const frame = useCurrentFrame();
	const findPrimarySponsor = (sponsors, value) => {
		return sponsors.find((sponsor) => sponsor.isPrimary === value);
	};
	const filterPrimarySponsor = (sponsors, value) => {
		return sponsors.filter((sponsor) => sponsor.isPrimary === value);
	};
	return (
		<SponsorsNameContianer>
			{[findPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors, true)].map((s, i) => {
				return (
					<TitleSponsorImg key={i}>
						<Img
							src={s.Logo}
							style={{
								clipPath: FromTopToBottom(25, 'Wobbly'),
								opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
								maxHeight: '400px',
								height: '400px',
							}}
						/>
						<h1
							style={{
								fontFamily,
								clipPath: FromTopToBottom(25, 'Wobbly'),
								color: getContrastColor(darkenColor(theme.primary)),
								opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
							}}
						>
							{s.Name}
						</h1>
					</TitleSponsorImg>
				);
			})}
			{filterPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors, false).map((s, i) => {
				return (
					<SponsorImg key={i}>
						<Img
							src={s.Logo}
							style={{
								clipPath: FromTopToBottom(25, 'Wobbly'),
								opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
								maxHeight: '300px',
								height: '300px',
							}}
						/>
						<h1
							style={{
								fontFamily,
								clipPath: FromTopToBottom(25, 'Wobbly'),
								color: getContrastColor(darkenColor(theme.primary)),
								opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
							}}
						>
							{s.Name}
						</h1>
					</SponsorImg>
				);
			})}
		</SponsorsNameContianer>
	);
};
