import DisplayGradeName from './components/DisplayGradeName';
import DisplayTeamName from './components/DisplayTeamName';
import DisplayLogoHolder from './components/DisplayLogoHolder';
import BYEContainer from './components/DisplayBYEContainer';
import {
	TeamScoreContainer,
	TeamsAndScoresContainer,
} from './components/SharedStyles';

export const TeamLogoTeamNameBars = (props) => {
	const {matchData, StyleConfig} = props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
	const {Color} = StyleConfig;

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<TeamsAndScoresContainer>
			<DisplayGradeName Value={gradeName} {...props} />
			<DisplayTeamName
				Value={teamHome}
				bgColor={Color.Primary.Darken}
				{...props}
			/>

			<TeamScoreContainer>
				<DisplayLogoHolder {...props} teamLogo={teamHomeLogo} />

				<DisplayGradeName Value="vs" {...props} />
				<DisplayLogoHolder
					{...props}
					teamLogo={teamAwayLogo}
					position="right"
				/>
			</TeamScoreContainer>
			<DisplayTeamName
				Value={teamAway}
				{...props}
				bgColor={Color.Secondary.Main}
			/>
		</TeamsAndScoresContainer>
	);
};
