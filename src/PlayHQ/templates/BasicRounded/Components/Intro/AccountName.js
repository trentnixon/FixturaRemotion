import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {getContrastColor} from '../../../../utils/colors';
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
					color: getContrastColor(theme.primary),
					opacity: interpolateOpacityByFrame(frame, FPS - 30, FPS - 15, 1, 0),
				}}
			>
				{DATA.VIDEOMETA.Club.Name}
			</ClubName>
		</ClubNameContainer>
	);
};

const ClubNameContainer = styled.div`
	width: 80%;
	z-index: 2000;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ClubName = styled.h1`
	font-weight: 900;
	font-size: 5.5em;
	margin: 0px;
	padding: 0;
	line-height: 0.9em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;
