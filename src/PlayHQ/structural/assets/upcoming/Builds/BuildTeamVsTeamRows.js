import styled from 'styled-components';
import { DisplayFixturesGrade } from '../TeamVsTeamRows/components/DisplayGradeName';
import { TeamVsTeamRows } from '../TeamVsTeamRows/TeamVsTeamRows';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	margin-bottom: 100px;
`;

export const BuildTeamVsTeamRows = (props) => {
	return (
		<TeamsAndScoresContainer>
            <DisplayFixturesGrade {...props}/>
			<TeamVsTeamRows {...props} />
		</TeamsAndScoresContainer>
	);
};
