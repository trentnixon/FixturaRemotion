import styled from 'styled-components';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {Audio} from 'remotion';
import {UseSoundEffect} from '../../../../structural/assets/common/audio/useSoundEffect';
const LogoContainer = styled.div`
	z-index: 2000;
	border-radius: 1000px;
	margin: 25px 0px;
`;
export const AccountLogo = (props) => {
	const {FPS_INTRO, VIDEOMETA} = props;
	const SoundEffect =
		'https://fixtura.s3.ap-southeast-2.amazonaws.com/Audiio_Quick_Rise_Whoosh_dd00484912.wav';
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
			<UseSoundEffect useSoundEffect={SoundEffect} startFrom={60} />
		</LogoContainer>
	);
};
