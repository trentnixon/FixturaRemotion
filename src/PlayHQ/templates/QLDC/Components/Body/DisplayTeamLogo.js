import styled from 'styled-components';
import {ImageWithFallback} from '../Common/ImageWithFallback';
import {interpolate, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';

const LogoHolder = styled.div`
	margin: 4.3em 0 0 -6.2em;
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
			
				height: '165px',
				width: '165px',
				objectFit: 'cover',
			}}
		/>
	</LogoHolder>
);
