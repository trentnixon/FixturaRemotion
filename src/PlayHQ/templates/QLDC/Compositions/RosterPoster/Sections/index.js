import {MatchContainer} from './MatchContainer';
import {DisplayFixtureData} from './DisplayFixtureData';
import styled from 'styled-components';
import {  RosterTitleHeader } from '../../../Components/Header/LogoClubTitleHeader';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
	return (
		<MatchContainer THEME={THEME} fontFamily={fontFamily}>
			<RosterTitleHeader {...props} />
			<ColumnContainer>
				<DisplayFixtureData {...props} />
			</ColumnContainer>
		</MatchContainer>
	); 
};

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 70%;
	height: auto;
	max-width: 100%;
	margin-bottom: 0px;

`;
