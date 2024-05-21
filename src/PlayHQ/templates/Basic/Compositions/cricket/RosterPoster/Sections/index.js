import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {DisplayFixtureData} from './DisplayFixtureData';
import styled from 'styled-components';

export const Match = (props) => {
	return (
		<MatchContainer>
			<HeaderContainer {...props} />
			<ColumnContainer>
				<DisplayFixtureData {...props} />
				<TeamsAndScores {...props} />
			</ColumnContainer>
		</MatchContainer>
	);
};

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
