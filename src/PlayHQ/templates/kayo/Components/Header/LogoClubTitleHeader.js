import React from 'react';
import styled from 'styled-components';
import {OrganisationName} from './ClubLabel';
import {DisplayVideoTitleTop} from './VideoTitle';
import {ContainerHeaderHeight} from '../../../../structural/assets/common/Containers/ContainerHeaderHeight';

const Positioning = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	position: absolute;
	height: auto;
	top: 50px;
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
	align-items: center;
	justify-content: center;
	padding-left: 10px;
`;

export const LogoClubTitleHeaderLimited = () => {
	return (
		<ContainerHeaderHeight>
			<Row>
				<InnerContainer>
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
				<InnerContainer>
					<OrganisationName />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const RosterTitleHeader = () => {
	return (
		<Positioning
			style={{
				width: '70%',
			}}
		>
			<Row>
				<InnerContainer>
					<OrganisationName />
					<DisplayVideoTitleTop />
				</InnerContainer>
			</Row>
		</Positioning>
	);
};
