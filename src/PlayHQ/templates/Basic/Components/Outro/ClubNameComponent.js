import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

export const ClubNameComponent = ({name, frame, FPS, theme}) => (
	<ClubName
		style={{
			clipPath: FromTopToBottom(25, 'Wobbly'),
			color: GetBackgroundContractColorForText(theme.primary,theme.secondary),
			opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
		}}
	>
		{name}
	</ClubName>
);

const ClubName = styled.h1`
	font-weight: 400;
	font-size: 1.7em;
	margin: 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.015em;
	text-transform: uppercase;
`;
