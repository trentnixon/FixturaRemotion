import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import styled from 'styled-components';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';

const YetToBat = styled.h3`
	font-size: 1.25em;
	line-height: 1em;
	font-weight: 400;
	letter-spacing: 0em;
	text-transform: uppercase;
	justify-content: center;
	align-items: center;
	display: flex;
	padding: 0;
	margin: 0;
	min-height: inherit;
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

export const DisplayYetToBat = ({score}) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	console.log('[Color.Contrast]', Color.Primary);
	return (
		<YetToBat
			color={Color.Primary.Contrast}
			style={{...generateTeamStyle(TIMINGS.FPS_SCORECARD), ...Font.Copy}}
		>
			{score}
		</YetToBat>
	);
};
