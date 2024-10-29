import styled from 'styled-components';
const RosterContainerStyles = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
	position: absolute;
	z-index: 1000;
`;

export const RosterContainer = (props) => {
	return <RosterContainerStyles>{props.children}</RosterContainerStyles>;
};
