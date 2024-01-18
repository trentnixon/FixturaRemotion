import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import { getDynamicFontSize } from '../../utils/Copy';
export const AccountName = (props) => {
	const {THEME, FPS_INTRO, VIDEOMETA, StyleConfig} = props
	const {Font, color}=StyleConfig
	const frame = useCurrentFrame();
	

	return (
		<ClubNameContainer>
			<ClubName
				style={{
					...Font.Title, 
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
	margin: 0px;
	padding: 0;
	line-height: .9em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;

`;
