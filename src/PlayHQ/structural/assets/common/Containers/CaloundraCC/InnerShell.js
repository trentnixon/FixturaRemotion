import styled from "styled-components";


export const InnerShell = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	background: ${(props) => props.Gradient};
	border-radius: 50px;
`;