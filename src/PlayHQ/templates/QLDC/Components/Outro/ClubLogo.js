import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {Img} from 'remotion';
export const ClubLogo = ({src, FPS}) => (
	<LogoContainer
		style={{
			transform: `scale(${SpringToFrom(
				25,
				0,
				1,
				'Wobbly'
			)}) scale(${SpringToFrom(FPS - 15, 1, 0, 'Slow')})`,
		}}
	>
		<Img src={src} width="120px" />
	</LogoContainer>
);

const LogoContainer = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 40px;
	z-index: 2000;
`;
