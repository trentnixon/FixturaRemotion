import styled from 'styled-components';
import { useLayoutContext } from '../../../../../context/LayoutContext';

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
	justify-content: center;
	width: 880px;
	margin: 0 20px 0 180px;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const ContainerQLDCBodyHeight = (props) => {
	const {children} = props;
	const {Heights} = useLayoutContext();
	const {AssetHeight} = Heights;
	return <ResultsContainer Height={AssetHeight}>{children}</ResultsContainer>;
};
