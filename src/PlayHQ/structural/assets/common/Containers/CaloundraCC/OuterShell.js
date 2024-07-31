import styled from 'styled-components';

export const OuterShell = styled.div`
	width: 100%;
	background-color: white;
	border-radius: 50px;
	padding: 3px;
	border: 3px inset ${(props) => props.borderColor};
`;
