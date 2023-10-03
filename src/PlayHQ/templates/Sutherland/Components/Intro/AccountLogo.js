import styled from "styled-components";
import { SpringToFrom } from "../../../../Animation/RemotionSpring";
import { Img } from "remotion";

export const AccountLogo = ({fontFamily, FPS_INTRO, VIDEOMETA}) => {
	return (
		<LogoContainer
			style={{
				fontFamily,
				transform: `scale(${SpringToFrom(
					7,
					0,
					1,
					'Wobbly'
				)}) scale(${SpringToFrom(FPS_INTRO - 30, 1, 0, 'Slow')})`,
			}}
		>
			<Img
				src={VIDEOMETA.Club.Logo}
				style={{
					height: 'auto',
					maxWidth: '220px',
					minWidth: '220px',
					objectFit: 'contain',
					borderRadius: '100%',
				}}
			/>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	width: 300px;
	height: 276px;
	flex-shrink: 0;
	text-align:center;
`;
