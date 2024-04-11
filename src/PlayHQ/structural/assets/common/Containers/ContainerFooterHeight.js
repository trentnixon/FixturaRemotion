import styled from 'styled-components';

const SetContainerFooterHeight = styled.div`
	/* background-color: green; */
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-content: center;
	align-items: center;

	height: ${(props) => props.Height}px;
`;

export const ContainerFooterHeight = (props) => {
	const {SectionHeights} = props;
	const {Footer} = SectionHeights;
	return (
		<SetContainerFooterHeight Height={Footer}>
			{props.children}
		</SetContainerFooterHeight>
	);
};
