import React from 'react';
import styled from 'styled-components';
import { useLayoutContext } from '../../../../../../context/LayoutContext';
import { ContainerHeaderHeight } from '../../../Containers/ContainerHeaderHeight';
import { CNSWDefaultBundleTitle } from './BundleTitle';
import { CNSWDefaultAssetTitle } from './AssetTitle';



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

export const CNSWDefaultTitle = () => {
	const {Heights} = useLayoutContext();
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<InnerContainer>
					<CNSWDefaultBundleTitle />
					<CNSWDefaultAssetTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
