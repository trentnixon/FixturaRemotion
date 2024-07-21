import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';

export const BasicDefaultTitleLogo = () => {
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
