import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import {PlayerPerformances} from './Performances';
import styled from 'styled-components';
export const Match = (props) => {
	const {THEME, fontFamily} = props;

	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<InningsContainer>
				<HeaderContainer fontFamily={'Oswald'} {...props} />
				<TeamsAndScores fontFamily={'Oswald'} {...props} />
				<PlayerPerformances fontFamily={'Oswald'} {...props} />
			</InningsContainer> 
		</MatchContainer> 
	);
};

const InningsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: 20px;
	position: relative;
`;
