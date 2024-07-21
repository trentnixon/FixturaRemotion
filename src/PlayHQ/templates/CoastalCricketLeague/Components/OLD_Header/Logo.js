import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {Img, AbsoluteFill} from 'remotion';

const Logo = styled.div`
	width: 110px;
	height: 110px;

	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 10px;
	margin-right: 10px;
	border-right: 3px solid white;
`;
export const HeaderLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<Logo
			style={{
				marginTop: '10px',
				transform: `translateY(${SpringToFrom(0, 100, 0, 'Springy100')}px)`,
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

export const SingleResultHeaderLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<SingleResultLogo
			style={{
				marginTop: '10px',
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
