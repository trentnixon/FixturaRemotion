// /components/DisplayTeamName.js
import {useCurrentFrame} from 'remotion';
import {TeamScoreContainer} from './SharedStyles';
import {
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FixtureLabels} from '../../../../../common/components/copy/commonAssetTypes';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '50px'; // Normal size
	if (textLength <= 20) return '45px'; // Large size
	return '35px'; // Extra-large size for longer texts
};

const DisplayTeamName = ({Value, bgColor, FontColor, LTR = true}) => {
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_SCORECARD} = TIMINGS;
	const {Font} = StyleConfig;

	const frame = useCurrentFrame();

	const AnimationStyles = {
		clipPath: LTR ? FromLeftToRight(7, 'Wobbly') : FromRightToLeft(7, 'Wobbly'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};

	const DisplayTeamNameStyles = {
		...Font.Copy,
		color: FontColor,
		fontWeight: 400,
		fontSize: getDynamicFontSize(Value.length),
		lineHeight: '1em',
		width: '100%',
		margin: '0%',
		letterSpacing: '-0.01em',
		textTransform: 'uppercase',
		textAlign: LTR ? 'right' : 'left',
	};

	return (
		<TeamScoreContainer
			style={{...AnimationStyles}}
			borderRadius={TemplateVariation.borderRadius}
			bgColor={bgColor}
		>
			<FixtureLabels
				customStyles={{...DisplayTeamNameStyles, ...AnimationStyles}}
			>
				{Value}
			</FixtureLabels>
		</TeamScoreContainer>
	);
};

export default DisplayTeamName;
