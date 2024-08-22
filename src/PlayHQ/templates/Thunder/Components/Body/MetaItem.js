import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';

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

export const DisplayMetaItem = ({VALUE}) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;
	console.log("Color", Color)
	return (
		<MetaItem
			style={{...generateTeamStyle(FPS_SCORECARD), ...Font.Copy}}
			color={Color.Background.Contrast}
			fontFamily={Font.Copy.fontFamily}
		>
			{VALUE}
		</MetaItem>
	);
};
