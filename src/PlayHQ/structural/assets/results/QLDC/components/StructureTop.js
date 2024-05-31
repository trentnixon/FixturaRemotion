import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {OneMetaPoint} from '../../../common/FixtureMetadata/OneMetaPoint/OneMetaPoint';

const StructureTopBlock = styled.div`
	width: 100%; 
`;

export const StructureTop = (props) => {
	const {StyleConfig, FPS_SCORECARD} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const gradeNameCustom = {
        height: 'auto',
        padding:0,
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
