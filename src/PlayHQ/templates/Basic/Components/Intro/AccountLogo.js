import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;
export const AccountLogo = (props) => {
	const {FPS_INTRO, VIDEOMETA} = props;

	return (
		<LogoContainer
			style={{
				transform: `scale(${SpringToFrom(
					7,
					0,
					1,
					'Wobbly'
				)}) scale(${SpringToFrom(FPS_INTRO - 30, 1, 0, 'Slow')})`,
			}}
		>
			<ImageWithFallback
				src={VIDEOMETA.Club.Logo}
				style={{
					width: 'auto',
					maxHeight: '300px',
					minHeight: '300px',
					objectFit: 'contain',
					borderRadius: '10%',
				}}
			/>
		</LogoContainer>
	);
};
