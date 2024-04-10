import styled from "styled-components";

export const HeaderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
	margin-bottom: 20px;
`;
export const ScoreRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 10px;
`;

export const TeamName = styled.div`
	flex: 2;
	padding: 5px;
	font-weight: bold;
`;

export const ScoreBox = styled.div`
	flex: 1;
	height: 90px;
	margin: 0px 1px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ScoreCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 800;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.8em;
	line-height: 1.2em;
	margin: 0;
	text-align: center;
`;