import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

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
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

export const DisplayRoster = ({matchData}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font, Color} = StyleConfig;
	// Determine the account holder's team name

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
							style={{
								...TextStyles.copyLarge,
								...Font.Copy,
								color: Color.Primary.Contrast,
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
