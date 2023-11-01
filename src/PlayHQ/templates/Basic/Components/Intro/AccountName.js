import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
export const AccountName = (props) => {
	const {fontFamily, THEME, FPS_INTRO, VIDEOMETA} = props
	const frame = useCurrentFrame();
	const getDynamicFontSize = (text) => {
		if (text?.length <= 10) return "9em";      // Short strings
		else if (text?.length <= 20) return "7em"; // Medium strings
		else return "5em";                        // Long strings
	};
	return (
		<ClubNameContainer>
			<ClubName
				style={{
					fontFamily,
					fontSize: getDynamicFontSize(VIDEOMETA.grouping_category),
					clipPath: FromTopToBottom(7, 'Wobbly'),
					color: GetBackgroundContractColorForText(THEME.primary,THEME.secondary),
					opacity: interpolateOpacityByFrame(frame, FPS_INTRO - 30, FPS_INTRO - 15, 1, 0),
				}}
			> 
				
				{VIDEOMETA.grouping_category}
			</ClubName>
		</ClubNameContainer> 
	);
};

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ClubName = styled.h1`
	font-weight: 900;
	font-size: 7em;
	margin: 0px;
	padding: 0;
	line-height: .9em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;
