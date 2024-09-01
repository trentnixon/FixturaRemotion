import styled from 'styled-components';
import {useLayoutContext} from '../../../../context/LayoutContext';

const SetContainerBodyHeight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: 0;
	padding: 0 2%;
	width: 100%;
	height: ${(props) => props.Height}px;
	position: relative;
`;

export const ContainerBodyHeight = (props) => {
	const {Heights} = useLayoutContext();
	const {AssetHeight} = Heights;
	return (
		<SetContainerBodyHeight Height={AssetHeight} style={{...props.styles}}>
			{props.children}
		</SetContainerBodyHeight>
	);
};

const SetContainerInnerBodyHeight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 100%;
	height: -webkit-fill-available;
	max-width: 100%;
	margin: 0 auto;
`;
export const ContainerInnerBodyHeight = (props) => {
	const {Heights} = useLayoutContext();
	const {AssetHeight} = Heights;
	return (
		<SetContainerInnerBodyHeight Height={AssetHeight} style={{...props.styles}}>
			{props.children}
		</SetContainerInnerBodyHeight>
	);
};
