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

const DisplayTeamName = ({Value, bgColor, FontColor, LTR = true}) => {
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
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
		...TextStyles.copyMediumBold,
		color: FontColor,
		fontWeight: 600,
		width: '60%',
		margin: '0 20%',
		textTransform: 'uppercase',
		textAlign: 'center',
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
