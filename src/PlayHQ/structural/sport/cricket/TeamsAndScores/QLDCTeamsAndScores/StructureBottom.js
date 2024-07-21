import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {OneMetaPoint} from '../../../../assets/common/FixtureMetadata/OneMetaPoint/OneMetaPoint';

const StructureBottomBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 0px;
`;

export const StructureBottom = (props) => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	const {FPS_SCORECARD} = TIMINGS;
	const frame = useCurrentFrame();
	const roundCustomStyles = {
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
		<StructureBottomBlock>
			<OneMetaPoint
				{...props}
				MetaPoints={['type']}
				textAlign="right"
				CustomStyle={roundCustomStyles}
			/>
		</StructureBottomBlock>
	);
};
