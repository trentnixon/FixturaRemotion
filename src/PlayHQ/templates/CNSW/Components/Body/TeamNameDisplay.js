import styled from 'styled-components';
/* import {getContrastColor} from '../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate'; */
import {restrictString} from '../../../../utils/copy';

const TeamName = styled.h3`
	font-size: 1em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
	text-align: left;
	margin-left: 110px;

	color: ${(props) => props.color};
`;

export const TeamNameDisplay = ({name, StyleConfig}) => (
	<TeamName
		color={StyleConfig.Color.Secondary.Contrast}
		style={{...StyleConfig.Font.Copy}}
	>
		{restrictString(name, 32)}
	</TeamName>
);
