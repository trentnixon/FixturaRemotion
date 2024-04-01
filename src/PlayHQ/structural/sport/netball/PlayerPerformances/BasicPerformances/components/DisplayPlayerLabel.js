import {EraseFromMiddle} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {LabelWrapper} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayPlayerLabel = (props) => {
	const {ComponentFPS, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	return (
		<LabelWrapper
			color={Color.Primary.BackgroundContractColor}
			style={{
				...Font.Copy,
				fontSize: '1.3em',
				opacity: interpolateOpacityByFrame(
					frame,
					ComponentFPS.Start,
					ComponentFPS.Start + 15,
					0,
					1
				),
				clipPath: EraseFromMiddle(ComponentFPS.End - 15, 'Slow'),
			}}
		>
			Player
		</LabelWrapper>
	);
};
