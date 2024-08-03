import styled from 'styled-components';
import {FromTopToBottom} from '../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {getDynamicFontSize} from '../../../templates/Basic/utils/Copy';
import {BundleCategoryName} from '../../../common/components/presentational/BundleCategory';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const AccountName = () => {
	const frame = useCurrentFrame(); // Get the current frame for animations
	const {DATA} = useVideoDataContext();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {grouping_category} = DATA.VIDEOMETA;
	const {FPS_INTRO} = TIMINGS;
	const {Font, Color} = StyleConfig;


	// Style configuration for the account name
	const styleObj = {
		...Font.Title,
		fontSize: getDynamicFontSize(grouping_category),
		color: Color.Primary.BackgroundContractColor,
		margin: 0,
		padding: 0,
		lineHeight: '0.9em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
	};

	// Animation configuration for the account name
	const animationObj = {
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_INTRO - 30,
			FPS_INTRO - 15,
			1,
			0
		),
		clipPath: FromTopToBottom(7, 'Wobbly'),
	};

	return (
		<ClubNameContainer>
			<BundleCategoryName animationObj={animationObj} styleObj={styleObj} />
		</ClubNameContainer>
	);
};
