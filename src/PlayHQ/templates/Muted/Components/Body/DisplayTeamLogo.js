import styled from 'styled-components';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {EraseFromMiddle, FromLeftToRight} from '../../../../Animation/ClipWipe';

const LogoHolder = styled.div``;

export const DisplayTeamLogo = ({logoUrl, imgStyles, FPS_SCORECARD}) => {
	return (
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
						objectFit: 'cover',
						clipPath: FromLeftToRight(10, 'Wobbly'),
						zIndex: 2,
						filter: 'grayscale(80%)',

						width: '100px',
						height: '100px',
					}}
				/>
			</div>
		</LogoHolder>
	);
};
