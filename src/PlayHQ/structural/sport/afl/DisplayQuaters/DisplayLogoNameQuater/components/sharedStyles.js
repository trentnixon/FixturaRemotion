import styled from "styled-components";

export const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

// Main container with display flex
export const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	height: auto; // Full viewport height for demo
	flex-wrap: wrap; // Allow the children to wrap as needed
	margin-bottom: 20px;
`;

// Styled component for the top block


// Styled component for the main content area
export const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
`;

// Styled component for the sidebar block
export const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: center;
	align-items: normal;
`;

// Styled component for the content block
export const StructureContentBlock = styled.div`
	width: 80%; // Takes remaining width of the container
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`;
