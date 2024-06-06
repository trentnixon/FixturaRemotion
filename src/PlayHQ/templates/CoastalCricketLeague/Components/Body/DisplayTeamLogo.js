import styled from 'styled-components';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';

const LogoHolder = styled.div`
	margin: 4.3em 0 0 -6.2em;
	position: absolute;
	z-index: 100;
`;

export const DisplayTeamLogo = ({logoUrl, imgStyles}) => (
	<LogoHolder>
		<ImageWithFallback
			src={logoUrl}
			fallbackSrc="https://fallback.url/image.png"
			style={{
				...imgStyles,

				height: '165px',
				width: '165px',
				objectFit: 'cover',
			}}
		/>
	</LogoHolder>
);
