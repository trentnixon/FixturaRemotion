import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import BackgroundLayout from '../../Components/Body/BackgroundLayout';
import styled from 'styled-components';
import {HeaderLogo} from '../../Components/Header/Logo';

// Main container full width and height
const MainContainer = styled.div`
	z-index: 100;
	height: 1350px; // Full height of the viewport
	width: 100%; // Full width
`;
export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<MainContainer>
					<LogoClubTitleHeaderLimited {...props} />
					<HeaderLogo
						LOGO={props.VIDEOMETA.Club.Logo}
						FPS_MAIN={props.FPS_MAIN}
					/>
					<Results {...props} />
				</MainContainer>
				<BackgroundLayout {...props} />
			</Series.Sequence>
		</Series>
	);
};
