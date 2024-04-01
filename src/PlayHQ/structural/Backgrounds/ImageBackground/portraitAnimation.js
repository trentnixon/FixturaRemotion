import {interpolateValueByFrame} from '../../../Animation/interpolate';
import {BGImage} from '../UI/Image';

export const SimplePortraitAnimation = (
	frame,
	TIMINGS,
	direction,
	imageWidth,
	imageHeight,
	markerPosition
) => {
	// Assume default image dimensions if not provided

	const scaleWidth = (1080 * 1.2) / imageWidth;
	const scaleHeight = (1350 * 1.2) / imageHeight;

	const scale = Math.max(scaleWidth, scaleHeight);

	const scaledImageWidth = imageWidth * scale;
	const scaledImageHeight = imageHeight * scale;

	const topCenter = 0;
	const interpolatedPosition = interpolateValueByFrame(
		frame,
		0,
		TIMINGS,
		0,
		-5
	);
	const topPosition = topCenter + interpolatedPosition;

	return {
		position: 'absolute',
		height: `${scaledImageHeight}px`,
		width: `${scaledImageWidth}px`,
		top: `0%`,
		left: '0%',

		transform: `translate(${0}%, ${topPosition}%) `,
	};
};


export const portraitAnimation = (frame, TIMINGS, direction, HeroImage) => {
	const {url, ratio, height, width} = HeroImage;
	const screenHeight = 1350; // You should replace this with a dynamic value if possible
	const screenWidth = 1080; // You should replace this with a dynamic value if possible

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
		direction === 'topToBottom' ? -10 : 10, // Reduced to 10%
		direction === 'topToBottom' ? 10 : -10 // Reduced to 10%
	);

	// Calculate the actual top position including the interpolated movement
	const topPosition = topCenter + interpolatedPosition;

	const ImgStyles = {
		position: 'absolute',
		height: `${screenHeight * scale}px`,
		width: `${screenWidth * scale}px`,
		top: `calc(${topPosition}%)`,
		left: '50%',

		transform: `translate(-50%, -50%) scale(${zoomScale})`,
	};

	return <BGImage url={url} style={ImgStyles} />;
};
