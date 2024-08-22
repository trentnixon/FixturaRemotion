import DisplayGradeName from './components/DisplayGradeName';
import DisplayTeamName from './components/DisplayTeamName';
import DisplayLogoHolder from './components/DisplayLogoHolder';
import BYEContainer from './components/DisplayBYEContainer';
import {
	TeamScoreContainer,
	TeamsAndScoresContainer,
} from './components/SharedStyles';
import {useStylesContext} from '../../../../context/StyleContext';

export const TeamLogoTeamNameBars = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
	const {StyleConfig} = useStylesContext();

	const {Color} = StyleConfig;

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer matchData={matchData} />;

	return (
		<TeamsAndScoresContainer>
			<DisplayGradeName Value={gradeName} />
			<DisplayTeamName
				Value={teamHome}
				bgColor={Color.Primary.Main}
				FontColor={Color.Primary.Contrast}
			/>

			<TeamScoreContainer>
				<DisplayLogoHolder teamLogo={teamHomeLogo} />

				<DisplayGradeName Value="vs" />
				<DisplayLogoHolder teamLogo={teamAwayLogo} position="right" />
			</TeamScoreContainer>
			<DisplayTeamName
				Value={teamAway}
				bgColor={Color.Secondary.Main}
				FontColor={Color.Secondary.Contrast}
				LTR={false}
			/>
		</TeamsAndScoresContainer>
	);
};
