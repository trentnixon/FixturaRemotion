import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FixtureLabels} from '../../../../../common/components/copy/commonAssetTypes';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../context/StyleContext';
import {TeamScoreContainer} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayMutedFixturesGrade = (props) => {
	const {matchData} = props;

	const {ground, gradeName} = matchData;
	const {TextStyles, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const frame = useCurrentFrame();

	const {FPS_SCORECARD} = TIMINGS;
	const {TemplateVariation} = BuildProps;
	const AnimationStyles = {
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
	const gradeNameCustom = {
		...TextStyles.copyMediumBold,
		color: TemplateVariation.useMutedColor,
		height: 'auto',
		width: '100%',
		padding: '0',
		textTransform: 'uppercase',
		textAlign: 'left',
		letterSpacing: '-1px',
	};
	return (
		<TeamScoreContainer>
			<FixtureLabels customStyles={{...gradeNameCustom, ...AnimationStyles}}>
				{gradeName}
			</FixtureLabels>
		</TeamScoreContainer>
	);
};

export const DisplayMutedTime = (props) => {
	const {matchData} = props;
	const {date, ground} = matchData;
	const {TextStyles, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const frame = useCurrentFrame();

	const {FPS_SCORECARD} = TIMINGS;
	const {TemplateVariation} = BuildProps;
	const AnimationStyles = {
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
	const dateCustom = {
		...TextStyles.copySmall,
		color: TemplateVariation.useMutedColor,
		height: 'auto',
		width: '100%',
		padding: '0 0 5px 0 ',
		textTransform: 'uppercase',
		textAlign: 'left',
	};

	const groundCustom = {
		...TextStyles.copyXSmall,
		color: TemplateVariation.useMutedColor,
		height: 'auto',
		width: '100%',
		textTransform: 'uppercase',
		textAlign: 'left',
		padding: '0 ',
	};
	return (
		<TeamScoreContainer>
			<FixtureLabels customStyles={{...dateCustom, ...AnimationStyles}}>
				{date}
			</FixtureLabels>
			<FixtureLabels customStyles={{...groundCustom, ...AnimationStyles}}>
				{ground}
			</FixtureLabels>
		</TeamScoreContainer>
	);
};
