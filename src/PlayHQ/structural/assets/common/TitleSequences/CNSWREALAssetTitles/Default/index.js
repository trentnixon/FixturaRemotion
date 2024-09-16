import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {CNSWDefaultBundleTitle} from './BundleTitle';
import {CNSWDefaultAssetTitle} from './AssetTitle';
import {HeaderLogo} from '../../../../../../templates/CNSWreal/Components/Header/Logo';
import {useVideoDataContext} from '../../../../../../context/VideoDataContext';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: flex-start;
	width: 96%;
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

export const CNSWREALDefaultTitle = () => {
	const {Heights, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {VIDEOMETA} = DATA;
	const {FPS_MAIN} = TIMINGS;
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
				<InnerContainer>
					<CNSWDefaultAssetTitle />
					<CNSWDefaultBundleTitle />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
