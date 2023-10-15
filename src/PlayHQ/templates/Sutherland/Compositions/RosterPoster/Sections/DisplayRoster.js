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
	width: 60%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	width: 96%;
	height: 65px;
	margin: 2px 2% 3px 0;
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(25px);
`;

const RosterHeader = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 30px 0 0 0;
`;

const TeamScore = styled.h3`
	font-size: 2em;
	line-height: 1.2em;
	font-weight: 600;
	text-align: left;
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
	const ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
					{restrictString(gradeName, 50)}
				</TeamScore>
			</RosterHeader>

			{ARR.map((item, i) => {
				return (
					<TeamScoreContainer
						key={i}
						borderRadius={TemplateVariation.borderRadius}
						bgColor={darkenColor(THEME.primary)}
					/>
				);
			})}
		</RosterData>
	);
};
