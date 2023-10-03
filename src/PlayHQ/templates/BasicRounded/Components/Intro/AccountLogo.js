import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {Img} from 'remotion';

export const AccountLogo = ({fontFamily, FPS, DATA}) => {
	return (
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
					maxHeight: '300px',
					minHeight: '300px',
					objectFit: 'contain',
					borderRadius: '100%',
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
