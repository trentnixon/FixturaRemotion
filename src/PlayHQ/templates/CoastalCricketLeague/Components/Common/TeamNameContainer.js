import {useCurrentFrame} from 'remotion';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {DisplayTeamName, DisplayTeamScore} from './DEPRECATED_CommonVariables';
import {restrictString} from '../../../../utils/copy';
import styled from 'styled-components';

export const TeamNameContainerCCL = (props) => {
	const {FPS_SCORECARD, START, TEAM, StyleConfig, textAlign} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();

	const TeamNameStyles = {
		...Font.Title,
		fontSize: '1.7em',
		fontWeight: 100,
		width: '40%',
		margin: '0 10px',
		color: Color.Primary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '0.03em',
		textAlign,
	};

	return (
		<DisplayTeamName
			name={restrictString(TEAM, 45)}
			customStyles={TeamNameStyles}
		/>
	);
};

const StackedScores = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TeamNameAndResultContainerCCL = (props) => {
	const {FPS_SCORECARD, START, TEAM, StyleConfig, textAlign, RESULTS} = props;
	const {Font, Color} = StyleConfig;
	const {score, overs} = RESULTS;
	const frame = useCurrentFrame();

	const ScoreStyles = {
		...Font.Title,
		fontSize: '2.5em',
		lineHeight: '1em',
		fontWeight: 100,
		width: '100%',
		margin: '0 10px',
		color: Color.Primary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '0.03em',
		textAlign,
	};

	const OversStyles = {
		...Font.Copy,
		lineHeight: '1em',
		fontSize: '1.5em',
		fontWeight: 100,
		width: '100%',
		margin: '0 10px',
		color: Color.Primary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '0.03em',
		textAlign,
	};
	const TeamNameStyles = {
		...Font.Copy,
		fontSize: '1.2em',
		lineHeight: '1em',
		fontWeight: 400,
		width: '100%',
		margin: '10px',
		color: Color.Primary.Contrast,
		clipPath: FromLeftToRight(30 + START, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		letterSpacing: '0.03em',
		textAlign,
	};

	return (
		<StackedScores>
			<DisplayTeamScore name={`${score}`} customStyles={ScoreStyles} />
			{overs ? (
				<DisplayTeamScore name={`${overs}`} customStyles={OversStyles} />
			) : (
				false
			)}

			<DisplayTeamName
				name={restrictString(TEAM, 45)}
				customStyles={TeamNameStyles}
			/>
		</StackedScores>
	);
};
