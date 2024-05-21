import styled from 'styled-components';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {ImageWithFallback} from '../../../utils/global/ImageWithFallback';
//import {UseSoundEffect} from '../../assets/common/audio/useSoundEffect';

const ClubNameContainer = styled.div`
	width: 100%;
	z-index: 2000;
	margin: 30px 0;
`;

const LogoContainer = styled.div`
	width: 100%;
	height: 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 40px;
	z-index: 2000;
`;

export const OutroScaleFromZero = (props) => {
	const {src, FPS} = props;

	/* 	const SoundEffect =
		'https://fixtura.s3.ap-southeast-2.amazonaws.com/Audiio_Quick_Rise_Whoosh_dd00484912.wav';
 */
	return (
		<ClubNameContainer>
			<LogoContainer
				style={{
					transform: `scale(${SpringToFrom(
						25,
						0,
						1,
						'Wobbly'
					)}) scale(${SpringToFrom(FPS - 15, 1, 0, 'Slow')})`,
				}}
			>
				<ImageWithFallback src={src} style={{width: '120px'}} />
			</LogoContainer>
		</ClubNameContainer>
	);
};
