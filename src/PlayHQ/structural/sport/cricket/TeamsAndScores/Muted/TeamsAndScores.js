import React from 'react';
import styled, {css} from 'styled-components';

import {
	EraseFromMiddle,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../templates/Muted/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../templates/Muted/Components/Body/TeamNameDisplay';
import {DisplayInningsScore} from '../../../../../templates/Muted/Components/Body/DisplayInningsScore';
import {DisplayYetToBat} from '../../../../../templates/Muted/Components/Body/DisplayYetToBat';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const TeamScoreContainer = styled.div``;

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
// background-color: ${(props) => props.BG};
const ScoreIntContainer = styled.div``;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamDetail = (props) => {
	const {team, imgStyles, score, overs, FirstInnings, Type, Name} = props;
	const frame = useCurrentFrame();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<TeamScoreContainer BG={Color.Secondary.Main}>
			<TeamandScores
				BG="white"
				style={{
					clipPath: FromLeftToRight(10, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				<TeamNameDisplay name={Name} />
				<DisplayTeamLogo
					logoUrl={team.logo}
					imgStyles={imgStyles}
					FPS_SCORECARD={FPS_SCORECARD}
				/>
			</TeamandScores>
			<ScoreIntContainerAnimated
				style={{clipPath: FromRightToLeft(10, 'Wobbly')}}
			>
				{score === 'Yet to Bat' ? (
					<DisplayYetToBat score={score} />
				) : (
					<>
						<DisplayInningsScore
							FirstInnings={FirstInnings}
							Type={Type}
							score={score}
							overs={overs}
						/>
					</>
				)}
			</ScoreIntContainerAnimated>
		</TeamScoreContainer>
	);
};
