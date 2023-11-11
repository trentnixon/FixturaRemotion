import styled from 'styled-components';
import {
	getContrastColor,
	GetBackgroundContractColorForText,
	darkenColor,
} from '../../../../../utils/colors';
import {restrictString} from '../../../../../utils/copy';

const RosterData = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	width: 100%;
	height: 60px;
	margin: 0;
	padding:0 10px;
	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
`;

const PlayerName = styled.h3`
	font-size: 1.8em;
	line-height: 56px;
	font-weight: 400;
	text-align: center;
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
	text-align: right;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: -0.05em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const DisplayRoster = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
	console.log(matchData.teamRoster);
	const ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<RosterData>
			

			{matchData.teamRoster.map((Player, i) => {
				return (
					<TeamScoreContainer
						key={i}
						borderRadius={TemplateVariation.borderRadius}
						bgColor={darkenColor(THEME.primary)}
					>
						<PlayerName
							fontFamily={fontFamily}
							style={{
								color: getContrastColor(darkenColor(THEME.primary)),
							}}
						>
							{Player}
						</PlayerName>
					</TeamScoreContainer>
				);
			})}
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
					{restrictString(gradeName, 50)}
				</TeamScore>
			</RosterHeader>
			{/* {ARR.map((item, i) => {
				return (
					<TeamScoreContainer
						key={i}
						borderRadius={TemplateVariation.borderRadius}
						bgColor={darkenColor(THEME.primary)}
					/>
				);
			})} */}
		</RosterData>
	);
};
