import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {useLayoutContext} from '../../../../context/LayoutContext';

export const HeaderLogo = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
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
				src={Club.Logo}
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

export const SingleResultHeaderLogo = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
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
				src={Club.Logo}
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
