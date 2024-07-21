import styled from 'styled-components';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {DisplayGradeName} from '../../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../assets/common/Containers/ContainerBodyHeight';
import {ItemTopLabelContainer} from '../../../../../assets/common/Containers/CCL/StructureSidebarBlock';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {useStylesContext} from '../../../../../../context/StyleContext';

// Main container with display flex
const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	flex-wrap: wrap; // Allow the children to wrap as needed
`;

// Styled component for the top block

// Styled component for the main content area
const StructureMainBlock = styled.div`
	display: flex;
	height: 600px;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
`;

// Styled component for the bottom block
const StructureBottomBlock = styled.div`
	width: 100%; // Takes full width of the container
	padding: 5px;

	padding: 5px 0px;
	border: 3px solid ${(props) => props.BorderColor};
	border-radius: 100px;
	margin-top: 10px;
`;

export const CCLFixtureBuild = (props) => {
	const {StyleConfig} = useStylesContext();
	const {Font, Color} = StyleConfig;

	const gradeNameCustom = {
		...Font.Copy,
		color: Color.Secondary.Contradst,
	};

	return (
		<>
			<ContainerBodyHeight>
				<ContainerInnerBodyHeight>
					<StructureContainer>
						<ItemTopLabelContainer
							backgroundColor={Color.Secondary.Main}
							style={{
								clipPath: FromTopToBottom(15, 'Slow'),
								marginLeft: '25%',
								marginBottom: '-15px',
								zIndex: -1,
							}}
						>
							<DisplayGradeName
								gradeName={props.matchData.gradeName}
								{...props}
								customStyles={gradeNameCustom}
							/>
						</ItemTopLabelContainer>
						<StructureMainBlock>
							<TeamsAndScores {...props} />
						</StructureMainBlock>
						<StructureBottomBlock
							BorderColor={Color.Secondary.Main}
							BackgroundColor={Color.Primary.Main}
						>
							<HeaderContainer {...props} />
						</StructureBottomBlock>
					</StructureContainer>
				</ContainerInnerBodyHeight>
			</ContainerBodyHeight>
		</>
	);
};
