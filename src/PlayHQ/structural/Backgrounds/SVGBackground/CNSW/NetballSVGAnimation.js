import {interpolate, useCurrentFrame} from 'remotion';
import {lightenColor} from '../../../../utils/colors';
import {calculatePositionAndRotation} from './utils';

// Function to animate a circle based on its index

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
					padding: '0 20px',
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
				</g>
			</svg>
		</div>
	);
};
