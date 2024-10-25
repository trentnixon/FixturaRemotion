import styled from 'styled-components';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {BundleCategoryName} from '../../../../common/components/presentational/BundleCategory';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
	if (textLength <= 10) return '3em'; // Normal size
	if (textLength <= 20) return '2.4em'; // Large size
	return '1.8em'; // Extra-large size for longer texts
};

export const OrganisationName = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color, Font} = StyleConfig;
	const frame = useCurrentFrame();
	const {VIDEOMETA} = DATA;
	const {grouping_category} = VIDEOMETA;
	const {FPS_MAIN} = TIMINGS;
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);

	const styleObj = {
		...Font?.Title,
		...TextStyles.assetSubtitle,
		color: Color.Background.Contrast,
		fontSize: dynamicFontSize,
		margin: '0',
		textTransform: 'uppercase',
		textAlign: 'center',
		maxWidth: '100%',
	};
	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return <BundleCategoryName styleObj={styleObj} animationObj={animationObj} />;
};

const SingleResultClubLabel = styled.h1`
	margin: 0;
	text-transform: uppercase;
	text-align: left;
`;

export const SingleResultOrganisationName = ({
	THEME,
	FPS_MAIN,
	grouping_category,
	frame,
}) => {
	return (
		<SingleResultClubLabel
			style={{
				color: GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				),
				fontFamily: 'Roboto',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{grouping_category}
		</SingleResultClubLabel>
	);
};
