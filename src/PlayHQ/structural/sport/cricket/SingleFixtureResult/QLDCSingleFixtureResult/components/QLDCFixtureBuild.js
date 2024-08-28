import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';

import {DisplayGradeName} from '../../../../../../templates/QLDC/Components/Common/DEPRECATED_CommonVariables';

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: ${(props) => props.Height}px;
`;
// Main container with display flex
const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	flex-wrap: wrap; // Allow the children to wrap as needed
`;

// Styled component for the top block
const StructureTopBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 5px;
`;
// Styled component for the main content area
const StructureMainBlock = styled.div`
	display: flex;
	height: 650px;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
`;

// Styled component for the bottom block
const StructureBottomBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 5px;
`;

export const QLDCFixtureBuild = (props) => {
	const {StyleConfig,TextStyles} = useStylesContext();
	const {Heights} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	const gradeNameCustom = {
		...Font.Copy,
		...TextStyles.copyMedium,
		color: Color.Primary.Contrast,
	};
	return (
		<>
			<FixtureContainer Height={Heights.AssetHeight}>
				<StructureContainer>
					<StructureTopBlock>
						<DisplayGradeName
							gradeName={props.matchData.gradeName}
							{...props}
							customStyles={gradeNameCustom}
						/>
					</StructureTopBlock>
					<StructureMainBlock>
						<TeamsAndScores {...props} />
					</StructureMainBlock>
					{/* <StructureBottomBlock>
						<HeaderContainer {...props} />
					</StructureBottomBlock> */}
				</StructureContainer>
			</FixtureContainer>
		</>
	);
};
