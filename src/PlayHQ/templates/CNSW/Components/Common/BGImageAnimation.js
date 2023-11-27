import {useEffect, useState} from 'react';
import {useCurrentFrame, Img, useVideoConfig, interpolate} from 'remotion';
import {interpolateValueByFrame} from '../../../../Animation/interpolate';
import {lightenColor} from '../../../../utils/colors';
//import {getBackgroundColor} from '../../../../utils/colors';

// Helper function to check the image size ratio compared to the screen size
const imageSizeRatio = (imageWidth, imageHeight, screenWidth, screenHeight) => {
	const widthRatio = imageWidth / screenWidth;
	const heightRatio = imageHeight / screenHeight;
	return {widthRatio, heightRatio};
};

export const BGImageAnimation = ({HeroImage, TIMINGS, THEME}) => {
	/* if (TIMINGS > 10000)
		return (
			<CreateNoise
				backgroundColor={getBackgroundColor(THEME.primary, THEME.secondary)}
				THEME={THEME}
			/>
		); */

	const frame = useCurrentFrame();
	const [direction, setDirection] = useState(null);
	const {url, ratio} = HeroImage || {};

	//const backgroundColor = getBackgroundColor(THEME.primary, THEME.secondary);
	const backgroundColor = THEME.primary;
	useEffect(() => {
		if (ratio === 'landscape') {
			//setDirection(Math.random() > 0.5 ? 'leftToRight' : 'rightToLeft');
			setDirection('leftToRight');
		} else {
			//setDirection(Math.random() > 0.5 ? 'topToBottom' : 'bottomToTop');
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
			<div style={{marginLeft: '-1px'}}>
				<div
					style={{
						width: '100%',
						height: '100%',
						zIndex: 100,
						position: 'absolute',
						opacity: 1,
					}}
				>
					<SVGAnimation THEME={THEME} />
				</div>
				<div
					style={{
						backgroundColor: backgroundColor,
						width: '100%',
						height: '100%',
						zIndex: 1,
						position: 'absolute',
						opacity: 0.8,
					}}
				></div>
				<div
					style={{
						backgroundColor,
						mixBlendMode: 'color',
						width: '100%',
						height: '100%',
						zIndex: 1,
						position: 'absolute',
					}}
				></div>
				<Img src={url} style={style} />
			</div>
		);
	} else {
		return (
			<div
				style={{
					backgroundColor: backgroundColor,
					width: '100%',
					height: '100%',
					zIndex: 1,
					position: 'absolute',
					opacity: 1,
				}}
			>
				<SVGAnimation THEME={THEME} />
			</div>
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

const SVGAnimation = ({THEME}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	// Calculate position and rotation values
	let top, left, rotation;

	if (frame < 80) {
		// Before animation starts
		top = '33%';
		left = '50%';
		rotation = 0;
	} else if (frame >= 80 && frame <= 90) {
		// During animation
		top =
			interpolate(frame, [80, 90], [33, 7], {extrapolateRight: 'clamp'}) + '%';
		left =
			interpolate(frame, [80, 90], [50, 95], {extrapolateRight: 'clamp'}) + '%';
		rotation = interpolate(frame, [80, 90], [0, 90], {
			extrapolateRight: 'clamp',
		});
	} else {
		// After animation ends
		top = '7%';
		left = '95%';
		rotation = 90;
	}

	// Combine transformations
	const transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

	const animateCircle = (index) => {
		const startFrame = 30 + index;
		const endFadeInFrame = startFrame + 15;
		const startFadeOutFrame = 80;
		const endFadeOutFrame = 90;

		let opacity;

		if (frame < startFrame) {
			// Before the circle starts fading in
			opacity = 0;
		} else if (frame >= startFrame && frame < endFadeInFrame) {
			// Fade in
			opacity = interpolate(frame, [startFrame, endFadeInFrame], [0, 1], {
				extrapolateRight: 'clamp',
			});
		} else if (frame >= endFadeInFrame && frame < startFadeOutFrame) {
			// After fade in and before fade out
			opacity = 1;
		} else if (frame >= startFadeOutFrame && frame <= endFadeOutFrame) {
			// Fade out
			opacity = interpolate(
				frame,
				[startFadeOutFrame, endFadeOutFrame],
				[1, 0],
				{
					extrapolateRight: 'clamp',
				}
			);
		} else {
			// After fade out
			opacity = 0;
		}

		// Position animation (example with x-motion)
		const translateX = interpolate(
			frame,
			[startFrame, endFadeInFrame],
			[-15, 0],
			{
				extrapolateRight: 'clamp',
			}
		);

		return {
			opacity,
			transform: `translateX(${translateX}px)`,
		};
	};

	// Animation for the first rectangle
	const rect1Length = 2 * (603 + 469);
	const rect1Dashoffset = interpolate(frame, [0, 25], [rect1Length, 0], {
		extrapolateRight: 'clamp',
	});

	// Animation for the second rectangle
	const rect2Length = 2 * (1383 + 1076);
	const rect2Dashoffset = interpolate(frame, [0, 35], [rect2Length, 0], {
		extrapolateRight: 'clamp',
	});

	// Animation for the third rectangle
	const opacity = interpolate(frame, [20, 50], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const SVGCOLOR = lightenColor(lightenColor(THEME.primary));
	return (
		<div
			style={{
				width: '100%', // Container fills its parent
				height: '100%',
				display: 'flex',

				justifyContent: 'center', // Horizontally center the child
				alignItems: 'center', // Vertically center the child
				position: 'relative', // Relative positioning for absolute children
			}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 1386 1079"
				fill="none"
				style={{
					position: 'absolute',
					top: top,
					left: left,
					transform: transform,
				}}
			>
				<g opacity="0.5">
					<rect
						x="392.498"
						y="304.5"
						width="603"
						height="469"
						rx="234.5"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
					<rect
						x="1.5"
						y="1.5"
						width="1383"
						height="1076"
						rx="507.5"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect2Length}`}
						strokeDashoffset={rect2Dashoffset}
					/>
					<rect
						x="789.998"
						y="524"
						width="31"
						height="193"
						transform="rotate(90 789.998 524)"
						fill={SVGCOLOR}
						style={{opacity}}
					/>
					<circle
						cx="454"
						cy="540"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(0)}
					/>
					<circle
						cx="839"
						cy="534"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(5)}
					/>

					<circle
						cx="896"
						cy="497"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(10)}
					/>
					<circle
						cx="896"
						cy="497"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(5)}
					/>
					<circle
						cx="799"
						cy="374"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(7)}
					/>
					<circle
						cx="617"
						cy="693"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(15)}
					/>
					<circle
						cx="597"
						cy="355"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(12)}
					/>
					<circle
						cx="347"
						cy="443"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(5)}
					/>
					<circle
						cx="347"
						cy="604"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(0)}
					/>
					<circle
						cx="1243"
						cy="786.001"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(14)}
					/>
					<circle
						cx="839"
						cy="53"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(3)}
					/>
					<circle
						cx="279"
						cy="963"
						r="20"
						fill={SVGCOLOR}
						style={animateCircle(20)}
					/>
				</g>
			</svg>
		</div>
	);
};
