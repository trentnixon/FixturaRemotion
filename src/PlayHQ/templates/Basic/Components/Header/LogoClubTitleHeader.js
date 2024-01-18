import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {OrganisationName, SingleResultOrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';

export const LogoClubTitleHeader = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN, StyleConfig} = props;	
	const frame = useCurrentFrame();


	
	return (
		<Positioning>
			<Row>
				<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
				<InnerContainer>
					<OrganisationName
						frame={frame}
						NAME={VIDEOMETA.Club.Name}
						grouping_category={VIDEOMETA.grouping_category}
						FPS_MAIN={FPS_MAIN}
						THEME={THEME}
						StyleConfig={StyleConfig}
					/>
					<DisplayVideoTitleTop
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[0]}
						StyleConfig={StyleConfig}
					/>
					<DisplayVideoTitleBottom
						THEME={THEME}
						frame={frame}
						FPS_MAIN={FPS_MAIN}
						VALUE={VIDEOMETA.Video.TitleSplit[1]}
						StyleConfig={StyleConfig}
					/>
				</InnerContainer>
			</Row>
		</Positioning>
	);
};

export const LogoClubTitleHeaderLimited = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN} = props
	const frame = useCurrentFrame();

	return (
		<Container>
			<SingleResultHeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />

			<SingleResultOrganisationName
				frame={frame}
				NAME={VIDEOMETA.Club.Name}
				FPS_MAIN={FPS_MAIN}
				THEME={THEME}
				{...props}
			/>
		</Container>
	);
};

const Positioning = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	position: absolute;
	height: auto;
`;
const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: center;
`;
const InnerContainer = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	justify-content: flex-start;
	padding-left:10px
`;

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
