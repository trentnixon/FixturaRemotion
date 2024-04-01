import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {getDynamicFontSize} from '../../utils/Copy';
import {VideoHeader} from '../../../../common/components/copy/titles';

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const AccountName = (props) => {
	const {THEME, FPS_INTRO, VIDEOMETA, StyleConfig} = props;
	const {Font} = StyleConfig;
	const frame = useCurrentFrame();

	const styleObj = {
		...Font.Title,
		fontSize: getDynamicFontSize(VIDEOMETA.grouping_category),
		color: GetBackgroundContractColorForText(THEME.primary, THEME.secondary),
		margin: 0,
		padding: 0,
		lineHeight: '0.9em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
	};
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
			<VideoHeader
				value={VIDEOMETA.grouping_category}
				animationObj={animationObj}
				styleObj={styleObj}
			/>
		</ClubNameContainer>
	);
};
