import styled from 'styled-components';

const StructureSidebarBlock = styled.div`
	width: 150px;
	display: flex;
	justify-content: center;
	align-items: normal;
`;

const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
`;


const StructureContentBlock = styled.div`
	width: 730px; // Takes remaining width of the container
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;


export const ContainerStructureSidebarBlock = ({children}) => {
	return <StructureSidebarBlock>{children}</StructureSidebarBlock>;
};

export const ContainerStructureMainBlock = ({children}) => {
	return <StructureMainBlock>{children}</StructureMainBlock>;
};


export const ContainerStructureContentBlock = ({children}) => {
	return <StructureContentBlock>{children}</StructureContentBlock>;
};