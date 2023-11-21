import styled from 'styled-components';
import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {calculateLetterSpacing} from '../../../../utils/copy';
import {GetBackgroundContractColorForText, getContrastColor} from '../../../../utils/colors';

export const DisplayVideoTitleTop = ({THEME, frame, FPS_MAIN, VALUE}) => {
	return (
		<VideoTitle
			style={{
				color: getContrastColor(THEME.primary),
				fontFamily: 'Aclonica',
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_MAIN - 30,
					FPS_MAIN,
					1,
					0
				),
			}}
		>
			{VALUE}
		</VideoTitle>
	);
};

export const DisplayVideoTitleBottom = ({THEME, frame, FPS_MAIN, VALUE}) => {
	return (
		<VideoCategory
			style={{
				color: GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				),
				fontFamily: 'Aclonica',
				letterSpacing: `${calculateLetterSpacing(1220, 100, 'Run-Scorers')}px`,
				clipPath: FromTopToBottom(15, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_MAIN - 30,
					FPS_MAIN,
					1,
					0
				),
			}}
		>
			{VALUE}
		</VideoCategory>
	);
};

const VideoTitle = styled.h1`
	height: auto;
	margin: 0;
	font-size: 5em;
	line-height: 0.9em;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
`;
const VideoCategory = styled.h1`
	font-size: 4.8em;
	line-height: 1em;
	margin: 0;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
`;
