import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import {PrincipalBodySponsor} from '../../Components/Intro/PrincipalSponsor';
import styled from 'styled-components';

import {HeaderLogo} from '../../Components/Header/Logo';
import BackgroundLayout from '../../Components/Body/BackgroundLayout';

// Main container full width and height
const MainContainer = styled.div`
	z-index: 100;
	height: 1350px; // Full height of the viewport
	width: 100%; // Full width
`;

export const WeekendResults = (props) => {
	const {FPS_MAIN} = props;

	console.log(props.VIDEOMETA.Video.HeroImage);
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<MainContainer>
					<LogoClubTitleHeader {...props} />
					<HeaderLogo
						LOGO={props.VIDEOMETA.Club.Logo}
						FPS_MAIN={props.FPS_MAIN}
					/>
					<Results {...props} />
					<PrincipalBodySponsor {...props} />
				</MainContainer>
				<BackgroundLayout {...props} />
			</Series.Sequence>
		</Series>
	);
};
