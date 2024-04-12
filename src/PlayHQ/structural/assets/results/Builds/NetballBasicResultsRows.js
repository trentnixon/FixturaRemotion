import styled from 'styled-components';
import {ScoreLogoTeamName} from '../../../sport/netball/TeamsAndScores/ScoreLogoTeamName';
import {ResultStatement} from '../../../sport/netball/ResultStatment/ResultStatment';
import {MetaDataTimeSplit} from '../../common/FixtureMetadata/MetaDataTimeSplit/MetaDataTimeSplit';
import {DisplayBasicQuarters} from '../../../sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import {BasicPlayerPerformances} from '../../../sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';
import {ScoreLogoTeamNameLARGE} from '../../../sport/netball/TeamsAndScores/ScoreLogoTeamNameLARGE';
import {TwoMetaPoints} from '../../common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;

const ParentContainer = styled.div`
	position: relative;
	height: 210px;
`;

const PositionTop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
`;

export const NetballBasicResultsRows = (props) => {
	return (
		<MatchContainer>
			<ScoreLogoTeamNameLARGE {...props} />
			<ResultStatement {...props} />
			<ParentContainer>
				<PositionTop>
					<DisplayBasicQuarters {...props} />
				</PositionTop>
				<PositionTop>
					<BasicPlayerPerformances {...props} />
				</PositionTop>
			</ParentContainer>

			<TwoMetaPoints {...props} MetaPoints={['gradeName', 'round']} />
		</MatchContainer>
	);
};

const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
};
