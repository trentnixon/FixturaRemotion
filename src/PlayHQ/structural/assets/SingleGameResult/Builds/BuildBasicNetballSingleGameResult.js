import styled from 'styled-components';
import {ScoreLogoTeamNameLARGE} from '../../../sport/netball/TeamsAndScores/ScoreLogoTeamNameLARGE';
import {ResultStatement} from '../../../sport/netball/ResultStatment/ResultStatment';
import {DisplayBasicQuarters} from '../../../sport/netball/DisplayQuaters/BasicQuaters/BasicQuaters';
import {BasicPlayerPerformances} from '../../../sport/netball/PlayerPerformances/BasicPerformances/BasicPerformances';
import {OneMetaPoint} from '../../common/FixtureMetadata/OneMetaPoint/OneMetaPoint';

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
`;
export const BuildBasicNetballSingleGameResult = (props) => {
	console.log('props ', props.TemplateVariation);
	const CustomStyle = {
		height: 'auto',
		marginBottom: 0,
		marginTop: '7px',
	};
	return ( 
		<MatchContainer>
			<ScoreLogoTeamNameLARGE {...props} />
			<ResultStatement {...props} />
			<DisplayBasicQuarters {...props} />
			<BasicPlayerPerformances {...props} />
			<OneMetaPoint 
				{...props}
				MetaPoints={['round']}
				CustomStyle={CustomStyle}
			/>
			<OneMetaPoint
				{...props}
				MetaPoints={['time']}
				CustomStyle={CustomStyle}
			/>
			<OneMetaPoint
				{...props}
				MetaPoints={['ground', 'round']}
				CustomStyle={CustomStyle}
			/>
		</MatchContainer>
	);
};
