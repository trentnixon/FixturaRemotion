import styled from 'styled-components';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {Img, useCurrentFrame} from 'remotion';
import { interpolateOpacityByFrame } from '../../../../../Animation/interpolate';

export const AccountLogo = (props) => {
	const {fontFamily, FPS_INTRO, VIDEOMETA} = props
	const frame = useCurrentFrame();
	return (
		<LogoContainer
			style={{
				fontFamily,
				opacity: interpolateOpacityByFrame(frame, 35, 70, 0, 1),
				transform: `translateX(${SpringToFrom(30, -30, 0, 'Wobbly')}px)`,
			}}
		>
			<Img
				src={VIDEOMETA.Club.Logo}
				style={{
					width: 'auto',
					maxHeight: '300px',
					minHeight: '300px',
					objectFit: 'contain',
					borderRadius: '10%',
				}}
			/>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;
