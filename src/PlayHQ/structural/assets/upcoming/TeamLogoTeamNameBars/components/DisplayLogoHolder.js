// /components/DisplayLogoHolder.js
import {useCurrentFrame} from 'remotion';
import {LogoHolder} from './SharedStyles';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {ImageWithFallback} from '../../../../../utils/global/ImageWithFallback';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const DisplayLogoHolder = (props) => {
	const {teamLogo, position = 'left'} = props;
	const frame = useCurrentFrame();
	const IMGSIZING = [120, 160, 120];
	const LogoStyles = calculateImageDimensions(teamLogo, IMGSIZING);
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<LogoHolder
			style={{
				[position]: 10,
				top: '50%', // Align with the vertical center of the container
				transform: 'translateY(-50%)',
				clipPath: FromTopToBottom(30, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			<ImageWithFallback
				src={teamLogo}
				style={{
					...LogoStyles,
					borderRadius: '100%',
					objectFit: 'cover',
				}}
			/>
		</LogoHolder>
	);
};

export default DisplayLogoHolder;
