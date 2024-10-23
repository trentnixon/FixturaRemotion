import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {
	CNSWDefaultAssetTitle,
	SixersDefaultAssetTitle,
	SixersTop5AssetTitle,
} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-center;
	width: 100%;
	height: 100%;
	margin-top: 30px;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	margin: 0px auto -100px auto;
	padding: 0px;
`;

export const SixersLeagueDefaultTitle = () => {
	const {Heights} = useLayoutContext();

	return (
		<ContainerHeaderHeight SectionHeights={Heights} styles={{padding: '0 5%'}}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<SixersDefaultAssetTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

export const SixersLeagueTop5Title = () => {
	const {Heights} = useLayoutContext();
	Heights.Header = 300;
	return (
		<ContainerHeaderHeight SectionHeights={Heights} styles={{padding: '0 5%'}}>
			<Row>
				<InnerContainer
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<SixersTop5AssetTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
