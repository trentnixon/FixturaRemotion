import styled from 'styled-components';
import {DisplayFixturesGrade} from '../TeamVsTeamRows/components/DisplayGradeName';
import {TeamVsTeamRows} from '../TeamVsTeamRows/TeamVsTeamRows';
import {TeamVsTeamNoColorRows} from '../TeamvsTeamNoColor/TeamVsTeamRows';
import {
	DisplayMutedFixturesGrade,
	DisplayMutedTime,
} from '../TeamvsTeamNoColor/components/DisplayGradeName';
import {MutedDivider} from '../../../../templates/Muted/Components/Common/Divider';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	margin-bottom: 10px;
`;

export const BuildTeamVsTeamRows = (props) => {
	return (
		<TeamsAndScoresContainer>
			<DisplayFixturesGrade {...props} />
			<TeamVsTeamRows {...props} />
		</TeamsAndScoresContainer>
	);
};

export const BuildMutedTeamVsTeamRows = (props) => {
	return (
		<>
			<TeamsAndScoresContainer>
				<DisplayMutedFixturesGrade {...props} />
				<TeamVsTeamNoColorRows {...props} />
				<DisplayMutedTime {...props} />
			</TeamsAndScoresContainer>
			<MutedDivider />
		</>
	);
};
