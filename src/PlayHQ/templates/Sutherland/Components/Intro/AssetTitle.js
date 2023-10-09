import {useCurrentFrame} from 'remotion';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText, getContrastColor, getTitleColorOverGradient, lightenColor} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import styled from 'styled-components';

export const AssetTitle = ({FPS_INTRO, VIDEOMETA, THEME}) => {
	const frame = useCurrentFrame();
	return (
		<VideoTitle
			style={{
				fontFamily: 'Hurricane',
				clipPath: FromLeftToRight(7, 'Wobbly'),
				color: getContrastColor(THEME.primary),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_INTRO - 30,
					FPS_INTRO - 15,
					1,
					0
				),
			}}
		>
			{VIDEOMETA.Video.Title}
		</VideoTitle>
	);
};

const VideoTitle = styled.h1`
	width: 100%;
	font-weight: 400;
	font-size: 8em;
	margin: 0;
	padding: 0;
	line-height: 0.8em;
	text-align: left;
	letter-spacing: -0.02em;
	text-transform: uppercase;

	z-index: 2000;
`;
