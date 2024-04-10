import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
	margin-bottom: 50px;
`;
const ScoreRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 10px;
	
`;

const TeamName = styled.div`
	flex: 2;
	padding: 5px;
	font-weight: bold;
`;

const ScoreBox = styled.div`
	flex: 1;
	height: 70px;
	margin: 0px 1px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ScoreCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 800;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.8em;
	line-height: 1.2em;
	margin: 0;
	text-align: center;
`;
export const DisplayQuarters = ({matchData, ComponentFPS, StyleConfig,TemplateVariation}) => {
   
	const {Font, Color} = StyleConfig;
	console.log('StyleConfig ', StyleConfig);
	console.log('matchData ', matchData);
	const frame = useCurrentFrame();

	const renderScoresRow = (scores, Int) => {
		if (!scores.quarterScores) return null;

		const Display = interpolateOpacityByFrame(
			frame,
			ComponentFPS.End - 1,
			ComponentFPS.End,
			1,
			0
		);

		const scoreValues = Object.values(scores.quarterScores);

		if (scoreValues.some((score) => score === null)) return null;
		const commonStyles = {
			...Font.Copy,
			color: Int === 1 ? Color.Primary.Contrast : Color.Secondary.Contrast,
			clipPath: FromTopToBottom(30, 'Slow'),
			opacity: interpolateOpacityByFrame(
				frame,
				ComponentFPS.End - 15,
				ComponentFPS.End,
				1,
				0
			),
		};

		const teamStyles = {
			color: Color.Primary.BackgroundContractColor,
			...Font.Copy,
			clipPath: FromTopToBottom(30, 'Slow'),
			opacity: interpolateOpacityByFrame(
				frame,
				ComponentFPS.End - 15,
				ComponentFPS.End,
				1,
				0
			),
			textAlign: 'center',
		};
		return (
			<ScoreRow
				style={{
					clipPath: FromMiddle(0, 'Wobbly'),
					display: Display === 0 ? 'none' : 'flex',
                    borderRadius: TemplateVariation.borderRadius,
					backgroundColor:
						Int === 1
							? Color.Secondary.Opacity(0.3)
							: Color.Primary.Opacity(0.3),
				}}
			>
				<TeamName>
					<ScoreCopy style={{...teamStyles}}>{scores.name}</ScoreCopy>
				</TeamName>

				{scoreValues.splice(0, 4).map((score, index) => (
					<ScoreBox
						key={index}
						style={{
                            borderRadius: TemplateVariation.borderRadius,
							backgroundColor:
								Int === 1
									? Color.Primary.Opacity(0.9)
									: Color.Secondary.Opacity(0.9),
							borderColor:
								Int === 1
									? Color.Primary.Opacity(0.9)
									: Color.Secondary.Opacity(0.9),

							clipPath: FromMiddle(ComponentFPS.Start, 'Wobbly'),
							opacity: interpolateOpacityByFrame(
								frame,
								ComponentFPS.End - 15,
								ComponentFPS.End,
								1,
								0
							),
						}}
					>
						<ScoreCopy style={{...commonStyles}}>{score}</ScoreCopy>
					</ScoreBox>
				))}
			</ScoreRow>
		);
	};

	return (
		<HeaderContainerStyles>
			{renderScoresRow(matchData.teams.home, 1)}
			{renderScoresRow(matchData.teams.away, 2)}
		</HeaderContainerStyles>
	);
};
