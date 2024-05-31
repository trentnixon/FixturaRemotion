import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';

export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<Logo
			style={{
				marginTop: '10px',
				borderRadius: '100%',
				transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<ImageWithFallback
				src={LOGO}
				style={{
					width: '100%',
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
	console.log('LOGO ', LOGO);
	return (
		<SingleResultLogo
			style={{
				marginTop: '10px',
				borderRadius: '100%',
				transform: `translateY(${SpringToFrom(0, -100, 0, 'Springy100')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<ImageWithFallback
				src={LOGO}
				style={{
					width: '100%',
					borderRadius: '10%',
				}}
			/>
			{/* <Img
				src={url}
				width="100%"
				style={{
					borderRadius: '10%',
				}}
			/> */}
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
