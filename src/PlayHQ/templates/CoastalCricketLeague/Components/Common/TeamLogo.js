import {useCurrentFrame} from 'remotion';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

export const TeamLogoCCL = (props) => {
	const {FPS_SCORECARD, Ratio=120} = props;
    const CLLLogo = {
		url: 'https://fixtura.s3.ap-southeast-2.amazonaws.com/logo_43_a0dc426f40.jpg',
	};
	const frame = useCurrentFrame();
	const IMGRATIO = Ratio;
	return (
		<ImageWithFallback
			src={CLLLogo}
			style={{
				objectFit: 'cover',
				height: IMGRATIO,
				width: IMGRATIO,
				marginRight: '5px',
				borderRadius: '100%',
				transform: `scale(${SpringToFrom(20, 0, 1, 'Wobbly')}) `,

				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		/>
	);
};
