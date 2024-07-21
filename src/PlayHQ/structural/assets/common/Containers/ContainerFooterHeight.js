import styled from 'styled-components';
import {useLayoutContext} from '../../../../context/LayoutContext';

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
	const {Heights} = useLayoutContext();
	const {Footer} = Heights;
	return (
		<SetContainerFooterHeight Height={Footer}>
			{props.children}
		</SetContainerFooterHeight>
	);
};
