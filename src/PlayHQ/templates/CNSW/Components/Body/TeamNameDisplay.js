import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

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

const TeamName = styled.h3`
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
	text-align: left;
	margin-left: 110px;
	font-size: 0.8em;
	color: ${(props) => props.color};
`;

export const TeamNameDisplay = ({name, fontFamily, THEME, FPS_SCORECARD}) => (
	<TeamName
		color={getContrastColor(THEME.secondary)}
		fontFamily={fontFamily}
		style={generateTeamStyle(FPS_SCORECARD, THEME)}
	>
		{name}
	</TeamName>
);
