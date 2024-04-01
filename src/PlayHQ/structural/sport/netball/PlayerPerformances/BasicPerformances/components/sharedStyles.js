import styled from 'styled-components';

export const VideoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px;
`;

export const PerformancesContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	&:first-child {
		margin-right: 5px;
	}
`;

export const MinHeight = styled.div`
	min-height: 10px;
`;

export const PerformanceList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
`;

export const PerformanceItem = styled.li`
	display: flex;
	align-items: center;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	padding: 4px 10px;
	margin-bottom: 1px;
	width: auto;
`;

export const LabelWrapper = styled.div`
	font-weight: 700;
	color: ${(props) => props.color};
	margin-bottom: 5px;
	margin-top: 5px;
`;
