import {Img} from 'remotion';
import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useLayoutContext} from '../../../context/LayoutContext';

const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;

export const AccountLogo = () => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();

	const Logo = DATA.VIDEOMETA?.Club?.Logo?.url
	if(!Logo) return
	return (
		<LogoContainer
			style={{
				transform: `translateY(${SpringToFrom(
					7,
					-1000,
					1,
					'Wobbly'
				)}px) translateY(${SpringToFrom(
					TIMINGS.FPS_INTRO - 20,
					0,
					-1000,
					'Wobbly'
				)}px)`,
			}}
		>
			<Img
				src={Logo}
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
