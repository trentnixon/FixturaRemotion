import React from 'react';
import styled, {css} from 'styled-components';

import {
	EraseFromMiddle,
	FromLeftToRight,
	FromRightToLeft,
	FromTopToBottom,
} from '../../../../../Animation/ClipWipe';

import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {
	DisplayInningsScore,
	DisplayTeamName,
	FirstInningsScore,
} from '../../../Components/Common/CommonVariables';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 1.7em;
	height: 2.2em;
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
	padding: 0px;
`;

const ScoreIntContainer = styled.div`
	background-color: ${(props) => props.BG};
	width: 260px;
	margin: 5px;
	padding: 5px 5px;
	color: black;
	text-align: center;
`;

const animatedStyle = css`
	animation: ${EraseFromMiddle} 1s forwards;
`;

const ScoreIntContainerAnimated = styled(ScoreIntContainer)`
	${(props) => props.animateOut && animatedStyle}
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TeamDetail = (props) => {
	const {
		score,
		overs,
		FPS_SCORECARD,
		FirstInnings,
		Type,
		Name,
		StyleConfig,
	} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();

	const teamNameCustomStyles = {
		color: Color.Secondary.Contrast,
		...Font.TitleAlt,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
	};
	const RunsStyles = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		fontWeight: 600,
	};

	return (
		<TeamScoreContainer BG={Color.Secondary.Main}>
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
				<DisplayTeamName
					name={Name}
					customStyles={teamNameCustomStyles}
					frame={frame}
				/>

				<ScoreIntContainerAnimated
					BG={Color.Primary.Darken}
					style={{clipPath: FromRightToLeft(15, 'Wobbly')}}
					FPS_SCORECARD={FPS_SCORECARD}
				>
					<FirstInningsScore
						FirstInnings={FirstInnings}
						Type={Type}
						customStyles={RunsStyles}
					/>
					<DisplayInningsScore
						score={score}
						overs={overs}
						customStyles={RunsStyles}
					/>
				</ScoreIntContainerAnimated>
			</TeamandScores>
		</TeamScoreContainer>
	);
};
