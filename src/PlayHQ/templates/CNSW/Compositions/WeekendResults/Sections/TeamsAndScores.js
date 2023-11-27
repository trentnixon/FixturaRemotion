import React from 'react';
import styled, {css} from 'styled-components';
import {darkenColor} from '../../../../../utils/colors';

import {
	EraseFromMiddle,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../Animation/ClipWipe';
import {DisplayTeamLogo} from '../../../Components/Body/DisplayTeamLogo';
import {TeamNameDisplay} from '../../../Components/Body/TeamNameDisplay';
import {DisplayInningsScore} from '../../../Components/Body/DisplayInningsScore';
import {DisplayYetToBat} from '../../../Components/Body/DisplayYetToBat';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 1.7em;
	height: 1.7em;
	line-height: 1.7em;
	font-weight: 600;
	padding: 10px 0;
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
	background-color: ${(props) => props.BG};
	width: 200px;
	margin: 5px;
	padding: 5px;
	color: black;
	text-align: center;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
`;

export const TeamDetail = (props) => {
	const {
		team,
		fontFamily,
		imgStyles,
		score,
		overs,
		FPS_SCORECARD,
		THEME,
		FirstInnings,
		Type,
		Name,
	} = props;

	return (
		<TeamScoreContainer BG={THEME.secondary}>
			<DisplayTeamLogo
				logoUrl={team.logo}
				imgStyles={imgStyles}
				FPS_SCORECARD={FPS_SCORECARD}
			/>

			<TeamandScores
				BG={THEME.secondary}
				style={{clipPath: FromLeftToRight(5, 'Slow')}}
			>
				<TeamNameDisplay
					name={Name}
					fontFamily={fontFamily}
					THEME={THEME}
					FPS_SCORECARD={FPS_SCORECARD}
				/>

				<ScoreIntContainerAnimated
					BG={darkenColor(THEME.primary)}
					style={{clipPath: FromRightToLeft(15, 'Wobbly')}}
					FPS_SCORECARD={FPS_SCORECARD}
				>
					{score === 'Yet to Bat' ? (
						<DisplayYetToBat
							FPS_SCORECARD={FPS_SCORECARD}
							THEME={THEME}
							fontFamily={fontFamily}
							score={score}
						/>
					) : (
						<DisplayInningsScore
							fontFamily={fontFamily}
							FPS_SCORECARD={FPS_SCORECARD}
							FirstInnings={FirstInnings}
							Type={Type}
							THEME={THEME}
							score={score}
							overs={overs}
						/>
					)}
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</TeamScoreContainer>
	);
};
