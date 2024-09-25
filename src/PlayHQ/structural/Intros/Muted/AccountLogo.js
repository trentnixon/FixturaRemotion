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
	margin: 0px;
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
					TIMINGS.FPS_INTRO - 25,
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
					maxHeight: '250px',
					minHeight: '250px',
					objectFit: 'contain',
					borderRadius: '0%',
				}}
			/>
		</LogoContainer>
	);
};
