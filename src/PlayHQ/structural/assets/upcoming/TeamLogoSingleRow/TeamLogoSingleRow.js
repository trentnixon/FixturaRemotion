import DisplayGradeName from './components/DisplayGradeName';
import DisplayTeamName from './components/DisplayTeamName';
import DisplayLogoHolder from './components/DisplayLogoHolder';
import BYEContainer from './components/DisplayBYEContainer';
import {
	TeamScoreContainer,
	TeamsAndScoresContainer,
} from './components/SharedStyles';
import {useStylesContext} from '../../../../context/StyleContext';
import {CaloundraCCLogoVsDate} from '../../../sport/cricket/TeamsAndScores/CaloundraCCTeamsAndScores/Logos_vs_Date';



export const TeamLogoSingleRow = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
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
