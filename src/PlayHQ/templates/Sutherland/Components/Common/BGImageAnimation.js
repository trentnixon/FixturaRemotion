import {useEffect, useState} from 'react';
import {useCurrentFrame, Img, AbsoluteFill} from 'remotion';
import {interpolateValueByFrame} from '../../../../Animation/interpolate';
import {saturateOrDesaturateColor} from '../../../../utils/colors';

// Helper function to check the image size ratio compared to the screen size
const imageSizeRatio = (imageWidth, imageHeight, screenWidth, screenHeight) => {
	const widthRatio = imageWidth / screenWidth;
	const heightRatio = imageHeight / screenHeight;
	return {widthRatio, heightRatio};
};

export const BGImageAnimation = ({HeroImage, TIMINGS, THEME}) => {
	const frame = useCurrentFrame();
	const [direction, setDirection] = useState(null);
	const {url, ratio} = HeroImage || {};

	useEffect(() => {
		if (ratio === 'landscape') {
			setDirection('leftToRight');
		} else {
			setDirection('topToBottom');
		}
	}, [ratio]);

	let style = {};

	if (url) {
		if (ratio === 'landscape') {
			style = landscapeAnimation(frame, TIMINGS, direction);
		} else if (ratio === 'portrait') {
			style = portraitAnimation(frame, TIMINGS, direction);
		}

		return (
			<>
				<AbsoluteFill
					style={{
						background: saturateOrDesaturateColor(THEME.secondary, -75),
					}}
				>
					<Img src={url} style={style} />
				</AbsoluteFill>
			</>
		);
	} else {
		return (
			<div
				style={{
					backgroundColor: THEME.secondary,
					height: '100%',
					width: '100%',
				}}
			></div>
		);
	}
};

// Helper function for landscape image animation
const landscapeAnimation = (
	frame,
	TIMINGS,
	direction,
	imageWidth,
	imageHeight
) => {
	// Calculate aspect ratio
	const aspectRatio = imageWidth / imageHeight;

	// Screen dimensions
	const screenHeight = 1350; // You should replace this with a dynamic value if possible
	const screenWidth = 1080; // You should replace this with a dynamic value if possible

	// Scale the image to be 1.2 times the size of the screen
	const scale = 1.005;

	// Calculate new dimensions while maintaining the aspect ratio
	const newHeight = screenHeight * scale;
	const newWidth = newHeight * aspectRatio; // maintain aspect ratio

	const zoomScale = interpolateValueByFrame(frame, 0, TIMINGS, scale, scale);

	// Calculate the left position to center the image horizontally in the viewport
	const leftCenter = 50;

	// Interpolate the position for movement 10% either side of center
	const interpolatedPosition = interpolateValueByFrame(
		frame,
		0,
		TIMINGS,
		direction === 'leftToRight' ? -10 : 10,
		direction === 'leftToRight' ? 10 : -10
	);

	// Calculate the actual left position including the interpolated movement
	const leftPosition = leftCenter + interpolatedPosition;

	return {
		position: 'absolute',
		height: `${newHeight}px`,
		width: `${newWidth}px`,
		top: '50%',
		left: `calc(${leftPosition}%)`,
		transform: `translate(-50%, -50%) scale(${zoomScale})`,
		mixBlendMode: 'luminosity',
		/* filter: `blur(${interpolateValueByFrame(frame, 90, 120, 0, 5 )}px)`, */
	};
};

// Helper function for portrait image animation
const portraitAnimation = (
	frame,
	TIMINGS,
	direction,
	imageWidth,
	imageHeight
) => {
	const screenHeight = 1350; // You should replace this with a dynamic value if possible
	const screenWidth = 1080; // You should replace this with a dynamic value if possible

	const {widthRatio, heightRatio} = imageSizeRatio(
		imageWidth,
		imageHeight,
		screenWidth,
		screenHeight
	);

	// Scale the image to be 1.2 times the size of the screen
	const scale = 1.2;
	const zoomScale = interpolateValueByFrame(frame, 0, TIMINGS, scale, scale);

	// Calculate the top position to center the image vertically in the viewport
	const topCenter = 50;

	// Interpolate the position for movement 10% either side of center (instead of 20%)
	const interpolatedPosition = interpolateValueByFrame(
		frame,
		0,
		TIMINGS,
		direction === 'topToBottom' ? 20 : 0, // Reduced to 10%
		direction === 'topToBottom' ? 2 : -2 // Reduced to 10%
	);

	// Calculate the actual top position including the interpolated movement
	const topPosition = topCenter + interpolatedPosition;

	return {
		position: 'absolute',
		height: `${screenHeight * scale}px`,
		width: `${screenWidth * scale}px`,
		top: `calc(${topPosition}%)`,
		left: '50%',
		transform: `translate(-50%, -50%) scale(${zoomScale})`,
		mixBlendMode: 'luminosity',
		/* filter: `blur(${interpolateValueByFrame(frame, 90, 120, 0, 5 )}px)`, */
	};
};
