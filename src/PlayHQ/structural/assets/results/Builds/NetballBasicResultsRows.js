import styled from 'styled-components';
import {ScoreLogoTeamName} from '../../../sport/netball/TeamsAndScores/ScoreLogoTeamName';
import {ResultStatement} from '../../../sport/netball/ResultStatment/ResultStatment';
import { MetaDataTimeSplit } from '../../common/FixtureMetadata/MetaDataTimeSplit/MetaDataTimeSplit';
import {DisplayBasicQuarters} from '../../../sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import {BasicPlayerPerformances} from '../../../sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 60px;
`;

export const NetballBasicResultsRows = (props) => {
	return (
		<MatchContainer>
			<ScoreLogoTeamName {...props} />
			<ResultStatement {...props} />
			<MetaDataTimeSplit {...props} />
			<DisplayBasicQuarters {...props} />
			<BasicPlayerPerformances {...props} />
		</MatchContainer>
	);
};

const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
};
