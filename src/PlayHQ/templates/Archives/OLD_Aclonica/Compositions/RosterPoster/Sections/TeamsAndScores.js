import styled from 'styled-components';
import {DisplayFixtureData} from './DisplayFixtureData';
import {DisplayRoster} from './DisplayRoster';

const TeamsAndRosterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 0px;
	width: 100%;
	flex-direction: row;
	position: relative;
`;

export const TeamsAndScores = (props) => {
	return (
		<TeamsAndRosterContainer>
			<DisplayFixtureData {...props} />
			<DisplayRoster {...props} />
		</TeamsAndRosterContainer>
	);
};
