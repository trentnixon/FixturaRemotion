import styled from 'styled-components';
import {DisplayRoster} from './DisplayRoster';

const TeamsAndRosterContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	padding: 50px 0 0 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

export const TeamsAndScores = (props) => {
	return (
		<TeamsAndRosterContainer>
			<DisplayRoster {...props} />
		</TeamsAndRosterContainer>
	);
};
