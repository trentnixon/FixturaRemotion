import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';
import {SpringToFrom} from '../../../../../../Animation/RemotionSpring';
import {
	getFontSizing,
	getLetterSpacing,
	getLineHeight,
} from '../../../../../../utils/copy';

export const ThunderAssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {TitleAlt: CopySize} = getFontSizing(StyleConfig);
	const {TitleAlt: LetterSpacing} = getLetterSpacing(StyleConfig);
	const {TitleAlt: lineHeight} = getLineHeight(StyleConfig);
	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;

	console.log('StyleConfig ', StyleConfig, getFontSizing(StyleConfig));

	const styleObj = {
		...Font?.Copy,
		color: 'black',
		height: 'auto',
		fontSize: CopySize.XL,
		LetterSpacing: LetterSpacing.Copy,
		lineHeight: lineHeight.Copy,
		fontWeight: '400',
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
