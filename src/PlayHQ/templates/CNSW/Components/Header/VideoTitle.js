import styled from 'styled-components';
import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {calculateLetterSpacing} from '../../../../utils/copy';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {PresentationalAssetType} from '../../../../common/components/presentational/AssetType';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {useStylesContext} from '../../../../context/StyleContext';

export const DisplayVideoTitleTop = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();

	const {FPS_MAIN} = TIMINGS;

	

	const styleObj = {
		...Font?.Title,
		color: Color.Background.Contrast,
		height: 'auto',
		margin: 0,
		fontSize: '8em',
		lineHeight: '0.9em',
		fontWeight: 900,
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromMiddle(7, 'Wobbly'),
		opacity: interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0),
	};

	return (
		<PresentationalAssetType styleObj={styleObj} animationObj={animationObj} />
	);
};

export const DisplayVideoTitleBottom = ({
	frame,
	FPS_MAIN,
	VALUE,
	Color,
	Font,
}) => {
	return (
		<VideoCategory
			style={{
				color: GetBackgroundContractColorForText(
					Color.Primary.Main,
					Color.Secondary.Main
				),
				...Font.Title,
				letterSpacing: `${calculateLetterSpacing(1220, 100, 'Run-Scorers')}px`,
				clipPath: FromTopToBottom(15, 'Slow'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_MAIN - 30,
					FPS_MAIN,
					1,
					0
				),
			}}
		>
			{VALUE}
		</VideoCategory>
	);
};

const VideoCategory = styled.h1`
	font-size: 4.8em;
	line-height: 1em;
	margin: 0;
	font-weight: 900;
	text-align: center;
	text-transform: uppercase;
`;
