import styled from 'styled-components';
import {DisplayRosterMetaData} from './DisplayRosterMetaData';
import {DisplayRoster} from './DisplayRoster';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {DisplayLogos} from './DisplayLogos';
import {DisplayTeamNames} from './DisplayTeamNames';

const FixtureData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start; /* Distributes space evenly */
	padding: 0px;
	margin: 0px 0 0 0;
	width: 100%;
	position: relative;
`;
const FixtureDataInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	height: ${(props) => props.Height}px;
`;

export const DisplayRosterData = (props) => {
	const {matchData} = props;
	const {Heights} = useLayoutContext();

	return (
		<FixtureData>
			<FixtureDataInner Height={Heights.AssetHeight}>
				<DisplayLogos matchData={matchData} />
				<DisplayTeamNames matchData={matchData} />
				<DisplayRoster matchData={matchData} />
				<DisplayRosterMetaData matchData={matchData} />
			</FixtureDataInner>
		</FixtureData>
	);
};
