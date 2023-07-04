import React from 'react';
import styled from 'styled-components';
import {

	useCurrentFrame,
	Img
} from 'remotion';

import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop, FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {
	getContrastColor,
} from '../../../../utils/colors';
import {calculateLetterSpacing} from '../../../../utils/copy';

export const LogoClubTitleHeader = ({THEME, fontFamily, DATA, FPS_MAIN}) => {
	const frame = useCurrentFrame();
	console.log(DATA.Video.TitleSplit)
	return (
		<Container>
			<Logo
				style={{
					transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
					clipPath:EraseToMiddleFromTop((FPS_MAIN-30),'Wobbly'),
				}}
			> 
			<Img src={DATA.Club.Logo} style={{ borderRadius:'100%', width:'100%', height:'100%'}}/>
		</Logo>
			<ClubLabel
				style={{
					color: getContrastColor(THEME.primary),
					fontFamily,
					opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
					clipPath:EraseToMiddleFromTop((FPS_MAIN-30),'Wobbly'),
				}}
			>
				{DATA.Club.Name}
			</ClubLabel>

			<VideoTitle
				style={{
					color: THEME.secondary,
					fontSize: '200px',
					letterSpacing: `0px`,
					fontFamily,
				  clipPath:FromMiddle(7,'Wobbly'), 
					opacity: interpolateOpacityByFrame(frame, (FPS_MAIN-30), FPS_MAIN, 1, 0),
				}}
			>
				{DATA.Video.TitleSplit[0]}
		
			</VideoTitle>
			<VideoCategory
				style={{
					color: THEME.secondary,
					fontFamily,
					fontSize: '100px',
					letterSpacing: `${calculateLetterSpacing(
						1220,
						100,
						'Run-Scorers'
					)}px`,
					clipPath:FromTopToBottom(15,'Slow'),
					opacity: interpolateOpacityByFrame(frame, (FPS_MAIN-30), FPS_MAIN, 1, 0),
				}}
			>
				
				{DATA.Video.TitleSplit[1]}
			</VideoCategory>
		</Container>
	);
};


const Container=styled.div`
z-index:1000`
const Logo = styled.div`
	position: absolute;
	width: 210px;
	height: 210px;
	left: 622px;
	top: 50px;
	border-radius: 170px;
`;

const ClubLabel = styled.h1`
position: absolute;
width: 100%;
height: auto;
left: 0px;
top: 260px;
margin:0;
font-style: normal;
font-weight: 300;
font-size: 50px;
line-height: 73px;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
`;

const VideoTitle = styled.h1`
	position: absolute;
	width: 1220px;
	height: auto;
	left: 110px;
	top: 315px;
	margin:0;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
	line-height:1em;
`;
const VideoCategory = styled.h1`
	position: absolute;
	width: 1220px;
	height: auto;
	left: 110px;
	top: 460px;
	margin:0;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
`;
