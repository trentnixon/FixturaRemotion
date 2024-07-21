import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {OneMetaPoint} from '../../../../assets/common/FixtureMetadata/OneMetaPoint/OneMetaPoint';

const StructureTopBlock = styled.div`
	width: 100%;
`;

export const StructureTop = (props) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;

	const frame = useCurrentFrame();
	const gradeNameCustom = {
		height: 'auto',
		padding: 0,
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
	return (
		<StructureTopBlock>
			<OneMetaPoint
				{...props}
				MetaPoints={['gradeName']}
				textAlign="right"
				CustomStyle={gradeNameCustom}
			/>
		</StructureTopBlock>
	);
};
