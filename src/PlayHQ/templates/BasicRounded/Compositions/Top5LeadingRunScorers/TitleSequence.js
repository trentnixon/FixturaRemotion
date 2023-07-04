import * as React from 'react';
import {AbsoluteFill, useVideoConfig, useCurrentFrame, spring} from 'remotion';

const TitleSequence = ({fps = 30, durationInFrames}) => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	if (frame > durationInFrames) {
		return null;
	}

	// Calculate the spring values for the fade in and scale up animation
	const opacity = spring({
		frame,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 30,
	});
	const scale = spring({
		frame,
		fps,
		from: 0.5,
		to: 1,
		durationInFrames: 30,
	});

	// Calculate the spring values for the move to top animation
	const top = spring({
		frame,
		fps,
		from: height / 2 - 100, // Start 100 pixels from the top
		to: 100, // End 100 pixels from the top
		durationInFrames: 30,
	});
	const left = spring({
		frame,
		fps,
		from: width / 2, // Start at the center of the frame
		to: width / 2, // End at the center of the frame
		durationInFrames: 30,
	});
	const transform = `translate(${left}px, ${top}px) scale(${scale})`;

	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		 />
	);
};

export default TitleSequence;
/*
<img
        src={`http://localhost:3000/public/images/LogoF.png`}
        alt="Title"
        style={{
          opacity,
          transform,
          width: "50%",
        }}
      />
*/
