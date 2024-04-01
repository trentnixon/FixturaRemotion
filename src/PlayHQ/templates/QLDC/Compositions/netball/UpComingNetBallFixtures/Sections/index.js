import styled from 'styled-components';
import {TeamsAndScores} from './TeamsAndScores';
import { DisplayFixturesGrade } from '../../../../../../structural/assets/upcoming/TeamVsTeamRows/components/DisplayGradeName';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

export const Match = (props) => {
	return (
		<TeamsAndScoresContainer>
            <DisplayFixturesGrade {...props}/>
			<TeamsAndScores {...props} />
		</TeamsAndScoresContainer>
	);
};
