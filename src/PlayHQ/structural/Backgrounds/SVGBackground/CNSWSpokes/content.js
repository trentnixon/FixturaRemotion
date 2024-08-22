import {interpolate, useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../context/LayoutContext';

export const CNSWSpokesContent = () => {
	const frame = useCurrentFrame();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	console.log(TIMINGS);
	const AssetLength = TIMINGS.FPS_INTRO + TIMINGS.FPS_MAIN;
	// Define the target heights for the rectangles
	const rect1Height = 1522.53;
	const rect2Height = 1522.53;
	const rect3Height = 1522.53;

	// Interpolate the height from 0 to full height between frames 0 to 25, then shrink from 75 to 90
	const animatedRect1Height = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 15, AssetLength - 15, AssetLength],
		[0, rect1Height, rect1Height, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const animatedRect2Height = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 20, AssetLength - 20, AssetLength],
		[0, rect2Height, rect2Height, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const animatedRect3Height = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 25, AssetLength - 25, AssetLength],
		[0, rect3Height, rect3Height, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	// Adjust the y-position to move upwards as the height decreases
	const animatedRect1Y = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 15, AssetLength - 15, AssetLength],
		[-238.717, -238.717, -238.717, -238.717 + rect1Height],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const animatedRect2Y = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 20, AssetLength - 20, AssetLength],
		[-419.583, -419.583, -419.583, -419.583 + rect2Height],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);
	const animatedRect3Y = interpolate(
		frame,
		[TIMINGS.FPS_INTRO, TIMINGS.FPS_INTRO + 25, AssetLength - 25, AssetLength],
		[10.835, 10.835, 10.835, 10.835 + rect3Height],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	return (
		<svg
			width="1080"
			height="298"
			viewBox="0 0 1080 298"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{position: 'absolute', bottom: 0, zIndex: 10}}
		>
			<mask
				id="mask0_900_3997"
				style={{maskType: 'alpha'}}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="1081"
				height="298"
			>
				<rect
					x="1081"
					width="298"
					height="1081"
					transform="rotate(90 1081 0)"
					fill="#D9D9D9"
				/>
			</mask>
			<g mask="url(#mask0_900_3997)">
				<rect
					x="1600.26"
					y={animatedRect1Y} // Animate y to make it shrink upwards
					width="40"
					height={animatedRect1Height} // Animate the height
					transform="rotate(58.0812 1600.26 -238.717)"
					fill="white"
				/>
				<rect
					x="1408.31"
					y={animatedRect2Y} // Animate y to make it shrink upwards
					width="40"
					height={animatedRect2Height} // Animate the height
					transform="rotate(38.0577 1408.31 -419.583)"
					fill="#8CD5F6"
				/>
				<rect
					x="1718.25"
					y={animatedRect3Y} // Animate y to make it shrink upwards
					width="40"
					height={animatedRect3Height} // Animate the height
					transform="rotate(78.8991 1718.25 10.835)"
					fill="#E4032C"
				/>
			</g>
		</svg>
	);
};
