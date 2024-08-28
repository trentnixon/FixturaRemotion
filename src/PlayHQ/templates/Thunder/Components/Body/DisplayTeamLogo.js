import styled from 'styled-components';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {EraseFromMiddle, FromLeftToRight} from '../../../../Animation/ClipWipe';
import {useLayoutContext} from '../../../../context/LayoutContext';

const LogoHolder = styled.div`
	margin: -1.8em 0 0 0em;
	position: absolute;
	z-index: 100;
`;

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
					height: '90px',
					width: '90px',
					objectFit: 'cover',
					clipPath: FromLeftToRight(10, 'Wobbly'),
				}}
			/>
		</div>
	</LogoHolder>
);
