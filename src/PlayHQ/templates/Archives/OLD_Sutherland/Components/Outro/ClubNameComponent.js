import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {darkenColor, getContrastColor} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

export const ClubNameComponent = ({name, frame, FPS, THEME}) => (
	<ClubName
		style={{
			fontFamily: 'Oswald',
			clipPath: FromTopToBottom(25, 'Wobbly'),
			color: getContrastColor(darkenColor(THEME.primary)),
			opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
		}}
	>
		{name}
	</ClubName>
);

const ClubName = styled.h1`
	font-weight: 400;
	font-size: 1.7em;
	margin: 10px 0 0 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.015em;
	text-transform: uppercase;
`;
