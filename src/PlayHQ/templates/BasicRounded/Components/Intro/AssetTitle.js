import styled from "styled-components";
import { FromLeftToRight } from "../../../../Animation/ClipWipe";
import { getContrastColor } from "../../../../utils/colors";
import { interpolateOpacityByFrame } from "../../../../Animation/interpolate";
import {useCurrentFrame} from 'remotion';
export const AssetTitle = ({fontFamily, FPS, DATA, theme}) => {
	const frame = useCurrentFrame();
	return (
		<VideoTitle
			style={{
				fontFamily,
				clipPath: FromLeftToRight(7, 'Wobbly'),
				color: getContrastColor(theme.primary),
				opacity: interpolateOpacityByFrame(frame, FPS - 30, FPS - 15, 1, 0),
			}}
		>
			{DATA.VIDEOMETA.Video.Title}
		</VideoTitle>
	);
};

const VideoTitle = styled.h1`
	width: 100%;
	font-weight: 900;
	font-size: 9em;
	margin: 0;
	padding: 0;
	line-height: 0.8em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;