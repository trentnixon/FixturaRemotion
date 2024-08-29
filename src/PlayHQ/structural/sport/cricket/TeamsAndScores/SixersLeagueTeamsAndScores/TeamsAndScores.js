import React from 'react';
import styled, {css} from 'styled-components';

import {
	EraseFromMiddle,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../../../templates/Sixers/Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../../../templates/Sixers/Components/Body/TeamNameDisplay';
import {DisplayInningsScore} from '../../../../../templates/Sixers/Components/Body/DisplayInningsScore';
import {DisplayYetToBat} from '../../../../../templates/Sixers/Components/Body/DisplayYetToBat';
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
	padding: 20px 0;
	position: relative;
	margin-bottom: 5px;
`;

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};

`;

const ScoreIntContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.BG};
	width: 300px;
	margin: 5px;
	padding: 5px 5px;
	color: black;
	text-align: center;
	min-height: 50px;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamDetail = (props) => {
	const {team, imgStyles, score, overs, FirstInnings, Type, Name} = props;
	const frame = useCurrentFrame();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<TeamScoreContainer BG={Color.Secondary.Main}>
			<DisplayTeamLogo
				logoUrl={team.logo}
				imgStyles={imgStyles}
				FPS_SCORECARD={FPS_SCORECARD}
			/>

			<TeamandScores
				BG="white"
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
					style={{clipPath: FromRightToLeft(15, 'Wobbly')}}
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
			</TeamandScores>
		</TeamScoreContainer>
	);
};
