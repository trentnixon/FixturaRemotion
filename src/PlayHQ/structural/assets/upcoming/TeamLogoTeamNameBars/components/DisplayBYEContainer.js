// /components/BYEContainer.js
import {useCurrentFrame} from 'remotion';
import {TeamsAndScoresContainer, TeamScoreContainer} from './SharedStyles';

import DisplayGradeName from './DisplayGradeName';
import DisplayTeamName from './DisplayTeamName';
import {restrictString} from '../../../../../utils/copy';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const BYEContainer = ({matchData}) => {
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_SCORECARD} = TIMINGS;
	const {Color} = StyleConfig;
	const {teamHome, teamAway, gradeName} = matchData;
	const frame = useCurrentFrame();

	const CreateBye = (teamHome, teamAway) => {
		let displayString;
		if (teamHome === 'Bye') {
			displayString = `${restrictString(teamAway, 30)} : Bye`;
		} else {
			displayString = `${restrictString(teamHome, 30)} : Bye`;
		}
		return displayString;
	};

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<DisplayGradeName Value={gradeName} {...{FPS_SCORECARD, StyleConfig}} />
			</TeamScoreContainer>
			<TeamScoreContainer
				style={{
					clipPath: FromLeftToRight(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
				borderRadius={TemplateVariation.borderRadius}
				bgColor={Color.Primary.Darken}
			>
				<DisplayTeamName
					Value={CreateBye(teamHome, teamAway)}
					{...{FPS_SCORECARD, TemplateVariation, StyleConfig}}
				/>
			</TeamScoreContainer>
		</TeamsAndScoresContainer>
	);
};

export default BYEContainer;
