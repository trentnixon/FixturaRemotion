import {OffthreadVideo, Loop, useCurrentFrame} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useStylesContext} from '../../../../context/StyleContext';

export const VideoTestBackground = () => {
	const frame = useCurrentFrame();
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;
	return (
		<div
			style={{
				backgroundColor: Color.Secondary.Main,
				height: '100%',
				width: '100%',
			}}
		>
			<div
				style={{
					backgroundColor: Color.Primary.Main,
					width: '100%',
					height: '100%',
					zIndex: 100,
					position: 'relative',
					mixBlendMode: 'color',
				}}
			/>
			<Loop durationInFrames={900}>
				<OffthreadVideo
					style={{
						opacity: interpolateOpacityByFrame(frame, 60, 120, 1, 0.4),
						width: '1350px',
						height: '1080',
					}}
					startFrom={0}
					playbackRate={0.7}
					src="https://fixtura.s3.ap-southeast-2.amazonaws.com/Fixtura_graphic_BG_Test003_8d811f41ca.mp4"
				/>
			</Loop>
		</div>
	);
};
