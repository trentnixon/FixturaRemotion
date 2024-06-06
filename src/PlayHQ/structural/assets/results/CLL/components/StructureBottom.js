import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {OneMetaPoint} from '../../../common/FixtureMetadata/OneMetaPoint/OneMetaPoint';

const StructureBottomBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 0px;
`;

export const StructureBottom = (props) => {
	const {StyleConfig, FPS_SCORECARD} = props;
	const {Font, Color} = StyleConfig;
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
