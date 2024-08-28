import styled from 'styled-components';
import {restrictName} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

const RosterData = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	width: 100%;
	height: 75px;
	margin: 2px 0;
	padding: 0 10px 0 20px;
	border-left: 5px solid ${(props) => props.BorderColor};
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const PlayerName = styled.h3`
	text-align: left;
	margin: 0;
	padding: 0;
	width: 100%;
	text-transform: uppercase;
`;

const RosterHeader = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px 0;
`;

const TeamScore = styled.h3`
	text-align: center;
	margin: 0;
	padding: 0 5%;
	width: 100%;
	text-transform: uppercase;
`;

export const DisplayRoster = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, gradeName, isHomeTeam, round, type} = matchData;
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;
	// Determine the account holder's team name
	const accountHoldersTeamName = isHomeTeam ? teamHome : teamAway;

	// Function to process each player name
	const processPlayerName = (playerName) => {
		// Remove any parenthetical information
		const regexParentheses = /\s*\([^)]*\)/;
		playerName = playerName.replace(regexParentheses, '');

		// Regular expression to find 'C', 'VC', or 'WK' at the end of a string
		const regexSuffix = /\s(c|vc|wk)$/;
		const suffixMatch = playerName.match(regexSuffix);
		let displayName = playerName;

		if (suffixMatch) {
			displayName = playerName.replace(regexSuffix, ' ');
			displayName = restrictName(displayName, 25);
			return (
				<>
					{displayName}
					<span style={{fontStyle: 'italic', fontSize: '0.7em'}}>
						({suffixMatch[0].trim()})
					</span>
				</>
			);
		}
		return restrictName(displayName, 25);
	};

	return (
		<RosterData>
			<RosterHeader>
				<TeamScore
					style={{
						...Font.Copy,
						...TextStyles.copyMediumBold,
						color: Color.Primary.BackgroundContractColor,
					}}
				>
					{accountHoldersTeamName}
				</TeamScore>
				<TeamScore
					style={{
						...Font.Copy,
						...TextStyles.copyMedium,
						color: Color.Primary.BackgroundContractColor,
					}}
				>
					{gradeName}
				</TeamScore>
			</RosterHeader>

			{matchData.teamRoster.map((Player, i) => {
				const displayName = processPlayerName(Player);

				return (
					<TeamScoreContainer
						key={i}
						borderRadius={TemplateVariation.borderRadius}
						bgColor={Color.Primary.Darken}
						BorderColor={Color.Secondary.Main}
					>
						<PlayerName
							style={{
								...Font.Copy,
								...TextStyles.copyMedium,
								color: Color.Primary.Contrast,
							}}
						>
							{displayName === 'No players allocated to line-up'
								? 'NO PLAYERS ALLOCATED'
								: displayName}
						</PlayerName>
					</TeamScoreContainer>
				);
			})}
			<TeamScore
				style={{
					...Font.Copy,
					...TextStyles.copyMedium,
					marginTop: '10px',
					color: Color.Primary.BackgroundContractColor,
				}}
			>
				{round} : {type}
			</TeamScore>
		</RosterData>
	);
};
