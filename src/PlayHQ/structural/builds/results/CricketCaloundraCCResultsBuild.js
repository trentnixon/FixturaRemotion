import styled from 'styled-components';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {CaloundraCCTeamsAndScores} from '../../sport/cricket/TeamsAndScores/CaloundraCCTeamsAndScores';
import {CaloundraCCPlayerPerformances} from '../../sport/cricket/PlayerPerformances/CaloundraCC_PlayerPerformances';

export const CricketCaloundraCCResultsBuild = (props) => {
	const {matchData} = props;

	if (props.matchData.status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} />;

	return (
		<MatchContainer>
			<CaloundraCCTeamsAndScores {...props} />
			<CaloundraCCPlayerPerformances {...props} />
		</MatchContainer>
	);
};

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 20px auto;
`;
