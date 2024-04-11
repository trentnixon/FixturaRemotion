import styled from 'styled-components';

const SetContainerBodyHeight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 0;
	padding: 0 2%;
	width: 100%;
	height: ${(props) => props.Height}px;
	/* background-color: blue; */
	position: relative;
	
`;

export const ContainerBodyHeight = (props) => {
	const {SectionHeights} = props;
	const {Body} = SectionHeights;
	return (
		<SetContainerBodyHeight Height={Body}>
			{props.children}
		</SetContainerBodyHeight>
	);
};


const SetContainerInnerBodyHeight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: ${(props) => props.Height}px;
	max-width: 100%;
	margin: 0 auto;
`;
export const ContainerInnerBodyHeight = (props) => {
	const {SectionHeights} = props;
	const {Body} = SectionHeights;
	return (
		<SetContainerInnerBodyHeight Height={Body}>
			{props.children}
		</SetContainerInnerBodyHeight>
	);
};
