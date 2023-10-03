import { useCurrentFrame } from "remotion";
import { FromTopToBottom } from "../../../../Animation/ClipWipe";
import { interpolateOpacityByFrame } from "../../../../Animation/interpolate";
import { GetBackgroundContractColorForText, getContrastColor, getTitleColorOverGradient } from "../../../../utils/colors";
import styled from "styled-components";

export const AccountName = ({ THEME, VIDEOMETA, FPS_INTRO}) => {
	const frame = useCurrentFrame();
	return (
		<ClubNameContainer>
			<ClubName
				style={{
					fontFamily:'Oswald',
					clipPath: FromTopToBottom(7, 'Wobbly'),
					color: getTitleColorOverGradient(THEME.primary, THEME.secondary,0.45),
					opacity: interpolateOpacityByFrame(frame, FPS_INTRO - 30, FPS_INTRO - 15, 1, 0),
				}}
			>
				{VIDEOMETA.Club.Name}
			</ClubName>
		</ClubNameContainer>
	);
};

const ClubNameContainer = styled.div`
	z-index: 2000;
	display: flex;
	align-items: flex-start;
`;

const ClubName = styled.h1`
	font-weight: 900;
	font-size: 4em;
	margin: 0px;
	padding: 0;
	line-height: 1.1em;
	text-align: left;
	letter-spacing: 0.005em;
	text-transform: uppercase;

`;