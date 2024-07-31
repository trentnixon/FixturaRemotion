import styled from 'styled-components';
import {ContainerHeaderHeight} from '../../../Containers/ContainerHeaderHeight';
import {CaloundraCCDefaultAssetTitle} from './CaloundraCCDefaultAssetTitle';
import {CaloundraCCDefaultTitleLogo} from './CaloundraCCDefaultTitleLogo';
import {CaloundraCCDefaultTitleCategoryName} from './CaloundraCCDefaultTitleCategoryName';

export const CaloundraCCDefaultTitleHub = () => {
	return (
		<ContainerHeaderHeight>
			<Row>
				<InnerContainer>
					<CaloundraCCDefaultTitleCategoryName />
					<CaloundraCCDefaultAssetTitle />
				</InnerContainer>
				<CaloundraCCDefaultTitleLogo />
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
	align-items: flex-end;
	justify-content: flex-end;
	padding-left: 10px;
`;
