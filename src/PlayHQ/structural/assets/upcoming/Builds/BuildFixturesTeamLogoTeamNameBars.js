import styled from 'styled-components';
import {TeamLogoTeamNameBars} from '../TeamLogoTeamNameBars/TeamLogoTeamNameBars';
import {TeamLogoTeamNameWhiteBars} from '../TeamLogoTeamNameBars/TeamLogoTeamNameWhiteBars';
import {TwoMetaPoints} from '../../common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';
import {TeamLogoTeamNameDefineColorsForBars} from '../TeamLogoTeamNameBars/TeamLogoTeamNameDefineColorsForBars';

export const BuildFixturesTeamLogoTeamNameBars = (props) => {
	return (
		<MatchContainer>
			<TeamLogoTeamNameBars {...props} />
			<TwoMetaPoints {...props} MetaPoints={['time', 'ground']} />
		</MatchContainer>
	);
};

// Alternative Versions of the same style

export const BuildFixturesTeamLogoTeamNameWhiteBars = (props) => {
	return (
		<MatchContainer>
			<TeamLogoTeamNameWhiteBars {...props} />
			<TwoMetaPoints {...props} MetaPoints={['time', 'ground']} />
		</MatchContainer>
	);
};

export const BuildFixturesTeamLogoTeamNameDefineColorsForBars = (props) => {
	return (
		<MatchContainer>
			<TeamLogoTeamNameDefineColorsForBars {...props} />
			<TwoMetaPoints {...props} MetaPoints={['time', 'ground']} />
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
