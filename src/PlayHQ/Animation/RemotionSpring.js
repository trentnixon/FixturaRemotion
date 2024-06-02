import {useCurrentFrame, useVideoConfig, spring} from 'remotion';

const SpringConfig = {
	Default: {
		damping: 10,
		stiffness: 5,
		mass: 0.3,
	},
	fast: {
		damping: 10,
		stiffness: 55,
		mass: 0.9,
	},
	Springy100: {
		damping: 15,
		stiffness: 100,
		mass: 0.3,
	},
	Bouncy: {
		damping: 15,
		stiffness: 150,
		mass: 1,
	},
	Gentle: {
		damping: 30,
		stiffness: 60,
		mass: 1,
	},
	Wobbly: {
		damping: 20,
		stiffness: 20,
		mass: 2,
	},
	Snappy: {
		damping: 100,
		stiffness: 150,
		mass: 0.1,
	},
	Slow: {
		damping: 50,
		stiffness: 20,
		mass: 1,
	},
	Smooth: {
		damping: 15,
		stiffness: 20,
		mass: 0.5,
	},
};

export const SpringIn = (fps, frame, effect = 'Springy100') => {
	return spring({
		fps,
		from: 0,
		to: 1,
		frame,
		config: SpringConfig[effect],
	});
};

/*
Alter a box Height 
ContainerHeight(fps,frame,int,FROM,TO)
*/
export const SpringToFrom = (
	int,
	FROM,
	TO,
	effect = 'Default',
	Speed = 'normal'
) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const SPEED = {
		fast: fps / 5,
		normal: fps / 2,
		slow: fps / 1,
	};

	return spring({
		fps: SPEED[Speed],
		from: FROM,
		to: TO,
		frame: frame - int,
		config: SpringConfig[effect],
	});
};
