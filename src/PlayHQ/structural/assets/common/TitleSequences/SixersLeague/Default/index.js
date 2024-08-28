import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {CNSWDefaultAssetTitle} from './AssetTitle';
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
	width: 50%;
	margin: 10px auto;
	height: 150px;
	padding: 10px;
	background-image: url('${(props) => props.BGImage}');
	background-size: contain;
	border: 1px solid black;
	z-index: 1000;
`;

export const SixersLeagueDefaultTitle = () => {
	const {Heights} = useLayoutContext();

	const BGImage =
		'https://fixtura.s3.ap-southeast-2.amazonaws.com/Sixers_League_Textured_Background_edc80a7133.png';
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row>
				{/* <HeaderLogo LOGO={VIDEOMETA.Club.Logo.url} FPS_MAIN={FPS_MAIN} /> */}
				<InnerContainer
					BGImage={BGImage}
					style={{
						clipPath: FromLeftToRight(10, 'Wobbly'),
					}}
				>
					<CNSWDefaultAssetTitle />
					{/* <CNSWDefaultBundleTitle /> */}
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};
