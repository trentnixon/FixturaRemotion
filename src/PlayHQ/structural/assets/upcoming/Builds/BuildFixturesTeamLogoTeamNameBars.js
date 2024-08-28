import styled from 'styled-components';
import {TeamLogoTeamNameBars} from '../TeamLogoTeamNameBars/TeamLogoTeamNameBars';
import {ThreeMetaPoints} from '../../common/FixtureMetadata/ThreeMetaPoints/ThreeMetaPoints';
import {TeamLogoTeamNameWhiteBars} from '../TeamLogoTeamNameBars/TeamLogoTeamNameWhiteBars';
import { TwoMetaPoints } from '../../common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';

export const BuildFixturesTeamLogoTeamNameBars = (props) => {
	return (
		<MatchContainer>
			<TeamLogoTeamNameBars {...props} />
			<ThreeMetaPoints {...props} MetaPoints={['round', 'time', 'ground']} />
		</MatchContainer>
	);
};

// Alternative Versions of the same style

export const BuildFixturesTeamLogoTeamNameWhiteBars = (props) => {
	return (
		<MatchContainer>
			<TeamLogoTeamNameWhiteBars {...props} />
			<TwoMetaPoints {...props} MetaPoints={['round', 'time', 'ground']} />
		</MatchContainer>
	);
};

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 100px;
`;

const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
};
