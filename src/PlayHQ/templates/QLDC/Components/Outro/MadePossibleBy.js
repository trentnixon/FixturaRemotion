import styled from 'styled-components';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

export const MadePossibleBy = ({frame, FPS, StyleConfig}) => (
	<SponsorIntroContainer>
		<SponsorsIntroCopy
			style={{
				...StyleConfig.Font.Copy,
				clipPath: FromTopToBottom(15, 'Wobbly'),
				color: StyleConfig.Color.Secondary.BackgroundContractColor,
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
			}}
		>
			Made possible by our Sponsors
		</SponsorsIntroCopy>
	</SponsorIntroContainer>
);

const SponsorsIntroCopy = styled.h1`
	font-size: 1.5em;
	line-height: 1em;
	text-align: center;
	text-transform: uppercase;
	margin: 30px 0;
`;

const SponsorIntroContainer = styled.div`
	width: 100%;
	left: 0px;
	top: 20px;
`;
