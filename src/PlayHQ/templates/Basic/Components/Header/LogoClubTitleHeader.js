import React from 'react';
import styled from 'styled-components';

import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {OrganisationName, SingleResultOrganisationName} from './ClubLabel';
import {DisplayVideoTitleBottom, DisplayVideoTitleTop} from './VideoTitle';
import {ContainerHeaderHeight} from '../../../../structural/assets/common/Containers/ContainerHeaderHeight';

export const BasicDefaultTitle = () => {
	return (
		<ContainerHeaderHeight>
			<Row>
				<HeaderLogo />
				<InnerContainer>
					<DisplayVideoTitleTop />
					<DisplayVideoTitleBottom />
					<OrganisationName />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const LogoClubTitleHeader = () => {
	return (
		<ContainerHeaderHeight>
			<Row>
				<HeaderLogo />
				<InnerContainer>
					<DisplayVideoTitleTop />
					<DisplayVideoTitleBottom />
					<OrganisationName />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const LogoClubTitleHeaderLimited = () => {
	return (
		<ContainerHeaderHeight>
			<SingleResultHeaderLogo />
			<SingleResultOrganisationName />
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
