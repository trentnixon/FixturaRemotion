import styled from 'styled-components';
import {DisplayPlayerName} from '../../../../Components/Common/DEPRECATED_CommonVariables';

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

export const DisplayRoster = (props) => {
	const {matchData, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const PlayerNameStyles = {
		...Font.Copy,
		color: Color.Primary.Contrast,
		fontSize: '2em',
		lineHeight: '1.12em',
		fontWeight: '500',
		textAlign: 'center',
		margin: '0',
		padding: '0',
		width: '100%',
		letterSpacing: '-1px',
		textTransform: 'uppercase',
	};

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
						<DisplayPlayerName
							NAME={displayName}
							customStyles={PlayerNameStyles}
						/>
					</TeamScoreContainer>
				);
			})}
		</RosterData>
	);
};
