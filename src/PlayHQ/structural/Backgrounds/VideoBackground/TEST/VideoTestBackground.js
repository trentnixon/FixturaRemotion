import {OffthreadVideo, Loop, useCurrentFrame} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useStylesContext} from '../../../../context/StyleContext';

export const VideoTestBackground = () => {
	const frame = useCurrentFrame();
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};
	const {Color} = StyleConfig;
	console.log('TemplateVariation ', TemplateVariation.useVideo);
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
					src={TemplateVariation.useVideo}
					onError={(e) => console.error('Video error:', e.target.error)}
				/>
			</Loop>
		</div>
	);
};
