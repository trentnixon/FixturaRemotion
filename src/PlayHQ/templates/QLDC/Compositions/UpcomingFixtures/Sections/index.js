//import styled from 'styled-components';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';

export const Match = (props) => {
	return (
		<>
			<TeamsAndScores {...props} />
			{/* <HeaderContainer {...props} /> */}
		</>
	);
};
