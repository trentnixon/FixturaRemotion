import styled from 'styled-components';
import {getContrastColor} from '../../../../../../utils/colors';

const RosterData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	width: 100%;
	margin: 0;
	padding: 2px 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const PlayerName = styled.h3`
	font-size: 2.2em;
	line-height: 1.12em;
	font-weight: 200;
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: -0.01em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const DisplayRoster = (props) => {
	const {matchData, THEME, fontFamily} = props;
	const {teamHome, teamAway, isHomeTeam} = matchData;

	// Determine the account holder's team name
	const accountHoldersTeamName = isHomeTeam ? teamHome : teamAway;
	return (
		<RosterData>
			{matchData.teamRoster.map((Player, i) => {
				// Regular expression to find 'C' or 'VC' at the end of a string
				const regex = /\s(c|vc|wk)$/;
				const match = Player.match(regex);

				let displayName;
				if (match) {
					// Wrap the matched suffix in a span with italic styling
					displayName = (
						<>
							{Player.replace(regex, ' ')}
							<span style={{fontStyle: 'italic', fontSize: '0.7em'}}>
								({match[0]})
							</span>
						</>
					);
				} else {
					displayName = Player;
				}
				displayName =
					displayName === 'No players allocated to line-up'
						? 'NO PLAYERS ALLOCATED'
						: displayName;
				return (
					<TeamScoreContainer key={i}>
						<PlayerName
							fontFamily={fontFamily}
							style={{
								color: getContrastColor(THEME.primary),
							}}
						>
							{displayName}
						</PlayerName>
					</TeamScoreContainer>
				);
			})}
		</RosterData>
	);
};
