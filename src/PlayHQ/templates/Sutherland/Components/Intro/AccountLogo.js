import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {Img} from 'remotion';

export const AccountLogo = ({fontFamily, FPS_INTRO, VIDEOMETA}) => {
	return (
		<LogoContainer
			style={{
				fontFamily,
				transform: `scale(${SpringToFrom(
					7,
					0,
					1,
					'Wobbly'
				)}) scale(${SpringToFrom(FPS_INTRO - 30, 1, 0, 'Slow')})`,
			}}
		>
			<Img
				src={VIDEOMETA.Club.Logo}
				style={{
					height: 'auto',
					maxWidth: '220px',
					minWidth: '220px',
					objectFit: 'contain',
					borderRadius: '10%',
				}}
			/>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	margin: 0 10px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;
