import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

const MetaItem = styled.div`
	width: 100%;
	height: 42px;
	text-align: right;
	font-size: 1.5em;
	font-weight: 600;
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
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

export const DisplayMetaItem = (props) => {
	const {VALUE, fontFamily, FPS_SCORECARD, StyleConfig} = props;
	return (
		<MetaItem
			style={{...generateTeamStyle(FPS_SCORECARD),...StyleConfig.Font.Copy}}
			color={StyleConfig.Color.Primary.Contrast}
			fontFamily={fontFamily}

			
		>
			{VALUE}
		</MetaItem>
	);
};
