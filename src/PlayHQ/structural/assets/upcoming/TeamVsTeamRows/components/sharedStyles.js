import styled from "styled-components";

export const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
	margin-bottom: 5px;
`;

export const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: flex-end;
	align-items: normal;
	height: 80px;
	padding-left: 5px;
`;

export const StructureContentBlock = styled.div`
	width: 80%; // Takes remaining width of the container
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 80px;
	justify-content: ${(props) => props.justifyContent};
`;

export const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

export const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 15px 0;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
`;

export const TeamName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 2em;
	line-height: 1em;
	width: 100%;
	margin: 0 10px;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	text-align: left;
`;