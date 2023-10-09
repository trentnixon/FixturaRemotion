import styled from 'styled-components';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
	getTitleColorOverGradient,
} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {useCurrentFrame} from 'remotion';

export const DisplayClubName = ({THEME, FPS_MAIN, NAME}) => {
	const frame = useCurrentFrame();
	return (
		<ClubLabel
			style={{
				color: getContrastColor(THEME.primary),
				fontFamily: 'Oswald', 
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{NAME}
		</ClubLabel>
	);
};

const ClubLabel = styled.h1`
	font-weight: 900;
	font-size: 2.3em;
	margin: 0px;
	padding: 0;
	line-height: 1em;
	text-align: left;
	letter-spacing: 0.075em;
	text-transform: uppercase;
`;
