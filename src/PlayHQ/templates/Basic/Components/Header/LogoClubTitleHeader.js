import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {OrganisationName, SingleResultOrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';
import {ContainerHeaderHeight} from '../../../../structural/assets/common/Containers/ContainerHeaderHeight';

export const LogoClubTitleHeader = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN, StyleConfig} = props;
	const frame = useCurrentFrame();

	return (
		<ContainerHeaderHeight {...props}>
			<Row>
				<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
				<InnerContainer>
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
					<OrganisationName
						frame={frame}
						NAME={VIDEOMETA.Club.Name}
						groupingCategory={VIDEOMETA.grouping_category}
						FPS_MAIN={FPS_MAIN}
						THEME={THEME}
						StyleConfig={StyleConfig}
					/>
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const LogoClubTitleHeaderLimited = (props) => {
	const {THEME, VIDEOMETA, FPS_MAIN} = props;
	const frame = useCurrentFrame();

	return (
		<ContainerHeaderHeight {...props}>
			<SingleResultHeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
			<SingleResultOrganisationName
				frame={frame}
				NAME={VIDEOMETA.Club.Name}
				FPS_MAIN={FPS_MAIN}
				THEME={THEME}
				{...props}
			/>
		</ContainerHeaderHeight>
	);
};

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
	padding-left: 10px;
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
