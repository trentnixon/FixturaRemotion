import styled from 'styled-components';

const SetContainerHeaderHeight = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
    width: 100%;
	height: ${(props) => props.Height}px;
	z-index: 1000;
	height: ${(props) => props.Height}px;
	/* background-color: red; */
`;

export const ContainerHeaderHeight = (props) => { 
	const {SectionHeights} = props;
	const {Header} = SectionHeights;
	return (
		<SetContainerHeaderHeight Height={Header}>
			{props.children}
		</SetContainerHeaderHeight>
	);
};
