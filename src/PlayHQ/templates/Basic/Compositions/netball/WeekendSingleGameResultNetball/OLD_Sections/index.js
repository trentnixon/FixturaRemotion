import styled from 'styled-components';
import {DisplayBasicQuarters} from '../../../../../../structural/sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import {BasicPlayerPerformances} from '../../../../../../structural/sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';
import {ResultStatement} from '../../../../../../structural/sport/netball/ResultStatment/ResultStatment';
import {OneMetaPoint} from '../../../../../../structural/assets/common/FixtureMetadata/OneMetaPoint/OneMetaPoint';
import { ScoreLogoTeamNameLARGE } from '../../../../../../structural/sport/netball/TeamsAndScores/ScoreLogoTeamNameLARGE';

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
`;
export const Match = (props) => {
	console.log('props ', props.TemplateVariation);
	const CustomStyle={
		height:'auto',
		marginBottom:0,
		marginTop:'7px',
	}
	return (
		<MatchContainer>
		
			<ScoreLogoTeamNameLARGE {...props} />
			<ResultStatement {...props} />
			<DisplayBasicQuarters {...props} />
			<BasicPlayerPerformances {...props} />
			<OneMetaPoint {...props} MetaPoints={['round']} CustomStyle={CustomStyle}/>
			<OneMetaPoint {...props} MetaPoints={['time']} CustomStyle={CustomStyle}/>
			<OneMetaPoint {...props} MetaPoints={['ground', 'round']} CustomStyle={CustomStyle} />
		</MatchContainer>
	);
};
