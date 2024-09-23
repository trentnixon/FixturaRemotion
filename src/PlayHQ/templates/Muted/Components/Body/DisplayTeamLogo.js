import styled from 'styled-components';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {EraseFromMiddle, FromLeftToRight} from '../../../../Animation/ClipWipe';
import {useLayoutContext} from '../../../../context/LayoutContext';

const LogoHolder = styled.div``;

export const DisplayTeamLogo = ({logoUrl, imgStyles, FPS_SCORECARD}) => (
	<LogoHolder>
		<div
			style={{
				clipPath: EraseFromMiddle(FPS_SCORECARD - 30, 'Slow'),
			}}
		>
			<ImageWithFallback
				src={logoUrl}
				fallbackSrc="https://fallback.url/image.png"
				style={{
					...imgStyles,
					borderRadius: '100%',
					height: '70px',
					width: '70px',
					objectFit: 'cover',
					clipPath: FromLeftToRight(10, 'Wobbly'),
				}}
			/>
		</div>
	</LogoHolder>
);
