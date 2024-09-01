import styled from 'styled-components';
import {useLayoutContext} from '../../../../context/LayoutContext';

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
`;

export const ContainerHeaderHeight = (props) => {
	const {Heights} = useLayoutContext();
	const {Header} = Heights;
	return (
		<SetContainerHeaderHeight Height={Header}>
			{props.children}
		</SetContainerHeaderHeight>
	);
};
