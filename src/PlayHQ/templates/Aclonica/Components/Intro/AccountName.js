import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import { SpringToFrom } from '../../../../Animation/RemotionSpring';
export const AccountName = (props) => {
	const {fontFamily, THEME, FPS_INTRO, VIDEOMETA} = props;
	const frame = useCurrentFrame();
	const getDynamicFontSize = (text) => {
		console.log(text, text?.length);
		if (text?.length <= 10) return '8em'; // Short strings
		else if (text?.length <= 20) return '6em'; // Medium strings
		else return '4em'; // Long strings
	};
	return (
		<ClubNameContainer>
			<ClubName
				style={{
					fontFamily: 'Roboto',
					fontSize: getDynamicFontSize(VIDEOMETA.Club.Name),
					/* clipPath: FromTopToBottom(7, 'Wobbly'), */
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
					transform: `translateX(${SpringToFrom(30, 30, 0, 'Wobbly')}px)`,
					opacity: interpolateOpacityByFrame(frame, 35, 70, 0, 1),
				}}
			>
				{VIDEOMETA.Club.Name}
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
	font-weight: 400;
	margin: 0px;
	padding: 0;
	line-height: 1.1em;
	text-align: right;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;
