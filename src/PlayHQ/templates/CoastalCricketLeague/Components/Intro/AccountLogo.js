import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {Img} from 'remotion';

export const AccountLogo = (props) => {
	const {fontFamily, FPS_INTRO, VIDEOMETA} = props;
	return (
		<LogoContainer
			style={{
				fontFamily,
				transform: `translateY(${SpringToFrom(
					7,
					-1000,
					1,
					'Wobbly'
				)}px) translateY(${SpringToFrom(FPS_INTRO - 15, 0, -1000, 'Slow')}px)`,
			}}
		>
			<Img
				src={VIDEOMETA.Club.Logo.url}
				style={{
					width: '400px',
					maxHeight: '400px',
					minHeight: '400px',
					objectFit: 'cover',
					borderRadius: '100%',
				}}
			/>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin:  0px;
`;
