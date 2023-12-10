import styled from 'styled-components';
import {ImageWithFallback} from '../Common/ImageWithFallback';
import {interpolate, useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';

const LogoHolder = styled.div`
	margin: -1.8em 0 0 0em;
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
				borderRadius: '100%',
				height: '90px',
				width: '90px',
				objectFit: 'cover',
			}}
		/>
	</LogoHolder>
);
