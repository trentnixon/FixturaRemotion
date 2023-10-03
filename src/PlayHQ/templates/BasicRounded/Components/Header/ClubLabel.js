import styled from 'styled-components';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {getContrastColor} from '../../../../utils/colors';

export const OrganisationName = ({THEME, FPS_MAIN, NAME, frame}) => {
	return (
		<ClubLabel
			style={{
				color: getContrastColor(THEME.primary),
				fontFamily: 'Heebo',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{NAME}
		</ClubLabel>
	);
};
const ClubLabel = styled.h1`
font-size: 2em;
line-height: 1.1em;
margin: 0;
font-style: normal;
font-weight: 300;
letter-spacing: 0.02em;
text-transform: uppercase;
`;
