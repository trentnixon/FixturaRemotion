import styled from 'styled-components';
import {CricketMatchAbandoned} from '../../sport/cricket/MatchAbandoned/CricketMatchAbandoned';
import {BasicTeamsAndScores} from '../../sport/cricket/TeamsAndScores/BasicTeamsAndScores';
import {BasicPlayerPerformances} from '../../sport/cricket/PlayerPerformances/Basic_PlayerPerformances';
import {BasicResultsMetaDataPoints} from '../../sport/cricket/MetaDataPoints/BasicResultsMetaDataPoints';

export const CricketBasicResultsBuild = (props) => {
	const {matchData} = props;

	if (props.matchData.status === 'Abandoned')
		return <CricketMatchAbandoned matchData={matchData} />;

	return (
		<MatchContainer>
			<BasicTeamsAndScores {...props} />
			<BasicPlayerPerformances {...props} />
			<BasicResultsMetaDataPoints {...props} />
		</MatchContainer>
	);
};

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
`;
