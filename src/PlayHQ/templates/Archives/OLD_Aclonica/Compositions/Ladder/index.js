import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import {PrincipalBodySponsor} from '../../Components/Intro/PrincipalSponsor';
import BackgroundLayout from '../../Components/Body/BackgroundLayout';
import {HeaderLogo} from '../../Components/Header/Logo';
import styled from 'styled-components';

// Main container full width and height
const MainContainer = styled.div`
	z-index: 100;
	height: 1350px; // Full height of the viewport
	width: 100%; // Full width
`;

export const Ladder = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<MainContainer>
					<LogoClubTitleHeader {...props} />
					<HeaderLogo
						LOGO={props.VIDEOMETA.Club.Logo}
						FPS_MAIN={props.FPS_MAIN}
					/>
					<LadderMain {...props} />
					<PrincipalBodySponsor {...props} />
				</MainContainer>
				<BackgroundLayout {...props} />
			</Series.Sequence>
		</Series>
	);
};
