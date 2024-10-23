import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {PresentationalAssetSubtitleType} from '../../../../../../common/components/presentational/AssetSubtitleType';

export const ThunderAssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;

	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;

	const styleObj = {
		...Font?.Copy,
		...TextStyles.assetTitle,
		color: 'black',
		height: 'auto',
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromRightToLeft(15, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
		transform: `translateX(${SpringToFrom(0, -1000, 1, 'Wobbly')}px)`,
	};

	return (
		<PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />
	);
};

export const ThunderTop5AssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const frame = useCurrentFrame();

	const {FPS_MAIN} = TIMINGS;

	const styleObj = {
		...Font?.Title,
		...TextStyles.introCopy,
		color: 'black',
		height: 'auto',
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const styleSubtitleObj = {
		...Font?.Title,
		...TextStyles.introSubtitle,
		color: 'black',
		height: 'auto',
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromRightToLeft(15, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
		transform: `translateX(${SpringToFrom(0, -1000, 1, 'Wobbly')}px)`,
	};

	return (
		<>
			<PresentationalAssetType
				styleObj={styleObj}
				animationObj={animationObj}
			/>
			<PresentationalAssetSubtitleType
				styleObj={styleSubtitleObj}
				animationObj={animationObj}
			/>
		</>
	);
};
