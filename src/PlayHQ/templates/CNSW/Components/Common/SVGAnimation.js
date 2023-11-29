import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {lightenColor} from '../../../../utils/colors';

// Function to calculate position and rotation based on the frame
const calculatePositionAndRotation = (frame) => {
    if (frame < 80) {
        return { top: '33%', left: '50%', rotation: 0, scale: 1 };
    } else if (frame <= 90) {
        const scale = interpolate(frame, [80, 90], [1, 0.8], {
            extrapolateRight: 'clamp',
            easing: Easing.inOut(Easing.cubic),
        });
        return {
            top: interpolate(frame, [80, 90], [33, 7], {
                extrapolateRight: 'clamp',
                easing: Easing.out(Easing.cubic),
            }) + '%',
            left: interpolate(frame, [80, 90], [50, 95], {
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
        return { top: '7%', left: '95%', rotation: 90, scale: 0.8 };
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

export const SVGAnimation = ({THEME}) => {
	const frame = useCurrentFrame();
	const {top, left, rotation,scale } = calculatePositionAndRotation(frame);
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
		{cx: 454, cy: 540, r: 20},
		{cx: 839, cy: 534, r: 20},
		{cx: 896, cy: 497, r: 20},
		{cx: 799, cy: 374, r: 20},
		{cx: 617, cy: 693, r: 20},
		{cx: 597, cy: 355, r: 20},
		{cx: 347, cy: 443, r: 20},
		{cx: 347, cy: 604, r: 20},
		{cx: 1243, cy: 786.001, r: 20},
		{cx: 839, cy: 53, r: 20},
		{cx: 279, cy: 963, r: 20},
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
				viewBox="0 0 1386 1079"
				fill="none"
				style={{
					position: 'absolute',
					top: top,
					left: left,
					transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
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
                        style={{ opacity: rect3Opacity }}
                    />
					{circlesData.map((circle, index) => (
						<circle
							key={index}
							cx={circle.cx}
							cy={circle.cy}
							r={circle.r}
							fill={SVGCOLOR}
							style={animateCircle(frame, index)}
						/>
					))}
				</g>
			</svg>
		</div>
	);
};
