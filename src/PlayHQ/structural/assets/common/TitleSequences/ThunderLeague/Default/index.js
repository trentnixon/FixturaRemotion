import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {ThunderAssetTitle, ThunderTop5AssetTitle} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: flex-center;
	width: 96%;
	margin-top: 10px;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 10px auto;
	height: 150px;
	padding: 10px;
	z-index: 1000;
`;

export const ThunderLeagueDefaultTitle = () => {
	const {Heights} = useLayoutContext();
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<ThunderAssetTitle />
					{/* <ThunderBundleTitle /> */}
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const ThunderLeagueTop5Title = () => {
	const {Heights} = useLayoutContext();

	return (
		<ContainerHeaderHeight SectionHeights={Heights} styles={{padding: '0 5%'}}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<ThunderTop5AssetTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
