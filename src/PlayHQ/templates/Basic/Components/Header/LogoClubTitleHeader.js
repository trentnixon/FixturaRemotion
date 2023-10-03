import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo} from './Logo';
import {OrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';

export const LogoClubTitleHeader = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<Container>
			<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
			<OrganisationName
				frame={frame}
				NAME={VIDEOMETA.Club.Name}
				FPS_MAIN={FPS_MAIN}
				THEME={THEME}
			/>
			<DisplayVideoTitleTop
				THEME={THEME}
				frame={frame}
				FPS_MAIN={FPS_MAIN}
				VALUE={VIDEOMETA.Video.TitleSplit[0]}
			/>
			<DisplayVideoTitleBottom
				THEME={THEME}
				frame={frame}
				FPS_MAIN={FPS_MAIN}
				VALUE={VIDEOMETA.Video.TitleSplit[1]}
			/>
		</Container>
	);
};

export const LogoClubTitleHeaderLimited = ({THEME, VIDEOMETA, FPS_MAIN}) => {
	const frame = useCurrentFrame();

	return (
		<Container>
			<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />

			<OrganisationName
				frame={frame}
				NAME={VIDEOMETA.Club.Name}
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
