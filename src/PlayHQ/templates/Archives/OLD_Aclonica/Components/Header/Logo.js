import styled from 'styled-components';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../../Animation/ClipWipe';
import {Img, AbsoluteFill} from 'remotion';

export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<Logo
			style={{
				position:'absolute',
				bottom:'30px',
				left:'70px',
				
				transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<Img
				src={LOGO}
				width="100%"
				style={{
					borderRadius: '10%',
				}}
			/>
		</Logo>
	);
};

const Logo = styled.div`
	width: 180px;
	
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;


export const SingleResultHeaderLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<SingleResultLogo
			style={{
				marginTop:'10px',
				borderRadius: '100%',
				transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<Img
				src={LOGO}
				width="100%"
				style={{
					borderRadius: '10%',
				}}
			/>
		</SingleResultLogo>
	);
};

const SingleResultLogo = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;