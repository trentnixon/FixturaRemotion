import {interpolateValueByFrame} from '../../../Animation/interpolate';
import {BGImage} from '../UI/Image';

export const SimplelandscapeAnimation = (
	frame,
	TIMINGS,
	direction,
	imageWidth = 1920,
	imageHeight = 1080
) => {
	// Assume default image dimensions if not provided
	const aspectRatio = imageWidth / imageHeight;
	const screenHeight = 1350; // Consider making these dynamic
	const screenWidth = 1080;
	const scale = 1.005;
	const newHeight = screenHeight * scale;
	const newWidth = newHeight * aspectRatio;
	const zoomScale = interpolateValueByFrame(frame, 0, TIMINGS, scale, scale);
	const leftCenter = 50;
	const interpolatedPosition = interpolateValueByFrame(
		frame,
		0,
		TIMINGS,
		direction === 'leftToRight' ? -10 : 10,
		direction === 'leftToRight' ? 10 : -10
	);
	const leftPosition = leftCenter + interpolatedPosition;

	return {
		position: 'absolute',
		height: `${newHeight}px`,
		width: `${newWidth}px`,
		top: '50%',
		left: `calc(${leftPosition}%)`,
		transform: `translate(-50%, -50%) scale(${zoomScale})`,
	};
};

export const landscapeAnimation = (frame, TIMINGS, direction, HeroImage) => {
	const {url, height, width} = HeroImage;

	console.log('HeroImage ', HeroImage);
	// Calculate aspect ratio
	const aspectRatio = width / height;

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
	const ImgStyles = {
		position: 'absolute',
		height: `${newHeight}px`,
		width: `${newWidth}px`,
		top: '50%',
		left: `calc(${leftPosition}%)`,
		transform: `translate(-50%, -50%) scale(${zoomScale})`,
	};

	return <BGImage url={url} style={ImgStyles} />;
};
