import styled from 'styled-components';
import {ImageWithFallback} from '../Common/ImageWithFallback';
import {interpolate, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';

const LogoHolder = styled.div`
	margin: 4.3em 0 0 -5.8em;
	position: absolute;
	z-index: 100;
`;

export const DisplayTeamLogo = ({logoUrl, imgStyles, FPS_SCORECARD}) => (
	<LogoHolder>
		<ImageWithFallback
			src={logoUrl}
			fallbackSrc="https://fallback.url/image.png"
			style={{
				...imgStyles,
			
				height: '154px',
				width: '154px',
				objectFit: 'cover',
			}}
		/>
	</LogoHolder>
);
