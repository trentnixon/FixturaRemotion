import styled from 'styled-components';
import {
	getContrastColor,
	GetBackgroundContractColorForText,
	darkenColor,
} from '../../../../../utils/colors';
import {restrictString} from '../../../../../utils/copy';

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
	font-size: 2em;
	line-height: 75px;
	font-weight: 600;
	text-align: left;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const RosterHeader = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 15px 0;
`;

const TeamScore = styled.h3`
	font-size: 2em;
	line-height: 1.2em;
	font-weight: 600;
	text-align: center;
	margin: 0;
	padding: 0 5%;
	width: 100%;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const DisplayRoster = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {
		teamHome,
		teamAway,
		gradeName,
		teamAwayLogo,
		teamHomeLogo,
		isHomeTeam,
		round,
		type,
	} = matchData;

	// Determine the account holder's team name
	const accountHoldersTeamName = isHomeTeam ? teamHome : teamAway;
	return (
		<RosterData>
			<RosterHeader>
				<TeamScore
					fontFamily={fontFamily}
					style={{
						color: GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						),
					}}
				>
					{accountHoldersTeamName}
					{/* Updated to display the account holder's team name */}
				</TeamScore>
				<TeamScore
					fontFamily={fontFamily}
					style={{
						fontWeight: 200,
						color: GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						),
					}}
				>
					{gradeName}
				</TeamScore>
			</RosterHeader>

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
					<TeamScoreContainer
						key={i}
						borderRadius={TemplateVariation.borderRadius}
						bgColor={darkenColor(THEME.primary)}
						BorderColor={THEME.secondary}
					>
						<PlayerName
							fontFamily={fontFamily}
							style={{
								color: getContrastColor(darkenColor(THEME.primary)),
							}}
						>
							{displayName}
						</PlayerName>
						{Player !== 'NO PLAYERS ALLOCATED' && (
							<PlayerSVG StrokeColor={THEME.primary} />
						)}
					</TeamScoreContainer>
				);
			})}
			<TeamScore
				fontFamily={fontFamily}
				style={{
					fontWeight: 600,
					marginTop: '10px',
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
				}}
			>
				{round} : {type}
			</TeamScore>
		</RosterData>
	);
};

const PlayerSVG = (props) => {
	const {StrokeColor} = props;
	return (
		<svg
			width="55"
			height="55"
			viewBox="0 0 24 24"
			stroke-width="1.25"
			stroke={StrokeColor}
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path
				d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"
				stroke-width="0"
				fill={StrokeColor}
			></path>
			<path
				d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"
				stroke-width="0"
				fill={StrokeColor}
			></path>
		</svg>
	);
};
