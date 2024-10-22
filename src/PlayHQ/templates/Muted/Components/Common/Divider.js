import styled from 'styled-components';
import {useStylesContext} from '../../../../context/StyleContext';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../context/LayoutContext';

const Divider = styled.div`
	width: 400px;
	height: 5px;
	background-color: ${(props) => props.mutedColor};
	margin: 0 0 30px 0;
`;
export const MutedDivider = () => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const frame = useCurrentFrame();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<Divider
			mutedColor={TemplateVariation.useMutedColor}
			style={{
				clipPath: FromLeftToRight(10, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		/>
	);
};
