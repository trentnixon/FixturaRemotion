import {MatchContainer} from './MatchContainer';
import {HeaderContainer} from './HeaderContainer';
import {TeamsAndScores} from './TeamsAndScores';
import styled from 'styled-components';

export const Match = (props) => {
	const {THEME, fontFamily} = props;
	return (
		<>
			<DisplayMatchResult Result={props.matchData.result} {...props} />

			<MatchContainer THEME={THEME} fontFamily={fontFamily}>
				<DisplayGradeName {...props} />
				<TeamsAndScores {...props} />
				<HeaderContainer {...props} />
			</MatchContainer>
		</>
	);
};

const GradeName = styled.h2`
	font-style: normal;
	font-weight: 400;
	font-size: 2em;
	line-height: 1em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: right;
`;
const DisplayGradeName = (props) => {
	const {StyleConfig} = props;
	const {Color} = StyleConfig;
	return (
		<GradeName
			style={{
				color: Color.Primary.Contrast,
				...StyleConfig.Font.Copy,
			}}
		>
			{props.matchData.gradeName}
		</GradeName>
	);
};

const MatchResult = styled.h2`
	font-style: normal;
	font-weight: 600;
	font-size: 3em;
	line-height: 1em;
	letter-spacing: -0.085em;
	text-transform: uppercase;
	margin: 10px 0;
	text-align: center;
`;
const DisplayMatchResult = (props) => {
	const {StyleConfig} = props;
	const {Color} = StyleConfig;
	return (
		<MatchResult
			style={{
				color: Color.Primary.Contrast,
				...StyleConfig.Font.Copy,
			}}
		>
			{props.Result}
		</MatchResult>
	);
};
