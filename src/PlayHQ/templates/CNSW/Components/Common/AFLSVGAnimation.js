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

export const AFLSVGAnimation = ({THEME}) => {
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
				width='100%'
				height='100%'
				viewBox="0 0 745 624"
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
					<path
						d="M742.5 312C742.5 483.248 576.879 622.5 372 622.5C167.121 622.5 1.5 483.248 1.5 312C1.5 140.752 167.121 1.5 372 1.5C576.879 1.5 742.5 140.752 742.5 312Z"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect2Length}`}
						strokeDashoffset={rect2Dashoffset}
					/>

					<path
						d="M140 69C140 69 245.421 175.5 245.998 310C246.575 444.5 140.5 554 140.5 554"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect2Length}`}
						strokeDashoffset={rect2Dashoffset}
					/>

					<path
						d="M605.001 70C605.001 70 499.579 176.5 499.002 311C498.426 445.5 604.501 555 604.501 555"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect2Length}`}
						strokeDashoffset={rect2Dashoffset}
					/>

					<path
						d="M6.72125 270.5H7H91.5V353.5H7H6.72125C6.46663 353.278 5.86151 352.555 5.17482 350.468C3.63095 345.778 2 335.238 2 312C2 288.762 3.63095 278.222 5.17482 273.531C5.8615 271.445 6.46662 270.721 6.72125 270.5Z"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
					<path
						d="M738.279 270.56H738H653.5V353.56H738H738.279C738.533 353.338 739.138 352.615 739.825 350.529C741.369 345.838 743 335.298 743 312.06C743 288.822 741.369 278.282 739.825 273.591C739.138 271.505 738.533 270.781 738.279 270.56Z"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>

					<rect
						x="301.5"
						y="241.5"
						width="141"
						height="141"
						stroke={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
					/>
					<circle
						cx="371.5"
						cy="311.5"
						r="15"
						fill={SVGCOLOR}
						strokeWidth="3"
						strokeDasharray={`${rect1Length}`}
						strokeDashoffset={rect1Dashoffset}
						style={{opacity: rect3Opacity}}
					/>
				</g>
			</svg>
		</div>
	);
};
