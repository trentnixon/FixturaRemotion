import styled from 'styled-components';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {BasicDefaultAssetTitle} from './BasicDefaultAssetTitle';
import {BasicDefaultTitleLogo} from './BasicDefaultTitleLogo';
import {BasicDefaultTitleCategoryName} from './BasicDefaultTitleCategoryName';

export const BasicDefaultTitleHub = () => {
	return (
		<ContainerHeaderHeight>
			<Row>
				<BasicDefaultTitleLogo />
				<InnerContainer>
					<BasicDefaultAssetTitle />
					{/* <DisplayVideoTitleBottom /> */}
					<BasicDefaultTitleCategoryName />
				</InnerContainer>
			</Row>
		</ContainerHeaderHeight>
	);
};

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
	align-items: flex-start;
	justify-content: flex-start;
	padding-left: 10px;
`;
