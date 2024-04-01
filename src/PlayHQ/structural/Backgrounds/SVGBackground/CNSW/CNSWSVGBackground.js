import { AFLSVGAnimation } from "./AFLSVGAnimation";
import { NetballSVGAnimation } from "./NetballSVGAnimation";
import { CricketSVGAnimation } from "./CricketSVGAnimation";

export const CNSWSVGBackground = ({Sport,THEME}) => {
	const SVG = {
		AFL: <AFLSVGAnimation THEME={THEME} />,
		Netball: <NetballSVGAnimation THEME={THEME} />,
		Cricket: <CricketSVGAnimation THEME={THEME} />,
	};
 
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				zIndex: 100,
				position: 'absolute',
				opacity: 1,
			}}
		>
			{SVG[Sport]}
		</div>
	);
};
