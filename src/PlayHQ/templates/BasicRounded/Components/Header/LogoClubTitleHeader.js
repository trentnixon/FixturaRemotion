import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo} from './Logo';
import {OrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';

export const LogoClubTitleHeader = ({THEME, DATA, FPS_MAIN}) => {
	const frame = useCurrentFrame();

	return (
		<Container> 
			<HeaderLogo LOGO={DATA.Club.Logo} FPS_MAIN={FPS_MAIN} />

			<OrganisationName
				frame={frame}
				NAME={DATA.Club.Name}
				FPS_MAIN={FPS_MAIN}
				THEME={THEME}
			/>

			<DisplayVideoTitleTop
				THEME={THEME}
				frame={frame}
				FPS_MAIN={FPS_MAIN}
				VALUE={DATA.Video.TitleSplit[0]}
			/>
			<DisplayVideoTitleBottom
				THEME={THEME}
				frame={frame}
				FPS_MAIN={FPS_MAIN}
				VALUE={DATA.Video.TitleSplit[1]}
			/>
		</Container>
	);
};

export const LogoClubTitleHeaderLimited = ({THEME, DATA, FPS_MAIN}) => {
	const frame = useCurrentFrame();

	return (
		<Container>
			<HeaderLogo LOGO={DATA.Club.Logo} FPS_MAIN={FPS_MAIN} />

			<OrganisationName
				frame={frame}
				NAME={DATA.Club.Name}
				FPS_MAIN={FPS_MAIN}
				THEME={THEME}
			/>
		</Container>
	);
};
const Container = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: flex-start;
	position: absolute;
	height: auto;
`;
