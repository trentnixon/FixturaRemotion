import {useCurrentFrame} from 'remotion';
import {darkenColor, getContrastColor} from '../../../../utils/colors';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import styled from 'styled-components';

const YetToBat = styled.h3`
color: ${(props) => props.color};
font-size: 1em;
line-height: 1em;
font-weight: 400;
margin: 0;
letter-spacing: 0em;
text-transform: uppercase;
font-family: ${(props) => props.fontFamily};
`;

const generateTeamStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

export const DisplayYetToBat = (props) => {
	const {THEME, fontFamily, score, FPS_SCORECARD} = props;
	return (
		<YetToBat
			color={getContrastColor(darkenColor(THEME.primary))}
			fontFamily={fontFamily}
			style={generateTeamStyle(FPS_SCORECARD, THEME)}
		>
			{score}
		</YetToBat>
	);
};
