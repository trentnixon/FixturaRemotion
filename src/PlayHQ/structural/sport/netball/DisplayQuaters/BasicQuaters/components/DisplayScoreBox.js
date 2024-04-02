import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {ResultsScore} from '../../../../../../common/components/copy/commonAssetTypes';
import {ScoreBox} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayScoreBox = (props) => {
	const {score, ComponentFPS, Int, StyleConfig, TemplateVariation} = props;
	const {Font, Color} = StyleConfig;
	const {Display}=ComponentFPS
	const frame = useCurrentFrame();
	const AnimationStyles = {
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			Display.End - 15,
			Display.End,
			1,
			0
		),
	};
	const commonStyles = {
		...Font.Copy,
		color: Int === 1 ? Color.Primary.Contrast : Color.Secondary.Contrast,
		fontWeight: '800',
		display: 'block',
		letterSpacing: '-0.015em',
		textTransform: 'uppercase',
		width: '100%',
		fontSize: '1.8em',
		lineHeight: '1.2em',
		margin: 0,
		textAlign: 'center',
	};

	return (
		<ScoreBox
			style={{
				borderRadius: TemplateVariation.borderRadius,
				backgroundColor:
					Int === 1 ? Color.Primary.Opacity(0.9) : Color.Secondary.Opacity(0.9),
				borderColor:
					Int === 1 ? Color.Primary.Opacity(0.9) : Color.Secondary.Opacity(0.9),

				clipPath: FromMiddle(Display.Start, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					Display.End - 15,
					Display.End,
					1,
					0
				),
			}}
		>
			<ResultsScore customStyles={{...commonStyles, ...AnimationStyles}}>
				{score}
			</ResultsScore>
		</ScoreBox>
	);
};
