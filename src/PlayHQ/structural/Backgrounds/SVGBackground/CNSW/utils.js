import {Easing, interpolate, useCurrentFrame} from 'remotion';

export const calculatePositionAndRotation = (frame) => {
	if (frame < 80) {
		return {top: '33%', left: '50%', rotation: 0, scale: 1};
	} else if (frame <= 90) {
		const scale = interpolate(frame, [80, 90], [1, 0.8], {
			extrapolateRight: 'clamp',
			easing: Easing.inOut(Easing.cubic),
		});
		return {
			top:
				interpolate(frame, [80, 90], [33, 7], {
					extrapolateRight: 'clamp',
					easing: Easing.out(Easing.cubic),
				}) + '%',
			left:
				interpolate(frame, [80, 90], [50, 95], {
					extrapolateRight: 'clamp',
					easing: Easing.out(Easing.cubic),
				}) + '%',
			rotation: interpolate(frame, [80, 90], [0, 90], {
				extrapolateRight: 'clamp',
				easing: Easing.out(Easing.cubic),
			}),
			scale,
		};
	} else {
		return {top: '7%', left: '95%', rotation: 90, scale: 0.8};
	}
};

export const animateCircle = (frame, index) => {
	const startFrame = 30 + index;
	const endFadeInFrame = startFrame + 15;
	const startFadeOutFrame = 80;
	const endFadeOutFrame = 90;

	const opacity =
		frame < startFadeOutFrame
			? interpolate(frame, [startFrame, endFadeInFrame], [0, 1], {
					extrapolateRight: 'clamp',
			  })
			: interpolate(frame, [startFadeOutFrame, endFadeOutFrame], [1, 0], {
					extrapolateRight: 'clamp',
			  });

	const translateX = interpolate(
		frame,
		[startFrame, endFadeInFrame],
		[-15, 0],
		{
			extrapolateRight: 'clamp',
		}
	);

	return {opacity, transform: `translateX(${translateX}px)`};
};