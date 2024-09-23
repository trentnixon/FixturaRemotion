import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {AssetTitle} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {BundleTitle} from './BundleTitle';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: left;
	justify-content: flex-start;
	width: 96%;
	margin-top: 10px;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: left;
	justify-content: flex-start;
	width: 100%;
	margin: 10px auto;
	height: 150px;
	padding: 10px;
	z-index: 1000;
`;

export const MutedLeagueDefaultTitle = () => {
	const {Heights} = useLayoutContext();
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<AssetTitle />
					<BundleTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
