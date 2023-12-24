import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {Img} from 'remotion';

export const AccountLogo = (props) => {
	const {fontFamily, FPS_INTRO, VIDEOMETA} = props
	return (
		<LogoContainer
			style={{
				fontFamily,
				transform: `translateY(${SpringToFrom(
					7,
					-1000,
					1,
					'Wobbly'
				)}px) translateY(${SpringToFrom(FPS_INTRO - 20, 0, -1000, 'Slow')}px)`,
			}}
		>
			<Img
				src={VIDEOMETA.Club.Logo}
				style={{
					width: 'auto',
					maxHeight: '150px',
					minHeight: '150px',
					objectFit: 'contain',
					borderRadius: '10%',
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
