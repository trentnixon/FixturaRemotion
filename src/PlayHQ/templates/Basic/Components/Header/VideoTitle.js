import styled from 'styled-components';
import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {calculateLetterSpacing} from '../../../../utils/copy';

export const DisplayVideoTitleTop = (props) => {
	const {frame, FPS_MAIN, VALUE, StyleConfig} = props;
	const {Color, Font} = StyleConfig;
	return (
		<VideoTitle
			style={{
				...Font.Title,
				color: Color.Primary.BackgroundContractColor,
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

export const DisplayVideoTitleBottom = (props) => {
	const {frame, FPS_MAIN, VALUE, StyleConfig} = props;
	const {Color, Font} = StyleConfig;
	return (
		<VideoCategory
			style={{
				...Font.Title,
				color: Color.Primary.BackgroundContractColor,
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
	text-align: center;
	text-transform: uppercase;
`;
const VideoCategory = styled.h1`
	font-size: 4.5em;
	line-height: 1em;
	margin: 0;
	text-align: center;
	text-transform: uppercase;
`;
