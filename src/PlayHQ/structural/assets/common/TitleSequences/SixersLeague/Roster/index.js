import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {CNSWDefaultAssetTitle} from './AssetTitle';

const Row = styled.div`
	z-index: 1000;
	width: 96%;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	width: 85%;
	margin: 30px auto;
	height: 180px;
	padding: 10px;
	z-index: 1000;
`;

export const SixersLeagueRosterTitle = () => {
	const {Heights} = useLayoutContext();
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<InnerContainer>
					<CNSWDefaultAssetTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
