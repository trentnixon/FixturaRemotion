import {Img} from 'remotion';
import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {FromBottomToTop} from '../../../Animation/ClipWipe';

const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;

export const AccountLogo = () => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();

	const Logo = DATA.VIDEOMETA?.Club?.Logo?.url;
	if (!Logo) return;
	return (
		<LogoContainer
			style={{
				clipPath: FromBottomToTop(7, 'Wobbly'),
				transform: `translateY(${SpringToFrom(
					0,
					-1000,
					1,
					'Wobbly'
				)}px) translateY(${SpringToFrom(
					TIMINGS.FPS_INTRO - 20,
					0,
					1000,
					'Smooth'
				)}px)`,
			}}
		>
			<Img
				src={Logo}
				style={{
					width: 'auto',
					maxHeight: '120px',
					minHeight: '120px',
					objectFit: 'contain',
					borderRadius: '0%',
				}}
			/>
		</LogoContainer>
	);
};
