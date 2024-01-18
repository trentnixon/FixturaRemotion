import styled from 'styled-components';
import {DisplayRoster} from './DisplayRoster';

const TeamsAndRosterContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 0px;
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
