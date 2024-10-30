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

import {useLayoutContext} from '../../../../../context/LayoutContext';
import {MutedDivider} from '../../../../../templates/Muted/Components/Common/Divider';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
`;

const TeamLogo = styled.div``;

const ScoreColumn = styled.div`
	flex: 5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const LogoColumn = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const ScoreIntContainer = styled.div`
	width: 100%;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamDetail = (props) => {
	const {team, score, overs, FirstInnings, Type, Name} = props;
	const frame = useCurrentFrame();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<>
			<TeamScoreContainer>
				<ScoreColumn>
					<ScoreIntContainerAnimated
						style={{
							clipPath: FromRightToLeft(10, 'Wobbly'),
							opacity: interpolateOpacityByFrame(
								frame,
								FPS_SCORECARD - 30,
								FPS_SCORECARD,
								1,
								0
							),
						}}
					>
						{score === 'Yet to Bat' ? (
							<DisplayYetToBat score={score} />
						) : (
							<DisplayInningsScore
								FirstInnings={FirstInnings}
								Type={Type}
								score={score}
								over={overs}
							/>
						)}
					</ScoreIntContainerAnimated>
					<div
						style={{
							marginTop: '10px',
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
					</div>
				</ScoreColumn>
				<LogoColumn>
					<TeamLogo
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
						<DisplayTeamLogo
							logoUrl={team.logo}
							FPS_SCORECARD={FPS_SCORECARD}
						/>
					</TeamLogo>
				</LogoColumn>
			</TeamScoreContainer>
			<MutedDivider margin="0 0 5px 0" width="200px" />
		</>
	);
};
