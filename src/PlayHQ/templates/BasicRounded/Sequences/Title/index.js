import {Sequence, Series, Img} from 'remotion';

import styled from 'styled-components';

import {useCurrentFrame} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {
	EraseToMiddleFromTop,
	EraseFromMiddle,
	FromTopToBottom,
	FromLeftToRight,
} from '../../../../Animation/ClipWipe';
import {getContrastColor, lightenColor} from '../../../../utils/colors';

export const TitleSequenceFrame = ({theme, FPS, fontFamily, DATA}) => {
	const frame = useCurrentFrame();

	const getPrimarySponsor = (sponsorList) => {
		console.log(sponsorList);
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};

	const getGradient = (color, lightColor) => {
		console.log(color);
		return `linear-gradient(to bottom, ${color}, ${lightColor})`;
	};

	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS} layout="none">
						<LogoContainer
							style={{
								fontFamily,
								transform: `scale(${SpringToFrom(
									7,
									0,
									1,
									'Wobbly'
								)}) scale(${SpringToFrom(FPS - 30, 1, 0, 'Slow')})`,
							}}
						>
							<Img
								src={DATA.VIDEOMETA.Club.Logo}
								style={{
									width: 'auto',
									maxHeight: '400px',
									minHeight: '400px',
									objectFit: 'contain',
									borderRadius:'100%'
								}}
							/>
						</LogoContainer>
						<ClubNameContainer>
							<ClubName
								style={{
									fontFamily,
									clipPath: FromTopToBottom(15, 'Wobbly'),
									color: getContrastColor(theme.primary), 
									opacity: interpolateOpacityByFrame(
										frame,
										FPS - 25,
										FPS - 15,
										1,
										0
									),
								}}
							>
								{DATA.VIDEOMETA.Club.Name}
							</ClubName>
						</ClubNameContainer>
						<VideoTitle
							style={{
								fontFamily,
								clipPath: FromLeftToRight(25, 'Wobbly'),
								color: getContrastColor(theme.primary),
								opacity: interpolateOpacityByFrame(
									frame,
									FPS - 25,
									FPS - 15,
									1,
									0
								),
							}}
						>
							{DATA.VIDEOMETA.Video.Title}
						</VideoTitle>

						<SqareBG
							style={{
								background: getGradient(
									theme.secondary,
									lightenColor(theme.secondary)
								),
								opacity: 0.2,
								height: `${SpringToFrom(0, 0, 1950, 'Wobbly')}px`,
								transform: `translateY(${SpringToFrom(
									0,
									-190,
									0,
									'Wobbly'
								)}px)`,
								borderLeft: `5px solid ${lightenColor(theme.secondary)}`,
								borderRight: `5px solid ${lightenColor(theme.secondary)}`,
								clipPath: EraseFromMiddle(FPS - 20, 'Slow'),
							}}
						/>

						{/* 	<PrincipalLogo
							style={{
								transform: `translateY(${SpringToFrom(0, 300, 0, 'Wobbly')}px)`,
								clipPath: EraseToMiddleFromTop(FPS - 20, 'Slow'),
							}}
						>
							<Img
								src={getPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors).Logo}
								width="100%"
							/>
						</PrincipalLogo>
						<PlayHQLOGO
							style={{
								transform: `translateY(${SpringToFrom(0, 300, 0, 'Wobbly')}px)`,
								clipPath: EraseToMiddleFromTop(FPS - 20, 'Slow'),
							}}
						>
							<Img src={DATA.VIDEOMETA.Video.PlayHQLogo} width="100%" />
						</PlayHQLOGO> */}
					</Series.Sequence>
				</Series>
			</Sequence>
		</>
	);
};

const SqareBG = styled.div`
	position: absolute;
	width: 1440px;
	height: 1197px;
	left: 0;
	top: 0;
	z-index: 1000;
`;

const LogoContainer = styled.div`
	position: absolute;
	width: 500px;
	height: 500px;
	left: 485px;
	top: 500px;
	z-index: 2000;
	border-radius: 1000px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ClubNameContainer = styled.div`
	position: relative;
	width: 1246px;
	height: 132px;
	left: 97px;
	top: 1000px;
	z-index: 2000;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ClubName = styled.h1`
	position: absolute;
	width: 1246px;
	font-weight: 900;
	font-size: 7.5em;
	margin: 0;
	padding: 0;
	line-height: 0.8em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;

const VideoTitle = styled.h1`
	position: absolute;
	width: 100%;
	font-weight: 900;
	font-size: 12em;
	margin: 0;
	padding: 0;
	line-height: 0.8em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	bottom: 350px;
	z-index: 2000;
`;
const PlayHQLOGO = styled.div`
	position: absolute;
	width: 300px;
	height: 200px;
	left: 75px;
	bottom: 75px;
`;

const PrincipalLogo = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	right: 75px;
	bottom: 75px;
	background-color: red;
`;
