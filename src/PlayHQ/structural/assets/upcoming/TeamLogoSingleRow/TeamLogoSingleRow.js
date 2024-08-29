import DisplayTeamName from './components/DisplayTeamName';
import BYEContainer from './components/DisplayBYEContainer';
import {TeamsAndScoresContainer} from './components/SharedStyles';
import {useStylesContext} from '../../../../context/StyleContext';
import {CaloundraCCLogoVsDate} from '../../../sport/cricket/TeamsAndScores/CaloundraCCTeamsAndScores/Logos_vs_Date';

export const TeamLogoSingleRow = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;
	const {StyleConfig} = useStylesContext();

	const {Color} = StyleConfig;

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer matchData={matchData} />;

	return (
		<>
			<TeamsAndScoresContainer>
				<DisplayTeamName Value={teamHome} FontColor={Color.Primary.Contrast} />

				<CaloundraCCLogoVsDate
					matchData={matchData}
					logos={[teamHomeLogo, teamAwayLogo]}
					imgStyles={[{}, {}]}
				/>

				<DisplayTeamName
					Value={teamAway}
					FontColor={Color.Primary.Contrast}
					LTR={false}
				/>
			</TeamsAndScoresContainer>
		</>
	);
};
