import styled from "styled-components";

const StructureContainer = styled.div`
	display: flex;
	width: 100%; // Full width of the parent
	height: auto; // Full viewport height for demo
	flex-wrap: wrap; // Allow the children to wrap as needed
	margin-bottom: 30px;
`;


export const ContainerStructureContainer = ({children}) => {
	return <StructureContainer>{children}</StructureContainer>;
};
