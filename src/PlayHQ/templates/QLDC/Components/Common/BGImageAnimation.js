import {useEffect, useState} from 'react';
import {useCurrentFrame, Img} from 'remotion';
import {interpolateValueByFrame} from '../../../../Animation/interpolate';
/* import {SVGAnimation} from './SVGAnimation'; */
import {darkenColor, lightenColor} from '../../../../utils/colors';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
//import {getBackgroundColor} from '../../../../utils/colors';

const BlankColorBackground = ({backgroundColor}) => (
	<div
		style={{
			backgroundColor: backgroundColor,
			width: `${SpringToFrom(90 - 15, 45, 70, 'Wobbly')}%`,
			height: '100%',
			zIndex: 1,
			position: 'absolute',
			opacity: 0.8,
			right: 0,
		}}
	/>
);

const GradientBackground = ({gradient, FPS_MAIN}) => (
	<div
		style={{
			background: gradient,
			width: `103%`,
			height: '100%',
			zIndex: 1,
			position: 'absolute',
			right: 0,
			transform: `translateX(${SpringToFrom(
				0,
				1100,
				600,
				'Wobbly'
			)}px) translateX(${SpringToFrom(90 - 20, 0, -200, 'Slow')}px)
			translateX(${SpringToFrom(FPS_MAIN + 90, 0, -400, 'Slow')}px)
			`,
		}}
	/>
);

// Helper function to check the image size ratio compared to the screen size
const imageSizeRatio = (imageWidth, imageHeight, screenWidth, screenHeight) => {
	const widthRatio = imageWidth / screenWidth;
	const heightRatio = imageHeight / screenHeight;
	return {widthRatio, heightRatio};
};
// CNSW
export const BGImageAnimation = ({
	HeroImage,
	TIMINGS,
	THEME,
	TemplateVariation,
	FPS_MAIN,
}) => {
	const frame = useCurrentFrame();
	const [direction, setDirection] = useState(null);
	const {url, ratio} = HeroImage || {};
	const backgroundColor = THEME.primary;

	console.log('FPS_MAIN', FPS_MAIN);
	useEffect(() => {
		if (ratio === 'landscape') {
			setDirection('leftToRight');
		} else {
			setDirection('topToBottom');
		}
	}, [ratio]);

	let style = {};
	if (ratio === 'landscape') {
		style = landscapeAnimation(frame, TIMINGS, direction);
	} else if (ratio === 'portrait') {
		style = portraitAnimation(frame, TIMINGS, direction);
	}

	const renderBackground = (THEME, TemplateVariation) => {
		console.log(TemplateVariation);
		switch (TemplateVariation.Background) {
			case 'Gradient':
				// Define your gradient here or pass it through props
				const gradient = `linear-gradient(0deg, ${darkenColor(
					THEME.primary
				)}, ${darkenColor(THEME.secondary)})`;
				return <GradientBackground gradient={gradient} FPS_MAIN={FPS_MAIN} />;
			default:
				return <BlankColorBackground backgroundColor={backgroundColor} />;
		}
	};

	return (
		<div style={{backgroundColor: 'white'}}>
			<ImageContainer
				url={url}
				style={style}
				frame={frame}
				FPS_MAIN={FPS_MAIN}
			/>
			{renderBackground(THEME, TemplateVariation)}

			<div
				style={{
					width: '100%',
					height: '100%',
					zIndex: 0,
					position: 'absolute',
					backgroundColor: '#ECECEC',
				}}
			>
				{/* <SVGAnimation THEME={THEME} /> */}
			</div>
		</div>
	);
};

const ImageContainer = ({url, style, FPS_MAIN}) => {
	return (
		<div
			style={{
				height: '1076px',
				width: '554px',
				position: 'absolute',
				overflow: 'hidden',
				zIndex: 1000,
				top: '133px',
				left: '463px',
				transform: `translateX(${SpringToFrom(
					0,
					1000,
					0,
					'Wobbly'
				)}px) translateX(${SpringToFrom(90 - 20, 0, '-400', 'Slow')}px)
				translateX(${SpringToFrom(FPS_MAIN + 90, 0, '-1000', 'Slow')}px)
				`,
			}}
		>
			<Img src={url} style={style} />
		</div>
	);
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
		direction === 'topToBottom' ? -10 : 10, // Reduced to 10%
		direction === 'topToBottom' ? 10 : -10 // Reduced to 10%
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
	};
};
