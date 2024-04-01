import styled from "styled-components";


export const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	width:100%;
	padding:  10px 0 ;
	margin-bottom: 7px;
	border-radius: ${(props) => props.borderRadius};
	
`;

export const HeaderCopy = styled.p`
	font-style: normal;
	display: block;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.6em;
	line-height: 1.1em;
`;

export const GameType = styled(HeaderCopy)`
	width: 15%;
`;

export const Ground = styled(HeaderCopy)`
	text-align: center;
	width: 70%;
`;

export const Round = styled(HeaderCopy)`
	width: 15%;
`;