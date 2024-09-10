import React from 'react';
import styled from 'styled-components';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {ThunderAssetTitle} from './AssetTitle';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {ThunderBundleTitle} from './BundleTitle';

const Row = styled.div`
	z-index: 1000;
	display: flex;
	flex-direction: row;
	width: auto;
	align-items: center;
	justify-content: flex-center;
	width: 96%;
	background-image: url(${(props) => props.backgroundImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
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
	const thunderHoop =
	'https://fixtura.s3.ap-southeast-2.amazonaws.com/Thunder_Paint_Stroke_Oval_Wide_Heavy_Mono_Black_21aa15ffcf.png';
	return (
		<ContainerHeaderHeight SectionHeights={Heights}>
			<Row backgroundImage={thunderHoop}>
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
