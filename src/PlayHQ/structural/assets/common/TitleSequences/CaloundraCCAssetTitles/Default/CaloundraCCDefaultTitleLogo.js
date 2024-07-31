import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../../../Animation/ClipWipe';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';

export const CaloundraCCDefaultTitleLogo = () => {
	const {Club, TIMINGS} = useLayoutContext();

	const {FPS_MAIN} = TIMINGS;
	return (
		<Hidden>
			<Logo
				style={{
					marginTop: '0px',
					borderRadius: '100%',
					transform: `translateX(${SpringToFrom(7, -200, 0, 'Smooth')}px)`,
					clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
				}}
			>
				<ImageWithFallback
					src={Club.Logo}
					style={{
						width: 'auto',
						maxHeight: '140px',
						borderRadius: '10%',
					}}
				/>
			</Logo>
		</Hidden>
	);
};

const Logo = styled.div`
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Hidden = styled.div`
	overflow: hidden;
	margin-top: 10px;
	padding: 0;
	width: 200px;
	height: auto;
	margin-left: 10px;
`;
