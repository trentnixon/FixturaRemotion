import styled from 'styled-components';
import {useStylesContext} from '../../../../context/StyleContext';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../context/LayoutContext';

const Divider = styled.div`
	width: ${(props) => props.width || '400px'};
	height: ${(props) => props.height || '5px'};
	background-color: ${(props) => props.mutedColor || '#ccc'};
	margin: ${(props) => props.margin || '0 0 30px 0'};
`;

export const MutedDivider = ({
	width = '400px',
	height = '5px',
	margin = '0 0 30px 0',
}) => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const frame = useCurrentFrame();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<Divider
			width={width}
			height={height}
			mutedColor={TemplateVariation.useMutedColor}
			margin={margin}
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
