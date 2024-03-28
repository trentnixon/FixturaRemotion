import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {lightenColor} from '../../../../utils/colors';

// Function to calculate position and rotation based on the frame
const calculatePositionAndRotation = (frame) => {
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

// Function to animate a circle based on its index
const animateCircle = (frame, index) => {
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

export const NetballSVGAnimation = ({THEME}) => {
	const frame = useCurrentFrame();
	const {top, left, rotation, scale} = calculatePositionAndRotation(frame);
	const SVGCOLOR = lightenColor(lightenColor(THEME.primary));

	// Animation for the rectangles
	const rect1Length = 2 * (603 + 469);
	const rect1Dashoffset = interpolate(frame, [0, 25], [rect1Length, 0], {
		extrapolateRight: 'clamp',
	});
	const rect2Length = 2 * (1383 + 1076);
	const rect2Dashoffset = interpolate(frame, [0, 35], [rect2Length, 0], {
		extrapolateRight: 'clamp',
	});
	// Animation for the third rectangle's opacity
	const rect3Opacity = interpolate(frame, [20, 50], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const circlesData = [
		// Existing circles from SVG, adapted to new coordinates or sizes if needed
		{cx: '826', cy: '211', r: '6.5', fill: 'black'},
		{cx: '76.5', cy: '196.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '49.5', cy: '225.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '163.5', cy: '281.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '190.5', cy: '233.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '316.5', cy: '360.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '255.5', cy: '76.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '463.5', cy: '221.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '364.5', cy: '214.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '601.5', cy: '333.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '751.5', cy: '227.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '588.5', cy: '152.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '790.5', cy: '174.5', r: '13.5', fill: '#D9D9D9'},
		{cx: '523.5', cy: '127.5', r: '13.5', fill: '#D9D9D9'},
	];

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 842 423"
				fill="none"
				style={{
                    padding:'0 20px',
					position: 'absolute',
					top,
					left,
					transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
				}}
			>
				<g opacity="0.5">
					<rect
						x="1.5"
						y="1.5"
						width="839"
						height="420"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect2Length}`}
						strokeDashoffset={rect2Dashoffset}
					/>
					<line
						x1="282.5"
						y1="1"
						x2="282.5"
						y2="422"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
					<line
						x1="561.5"
						x2="561.5"
						y2="421"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>

					<circle
						cx="421.5"
						cy="210.5"
						r="16"
						fill={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
						style={{opacity: rect3Opacity}}
					/>
					<path
						d="M3 344.5C77.2823 344.5 135.5 283.782 135.5 209.5C135.5 135.218 76.7823 76 2.5 76"
						fill={SVGCOLOR}
						stroke-width="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
						style={{opacity: rect3Opacity}}
					/>
					<line
						x1="5"
						y1="188"
						x2="5"
						y2="234"
						fill={SVGCOLOR}
						stroke-width="2"
					/>
					<line
						x1="5"
						y1="211"
						x2="10"
						y2="211"
						fill={SVGCOLOR}
						stroke-width="2"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
				
					<path
						d="M838.5 78C764.218 78 706 138.718 706 213C706 287.282 764.718 346.5 839 346.5"
						fill={SVGCOLOR}
						stroke-width="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
						style={{opacity: rect3Opacity}}
					/>
					<line
						x1="836.5"
						y1="234.5"
						x2="836.5"
						y2="188.5"
						fill={SVGCOLOR}
						stroke-width="2"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
					<line
						x1="836.5"
						y1="211.5"
						x2="831.5"
						y2="211.5"
						fill={SVGCOLOR}
						stroke-width="2"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
{/* 
					{circlesData.map((circle, index) => (
						<circle
							key={index}
							cx={circle.cx}
							cy={circle.cy}
							r={circle.r}
							fill={SVGCOLOR}
							style={animateCircle(frame, index)}
						/>
					))} */}
				</g>
			</svg>
		</div>
	);
};
