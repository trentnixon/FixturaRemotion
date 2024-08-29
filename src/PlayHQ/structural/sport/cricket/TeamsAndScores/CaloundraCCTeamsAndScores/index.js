import React from 'react';
import TeamDetail from './TeamDetail';
import {calculateImageDimensions} from '../../../../Sponsors/Utils/utils';
import {parseScore} from '../../../../../utils/copy';
import {useStylesContext} from '../../../../../context/StyleContext';
import {CaloundraCCFixtureGround} from './GroundLabel';
import {CaloundraCCLogoVsDate} from './Logos_vs_Date';
import {OuterShell} from '../../../../assets/common/Containers/CaloundraCC/OuterShell';
import {InnerShell} from '../../../../assets/common/Containers/CaloundraCC/InnerShell';

export const CaloundraCCTeamsAndScores = ({matchData}) => {
	const {homeTeam, awayTeam, teamHomeLogo, teamAwayLogo} = matchData;
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;
	const IMGSIZING = [80, 80, 80];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const {score: homeScore, overs: homeOvers} = parseScore(homeTeam.score);
	const {score: awayScore, overs: awayOvers} = parseScore(awayTeam.score);

	return (
		<>
			<CaloundraCCFixtureGround matchData={matchData} />
			<OuterShell borderColor={Color.Primary.Main}>
				<InnerShell Gradient={Color.Background.Gradients.QLDC}>
					<TeamDetail
						team={{logo: teamHomeLogo}}
						imgStyles={teamHomeLogoStyles}
						score={homeScore}
						overs={homeOvers}
						FirstInnings={homeTeam.HomescoresFirstInnings}
						Name={homeTeam.name}
						direction="row"
						justifyContent="flex-end"
						textAlign="right"
					/>
					<CaloundraCCLogoVsDate
						matchData={matchData}
						logos={[teamHomeLogo, teamAwayLogo]}
						imgStyles={[teamHomeLogoStyles, teamAwayLogoStyles]}
					/>

					<TeamDetail
						team={{logo: teamAwayLogo}}
						imgStyles={teamAwayLogoStyles}
						score={awayScore}
						overs={awayOvers}
						FirstInnings={awayTeam.AwayscoresFirstInnings}
						Name={awayTeam.name}
						direction="row-reverse"
						justifyContent="flex-end"
						textAlign="left"
					/>
				</InnerShell>
			</OuterShell>
		</>
	);
};
