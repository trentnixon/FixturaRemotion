import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText, getContrastColor} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
export const AccountName = ({fontFamily, theme, DATA, FPS}) => {
	const frame = useCurrentFrame();
	return (
		<ClubNameContainer>
			<ClubName
				style={{
					fontFamily,
					clipPath: FromTopToBottom(7, 'Wobbly'),
					color: GetBackgroundContractColorForText(theme.primary,theme.secondary),
					opacity: interpolateOpacityByFrame(frame, FPS - 30, FPS - 15, 1, 0),
				}}
			> 
				{DATA.VIDEOMETA.Club.Name}
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
	font-size: 5.5em;
	margin: 0px;
	padding: 0;
	line-height: .9em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;
