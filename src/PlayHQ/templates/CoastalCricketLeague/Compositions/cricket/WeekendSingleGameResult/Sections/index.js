import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';
import {LogoClubTitleHeaderVersion2} from '../../../../Components/Header/LogoClubTitleHeader';
import {DisplayGradeName} from '../../../../Components/Common/DEPRECATED_CommonVariables';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {ItemTopLabelContainer} from '../../../../../../structural/assets/common/Containers/CCL/StructureSidebarBlock';
import {FromTopToBottom} from '../../../../../../Animation/ClipWipe';

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

export const Match = (props) => {
	const {VIDEOMETA, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const gradeNameCustom = {
		...Font.Copy,
		color: 'white',
	};

	// to do: get the correct SectionHeights in place for the structures
	return (
		<>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.Club.Name,
					large: VIDEOMETA.Video.TitleSplit[0],
				}}
			/>
			<ContainerBodyHeight {...props}>
				<ContainerInnerBodyHeight {...props}>
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
