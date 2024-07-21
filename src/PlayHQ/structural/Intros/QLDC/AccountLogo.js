import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {Img} from 'remotion';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';

const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;

export const AccountLogo = () => {
	const {DATA} = useVideoDataContext();
	const {THEME} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {fontFamily} = THEME;
	const Logo = DATA?.VIDEOMETA?.Club?.Logo?.url

	if(!Logo) return
	return (
		<LogoContainer
			style={{
				fontFamily,
				transform: `translateY(${SpringToFrom(
					7,
					-1000,
					1,
					'Wobbly'
				)}px) translateY(${SpringToFrom(
					TIMINGS.FPS_INTRO - 40,
					0,
					-1000,
					'Slow'
				)}px)`,
			}}
		>
			<Img
				src={DATA?.VIDEOMETA?.Club?.Logo?.url}
				style={{
					width: 'auto',
					maxHeight: '150px',
					minHeight: '150px',
					objectFit: 'contain',
					borderRadius: '10%',
				}}
			/>
		</LogoContainer>
	);
};
