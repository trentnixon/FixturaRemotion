import {DisplayRosterData} from './components/DisplayRosterData';
import styled from 'styled-components';
import {QLDCricketRosterTitle} from '../../../../assets/common/TitleSequences/QLDCricket/Roster';

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	margin: 0 0 0 30%;
	height: auto;
	max-width: 100%;
	margin-bottom: 0px;
`;

export const CricketQLDCRosterBuild = (props) => {
	return (
		<>
			<QLDCricketRosterTitle />
			<ColumnContainer>
				<DisplayRosterData {...props} />
			</ColumnContainer>
		</>
	);
};
