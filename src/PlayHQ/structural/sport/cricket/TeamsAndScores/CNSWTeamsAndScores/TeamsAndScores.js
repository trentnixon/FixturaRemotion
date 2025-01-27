import React from 'react';
import styled, {css} from 'styled-components';

import {
	EraseFromMiddle,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../templates/CNSW/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../templates/CNSW/Components/Body/TeamNameDisplay';
import {DisplayInningsScore} from '../../../../../templates/CNSW/Components/Body/DisplayInningsScore';
import {DisplayYetToBat} from '../../../../../templates/CNSW/Components/Body/DisplayYetToBat';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 1.7em;
	padding: 10px 0;
	position: relative;
	margin-bottom: 20px;
`;

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};
	min-height: 50px;
`;

const ScoreIntContainer = styled.div`
	background-color: ${(props) => props.BG};
	width: 300px;
	margin: 5px;
	padding: 5px 5px;
	color: black;
	text-align: center;
	min-height: 40px;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamDetail = (props) => {
	const {team, imgStyles, score, overs, firstInnings, Type, Name} = props;
	const frame = useCurrentFrame();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<TeamScoreContainer BG={Color.Secondary.Main}>
			<DisplayTeamLogo logoUrl={team.logo} imgStyles={imgStyles} />

			<TeamandScores
				BG={Color.Secondary.Main}
				style={{
					clipPath: FromLeftToRight(5, 'Slow'),
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

				<ScoreIntContainerAnimated
					BG={StyleConfig.Color.Primary.Main}
					style={{
						clipPath: FromRightToLeft(15, 'Wobbly'),
					}}
				>
					{score === 'Yet to Bat' ? (
						<DisplayYetToBat score={score} />
					) : (
						<>
							<DisplayInningsScore
								firstInnings={firstInnings}
								Type={Type}
								score={score}
								overs={overs}
							/>
						</>
					)}
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</TeamScoreContainer>
	);
};
