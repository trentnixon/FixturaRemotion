import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {ThunderAssetTitle} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: flex-center;
	width: 96%;
`;
const InnerContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	margin: 50px auto 0;
	height: 150px;
	padding: 10px;
	z-index: 1000;
`;

export const ThunderLeagueLimitedTitle = () => {
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
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
