import {Img} from 'remotion';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import styled from 'styled-components';

export const DisplayLogo = ({FPS_MAIN, LOGO}) => {
	return (
		<Logo
			style={{
				transform: `translateX(${SpringToFrom(0, -100, 0, 'Wobbly')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			<Img
				src={LOGO}
				style={{borderRadius: '100%', width: '100%', height: '100%'}}
			/>
		</Logo>
	);
};

const Logo = styled.div`
	width: 250px;
	height: auto;
	border-radius: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
`;
