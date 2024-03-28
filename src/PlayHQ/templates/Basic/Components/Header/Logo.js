import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {Img} from 'remotion';

export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	const {url, height,width} = LOGO
	
	return (
		<Logo
			style={{
				marginTop:'10px',
				borderRadius: '100%',
				transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<Img
				src={url}
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
	height: 180px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;


export const SingleResultHeaderLogo = ({FPS_MAIN, LOGO}) => {
	const {url, height,width} = LOGO
	console.log("LOGO ", LOGO)
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
				src={url}
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